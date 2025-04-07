import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const locales = ['en', 'sr', 'ru']
const defaultLocale = 'en'

function getPreferredLocale(req: NextRequest): string {
  const acceptLang = req.headers.get('accept-language')
  if (acceptLang) {
    const preferred = acceptLang.split(',').map(lang => lang.trim().split(';')[0])
    const matched = preferred.find(lang =>
      locales.includes(lang.split('-')[0]) // match 'en-US' to 'en'
    )
    if (matched) return matched.split('-')[0]
  }
  return defaultLocale
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip static files and API routes
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next()
  }

  // Check for saved cookie
  const cookieLocale = req.cookies.get('lang')?.value
  const preferredLocale = cookieLocale || getPreferredLocale(req)

  // Redirect to detected locale
  const url = req.nextUrl.clone()
  url.pathname = `/${preferredLocale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
