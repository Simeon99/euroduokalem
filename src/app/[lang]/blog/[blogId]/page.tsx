import BlogPost from '@/app/components/BlogPost'
import React from 'react'
import { getDictionary, Locale } from '../../dictionaries';

interface Params {
    params: Promise<{
        lang: Locale;
        blogId: number;
    }>
}
const page = async ({ params }: Params) => {

    const { blogId } = await params;
    const { lang } = await params;
      const t = await getDictionary(lang);

    return (
        <div className='flex justify-center px-4'>
            <div className='max-w-screen-sw  w-full '>
                <BlogPost blogId={blogId} t={t} />
            </div>
        </div>
    )
}

export default page