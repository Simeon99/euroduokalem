import type { Metadata } from "next";
import "../globals.css";
import { getDictionary, Locale } from "./dictionaries";
import ClientLayout from "./ClientLayout";
import Script from "next/script";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return {
    metadataBase: new URL("https://euroduokalem.com"),
    title: {
      default: t.seo.home.title,
      template: '%s | Euro duo kalem',
    },
    description: t.seo.home.description,
    keywords: t.seo.home.keywords,
    alternates: {
       canonical: `/${lang}`,
      languages: {
        sr: '/sr',
        en: '/en',
        ru: '/ru',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'max-image-preview': 'large',
      },
    },
    openGraph: {
      title: t.seo.home.title,
      description: t.seo.home.description,
      locale: lang,
      url: `/${lang}`,
      siteName: 'Euro duo kalem',
      type: 'website',
      images: [
        {
          url: `/images/seo/thumbnail.jpg`,
          secureUrl: '/images/seo/thumbnail.jpg',
          width: 1200,
          height: 630,
          alt: t.seo.home.title,
          type: "image/jpeg",
        },
      ],
    },
    other: {
      "google-site-verification": "drf4T76obhgDpCAD-9RvPsnj502SfCzxS_pJuI9He84", // ✅ Add your verification code here
      "yandex-verification": "a0504a5269fd9e4b",
    },
  };
}

export default async function RootLayout({ children, params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-G2Y2T899PT`} // 👈 zameni svojim Measurement ID-jem
        />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G2Y2T899PT', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout t={t}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

