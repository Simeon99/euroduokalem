import Image from 'next/image'
import React from 'react'
import { FruitData, Subvariety } from './Seedling'
import { FaCheck } from 'react-icons/fa';
import LoadingSeedling from './ui/LoadingSeedling';
import { Translation } from '../[lang]/dictionaries';
import SeedlingSuggested from './SeedlingSuggested';

const SeedlingPresent = ({ selectedData, fruitData, selected, setSelected, loading, t }: { selectedData: Subvariety, fruitData: FruitData, selected: string, setSelected: (value: string) => void, loading: boolean, t: Translation }) => {
    return (
        <div className='flex flex-row max-lsw:flex-col gap-4 '>
            {/* Desktop side nav*/}
            <div className='h-full bg-secondary shadow-2xl rounded-t-2xl max-lsw:hidden' >
                <aside className="w-48">
                    <ul>
                        {fruitData &&
                            <li>
                                {/* <h3 className="text-lg font-semibold capitalize px-4 py-2">{i.subvariety}</h3> */}

                                <ul className="">
                                    {fruitData && fruitData.subvarietys.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => setSelected(item.subvariety)} // ⚠ make sure setSelected & selected exist
                                            className={`px-4 py-2 cursor-pointer transition-colors text-[20px] font-heading ${selected === item.subvariety
                                                ? `bg-primary text-white ${index === 0 && 'rounded-t-2xl'}`
                                                : `${index === 0
                                                    ? 'rounded-t-2xl  '
                                                    : ' text-primary'
                                                } hover:bg-[#F6F8F5]`
                                                }`}
                                        >
                                            {item.subvariety}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        }
                    </ul>
                </aside>
            </div>
            {/* Mobile side nav*/}
            <div className='lsw:hidden flex flex-wrap gap-4'>
                {fruitData && fruitData.subvarietys.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(item.subvariety)}
                        className={`px-4 py-2 shadow-md cursor-pointer rounded-2xl transition text-lg font-heading ${selected === item.subvariety
                            ? `bg-primary text-white ${index === 0 && 'rounded-t-2xl'}`
                            : ' hover:scale-103 hover:shadow-lg duration-300 bg-secondary text-primary'
                            }`}
                    >
                        {item.subvariety}
                    </div>
                ))}
            </div>
            {loading ?
                <LoadingSeedling /> :

                <main className="flex-1 ">
                    <div className='flex flex-col gap-4 mb-8'>
                        <div className='flex flex-row max-md:flex-col gap-8'>
                            <div className='w-1/2 max-md:pt-16 max-md:w-full flex justify-center'>
                                <Image
                                    src={`/images/seedling/${selectedData?.url}` || ''}
                                    alt={selectedData?.subvariety || ''}
                                    width={600}
                                    height={400}
                                    className="rounded-2xl mb-4 object-cover w-full h-[400px] max-xsw:h-[250px] max-w-[600px]"
                                />

                            </div>
                            <div className='w-1/2 max-md:w-full flex flex-col items-end max-md:items-start '>
                                <h1 className="text-4xl max-lsw:text-3xl text-primary font-bold font-heading">{selectedData?.subvariety}</h1>
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
                        <div className='flex flex-col gap-4 mt-16'>
                            <h1 className="text-[25px]  font-bold text-primary font-heading">{t.seedling.characteristics}</h1>
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
                        <h1 className='font-heading text-6xl text-primary   max-lsw:text-5xl max-md:text-4xl font-bold line'>
                            { t.seedling.suggested }
                        </h1>
                        {selectedData?.suggested  && <SeedlingSuggested suggestedFruits={selectedData?.suggested}/>}
                    </div>
                </main>
            }
        </div>
    )
}

export default SeedlingPresent