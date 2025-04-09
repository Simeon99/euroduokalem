import React from 'react'
import { getDictionary, Locale } from '../dictionaries';
import Seedlings from '@/app/components/Seedlings';

interface PageProps {
    params: Promise<{
        lang: Locale;
    }>;
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