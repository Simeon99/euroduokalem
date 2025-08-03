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
      canonical: `https://euroduokalem/${lang}`,
      languages: {
        sr: 'https://euroduokalem/sr',
        en: 'https://euroduokalem/en',
        ru: 'https://euroduokalem/ru',
      },
    },
    openGraph: {
      title: t.seo.home.title,
      description: t.seo.home.description,
      locale: lang,
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
