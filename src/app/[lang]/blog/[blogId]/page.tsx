'use client'

import BlogPost from '@/app/components/BlogPost'
import React from 'react'

interface Params {
    params: Promise<{
        blogId: number;
    }>
}
const page = async ({ params }: Params) => {

    const { blogId } = await params;

    return (
        <div className='flex justify-center px-4'>
            <div className='max-w-screen-sw  w-full '>
                <BlogPost blogId={blogId} />
            </div>
        </div>
    )
}

export default page