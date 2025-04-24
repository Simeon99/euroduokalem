'use client'

import React, { useEffect, useState } from 'react'
import Input from './ui/Input'
import Button from './ui/Button';
import MyMap from './ui/MyMap';
import { Translation } from '../[lang]/dictionaries';
import { useSearchParams } from 'next/navigation';

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
                <div  className='max-w-screen-sw  w-full  mx-auto'>

                    <div className='flex flex-row max-md:flex-col max-md:gap-8' >
                        <div className='flex flex-col  w-1/2 max-md:w-full pr-8'>
                            <h1 className='font-heading   text-[60px] leading-none text-primary  pb-8 max-lsw:text-5xl max-md:text-4xl font-bold '>{t.home.contact.title}</h1>
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
                        <div className='w-1/2 max-md:hidden max-md:w-full max-md:h-[500px] '>
                            <MyMap />
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-1/2 md:hidden  max-md:w-full max-md:h-[500px] '>
                <MyMap />
            </div>
        </div>
    )
}

export default Contact