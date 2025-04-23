'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LangSwitcher from './LanguageSwitcher';
import { Translation } from '../[lang]/dictionaries';
import { useParams } from 'next/navigation';



export default function Navbar({ t }: { t: Translation }) {

    const params = useParams();
    const lang = params?.lang as string;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-60 w-full px-4 pt-2">
            <div className={`w-full bg-[var(--color-secondary-transparent)] backdrop-blur-md rounded-md ${isOpen ? 'rounded-b-none ' : 'shadow-md'}  max-w-[1440px] mx-auto px-4  `}>
                <div className="max-w-7xl mx-auto  flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary font-heading py-2">
                        {/* EuroDuoKalem */}
                        <Image
                            src={'/images/home/logo EDK.svg'}
                            alt={"AAA"}
                            width={60}
                            height={30}
                        // className="w-full h-full object-cover"
                        />
                    </Link>

                    {/* Hamburger Menu (mobile) */}
                    <div className='md:hidden flex flex-row gap-4'>

                        <button
                            className=" text-3xl text-primary"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className={`w-6 h-0.5  mb-1 bg-primary rounded-full transition-transform ${isOpen ? `bg-primary transform rotate-45 translate-y-1` : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-primary  mb-1 rounded-full transition-opacity ${isOpen ? 'bg-primary opacity-0' : 'opacity-100'}`}></div>
                            <div className={`w-6 h-0.5 bg-primary  rounded-full transition-transform ${isOpen ? 'bg-primary transform -rotate-45 -translate-y-2' : ''}`}></div>
                        </button>

                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 items-center font-body text-primary ">
                        <li className="relative group">
                            {lang}
                            <Link
                                href="/seedlings"
                                locale={lang}
                                className="text-primary font-body transition-colors duration-300"
                            >
                                {t.header.fruiteSeedlings}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link
                                href="/about-us"
                                className="text-primary font-body transition-colors duration-300 "
                            >
                                {t.header.aboutUs}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link
                                href="/proizvodi"
                                className="text-primary font-body transition-colors duration-300"
                            >
                                {t.header.blog}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className='hidden md:flex flex-row items-center gap-4'>
                        <div className="hidden gap-4 items-center relative group md:block">
                            <Link
                                href="/proizvodi"
                                className="text-primary font-body transition-colors duration-300"
                            >
                                {t.header.contact}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>

                        </div>
                        <LangSwitcher />
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className='  fixed top-[69.34px] left-0 right-0 w-full max-w-[1440px]  mx-auto px-4 '>
                <div
                    className={`h-[2px] w-full bg-primary origin-center transform transition-transform duration-300 ${isOpen ? 'scale-x-100' : 'scale-x-0'
                        }`}
                />
                <div className={`z-50 p-4  bg-[var(--color-secondary-transparent)] backdrop-blur-md  rounded-b-md   transition-all duration-300 ease-in-out overflow-hidden  md:hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <ul className="flex flex-col  gap-4 font-body text-[20px] font-bold text-primary ">
                        <Link href="/seedlings" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>{t.header.fruiteSeedlings}</li></Link>
                        <Link href="/about-us" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>{t.header.aboutUs}</li></Link>
                        <Link href="/kontakt" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>{t.header.blog}</li></Link>
                        <Link href="/onama" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>{t.header.contact}</li></Link>
                    </ul>
                    <div
                        className={`h-[2px] my-4 w-full bg-primary origin-center transform transition-transform duration-300 ${isOpen ? 'scale-x-100' : 'scale-x-0'
                            }`}
                    />
                    <div className=' '>
                        <LangSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}
