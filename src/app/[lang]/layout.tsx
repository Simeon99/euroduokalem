import type { Metadata } from "next";
import "../globals.css";
import { getDictionary, Locale } from "./dictionaries";
import ClientLayout from "./ClientLayout";

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
    title: {
      default: t.seo.home.title,
      template: '%s | Euro duo kalem',
    },
    description: t.seo.home.description,
    keywords: t.seo.home.keywords,
    alternates: {
      canonical: `https://euroduokalem.com/${lang}`,
      languages: {
        sr: 'https://euroduokalem.com/sr',
        en: 'https://euroduokalem.com/en',
        ru: 'https://euroduokalem.com/ru',
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
      url: `https://euroduokalem.com/${lang}`,
      type: 'website',
      images: [
        {
          url: `https://euroduokalem.com/images/seo/thumbnail.png`, // 1200x630 or larger
          width: 1200,
          height: 630,
          alt: t.seo.home.title,
        },
      ],
    },
    other: {
      "google-site-verification": "drf4T76obhgDpCAD-9RvPsnj502SfCzxS_pJuI9He84", // ✅ Add your verification code here
    },
  };
}

export default async function RootLayout({ children, params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="antialiased">
        <ClientLayout t={t}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
