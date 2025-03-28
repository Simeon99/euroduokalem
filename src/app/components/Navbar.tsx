'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-60 w-full px-2 pt-2">
            <div className={`w-full bg-[var(--color-secondary-transparent)] backdrop-blur-md rounded-md ${isOpen ? 'rounded-b-none ' : 'shadow-md'}  max-w-[1440px] mx-auto px-4 py-4 `}>

                <div className="max-w-7xl mx-auto  flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary font-heading">
                        EuroDuoKalem
                    </Link>

                    {/* Hamburger Menu (mobile) */}
                    <button
                        className="md:hidden text-3xl text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5  mb-1 bg-black rounded-full transition-transform ${isOpen ? `bg-black transform rotate-45 translate-y-1` : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-black  mb-1 rounded-full transition-opacity ${isOpen ? 'bg-black opacity-0' : 'opacity-100'}`}></div>
                        <div className={`w-6 h-0.5 bg-black  rounded-full transition-transform ${isOpen ? 'bg-black transform -rotate-45 -translate-y-2' : ''}`}></div>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 items-center font-body text-primary ">
                        <li className="relative group">
                            <Link
                                href="/proizvodi"
                                className="text-primary font-body transition-colors duration-300"
                            >
                                Sadnice voća
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link
                                href="/proizvodi"
                                className="text-primary font-body transition-colors duration-300 "
                            >
                                O nama
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link
                                href="/proizvodi"
                                className="text-primary font-body transition-colors duration-300"
                            >
                                Blog
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden relative group md:block">
                        <Link
                            href="/proizvodi"
                            className="text-primary font-b font-body transition-colors duration-300"
                        >
                            Kontaktirajte nas
                            <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className='  fixed top-[72px] left-0 right-0 w-full max-w-[1440px]  mx-auto px-2 '>
                <div
                    className={`h-[2px] w-full bg-primary origin-center transform transition-transform duration-300 ${isOpen ? 'scale-x-100' : 'scale-x-0'
                        }`}
                />
                <div className={`z-50 p-4  bg-[var(--color-secondary-transparent)] backdrop-blur-md  rounded-b-md   transition-all duration-300 ease-in-out overflow-hidden  md:hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <ul className="flex flex-col  gap-4 font-body text-[20px] font-bold text-primary ">
                        <Link href="/" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>Sadnice voća</li></Link>
                        <Link href="/proizvodi" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>O nama</li></Link>
                        <Link href="/kontakt" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>Blog</li></Link>
                        <Link href="/onama" className='active:bg-[#0E3A27] active:text-[#D7DED4] ' onClick={() => setIsOpen(false)}><li>Kontaktirajte nas</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
