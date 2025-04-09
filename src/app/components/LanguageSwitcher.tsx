'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { GrLanguage } from "react-icons/gr";

const availableLangs = ['en', 'sr', 'ru'];

export default function LangSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [currentLang, setCurrentLang] = useState('en');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const parts = pathname?.split('/') || '';
        if (availableLangs.includes(parts[1])) {
            setCurrentLang(parts[1]);
        }
    }, [pathname]);

    const changeLanguage = (lang: string) => {
        document.cookie = `lang=${lang}; path=/; max-age=31536000`; // 1 year

        const parts = pathname?.split('/') || [''];
        if (availableLangs.includes(parts[1])) {
            parts[1] = lang;
        } else {
            parts.splice(1, 0, lang);
        }

        const newPath = parts.join('/');
        setOpen(false);
        router.push(newPath);
    };

    return (
        <>
        {/* Desktop */}
            <div className="relative inline-block text-left max-md:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="hover:cursor-pointer inline-flex items-center gap-2 justify-center w-full rounded-md border border-[#0E3A27] md:shadow-sm px-4 py-2  text-sm font-medium text-primary hover:bg-[var(--color-secondary-transparent)] hover:backdrop-blur-md"
                >
                    <GrLanguage color='#0E3A27' className='max-md:hidden' />

                    {currentLang.toUpperCase()}
                    <svg
                        className="md:ml-2 -mr-1 h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-[#D7DED4] text-[#0E3A27]  z-50">
                        <div className="py-1">
                            {availableLangs.map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => changeLanguage(lang)}
                                    className={`block hover:cursor-pointer px-4 py-2 text-sm w-full text-left ${currentLang === lang ? 'bg-[#0E3A27] text-[#F6F8F5] font-semibold' : 'hover:bg-[#F6F8F5]'
                                        }`}
                                >
                                    <div className='flex flex-row items-center gap-4'>
                                        {lang.toUpperCase() === 'EN' ?
                                            <>
                                                <Image
                                                    src="/images/home/united-kingdom.png"
                                                    width={20}
                                                    height={20}
                                                    alt="Picture of the author"
                                                />
                                            </>
                                            : lang.toUpperCase() === 'SR' ?
                                                <>
                                                    <Image
                                                        src="/images/home/serbia.png"
                                                        width={20}
                                                        height={20}
                                                        alt="Picture of the author"
                                                    />
                                                </> :
                                                <>
                                                    <Image
                                                        src="/images/home/square.png"
                                                        width={20}
                                                        height={20}
                                                        alt="Picture of the author"
                                                    />
                                                </>}
                                        {lang.toUpperCase()}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* Mobile */}
            <div className='md:hidden '>
                <div className="py-1 ">
                    {availableLangs.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => changeLanguage(lang)}
                            className={`block active:bg-[#0E3A27] active:text-[#F6F8F5] hover:cursor-pointer px-4 py-2 text-sm w-full text-left ${currentLang === lang ? 'bg-[#0E3A27] text-[#F6F8F5] font-semibold' : 'hover:bg-[#F6F8F5]'
                                }`}
                        >
                            <div className='flex flex-row items-center gap-4'>
                                {lang.toUpperCase() === 'EN' ?
                                    <>
                                        <Image
                                            src="/images/home/united-kingdom.png"
                                            width={20}
                                            height={20}
                                            alt="Picture of the author"
                                        />
                                    </>
                                    : lang.toUpperCase() === 'SR' ?
                                        <>
                                            <Image
                                                src="/images/home/serbia.png"
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </> :
                                        <>
                                            <Image
                                                src="/images/home/square.png"
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </>}
                                {lang.toUpperCase()}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

        </>
    );
}
