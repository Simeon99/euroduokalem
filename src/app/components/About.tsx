import React from 'react'
import { Translation } from '../[lang]/dictionaries'
import Image from 'next/image'
import { TbChecks } from 'react-icons/tb'
import { PiTreeThin } from 'react-icons/pi'
import { LuEarth } from 'react-icons/lu'
import { GoPerson } from 'react-icons/go'
import VerticalVideoGallery from './VerticalVideoGallery'
import { formatTextWithBreaks } from './ui/SplitText'
import SeedlingsPath from './SeedlingsPath'


const About = ({ t }: { t: Translation }) => {
    const videos = [
        { id: "lyF7cPUOs9U", title: t.aboutUs.ytVideos[0].title, poster: '/images/about/thubnail1.png' },
        { id: "JBWNHtacwF8", title: t.aboutUs.ytVideos[3].title, poster: '/images/about/thubnail4.png' },
        { id: "9SCulActjY8", title: t.aboutUs.ytVideos[1].title, poster: '/images/about/thubnail3.png' },
        { id: "gQ350ueXsH0", title: t.aboutUs.ytVideos[2].title, poster: '/images/about/thubnail2.png' },
    ]
    return (
        <>
            <div className=''>
                <div className='flex justify-center px-4'>
                    <div className='max-w-screen-sw  w-full '>
                        <div className='flex flex-col items-center mt-16'>
                             <Image
                                                        src="/images/home/20y_EDK_final.png" // put image in /public
                                                        alt="Euro Duo Kalem 20 Years"
                                                        width={150}
                                                        height={150}
                                                        className="object-contain pb-4  top-9 right-9 "
                                                        priority
                                                    />
                            <h1 className='font-heading  text-6xl text-primary  py-8 max-lsw:text-5xl max-md:text-4xl font-bold text-center line max-w-[700px]'>{t.aboutUs.title}</h1>
                            <p className='text-center text-[24px] max-md:text-[20px] max-w-[70%] max-md:max-w-full'>
                                {t.aboutUs.text}
                            </p>
                             
                            
                        </div>

                        <div className='flex flex-col items-center mt-16'>

                            <div className='animate-slide-in-left pr-[25%] max-xsw:pr-0 max-xsw:self-start '>
                                <h2 className='leading-none font-heading  text-6xl text-[#8B8B8B] max-lsw:text-5xl max-md:text-4xl font-bold'>{t.aboutUs.subtitle1}</h2>
                            </div>
                            <div className='animate-slide-in-right pl-[25%] max-xsw:pl-0 max-xsw:self-end'>
                                <h2 className=' leading-none font-heading text-6xl text-primary  max-lsw:text-5xl max-md:text-4xl font-bold'>{t.aboutUs.subtitle2}</h2>
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
                                        src="/images/about/procvetaleSadnice.jpeg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-r-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />
                                </div>
                                <div className='w-full h-[500px]'>
                                    <Image
                                        src="/images/about/grozdje.jpeg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-r-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />
                                </div>

                            </div>
                            <div className='w-1/4 flex flex-col h-full justify-between py-16'>
                                <div>
                                    <div>
                                        <TbChecks size={40} />

                                    </div>
                                    <h3 className='text-[25px] font-bold font-heading'>{t.aboutUs.benefiti.benegit1.title}</h3>
                                    <p>
                                        {t.aboutUs.benefiti.benegit1.text}
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <PiTreeThin size={40} />
                                    </div>
                                    <h3 className='text-[25px] font-bold font-heading'>{t.aboutUs.benefiti.benegit2.title}</h3>
                                    <p>
                                        {t.aboutUs.benefiti.benegit2.text}
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <LuEarth size={40} />
                                    </div>
                                    <h3 className='text-[25px] font-bold'>{t.aboutUs.benefiti.benegit3.title}</h3>
                                    <p>
                                        {t.aboutUs.benefiti.benegit3.text}
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <GoPerson size={40} />
                                    </div>
                                    <h3 className='text-[25px] font-bold'>{t.aboutUs.benefiti.benegit4.title}</h3>
                                    <p>
                                        {t.aboutUs.benefiti.benegit4.text}
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
                                        className="rounded-l-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <div className='max-w-screen-sw w-full flex flex-col items-center'>
                            {/* <div className='w-1/3 h-[500px]'>
                                <Image
                                    src="/images/about/sadnice.jpeg"         // path to your image in the /public folder
                                    alt="Apple"
                                    width={400}              // required
                                    height={300}             // required
                                    className="rounded-b-2xl w-full h-full object-cover"   // optional Tailwind class
                                />
                            </div> */}
                            <div className='w-full '>
                                <VerticalVideoGallery
                                    videos={videos}
                                    viewAllHref="/videos"
                                    t={t}
                                />
                                {/* <VerticalYouTube title='Kalemljenje iz ruke' id='lyF7cPUOs9U' poster='/images/about/thubnail1.png' />
                                <VerticalYouTube title='Kalemljenje iz ruke' id='gQ350ueXsH0' poster='/images/about/thubnail2.png' /> */}
                            </div>
                            <SeedlingsPath t={t}/>
                            <div className='w-full max-[1441px]:px-4  mt-36 flex flex-col gap-4 mb-36'>
                                <h2 className='leading-none font-heading  text-6xl text-primary max-lsw:text-5xl max-md:text-4xl font-bold'>{t.aboutUs.sveOnamaTitle}</h2>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[24px] max-md:text-[20px] max-md:max-w-full'>{formatTextWithBreaks(t.aboutUs.sveOnamaText)}{ }</p>
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
                            <h3 className='text-[25px] font-bold font-heading'>{t.aboutUs.benefiti.benegit1.title}</h3>
                            <p>
                                {t.aboutUs.benefiti.benegit1.text}
                            </p>
                            <div className='w-full flex justify-center mt-4'>
                                <div className='w-[80%] h-[300px] xsw:h-[400px]'>
                                    <Image
                                        src="/images/about/procvetaleSadnice.jpeg"         // path to your image in the /public folder
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
                            <h3 className='text-[25px] font-bold font-heading'>{t.aboutUs.benefiti.benegit2.title}</h3>
                            <p>
                                {t.aboutUs.benefiti.benegit2.text}
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
                            <h3 className='text-[25px] font-bold font-heading'>{t.aboutUs.benefiti.benegit3.title}</h3>
                            <p>
                                {t.aboutUs.benefiti.benegit3.text}
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
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <GoPerson size={40} />

                            </div>
                            <h3 className='text-[25px] font-bold font-heading'>{t.aboutUs.benefiti.benegit4.title}</h3>
                            <p>
                                {t.aboutUs.benefiti.benegit4.text}
                            </p>
                            <div className='w-full flex justify-center mt-4'>
                                <div className='w-[80%] h-[300px] xsw:h-[400px]'>
                                    <Image
                                        src="/images/about/sadnice.jpeg"         // path to your image in the /public folder
                                        alt="Apple"
                                        width={400}              // required
                                        height={300}             // required
                                        className="rounded-2xl w-full h-full object-cover"   // optional Tailwind class
                                    />

                                </div>
                            </div>
                            <div className='w-full'>
                                <VerticalVideoGallery
                                    videos={videos}
                                    viewAllHref="/videos"
                                    t={t}
                                />
                                {/* <VerticalYouTube title='Kalemljenje iz ruke' id='lyF7cPUOs9U' poster='/images/about/thubnail1.png' />
                                <VerticalYouTube title='Kalemljenje iz ruke' id='gQ350ueXsH0' poster='/images/about/thubnail2.png' /> */}
                            </div>
                            <SeedlingsPath t={t}/>
                            <div className='w-full mt-16 flex flex-col gap-4 mb-36'>
                                <h2 className='leading-none font-heading  text-6xl text-primary max-lsw:text-5xl max-md:text-4xl font-bold'>{t.aboutUs.sveOnamaTitle}</h2>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[24px] max-md:text-[20px] max-md:max-w-full'>{formatTextWithBreaks(t.aboutUs.sveOnamaText)}</p>
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