'use client'

import React, { useEffect, useState } from 'react'
import Input from './ui/Input'
import Button from './ui/Button';
import MyMap from './ui/MyMap';
import { Translation } from '../[lang]/dictionaries';
import { useSearchParams } from 'next/navigation';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Contact = ({ t }: { t: Translation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const searchParams = useSearchParams();
    const scrollTo = searchParams?.get('scrollTo');

    useEffect(() => {
        if (scrollTo) {
            const el = document.getElementById(scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollTo]);

    return (
        <div id='contact' className='bg-secondary-light '>
            <div className='bg-secondary-light flex flex-col px-4 py-[140px] max-md:py-[70px]'>
                <div className='max-w-screen-sw  w-full  mx-auto'>
                    <h1 className='font-heading   text-[60px] leading-none text-primary  pb-8 max-lsw:text-5xl max-md:text-4xl font-bold '>{t.home.contact.title}</h1>
                    <div className='flex flex-row  max-md:flex-col max-md:gap-16' >
                        <div className='flex flex-col max-md:order-2 w-1/2 max-md:w-full pr-8'>
                            <h2 className='font-heading text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>Posaljite nam poruku</h2>
                            <Input
                                label={t.home.contact.name}
                                // placeholder="Unesite ime i prezime"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                label={t.home.contact.email}
                                // placeholder="Unesite email adresu"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label={t.home.contact.message}
                                // placeholder="Unesite email adresu"
                                value={message}
                                type="text"
                                onChange={(e) => setMessage(e.target.value)}
                                isTextarea
                            />
                            <div className='w-full pt-8'>
                                <Button label={t.home.contact.button} />
                            </div>
                        </div>
                        <div className='h-[500px] w-[1px] bg-gray-300 max-md:hidden'></div>
                        <div className='flex-1 md:pl-8 max-md:order-1 flex flex-col max-md:gap-16 gap-8'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-heading   text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>Pozovite nas</h2>
                                <p className='text-gray-500'>Naš tim je tu da vam pruži profesionalne savete i pomogne u odabiru idealnih voćnih sadnica za vaš posao. Slobodno nas kontaktirajte za bilo kakva pitanja ili porudžbine.</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='rounded-full p-2.5 bg-secondary flex flex-col items-center justify-center' >
                                        <FaPhone color='#0E3A27' className='max-md:hidden' size={28} />
                                        <FaPhone color='#0E3A27' className='md:hidden' size={24} />
                                    </div>
                                    <a href="tel:+1234567890" className='font-heading font-bold text-primary text-[24px] max-md:text-[18px] hover:underline'>+381 63 684 953</a>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-heading   text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>Pošaljite nam email</h2>
                                <p className='text-gray-500'>Imate pitanja o našim voćnim sadnicama ili želite naručiti veće količine? Pišite nam, rado ćemo vam odgovoriti i poslati ponudu u najkraćem roku.</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='rounded-full p-2.5 bg-secondary flex flex-col items-center justify-center' >
                                        <MdEmail color='#0E3A27' className='max-md:hidden'  size={28} />
                                        <MdEmail color='#0E3A27' className='md:hidden'  size={24} />
                                    </div>
                                    <span className='font-heading font-bold text-primary text-[24px] max-md:text-[18px] '>euroduokalem@yahoo.com</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-heading   text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>Posetite nas</h2>
                                <p className='text-gray-500'>Dođite na našu lokaciju i uverite se u kvalitet voćnih sadnica iz prve ruke. Rado ćemo vam pokazati asortiman, pružiti stručne savete i dogovoriti najpovoljniju ponudu za vaše potrebe.</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='rounded-full p-2.5 bg-secondary flex flex-col items-center justify-center' >
                                        <IoLocationSharp color='#0E3A27' className='max-md:hidden' size={28} />
                                        <IoLocationSharp color='#0E3A27' className='md:hidden' size={24} />
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/place/Euro+Duo+Kalem+Rasadnik/data=!4m2!3m1!1s0x0:0xb2577c11a9e5618d?sa=X&ved=1t:2428&ictx=111"
                                        target="_blank"
                                        rel="noopener noreferrer" className='font-heading font-bold text-primary text-[24px] max-md:text-[18px] hover:underline'>Selo Lazarevac, Kruševac, Srbija</a>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className='w-full h-[500px] bg-red-400 max-md:hidden max-md:w-full max-md:h-[500px] '>
                <MyMap />
            </div>
            <div className='w-1/2 md:hidden  max-md:w-full max-md:h-[500px] '>
                <MyMap />
            </div>
        </div>
    )
}

export default Contact