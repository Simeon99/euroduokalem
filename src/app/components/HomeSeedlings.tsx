import Image from 'next/image';
import React from 'react'

import { PiChecksBold } from "react-icons/pi";
import Button from './ui/Button';

const HomeSeedlings = () => {
    return (
        <div className='flex justify-center pb-[200px]'>
            <div className='max-w-screen-sw  w-full bg-secondary rounded-md shadow-md mx-4 px-8 py-16 flex flex-row gap-16 justify-between'>
                <div className='flex flex-col flex-1 '>
                    <h1 className='font-heading text-6xl text-primary py-8 max-lsw:text-5xl max-md:text-4xl font-bold '>Naše sadnice</h1>
                    <div className='flex flex-col gap-4'>
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
                <div className=''>

                    <Image
                        className="rounded-xl shadow-md "
                        alt={`carousel-image-aaaaaaaaa`}
                        width={416}
                        height={566}
                        src={'/images/home/seedling.png'}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSeedlings