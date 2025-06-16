import React from 'react'
import { FruitData } from './Seedling'

const SeedlingPresentMenu = ({fruitData, setSelected, selected}: {fruitData: FruitData, setSelected: (value: string) => void, selected: string}) => {
    return (
        <>
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
        </>
    )
}

export default SeedlingPresentMenu