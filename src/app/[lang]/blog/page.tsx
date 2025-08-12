import BlogPostsHeading from '@/app/components/BlogPostsHeading'
import React from 'react'
import { getDictionary, Locale } from '../dictionaries';

interface PageProps {
    params: Promise<{
        lang: Locale;
    }>;
}


const page = async ({ params }: PageProps) => {

    const { lang } = await params;
    const t = await getDictionary(lang);

    return (
        <BlogPostsHeading t={t}/>
    )
}

export default page