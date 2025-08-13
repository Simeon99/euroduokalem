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
import CountryCodeSelector from './ui/CountryCodeSelector';

const Contact = ({ t }: { t: Translation }) => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
    const [status, setStatus] = useState('');
    const searchParams = useSearchParams();
    const scrollTo = searchParams?.get('scrollTo');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validacija — proveri da sva polja imaju vrednost
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
            setStatus(t.home.contact.status.error);
            return;
        }

        // Validacija e-maila
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus(t.home.contact.status.validationEmailError);
            return;
        }

        setStatus(t.home.contact.status.sending);

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus(t.home.contact.status.success);
                setFormData({ name: '', email: '', message: '', phone: '' });
            } else {
                setStatus(t.home.contact.status.error);
            }
        } catch (error) {
            console.log(error)
            setStatus(t.home.contact.status.error);
        }
    };

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
                        <div className='flex flex-col max-md:order-2 w-1/2 max-md:w-full md:pr-8'>
                            <h2 className='font-heading text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>Posaljite nam poruku</h2>
                            <Input
                                label={t.home.contact.name}
                                name="name"
                                // placeholder="Unesite ime i prezime"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <Input
                                label={t.home.contact.email}
                                name="email"
                                // placeholder="Unesite email adresu"
                                value={formData.email}
                                type="email"
                                onChange={handleChange}
                            />
                            <div className='flex flex-row gap-4 items-end justify-center'>
                                <CountryCodeSelector
                                    onSelect={(code) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            phone: code + ' ' // adds country code prefix
                                        }))
                                    }
                                />
                                <Input
                                    label={t.home.contact.phone}
                                    name="phone"
                                    value={formData.phone}
                                    type="tel"
                                    onChange={handleChange}
                                />
                            </div>
                            <Input
                                label={t.home.contact.message}
                                name="message"
                                // placeholder="Unesite email adresu"
                                value={formData.message}
                                type="text"
                                onChange={handleChange}
                                isTextarea
                            />
                            <div className='w-full pt-8'>
                                <Button label={t.home.contact.button} onClick={handleSubmit} disabled={! (formData.name.trim() !== '' &&
                                    formData.email.trim() !== '' &&
                                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                                    formData.phone.trim() !== '' &&
                                    formData.message.trim() !== '') || status === t.home.contact.status.sending}/>
                            </div>
                            {status && (
                                <div
                                    className={`mt-4 flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium
                                            ${status === t.home.contact.status.sending
                                            ? 'border-blue-200 bg-blue-50 text-blue-800'
                                            : status.toLowerCase().includes('sent') || status.toLowerCase().includes('poslata') || status.toLowerCase().includes('отправлено')
                                                ? 'border-green-200 bg-green-50 text-green-800'
                                                : 'border-red-200 bg-red-50 text-red-800'
                                        }`}
                                >
                                    {/* Ikona */}
                                    {status === t.home.contact.status.sending ? (
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-b-transparent" />
                                    ) : status.toLowerCase().includes('sent') || status.toLowerCase().includes('poslata') || status.toLowerCase().includes('отправлено') ? (
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.85a1 1 0 111.414-1.414l3.1 3.1 6.364-6.364a1 1 0 011.536.121z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0 1 1 0 01-2 0zm1-8a1 1 0 00-1 1v5a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}

                                    {/* Tekst poruke */}
                                    <span>{status}</span>
                                </div>
                            )}
                        </div>
                        <div className='h-[500px] w-[1px] bg-gray-300 max-md:hidden'></div>
                        <div className='flex-1 md:pl-8 max-md:order-1 flex flex-col max-md:gap-16 gap-8'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-heading   text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>{t.home.contact.callUs}</h2>
                                <p className='text-gray-500'>{t.home.contact.callUsText}</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='rounded-full p-2.5 bg-secondary flex flex-col items-center justify-center' >
                                        <FaPhone color='#0E3A27' className='max-md:hidden' size={28} />
                                        <FaPhone color='#0E3A27' className='md:hidden' size={24} />
                                    </div>
                                    <a href="tel:+1234567890" className='font-heading font-bold text-primary text-[24px] max-md:text-[18px] hover:underline'>+381 63 684 953</a>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-heading   text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>{t.home.contact.sendEmail}</h2>
                                <p className='text-gray-500'>{t.home.contact.sendEmailText}</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='rounded-full p-2.5 bg-secondary flex flex-col items-center justify-center' >
                                        <MdEmail color='#0E3A27' className='max-md:hidden' size={28} />
                                        <MdEmail color='#0E3A27' className='md:hidden' size={24} />
                                    </div>
                                    <span className='font-heading font-bold text-primary text-[24px] max-md:text-[18px] '>info@euroduokalem.com</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-heading   text-[32px] leading-none text-primary  max-lsw:text-3xl max-md:text-2xl font-bold'>{t.home.contact.visitUs}</h2>
                                <p className='text-gray-500'>{t.home.contact.visitUsText}</p>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='rounded-full p-2.5 bg-secondary flex flex-col items-center justify-center' >
                                        <IoLocationSharp color='#0E3A27' className='max-md:hidden' size={28} />
                                        <IoLocationSharp color='#0E3A27' className='md:hidden' size={24} />
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/place/Euro+Duo+Kalem+Rasadnik/data=!4m2!3m1!1s0x0:0xb2577c11a9e5618d?sa=X&ved=1t:2428&ictx=111"
                                        target="_blank"
                                        rel="noopener noreferrer" className='font-heading font-bold text-primary text-[24px] max-md:text-[18px] hover:underline'>{t.home.contact.location}</a>

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