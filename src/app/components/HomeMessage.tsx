import Image from 'next/image'
import React from 'react'

const HomeMessage = () => {
    return (
        <div className='flex flex-col items-center px-4'>
            <div className='max-w-screen-sw  w-full flex flex-row max-md:flex-col shadow-lg rounded-xl'>

                <div className=" relative w-full h-[685px] max-md:h-[394px] overflow-hidden rounded-xl ">
                    <Image
                        src="/images/home/carousel2.jpg"
                        alt="Example"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div  className='h-[685px] max-md:h-[300px] bg-secondary-light rounded-xl -ml-5 max-md:ml-0 max-md:-mt-5 z-20 flex flex-col justify-center'>
                    <p className='font-heading text-[48px] max-w-[471px] px-8 max-lsw:text-[36px] max-md:text-[24px]'>Ne sadite samo voće, sadite budućnost – vrhunske sadnice za voćnjake koji traju generacijama!</p>
                </div>
            </div>
        </div>
    )
}

export default HomeMessage