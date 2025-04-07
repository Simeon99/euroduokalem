'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BlogPost = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

type Props = {
    posts: BlogPost[];
};

const HomeBlog: React.FC<Props> = ({ posts }) => {
    return (
        <div className='px-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-sw  w-full  mx-auto">
                {posts.map((post, index) => (
                    <Link
                        key={index}
                        href={post.link}
                        className="hover:scale-101 transform   block rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-secondary-light"
                    >
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            width={200}
                            height={48}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-primary mb-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm line-clamp-3">{post.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeBlog;
