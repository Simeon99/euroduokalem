import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React from 'react'

const BlogPosts = () => {

    const params = useParams();
    const lang = params?.lang as string;

    return (
        <div className='bg-secondary-light flex  justify-center px-4 max-md:py-16 py-36'>
            <div className='max-w-screen-sw  w-full flex flex-col gap-8'>
                <h1 className='font-heading  text-6xl text-primary  max-lsw:text-5xl max-md:text-4xl font-bold line'>
                    Najnovije objave
                </h1>
                {/* Desktop */}
                <div className='flex flex-row gap-8 max-lsw:hidden'>
                    <article className='flex flex-col gap-4 w-2/3 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[500px] '>
                                <Image
                                    src={`/images/seedling/ajdared.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl "
                                />

                            </div>
                            <div className=' '>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl  line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <div className='flex flex-col w-1/3 gap-8'>
                        <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                            <Link href={`/${lang}/blog/1`}>
                                <div className='relative w-full h-[200px] '>
                                    <Image
                                        src={`/images/seedling/breburn.jpg`}
                                        alt={'apple'}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />

                                </div>
                                <div className=''>
                                    <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl  line'>
                                        Kako izabrati pravu voćku za svoje imanje?
                                    </h2>
                                </div>
                            </Link>
                        </article>
                        <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                            <Link href={`/${lang}/blog/1`}>
                                <div className='relative w-full h-[200px] '>
                                    <Image
                                        src={`/images/seedlings/hazelnut.jpg`}
                                        alt={'apple'}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />

                                </div>
                                <div className=''>
                                    <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl  line'>
                                        Kako izabrati pravu voćku za svoje imanje?
                                    </h2>
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-x-8 gap-y-16 max-lsw:hidden'>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px]'>
                                <Image
                                    src={`/images/seedlings/plum.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedlings/roses.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedlings/sweet-cherry.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading  max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>

                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px]'>
                                <Image
                                    src={`/images/seedlings/medlar.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedling/ajdared.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedling/ajdared.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading  max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>

                </div>
                {/* Mobile  */}
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-16 lsw:hidden'>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px]'>
                                <Image
                                    src={`/images/seedlings/plum.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedlings/roses.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedlings/sweet-cherry.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading  max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>

                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px]'>
                                <Image
                                    src={`/images/seedlings/medlar.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedling/ajdared.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                    <article className='flex flex-col gap-4 hover:scale-101 hover:cursor-pointer transform  duration-300'>
                        <Link href={`/${lang}/blog/1`}>
                            <div className='relative w-full h-[250px] '>
                                <Image
                                    src={`/images/seedling/ajdared.jpg`}
                                    alt={'apple'}
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                            </div>
                            <div className=''>
                                <h2 className='text-4xl text-black font-heading  max-lsw:text-3xl max-md:text-2xl line'>
                                    Kako izabrati pravu voćku za svoje imanje?
                                </h2>
                            </div>
                        </Link>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default BlogPosts