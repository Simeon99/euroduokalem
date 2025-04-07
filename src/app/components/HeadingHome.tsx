import React from 'react'
import ImageCarousel from './ui/ImageCarousel'
import { Translation } from '../[lang]/dictionaries'

const HeadingHome = ({ t }: { t: Translation }) => {
    return (
        <div className='bg-secondary-light flex justify-center '>
            <div className='max-w-screen-sw  w-full'>
            <div className='flex flex-col gap-[32px] items-center pt-[140px] max-md:pt-[96px] px-[16px]'>
                <h1 className='font-heading text-6xl text-primary  py-8 max-lsw:text-5xl max-md:text-4xl font-bold text-center line max-w-[700px]'>{t.home.heading}</h1>
                <p className='text-center text-[24px] max-md:text-[20px] max-w-[70%] max-md:max-w-full'>
                    {t.home.desc}
                </p>
            </div>
            <div className=' mt-[140px] pb-[70px] px-4'>
                <ImageCarousel />
            </div>
            </div>
        </div>
    )
}

export default HeadingHome