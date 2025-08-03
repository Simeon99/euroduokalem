import React from 'react'
import { getDictionary, Locale } from '../dictionaries';
import Seedlings from '@/app/components/Seedlings';

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
            canonical: `https://euroduokalem/${lang}/seedlings`,
            languages: {
                sr: 'https://euroduokalem/sr/seedlings',
                en: 'https://euroduokalem/en/seedlings',
                ru: 'https://euroduokalem/ru/seedlings',
            },
        },
        openGraph: {
            title: t.seo.seedlings.title,
            description: t.seo.seedlings.description,
            locale: lang,
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
            </div>
        </div>
    )
}

export default page