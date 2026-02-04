import React from 'react'
import ImageCarousel from './ui/ImageCarousel'
import { Translation } from '../[lang]/dictionaries'
import Image from 'next/image'

const HeadingHome = ({ t }: { t: Translation }) => {
    return (
        <div className='bg-secondary-light flex justify-center '>

            <div className='max-w-screen-sw  w-full'>



                <div className='flex flex-col gap-[32px] items-center pt-[140px] max-md:pt-[96px] px-[16px]'>
                    <div className='flex flex-row gap-4 max-msw:flex-col max-msw:items-center'>
                        <Image
                            src="/images/home/20y_EDK_final.png" // put image in /public
                            alt="Euro Duo Kalem 20 Years"
                            width={150}
                            height={150}
                            className="object-contain  top-9 right-9 max-msw:hidden"
                            priority
                        />
                        <Image
                            src="/images/home/20y_EDK_final.png" // put image in /public
                            alt="Euro Duo Kalem 20 Years"
                            width={120}
                            height={120}
                            className="object-contain  top-9 right-9 msw:hidden"
                            priority
                        />
                        <h2 className='font-heading text-6xl text-primary  py-8 max-lsw:text-5xl max-md:text-4xl font-bold text-center line max-w-[700px]'>{t.home.heading}</h2>

                    </div>
                    <p className='text-center max-ssw:text-justify text-[24px] max-md:text-[20px] max-w-[70%] max-md:max-w-full'>
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