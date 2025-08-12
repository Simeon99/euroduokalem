import { IBlogPost } from '@/pages/api/blogPosts';
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React from 'react'
import { Translation } from '../[lang]/dictionaries';

const BlogPosts = ({ blogPosts, t }: { blogPosts: IBlogPost[], t: Translation }) => {

    const params = useParams();
    const lang = params?.lang as string;
    // if (!blogPosts.blogPosts || blogPosts.blogPosts.length === 0) {
    //     return <p>No blog posts available.</p>;
    //   }

    if (!blogPosts || blogPosts.length === 0) {
        return <p>No blog posts available.</p>;
    }

    const firstThree = blogPosts.slice(0, 3);
    const remaining = blogPosts.slice(3);


    return (
        <div className='bg-secondary-light flex  justify-center px-4 max-md:py-16 py-36'>
            <div className='max-w-screen-sw  w-full flex flex-col gap-8'>
                <h1 className='font-heading  text-6xl text-primary  max-lsw:text-5xl max-md:text-4xl font-bold line'>
                    {t.blog.title}
                </h1>
                {/* Desktop */}
                <div className='flex flex-row gap-8 max-lsw:hidden'>
                    <article className='flex flex-col gap-4 w-2/3 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/${firstThree[0]?.id}`}>
                            <div className='relative w-full h-[500px] '>
                                {
                                    firstThree[0]?.imageUrl &&

                                    <Image
                                        src={firstThree[0]?.imageUrl}
                                        alt={firstThree[0]?.title + " image"}
                                        fill
                                        className="object-cover rounded-2xl "
                                    />

                                }

                            </div>
                            <div className=' '>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl  line'>
                                    {firstThree && firstThree[0]?.title}
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <div className='flex flex-col w-1/3 gap-8'>
                        {firstThree && firstThree.map((post, index) => {
                            if (index > 0) {
                                return (
                                    <article key={post.id} className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                                        <Link href={`/${lang}/blog/${post?.id}`}>
                                            <div className='relative w-full h-[200px] '>
                                                <Image
                                                    src={post.imageUrl}
                                                    alt={post.title + " image"}
                                                    fill
                                                    className="object-cover rounded-2xl"
                                                />

                                            </div>
                                            <div className=''>
                                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl  line'>
                                                    {post.title}
                                                </h2>
                                            </div>
                                        </Link>
                                    </article>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-x-8 gap-y-16 max-lsw:hidden'>
                    {remaining && remaining.map(post =>
                        <article key={post.id} className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                            <Link href={`/${lang}/blog/${post.id}`}>
                                <div className='relative w-full h-[250px]'>
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title + " image"}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />

                                </div>
                                <div className=''>
                                    <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                        {post.title}
                                    </h2>
                                </div>
                            </Link>
                        </article>
                    )}
                </div>

                {/* Mobile  */}
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-16 lsw:hidden'>
                    {blogPosts.map(post =>
                        <article key={post.id} className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                            <Link href={`/${lang}/blog/${post.id}`}>
                                <div className='relative w-full h-[250px]'>
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title + " image"}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />

                                </div>
                                <div className=''>
                                    <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                        {post.title}
                                    </h2>
                                </div>
                            </Link>
                        </article>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogPosts