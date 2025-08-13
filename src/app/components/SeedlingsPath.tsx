import React from 'react'

import { LuSearchCheck } from 'react-icons/lu';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { PiPackageDuotone, PiPlantDuotone } from 'react-icons/pi';

import { TbTruck } from 'react-icons/tb';
import { Translation } from '../[lang]/dictionaries';

const SeedlingsPath = ({ t }: { t: Translation }) => {

    const icons = [
        {
            title: t.aboutUs.seedlingsPath.cards[0].title,
            text: t.aboutUs.seedlingsPath.cards[0].text
        },
        {
            title: t.aboutUs.seedlingsPath.cards[1].title,
            text: t.aboutUs.seedlingsPath.cards[1].text
        },
        {
            title: t.aboutUs.seedlingsPath.cards[2].title,
            text: t.aboutUs.seedlingsPath.cards[2].text
        },
        {
            title: t.aboutUs.seedlingsPath.cards[3].title,
            text: t.aboutUs.seedlingsPath.cards[3].text
        },
    ];
    return (
        <section className="pt-32 max-[1441px]:px-4">
            <div className='flex flex-col items-center p'>
                <h1 className='font-heading   text-[60px] leading-none text-primary  pb-8 max-lsw:text-5xl max-md:text-4xl font-bold text-center'>{t.aboutUs.seedlingsPath.title}</h1>

            </div>
            <div className="w-full ">
                <div className=" text-center flex flex-row justify-center ssw:gap-4">
                    {icons.map((icon, index) => {
                        const iconKey = icon.text ?? icon.title ?? index;
                        return (
                            <React.Fragment key={iconKey} >
                                <div key={`lg-${index}`} className='flex flex-row items-center gap-4 max-sw:hidden'>
                                    <div
                                        className="flex flex-col items-center justify-center w-[250px] h-[350px] bg-[#0E3A27] text-[#F6F8F5] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        <div className="relative mb-4 flex items-center justify-center">
                                            {index == 0 ? <PiPlantDuotone size={100} /> : ''}
                                            {index == 1 ? <LuSearchCheck size={100} /> : ''}
                                            {index == 2 ? <PiPackageDuotone size={100} /> : ''}
                                            {index == 3 ? <TbTruck size={100} /> : ''}

                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{icon.title}</h3>
                                        <p className="text-sm opacity-90">{icon.text}</p>
                                    </div>

                                    {index != 3 ? <MdOutlineDoubleArrow className="shrink-0" color='#0E3A27' size={50} /> : ""}

                                </div>
                                <div key={`md-${index}`} className='flex flex-row items-center gap-4 max-lsw:hidden min-sw:hidden'>
                                    <div
                                        className="flex flex-col items-center justify-center w-[200px] h-[350px] bg-[#0E3A27] text-[#F6F8F5] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        <div className="relative mb-4 flex items-center justify-center">
                                            {index == 0 ? <PiPlantDuotone size={100} /> : ''}
                                            {index == 1 ? <LuSearchCheck size={100} /> : ''}
                                            {index == 2 ? <PiPackageDuotone size={100} /> : ''}
                                            {index == 3 ? <TbTruck size={100} /> : ''}

                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{icon.title}</h3>
                                        <p className="text-sm opacity-90">{icon.text}</p>
                                    </div>

                                    {index != 3 ? <MdOutlineDoubleArrow className="shrink-0" color='#0E3A27' size={30} /> : ""}

                                </div>
                                <div key={`sm-${index}`} className='flex flex-row items-center gap-4 max-ssw:hidden min-lsw:hidden'>
                                    <div
                                        className="flex flex-col items-center justify-center w-[110px] h-[200px] bg-[#0E3A27] text-[#F6F8F5] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        <div className=" relative mb-4 flex items-center justify-center">
                                            {index == 0 ? <PiPlantDuotone size={50} /> : ''}
                                            {index == 1 ? <LuSearchCheck size={50} /> : ''}
                                            {index == 2 ? <PiPackageDuotone size={50} /> : ''}
                                            {index == 3 ? <TbTruck size={50} /> : ''}

                                        </div>
                                        <h3 className="text-base font-semibold mb-2">{icon.title}</h3>
                                        {/* <p className="text-sm opacity-90">{icon.text}</p> */}
                                    </div>

                                    {index != 3 ? <MdOutlineDoubleArrow className="shrink-0" color='#0E3A27' size={20} /> : ""}

                                </div>
                                <div key={`xs-${index}`} className='hidden max-ssw:flex flex-col items-center gap-4 max-w-[150px] mx-auto '>
                                    <div
                                        className="flex flex-col items-center justify-center flex-shrink w-auto max-w-[90px] h-[150px] bg-[#0E3A27] text-[#F6F8F5] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        <div className=" relative mb-4 flex items-center justify-center">
                                            {index == 0 ? <PiPlantDuotone size={30} /> : ''}
                                            {index == 1 ? <LuSearchCheck size={30} /> : ''}
                                            {index == 2 ? <PiPackageDuotone size={30} /> : ''}
                                            {index == 3 ? <TbTruck size={30} /> : ''}

                                        </div>
                                        <h3 className="text-xs font-semibold mb-2">{icon.title}</h3>
                                        {/* <p className="text-sm opacity-90">{icon.text}</p> */}
                                    </div>

                                    <MdOutlineDoubleArrow className="shrink-0" color='#0E3A27' size={20} />

                                </div>


                            </React.Fragment>
                        )
                    }


                    )}

                </div>
                <div className='pt-16'>
                    <p
                        className='text-justify text-[24px] max-md:text-[20px] w-full'
                        dangerouslySetInnerHTML={{ __html: t.aboutUs.seedlingsPath.text }}
                    />
                </div>
            </div>
        </section >
    )
}

export default SeedlingsPath