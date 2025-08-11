import React from 'react'
import { LuSearchCheck } from 'react-icons/lu';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { PiPackageDuotone, PiPlantDuotone } from 'react-icons/pi';

import { TbTruck } from 'react-icons/tb';

const SeedlingsFooter = () => {
    const icons = [
        {
            title: 'Proizvodnja',
            text: '📍 U našem rasadniku gajimo sadnice od pažljivo odabranih podloga i plemki, u kontrolisanim uslovima.'
        },
        {
            title: 'Kontrola kvaliteta',
            text: '🔍 Svaka sadnica prolazi kroz sertifikovanu kontrolu zdravlja i sortne čistoće.'
        },
        {
            title: 'Pakovanje',
            text: '📦 Sadnice se stručno pakuju kako bi ostale sveže i zaštićene tokom transporta.'
        },
        {
            title: 'Isporuka',
            text: '🚚 Dostavljamo sadnice širom Srbije i sveta, spremne za sadnju.'
        }
    ];
    return (
        <section className="py-12 ">
            <div className='flex flex-col items-center '>
                <h1 className='font-heading   text-[60px] leading-none text-primary  pb-8 max-lsw:text-5xl max-md:text-4xl font-bold '>Od rasadnika do vas - put sadnice</h1>

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

                                    {index != 3 ? <MdOutlineDoubleArrow className="shrink-0" size={50} /> : ""}

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

                                    {index != 3 ? <MdOutlineDoubleArrow className="shrink-0" size={30} /> : ""}

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

                                    {index != 3 ? <MdOutlineDoubleArrow className="shrink-0" size={20} /> : ""}

                                </div>
                                <div key={`xs-${index}`} className='hidden max-ssw:flex flex-col items-center gap-4 max-w-[150px] mx-auto '>
                                    <div
                                        className="flex flex-col items-center justify-center flex-shrink w-auto max-w-[80px] h-[150px] bg-[#0E3A27] text-[#F6F8F5] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105"
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

                                    <MdOutlineDoubleArrow className="shrink-0" size={20} />

                                </div>


                            </React.Fragment>
                        )
                    }


                    )}

                </div>
                <div className='pt-16'>
                    <p className='text-justify text-[24px] max-md:text-[20px] w-full'>
                        U našem rasadniku proizvodimo sertifikovane voćne sadnice vrhunskog kvaliteta, namenjene isključivo profesionalnim i komercijalnim zasadima.
                        Svaka sadnica poseduje sertifikat o poreklu, zdravstvenoj ispravnosti i sortnoj čistoći, što garantuje stabilan prinos, ujednačen rast i dug vek zasada.
                        <br /><br />
                        📦 <b>Isporuka širom sveta</b> - organizujemo bezbedan transport većih količina sadnica do vaše lokacije, uz poštovanje optimalnih uslova čuvanja i prevoza.
                        <br /><br />
                        🌱 <b>Stručna podrška</b> - savetujemo vas pri odabiru sorti i podloga koje najbolje odgovaraju vašem tržištu, klimatskim uslovima i proizvodnim ciljevima.
                        <br /><br />
                        Kao pouzdan partner u voćarskoj proizvodnji, obezbeđujemo vam kvalitetan sadni materijal i sigurnost od prve sadnje do berbe.
                    </p>
                </div>
            </div>
        </section >
    );
}

export default SeedlingsFooter