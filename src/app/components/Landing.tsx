import Image from 'next/image'
import React from 'react'
import { Translation } from '../[lang]/dictionaries';
import { formatTextWithBreaks } from './ui/SplitText';

const  Landing  =  ({ t }: { t: Translation }) => {


    return (
        <div className='relative w-full h-[700px] max-md:h-[500px]'>
            <Image
                src="/images/home/landing.png"
                alt="Hero"
                fill
                className="object-cover"
                priority
            />
            <div className='absolute bottom-0 right-0 max-w-screen-sw  w-full  left-1/2 -translate-x-1/2 '>
            {/* <div className='w-[70%]'> */}

                <h1 className='text-[64px]  p-8 max-lsw:text-[48px] max-md:text-[32px] font-heading font-bold text-right text-secondary-light  z-50'>{formatTextWithBreaks(t.home.title)}</h1>
            {/* </div> */}
            </div>
        </div>
    )
}

export default Landing