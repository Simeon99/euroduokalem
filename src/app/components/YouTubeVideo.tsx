'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6';

const YouTubeVideo = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className='flex flex-col px-4 '>
            <div className="max-w-screen-sw   w-full  mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">


                {!isPlaying ? (
                    <div
                        className="group cursor-pointer relative w-full h-full"
                        onClick={() => setIsPlaying(true)}
                    >
                        <Image src="/images/home/thumbnail.jpg" alt="Play video" fill
                            className="object-cover" />
                        <button className="absolute flex items-center justify-center h-[100px] w-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary hover:cursor-pointer bg-opacity-50 px-4 py-2 rounded-full group-hover:bg-[#D7DED4] transition-colors duration-300">
                            <FaPlay size={32} className='group-hover:text-[#0E3A27] transition-colors duration-300' />
                        </button>
                    </div>
                ) : (
                    <video
                        controls
                        autoPlay
                        className="w-full h-auto"
                    >
                        <source   src="https://www.dropbox.com/scl/fi/3kclfpiwxwcnv2vmytho8/copy_83FFAA0E-8EF3-40D2-91DE-4F61813AC26C-1.MOV?rlkey=4fmem35kxryt8obek6y3t6eer&st=8eoce3pb&raw=1" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    )
}

export default YouTubeVideo