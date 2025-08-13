'use client'

import Image from 'next/image'
import React from 'react'
import { Translation } from '../[lang]/dictionaries';
import { formatTextWithBreaks } from './ui/SplitText';
import Button from './ui/Button';
import { useParams, useRouter } from 'next/navigation';
import { useLoadingBar } from 'react-top-loading-bar';

const Landing = ({ t }: { t: Translation }) => {

    const params = useParams();
    const lang = params?.lang as string;
    const router = useRouter();

    const { start, complete } = useLoadingBar({
        color: "orange",
        height: 2,
    });

    const handleClick = () => {
        start();
        // slight delay to let bar show before route change (optional)
        setTimeout(() => {
            router.push(`/${lang}/seedlings`);
            complete();
        }, 300);
    };

    return (

        <div className='w-full relative -mt-[69.35px] top-0 h-full'>
            <div>
                <Image
                    src="/images/home/landing-photo.jpg"
                    alt="Landing"
                    fill
                    className="object-cover w-[100px] h-[100px]"
                    priority
                />
            </div>
            <div className='absolute bottom-0 right-0 max-w-screen-sw  w-full  left-1/2 -translate-x-1/2 '>
                {/* <div className='w-[70%]'> */}
                <h1 className='text-[64px]  p-8 max-lsw:text-[48px] max-md:text-[32px] font-heading font-bold text-right text-secondary-light  z-50'>{formatTextWithBreaks(t.home.title)}</h1>
                <div className=' pb-16 w-full flex justify-end pr-8'>
                    <Button label={t.home.titleBtn} onClick={handleClick} />
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Landing