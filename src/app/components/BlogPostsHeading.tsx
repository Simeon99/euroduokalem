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

    const [blogPosts, setBlogPosts] = useState<IBlogPost[] | null>();

    const handleClick = () => {
        router.push(`/${lang}/blog/1`)
    }
    async function fetchBlogPosts() {

        try {
            const res = await fetch(`/api/blogPosts?lang=${lang}`);
            const blogPostsData = await res.json();
            setBlogPosts(blogPostsData);
            console.log(blogPosts)
        } catch (e) {
            console.log("Error: ", e)
        }
        finally {

        }


    }

    useEffect(() => {
        fetchBlogPosts();
    }, [])

    return (
        <>
            <div className='w-full relative -mt-[69.35px] top-0'>
                <div className='bg-secondary h-full pb-16 relative'>
                    <div className='flex  top-36 justify-center px-4  pt-36'>
                        <div className='max-w-screen-sw  w-full flex flex-row max-lsw:flex-col gap-8 justify-between'>
                            <div className='w-1/2 max-lsw:w-full  flex flex-col gap-8'>
                                <h1 className='font-heading text-6xl text-primary  max-lsw:text-5xl max-md:text-4xl font-bold line'>
                                    11 Stvari koje bi trebalo da znate o sadjenju vocnih sadnica
                                </h1>
                                <div>
                                    <Button variant='secondary' onClick={handleClick} label='Procitaj artikal' />
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

            <BlogPosts />
        </>
    )
}

export default BlogPostsHeading