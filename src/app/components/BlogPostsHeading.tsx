'use client'

import React, { useEffect, useState } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import BlogPosts from './BlogPosts'
import { useParams, useRouter } from 'next/navigation'
import { IBlogPost } from '@/pages/api/blogPosts'

const BlogPostsHeading = () => {

    const params = useParams();
    const lang = params?.lang as string;
    const router = useRouter();

    const [posts, setPosts] = useState<IBlogPost[]>([]);
    const [primaryPost, setPrimaryPost] = useState<IBlogPost>();
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState<boolean>(false);
    const limit = 7;


    const handleClick = (id: number) => {
        router.push(`/${lang}/blog/${id}`)
    }

    const fetchPosts = async () => {
        setLoading(true)
        const res = await fetch(`/api/blogPosts?lang=${lang}&offset=${offset}&limit=${limit}`);
        const newPosts: IBlogPost[] = await res.json();

        if (newPosts.length < limit) setHasMore(false);

        const primary = newPosts.find(p => p?.primary === true);
        const filtered = newPosts.filter(p => p?.primary !== true);

        if (primary) setPrimaryPost(primary);
        setPosts((prev) => [...prev, ...filtered]);

        setOffset((prev) => prev + limit);
        setLoading(false)
    };

    useEffect(() => {
        fetchPosts();

    }, []);


    return (
        <>
            <div className='w-full relative -mt-[69.35px] top-0'>
                <div className='bg-secondary h-full pb-16 relative'>
                    <div className='flex  top-36 justify-center px-4  pt-36'>
                        <div className='max-w-screen-sw  w-full flex flex-row max-lsw:flex-col gap-8 justify-between'>
                            <div className='w-1/2 max-lsw:w-full  flex flex-col gap-8'>
                                <h1 className='font-heading text-6xl text-primary  max-lsw:text-5xl max-md:text-4xl font-bold line'>
                                    {primaryPost?.title}
                                </h1>
                                <div>
                                    {primaryPost?.id !== undefined && (
                                        <Button variant='secondary' onClick={() => handleClick(primaryPost?.id)} label='Procitaj artikal' />
                                    )}
                                </div>

                            </div>
                            <div className='relative w-1/2 max-lsw:hidden h-[400px]'>
                                <Image
                                    src={`/images/seedling/ajdared.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                            <div className='w-full lsw:hidden '>
                                <Image
                                    src={`/images/seedling/ajdared.jpg`}
                                    alt={'apple'}
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full h-auto"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPosts blogPosts={posts} />
            <div className='flex flex-col items-center pb-36'>
                {hasMore && (
                    <Button onClick={fetchPosts} label='Show More' isLoading={loading} />
                )}
            </div>
        </>
    )
}

export default BlogPostsHeading