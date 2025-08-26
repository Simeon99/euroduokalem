'use client'

import Image from 'next/image';
import React from 'react'

import { PiChecksBold } from "react-icons/pi";
import Button from './ui/Button';
import { Translation } from '../[lang]/dictionaries';
import { splitBold } from './ui/SplitText';
import { useParams, useRouter } from 'next/navigation';

const HomeSeedlings = ({ t }: { t: Translation }) => {

    const params = useParams();
    const lang = params?.lang as string;

    const router = useRouter();
    return (
        <div className='flex  justify-center px-4 bg-secondary'>
            <div className='max-w-screen-sw  w-full flex flex-row max-md:flex-col    py-16 max-md:py-2  items-center gap-16 justify-between'>
                <div className='flex flex-col flex-1 py-8 gap-4'>
                    <h2 className='font-heading  text-6xl text-primary py-8 max-lsw:text-5xl max-md:text-4xl font-bold '>{t.home.seedlingsTitle}</h2>
                    {/* Mobile image */}
                    <div className=" md:hidden relative full h-[500px] overflow-hidden rounded-md shadow-lg">
                        <Image
                            src="/images/home/seedling.png"
                            alt="Example"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className='flex flex-col gap-4 '>
                        {t.home.seedlings.map((i, index) => {
                            return (
                                <div key={index} className='flex flex-row  gap-4'>
                                    <div className=''>
                                        <PiChecksBold color='#0E3A27' size={30} />
                                    </div>
                                    <div>
                                        <p className=' text-[24px] max-md:text-[20px] '>{splitBold(i)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-[200px] pt-8'>
                        <Button label={t.home.seedlingsBtn} onClick={() => router.push(`/${lang}/seedlings`)} />
                    </div>
                </div>
                {/* Desktop image */}
                <div className='max-md:hidden'>
                    <Image
                        className="rounded-xl shadow-md max-lsw:hidden"
                        alt={`carousel-image`}
                        width={416}
                        height={566}
                        src={'/images/home/seedling.png'}
                    />
                    <Image
                        className="rounded-xl shadow-md lsw:hidden"
                        alt={`carousel-image`}
                        width={300}
                        height={566}
                        src={'/images/home/seedling.png'}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSeedlings