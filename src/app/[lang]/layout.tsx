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

export const metadata: Metadata = {
  title: "Euro Duo Kalem",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }: PageProps) {

  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body
        className={`antialiased`}
      >
        <ClientLayout t={t}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
