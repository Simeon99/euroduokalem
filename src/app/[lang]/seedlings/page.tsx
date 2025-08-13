import React from 'react'
import { getDictionary, Locale } from '../dictionaries';
import Seedlings from '@/app/components/Seedlings';
import SeedlingsFooter from '@/app/components/SeedlingsFooter';

interface PageProps {
    params: Promise<{
        lang: Locale;
    }>;
}



export async function generateMetadata({ params }: PageProps) {

    const { lang } = await params;
    const t = await getDictionary(lang);

    return {
        title: t.seo.seedlings.title,
        description: t.seo.seedlings.description,
        keywords: t.seo.seedlings.keywords,
        alternates: {
            canonical: `https://euroduokalem.com/${lang}/seedlings`,
            languages: {
                sr: 'https://euroduokalem.com/sr/seedlings',
                en: 'https://euroduokalem.com/en/seedlings',
                ru: 'https://euroduokalem.com/ru/seedlings',
            },
        },
        openGraph: {
            title: t.seo.seedlings.title,
            description: t.seo.seedlings.description,
            locale: lang,
            url: `https://euroduokalem.com/${lang}/seedlings`,
            type: 'website',
            siteName: 'Euro duo kalem',
            images: [
                {
                    url: 'https://euroduokalem.com/images/seo/thumbnailSeedlings.jpg', // prefer JPG
                    secureUrl: 'https://euroduokalem.com/images/seo/thumbnailSeedlings.jpg',
                    width: 1200,
                    height: 630,
                    alt: t.seo.seedlings.title,
                },
            ],
        },
    };
}

const page = async ({ params }: PageProps) => {


    const { lang } = await params;
    const t = await getDictionary(lang);

    return (
        <div className='flex justify-center px-4'>
            <div className='max-w-screen-sw  w-full '>
                <Seedlings lang={lang} t={t} />
                <SeedlingsFooter t={t} />
            </div>
        </div>
    )
}

export default page