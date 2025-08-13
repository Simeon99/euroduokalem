import React from 'react'
import { getDictionary, Locale } from '../dictionaries';
import About from '@/app/components/About';

interface PageProps {
    params: Promise<{
        lang: Locale;
    }>;
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