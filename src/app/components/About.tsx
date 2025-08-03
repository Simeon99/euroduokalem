import React from 'react'
import { Translation } from '../[lang]/dictionaries'
import Image from 'next/image'
import { TbChecks } from 'react-icons/tb'
import { PiTreeThin } from 'react-icons/pi'
import { LuEarth } from 'react-icons/lu'
import { GoPerson } from 'react-icons/go'

const About = ({ t }: { t: Translation }) => {
    return (
        <>
            <div className=''>
                <div className='flex justify-center px-4'>
                    <div className='max-w-screen-sw  w-full '>
                        <div className='flex flex-col items-center mt-16'>
                            <h1 className='font-heading  text-6xl text-primary  py-8 max-lsw:text-5xl max-md:text-4xl font-bold text-center line max-w-[700px]'>{t.aboutUs.title}</h1>
                            <p className='text-center text-[24px] max-md:text-[20px] max-w-[70%] max-md:max-w-full'>
                                {t.aboutUs.text}
                            </p>
                        </div>

                        <div className='flex flex-col items-center mt-16'>

                            <div className='animate-slide-in-left pr-[25%] max-xsw:pr-0 max-xsw:self-start '>
                                <h1 className='leading-none font-heading  text-6xl text-[#8B8B8B] max-lsw:text-5xl max-md:text-4xl font-bold'>{t.aboutUs.subtitle1}</h1>
                            </div>
                            <div className='animate-slide-in-right pl-[25%] max-xsw:pl-0 max-xsw:self-end'>
                                <h1 className=' leading-none font-heading text-6xl text-primary  max-lsw:text-5xl max-md:text-4xl font-bold'>{t.aboutUs.subtitle2}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desktop */}
                <div className='max-md:hidden'>
                    <div className='flex justify-center'>
                        <div className='flex flex-row justify-between h-[1100px] mt-36 max-w-screen-sw  w-full '>
                            <div className='w-1/3 h-full flex flex-col justify-between'>
                                <div className='w-full h-[500px]'>
                                    <Image
                                        src="/images/about/kruske.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-r-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />
                                </div>
                                <div className='w-full h-[500px]'>
                                    <Image
                                        src="/images/about/tresnje.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-tr-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />
                                </div>

                            </div>
                            <div className='w-1/4 flex flex-col h-full justify-between py-16'>
                                <div>
                                    <div>
                                        <TbChecks size={40} />

                                    </div>
                                    <h3 className='text-[25px] font-bold'>Kvalitet iznad svega</h3>
                                    <p>
                                        Nudimo samo provjerene i zdrave sadnice, uzgojene po najvišim standardima. Svaka biljka prolazi strogu kontrolu kvaliteta kako bismo osigurali vaš uspjeh.
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <PiTreeThin size={40} />
                                    </div>
                                    <h3 className='text-[25px] font-bold'>Širok asortiman</h3>
                                    <p>
                                        Naša ponuda obuhvata preko X vrsta sadnica – od voćaka poput jabuka, krušaka i trešanja do ukrasnog bilja i drveća. Imamo sve što vam treba za vaš projekat.
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <LuEarth size={40} />
                                    </div>
                                    <h3 className='text-[25px] font-bold'>Stručna podrška</h3>
                                    <p>
                                        Praktikujemo održive metode uzgoja kako bismo zaštitili prirodu i osigurali dugoročnu kvalitetu. Naše sadnice su dio budućnosti koju gradimo zajedno.
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <GoPerson size={40} />
                                    </div>
                                    <h3 className='text-[25px] font-bold'>Kvalitet iznad svega</h3>
                                    <p>
                                        Naš tim stručnjaka stoji vam na raspolaganju za savjete o uzgoju, zaštiti bilja i optimizaciji prinosa. Vaš uspjeh je i naš uspjeh.
                                    </p>
                                </div>
                            </div>
                            <div className='w-1/3 h-full flex flex-col justify-between'>
                                <div className='w-full h-[500px]'>
                                    <Image
                                        src="/images/about/tresnje.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-l-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />
                                </div>
                                <div className='w-full h-[500px]'>
                                    <Image
                                        src="/images/about/kruske.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-tl-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <div className='max-w-screen-sw w-full flex flex-col items-center'>
                            <div className='w-1/3 h-[500px]'>
                                <Image
                                    src="/images/about/kruske.jpg"         // path to your image in the /public folder
                                    alt="Apple"
                                    width={400}              // required
                                    height={300}             // required
                                    className="rounded-b-2xl w-full h-full object-cover"   // optional Tailwind class
                                />
                            </div>
                            <div className='w-full px-4 mt-36 flex flex-col gap-4 mb-36'>
                                <h1 className='leading-none font-heading  text-6xl text-primary max-lsw:text-5xl max-md:text-4xl font-bold'>Saznajte sve o nama</h1>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[24px] max-md:text-[20px] max-md:max-w-full'>Praktikujemo održive metode uzgoja kako bismo zaštitili prirodu i osigurali dugoročnu kvalitetu. Naše sadnice su dio budućnosti koju gradimo zajedno. Naš tim stručnjaka stoji vam na raspolaganju za savjete o uzgoju, zaštiti bilja i optimizaciji prinosa. Vaš uspjeh je i naš uspjeh.</p>
                                    <p className='text-[24px] max-md:text-[20px] max-md:max-w-full'>Naša ponuda obuhvata preko X vrsta sadnica – od voćaka poput jabuka, krušaka i trešanja do ukrasnog bilja i drveća. Imamo sve što vam treba za vaš projekat. Nudimo samo provjerene i zdrave sadnice, uzgojene po najvišim standardima. Svaka biljka prolazi strogu kontrolu kvaliteta kako bismo osigurali vaš uspjeh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className='flex justify-center px-4 mt-16 md:hidden'>
                    <div className='max-w-screen-sw  w-full flex flex-col gap-16'>
                        <div className='flex flex-col'>
                            <div>
                                <TbChecks size={40} />

                            </div>
                            <h3 className='text-[25px] font-bold'>Kvalitet iznad svega</h3>
                            <p>
                                Nudimo samo provjerene i zdrave sadnice, uzgojene po najvišim standardima. Svaka biljka prolazi strogu kontrolu kvaliteta kako bismo osigurali vaš uspjeh.
                            </p>
                            <div className='w-full flex justify-center mt-4'>
                                <div className='w-[80%] h-[300px] xsw:h-[400px]'>
                                    <Image
                                        src="/images/about/kruske.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={600}             // required
                                        className="rounded-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <PiTreeThin size={40} />

                            </div>
                            <h3 className='text-[25px] font-bold'>Širok asortiman</h3>
                            <p>
                                Naša ponuda obuhvata preko X vrsta sadnica – od voćaka poput jabuka, krušaka i trešanja do ukrasnog bilja i drveća. Imamo sve što vam treba za vaš projekat.
                            </p>
                            <div className='w-full flex justify-center mt-4'>
                                <div className='w-[80%] h-[300px] xsw:h-[400px]'>
                                    <Image
                                        src="/images/about/tresnje.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <LuEarth size={40} />

                            </div>
                            <h3 className='text-[25px] font-bold'>Stručna podrška</h3>
                            <p>
                                Praktikujemo održive metode uzgoja kako bismo zaštitili prirodu i osigurali dugoročnu kvalitetu. Naše sadnice su dio budućnosti koju gradimo zajedno.
                            </p>
                            <div className='w-full flex justify-center mt-4'>
                                <div className='w-[80%] h-[300px] xsw:h-[400px]'>
                                    <Image
                                        src="/images/about/tresnje.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <GoPerson size={40} />

                            </div>
                            <h3 className='text-[25px] font-bold'>Kvalitet iznad svega</h3>
                            <p>
                                Naš tim stručnjaka stoji vam na raspolaganju za savjete o uzgoju, zaštiti bilja i optimizaciji prinosa. Vaš uspjeh je i naš uspjeh.
                            </p>
                            <div className='w-full flex justify-center mt-4'>
                                <div className='w-[80%] h-[300px] xsw:h-[400px]'>
                                    <Image
                                        src="/images/about/kruske.jpg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />

                                </div>
                            </div>
                            <div className='w-full mt-16 flex flex-col gap-4 mb-36'>
                                <h1 className='leading-none font-heading  text-6xl text-primary max-lsw:text-5xl max-md:text-4xl font-bold'>Saznajte sve o nama</h1>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[24px] max-md:text-[20px] max-md:max-w-full'>Praktikujemo održive metode uzgoja kako bismo zaštitili prirodu i osigurali dugoročnu kvalitetu. Naše sadnice su dio budućnosti koju gradimo zajedno. Naš tim stručnjaka stoji vam na raspolaganju za savjete o uzgoju, zaštiti bilja i optimizaciji prinosa. Vaš uspjeh je i naš uspjeh.</p>
                                    <p className='text-[24px] max-md:text-[20px] max-md:max-w-full'>Naša ponuda obuhvata preko X vrsta sadnica – od voćaka poput jabuka, krušaka i trešanja do ukrasnog bilja i drveća. Imamo sve što vam treba za vaš projekat. Nudimo samo provjerene i zdrave sadnice, uzgojene po najvišim standardima. Svaka biljka prolazi strogu kontrolu kvaliteta kako bismo osigurali vaš uspjeh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About