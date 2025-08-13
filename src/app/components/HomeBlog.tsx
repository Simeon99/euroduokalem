'use client';

import { BlogPost } from '@/pages/api/suggestedBlogs';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const HomeBlog = () => {
    const params = useParams();
    const lang = params?.lang as string;

    const [suggested, setSuggested] = useState<BlogPost[] | null>();

    async function fetchBlogPost() {
        try {
            const res = await fetch(`/api/suggestedBlogs?lang=${lang}&blogIds=2,3,4`);
            const suggestedRes = await res.json();
            setSuggested(suggestedRes);
            console.log(suggested)
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            
            {suggested && suggested.map((post, index) => (
                <Link
                    key={index}
                    href={`/${lang}/blog/${post.id}`}
                    className="hover:scale-101 transform   block rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-secondary-light"
                >
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={200}
                        height={240}
                        className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-primary mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">{post.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default HomeBlog;
