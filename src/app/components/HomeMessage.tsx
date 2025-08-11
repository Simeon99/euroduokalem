'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Translation } from '../[lang]/dictionaries'

const images = [
    "/images/home/message-image.jpg",
    "/images/home/message-image1.jpeg",
    "/images/home/message-image2.JPG",
];

const HomeMessage = ({ t }: { t: Translation }) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 4000); // change every 4s
        return () => clearInterval(id);
    }, []);

    return (
        <div className='flex flex-col items-center px-4'>
            <div className='max-w-screen-sw  w-full flex flex-row max-md:flex-col shadow-lg rounded-xl'>

                <div className=" relative w-full h-[685px] max-md:h-[394px] overflow-hidden rounded-xl ">
                    {images.map((src, i) => (
                        <Image
                            key={src}
                            src={src}
                            alt=""
                            fill
                            sizes="100vw"
                            priority={i === 0}
                            className={`absolute inset-0 object-cover transition-opacity duration-1300 ease-in-out
                ${i === index ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}
                </div>
                <div className='h-[685px] max-md:h-[300px] bg-secondary-light rounded-xl -ml-5 max-md:ml-0 max-md:-mt-5 z-20 flex flex-col justify-center'>
                    <p className='text-primary font-heading text-[48px] max-w-[650px] px-8 max-lsw:text-[36px] max-md:text-[24px]'>{t.home.message}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeMessage