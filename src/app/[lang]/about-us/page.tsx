import React from 'react'
import { getDictionary, Locale } from '../dictionaries';
import About from '@/app/components/About';

interface PageProps {
    params: Promise<{
        lang: Locale;
    }>;
}

export async function generateMetadata({ params }: PageProps) {

    const { lang } = await params;
    const t = await getDictionary(lang);

    return {
        title: t.seo.about.title,
        description: t.seo.about.description,
        keywords: t.seo.about.keywords,
        alternates: {
            canonical: `https://euroduokalem.com/${lang}/about-us`,
            languages: {
                sr: 'https://euroduokalem.com/sr/about-us',
                en: 'https://euroduokalem.com/en/about-us',
                ru: 'https://euroduokalem.com/ru/about-us',
            },
        },
        openGraph: {
            title: t.seo.about.title,
            description: t.seo.about.description,
            locale: lang,
            url: `https://euroduokalem.com/${lang}/about-us`,
            type: 'website',
            siteName: 'Euro duo kalem',
            images: [
                {
                    url: 'https://euroduokalem.com/images/seo/thumbnailSeedlings.jpg', // prefer JPG
                    secureUrl: 'https://euroduokalem.com/images/seo/thumbnailSeedlings.jpg',
                    width: 1200,
                    height: 630,
                    alt: t.seo.about.title,
                },
            ],
        },
    };
}

const page = async ({ params }: PageProps) => {

    const { lang } = await params;
    const t = await getDictionary(lang);

    return (
        <div className=''>
            <About t={t} />
        </div>
    )
}

export default page