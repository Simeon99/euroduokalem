import BlogPostsHeading from '@/app/components/BlogPostsHeading'
import React from 'react'
import { getDictionary, Locale } from '../dictionaries';

interface PageProps {
    params: Promise<{
        lang: Locale;
    }>;
}
export async function generateMetadata({ params }: PageProps) {

    const { lang } = await params;
    const t = await getDictionary(lang);

    return {
        title: t.seo.blog.title,
        description: t.seo.blog.description,
        keywords: t.seo.blog.keywords,
        alternates: {
            canonical: `https://euroduokalem.com/${lang}/blog`,
            languages: {
                sr: 'https://euroduokalem.com/sr/blog',
                en: 'https://euroduokalem.com/en/blog',
                ru: 'https://euroduokalem.com/ru/blog',
            },
        },
        openGraph: {
            title: t.seo.blog.title,
            description: t.seo.blog.description,
            locale: lang,
            url: `https://euroduokalem.com/${lang}/blog`,
            type: 'website',
            siteName: 'Euro duo kalem',
            images: [
                {
                    url: 'https://euroduokalem.com/images/seo/thumbnailSeedlings.jpg', // prefer JPG
                    secureUrl: 'https://euroduokalem.com/images/seo/thumbnailSeedlings.jpg',
                    width: 1200,
                    height: 630,
                    alt: t.seo.blog.title,
                },
            ],
        },
    };
}

const page = async ({ params }: PageProps) => {

    const { lang } = await params;
    const t = await getDictionary(lang);

    return (
        <BlogPostsHeading t={t} />
    )
}

export default page