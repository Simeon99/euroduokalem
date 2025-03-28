import Image from 'next/image';
import React from 'react'

import { PiChecksBold } from "react-icons/pi";
import Button from './ui/Button';

const HomeSeedlings = () => {
    return (
        <div className='flex  justify-center px-4'>
            <div className='max-w-screen-sw  w-full flex flex-row max-md:flex-col bg-secondary rounded-md shadow-md  px-8  py-16 max-md:py-2  items-center gap-16 justify-between'>
                <div className='flex flex-col flex-1 py-8 gap-4'>
                    <h1 className='font-heading leading-0 text-6xl text-primary py-8 max-lsw:text-5xl max-md:text-4xl font-bold '>Naše sadnice</h1>
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
                    {/* <div className='md:hidden w-[400px] h-[300px]'>
                        <Image
                            alt={`carousel-image-aaaaaaaaa`}
                            className="object-cover"
                            priority
                            src={'/images/home/seedling.png'}
                        />
                    </div> */}
                    <div className='flex flex-col gap-4 '>
                        <div className='flex flex-row items-center gap-4'>
                            <div>
                                <PiChecksBold size={30} />
                            </div>
                            <p className=' text-[24px] max-md:text-[20px]'>14+ sorti  voca ali važno je da ciljevi ostanu jasni i postojani, jer nas upravo</p>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <div>
                                <PiChecksBold size={30} />
                            </div>
                            <p className=' text-[24px] max-md:text-[20px]'>14+ sorti voca ali važno je da ciljevi jasni i postojani, jer nas upravo</p>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <div>
                                <PiChecksBold size={30} />
                            </div>
                            <p className=' text-[24px] max-md:text-[20px]'>14+ sorti voca ali važno je da ciljevi ostanu jasni i postojani, jer nas upravo</p>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <div>
                                <PiChecksBold size={30} />
                            </div>
                            <p className=' text-[24px] max-md:text-[20px]'>14+ sorti voca ali važno je da ciljevi ostanu jasni i postojani, jer nas upravo</p>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <div>
                                <PiChecksBold size={30} />
                            </div>
                            <p className=' text-[24px] max-md:text-[20px]'>14+ sorti voca ali važno je da ciljevi ostanu jasni i postojani, jer nas upravo</p>
                        </div>
                    </div>
                    <div className='w-[200px] pt-8'>
                        <Button label='Saznaj više' />
                    </div>
                </div>
                {/* Desktop image */}
                <div className='max-md:hidden'>
                    <Image
                        className="rounded-xl shadow-md max-lsw:hidden"
                        alt={`carousel-image-aaaaaaaaa`}
                        width={416}
                        height={566}
                        src={'/images/home/seedling.png'}
                    />
                    <Image
                        className="rounded-xl shadow-md lsw:hidden"
                        alt={`carousel-image-aaaaaaaaa`}
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