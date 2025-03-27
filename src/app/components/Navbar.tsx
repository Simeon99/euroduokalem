'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full px-2 py-2">
            <div className='w-full bg-[var(--color-secondary-transparent)] backdrop-blur-md rounded-md shadow-md max-w-[1440px] mx-auto px-4 py-4 '>

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

                {/* Mobile Menu */}
                <div className={`overflow-hidden transition-all duration-300  ease-in-out md:hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col gap-4 font-body text-[20px] font-bold text-primary pt-4">
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Sadnice voća</Link></li>
                        <li><Link href="/proizvodi" onClick={() => setIsOpen(false)}>O nama</Link></li>
                        <li><Link href="/kontakt" onClick={() => setIsOpen(false)}>Blog</Link></li>
                        <li><Link href="/onama" onClick={() => setIsOpen(false)}>Kontaktirajte nas</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
