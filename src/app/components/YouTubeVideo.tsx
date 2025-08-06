'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6';

const YouTubeVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='flex flex-col px-4'>
            <div className="max-w-screen-sw w-full mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
                {!isPlaying ? (
                    <div
                        className="group cursor-pointer relative w-full h-full"
                        onClick={() => setIsPlaying(true)}
                    >
                        <Image
                            src="/images/home/thumbnail.jpg"
                            alt="Play video"
                            fill
                            className="object-cover"
                        />
                        <button className="absolute max-md:hidden flex items-center justify-center h-[100px] w-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary hover:cursor-pointer bg-opacity-50 px-4 py-2 rounded-full group-hover:bg-[#D7DED4] transition-colors duration-300">
                            <FaPlay size={32} className='group-hover:text-[#0E3A27] transition-colors duration-300' />
                        </button>
                        <button className="absolute md:hidden flex items-center justify-center h-[50px] w-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary hover:cursor-pointer bg-opacity-50 px-4 py-2 rounded-full group-hover:bg-[#D7DED4] transition-colors duration-300">
                            <FaPlay size={24} className='group-hover:text-[#0E3A27] transition-colors duration-300' />
                        </button>
                    </div>
                ) : (
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/TarFvVhdXus?autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    );
};

export default YouTubeVideo;
