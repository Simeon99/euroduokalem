'use client'

import React, { useState } from 'react'
import Input from './ui/Input'
import Button from './ui/Button';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='bg-secondary-light '>
            <div className='bg-secondary-light flex flex-col px-4 py-[140px] max-md:py-[70px]'>
                <div className='max-w-screen-sw  w-full  mx-auto'>

                    <div className='flex flex-row max-md:flex-col max-md:gap-8' >
                        <div className='flex flex-col  w-1/2 max-md:w-full pr-8'>
                            <h1 className='font-heading   text-[60px] leading-none text-primary  pb-8 max-lsw:text-5xl max-md:text-4xl font-bold '>Kontaktirajte nas</h1>
                            <Input
                                label="Ime i prezime"
                                // placeholder="Unesite ime i prezime"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                label="Email"
                                // placeholder="Unesite email adresu"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Email"
                                // placeholder="Unesite email adresu"
                                value={message}
                                type="text"
                                onChange={(e) => setMessage(e.target.value)}
                                isTextarea
                            />
                            <div className='w-full pt-8'>
                                <Button label='Pošalji poruku' />
                            </div>
                        </div>
                        <div className='w-1/2 max-md:hidden max-md:w-full max-md:h-[500px] bg-green-400'>
                            <h1>Map</h1>
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-1/2 md:hidden  max-md:w-full max-md:h-[500px] bg-green-400'>
                <h1>Map</h1>
            </div>
        </div>
    )
}

export default Contact