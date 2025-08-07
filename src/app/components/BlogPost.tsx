'use state'

import { IBlogPost } from '@/pages/api/blogPosts';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import BlogSuggested from './BlogSuggested';

const BlogPost = ({ blogId }: { blogId: number }) => {

    const params = useParams();
    const lang = params?.lang as string;

    const [blogPost, setBlogPost] = useState<IBlogPost | null>();

    async function fetchBlogPost() {

        try {
            const res = await fetch(`/api/blogPost?id=${blogId}&lang=${lang}`);
            const blogPostRes = await res.json();
            setBlogPost(blogPostRes);
            console.log(blogPost)
        } catch (e) {
            console.log("Error: ", e)
        }
        finally {

        }


    }

    useEffect(() => {
        fetchBlogPost();
    }, [])


    return (
        <div className='flex flex-col gap-16 py-36'>
            <div>
                <h1 className='font-heading text-6xl text-primary text-center  max-lsw:text-5xl max-md:text-4xl font-bold line'>
                    {blogPost?.title}
                </h1>
            </div>
            <div className='flex flex-col gap-16'>
                <div className='w-full flex flex-col items-center'>
                    <div className='w-[80%] max-md:w-full '>
                        {blogPost?.imageUrl &&
                            <Image
                                src={blogPost?.imageUrl}
                                alt={blogPost?.title + "image"}
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover w-full h-auto"
                            />
                        }
                    </div>
                </div>
                <div className='flex flex-col'>
                    <ReactMarkdown
                        components={{
                            p: ({ ...props }) => (
                                <p
                                    className="text-[24px] max-md:text-[20px] max-md:max-w-full mb-4 leading-relaxed"
                                    {...props}
                                />
                            ),
                            li: ({ ...props }) => (
                                <li
                                    className="text-[24px] max-md:text-[20px] max-md:max-w-full mb-4 leading-relaxed"
                                    {...props}
                                />
                            ),
                            h1: ({ ...props }) => (
                                <h3
                                    className="text-[28px] max-md:text-[22px] font-semibold mt-8 mb-4"
                                    {...props}
                                />
                            ),
                            h3: ({ ...props }) => (
                                <h3
                                    className="text-[28px] max-md:text-[22px] font-semibold mt-8 mb-4"
                                    {...props}
                                />
                            ),
                            h2: ({ ...props }) => (
                                <h2
                                    className="text-[32px] max-md:text-[24px] font-bold mt-10 mb-5"
                                    {...props}
                                />
                            ),
                        }}
                    >
                        {blogPost?.markdown}
                    </ReactMarkdown>
                </div>
                {/* <p className='text-justify text-[24px] max-md:text-[20px] max-md:max-w-full'>
                    Sadnja voćnih sadnica zahteva pažljivu pripremu i razumevanje osnovnih koraka kako bi se obezbedio zdrav i dugovečan zasad. Prvi i najvažniji korak je izbor sorte koja odgovara klimatskim uslovima vašeg regiona. Sorte koje nisu prilagođene lokalnim uslovima često ne daju očekivane prinose i zahtevaju dodatnu negu.
                    Pre sadnje, zemljište mora biti pripremljeno – to znači dobro usitnjeno, đubreno i po potrebi korigovano u pogledu kiselosti (pH vrednosti). Analiza zemljišta može vam uštedeti vreme i novac jer ćete tačno znati koje elemente treba dodati za optimalan rast biljaka.
                    Prilikom same sadnje, veoma je važno da mesto kalemljenja ostane iznad zemlje, jer njegovo zatrpavanje može dovesti do truljenja ili razvoja neželjenih izdanaka. Takođe, zalivanje odmah nakon sadnje pomaže da se zemlja slegne i da koren uspostavi dobar kontakt sa tlom.
                    Ne zaboravite na redovno orezivanje i zaštitu od bolesti, jer samo zdrava biljka može dati kvalitetan plod. Uz malo znanja i prave savete, vaš voćnjak može postati ne samo izvor ponosa, već i odličan izvor prinosa.
                </p> */}
                <div className='w-full'>

                    <BlogSuggested />
                </div>
            </div>
        </div>
    )
}

export default BlogPost