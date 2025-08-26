import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import SeedlingSuggested from './SeedlingSuggested'
import { Subvariety } from './Seedling'
import { Translation } from '../[lang]/dictionaries'

const SeedlingPresentationTipe1 = ({ selectedData, frutiName, t }: { selectedData: Subvariety, frutiName:string, t: Translation }) => {

    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        setIsImageLoading(true); // Trigger loading state on every new src
    }, [selectedData.url]);

    return (
        <main className="flex-1 ">
            <div className='flex flex-col gap-4 mb-8'>
                <div className='flex flex-row max-md:flex-col gap-8'>
                    <div className='w-1/2 relative max-md:pt-16 max-md:w-full flex justify-center'>
                        {isImageLoading && (
                            <div
                                className="absolute   w-full h-[400px] max-xsw:h-[250px] max-w-[600px] bg-gray-300 animate-pulse rounded-2xl">

                            </div>
                        )}
                        <Image
                            src={`/images/seedling/${selectedData?.url}` || ''}
                            alt={selectedData?.subvariety || ''}
                            width={600}
                            height={400}
                            className={`rounded-2xl mb-4 object-cover w-full h-[400px] ${isImageLoading ? 'opacity-0' : 'opacity-100'} max-xsw:h-[250px] max-w-[600px]`}
                            onLoadingComplete={() => setIsImageLoading(false)}
                        />

                    </div>
                    <div className='w-1/2 max-md:w-full flex flex-col items-end max-md:items-start '>
                        <h2 className="text-4xl max-lsw:text-3xl text-primary font-bold font-heading">{selectedData?.subvariety}</h2>
                        <p className="text-lg md:text-[20px] text-gray-700 text-justify max-md:hidden">{selectedData?.about}</p>
                    </div>

                </div>
                <div className='w-full  bg-primary rounded-2xl p-4 grid grid-cols-4  gap-2 gap-y-4 text-secondary-light font-heading max-md:hidden'>
                    {
                        selectedData && selectedData?.main?.map((i, index) => (
                            <div key={index} className=' flex items-center text-lg md:text-[20px]'>
                                {i}
                            </div>
                        ))
                    }
                </div>
                <div className='grid grid-cols-2 gap-4 md:hidden'>
                    {
                        selectedData && selectedData?.main?.map((i, index) => (
                            <div key={index} className='flex flex-col text-primary'>
                                <FaCheck size={20} />
                                <span className='font-heading text-lg md:text-[20px] font-bold'>{i}</span>

                            </div>
                        ))
                    }
                </div>
                <div>
                    <p className="text-lg text-gray-700 text-justify md:hidden">{selectedData?.about}</p>
                </div>
                {/* <div
                            className={`h-[2px] w-full bg-primary md:hidden`}
                        /> */}
                <div className='flex flex-col gap-4 mt-8'>
                    <h3 className="text-[25px]  font-bold text-primary font-heading">{t.seedling.characteristics}</h3>
                    {selectedData && selectedData?.characteristics?.map((i, index) => (
                        <div key={index} className='flex flex-row gap-2 '>
                            <div className='w-3 h-1.5 bg-primary rounded-2xl mt-3'></div>
                            <div className='flex-1'>
                                <span className='font-heading text-primary font-bold text-[20px] pr-2'>{i.title}</span> <span className='text-lg text-gray-700'>{i.text}</span>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className='flex flex-col gap-8 my-16'>
                <h2 className='font-heading text-6xl text-primary   max-lsw:text-5xl max-md:text-4xl font-bold line'>
                    {t.seedling.suggested}
                </h2>
                {selectedData?.suggested && <SeedlingSuggested key={`${selectedData.subvariety}-${selectedData.suggested.join(',')}`} frutiName={frutiName}/>}
            </div>
        </main>
    )
}

export default SeedlingPresentationTipe1