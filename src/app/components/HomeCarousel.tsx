'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';
import { Translation } from '../[lang]/dictionaries';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

interface HomeCarouselProps {
    data: HomeCaraouselData[];
    currentCard: number;
    setCurrentCard: (value: number) => void;
    t: Translation;
}

interface HomeCaraouselData {
    image: string;
    title: string;
    text: string;


}

// const dmSans = DM_Sans({ subsets: ['latin'] })

const HomeCarousel: React.FC<HomeCarouselProps> = ({ currentCard, setCurrentCard, t }) => {

    const params = useParams();
    const lang = params?.lang as string;

    const pathname = usePathname()?.substring(1);
    const [isHovered, setIsHovered] = useState({ item: 0, hover: false });
    const [carouselSize, setCarouselSize] = useState({ width: 1004, height: 496 })
    // const [isOpen, setIsOpen] = useState(false);
    // const [popUpItems, setPopUpItems] = useState({
    //     title: '',
    //     text: ''
    // });
    const carouselRef = useRef<HTMLDivElement | null>(null)
    const carouselSmall = useRef<HTMLDivElement | null>(null)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const [windowWidth, setWindowWidth] = useState(0);

    const cardItems = [
        {
            src: '/images/home/pear.png',
            tittle: t.home.mostWanted.pear.title,
            text: t.home.mostWanted.pear.text,
            url: `/${lang}/seedlings/pear`
        },
        {
            src: '/images/home/apple.png',
            tittle: t.home.mostWanted.apple.title,
            text: t.home.mostWanted.apple.text,
            url: `/${lang}/seedlings/apple`
        },
        {
            src: '/images/home/plum.png',
            tittle: t.home.mostWanted.plum.title,
            text: t.home.mostWanted.plum.text,
            url: `/${lang}/seedlings/plum`
        },
        {
            src: '/images/home/sour-cherry.png',
            tittle: t.home.mostWanted.sourCherry.title,
            text: t.home.mostWanted.sourCherry.text,
            url: `/${lang}/seedlings/sour-cherry`
        },
        {
            src: '/images/home/cherry.png',
            tittle: t.home.mostWanted.cherry.title,
            text: t.home.mostWanted.cherry.text,
            url: `/${lang}/seedlings/sweet-cherry`
        },

    ]

    function animateHover(item: number, hover: boolean) {
        setIsHovered({ item, hover })
    }

    useEffect(() => {

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        if (windowWidth < 480) {
            const elem = carouselSmall.current as unknown as HTMLDivElement;
            const { width, height } = elem.getBoundingClientRect();
            if (carouselSmall.current) {
                setCarouselSize({
                    width,
                    height,
                });
            }
        } else {
            const elem = carouselRef.current as unknown as HTMLDivElement;
            const { width, height } = elem.getBoundingClientRect();
            if (carouselRef.current) {
                setCarouselSize({
                    width,
                    height,
                });
            }
        }
    }, [windowWidth])
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX
    }
    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current
        if (deltaX > 50 && currentCard < cardItems.length) {
            setCurrentCard(currentCard + 1) // swipe left
        } else if (deltaX < -50 && currentCard > 0) {
            setCurrentCard(currentCard - 1) // swipe right
        }
    }

    return (
        <div className='max-w-[1004px] max-lsw:w-[95%] w-full lsw:h-[496px] md:h-[538px] h-[500px]'>
            <div className='w-full h-full overflow-visible relative'>
                {/* Desktop */}
                <div
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        left: windowWidth < 1080 ? -currentCard * (carouselSize.width + 28) : -currentCard * (carouselSize.width + 67)
                    }}
                    className={`left-[${-currentCard * carouselSize.width + 32}px] left-[50px] w-full h-full absolute flex gap-[67px] max-lsw:gap-[29px] transition-all duration-300 max-xsw:hidden py-4`}>
                    {
                        cardItems.map((i, index) => {
                            return (
                                <Link href={i.url} key={index} className={` hover:scale-101 transform  duration-300 relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl  ${index === 1 ? 'bg-[#E0F1E2] text-[#245E1D]' : index === 2 ? 'bg-[#f0deec] text-[#330427]' : index === 3 ? 'bg-[#ffd2d5] text-[#9E030C]' : index === 4 ? 'bg-[#ffe5eb] text-[#D20A2E]' : 'bg-[#FFFBE4] text-[#FF910A]'}  hover:cursor-pointer shadow-md hover:shadow-lg transition `}
                                    onMouseEnter={() => animateHover(index, true)}
                                    onMouseLeave={() => animateHover(index, false)}>
                                    <div className='w-[370px] max-md:w-[200px] '>
                                        <div className='pt-4 pl-8'>
                                            <h1 className={`text-6xl max-md:text-4xl font-heading`}>{i.tittle}</h1>

                                        </div>
                                        <Image
                                            className='absolute bottom-0 left-6 max-md:hidden max-lsw: '
                                            alt={`carousel-image-${0}`}
                                            width={300}
                                            height={300}
                                            src={i.src}
                                        />
                                        <Image
                                            className='absolute bottom-0 md:hidden max-lsw: '
                                            alt={`carousel-image-${0}`}
                                            width={150}
                                            height={300}
                                            src={i.src}
                                        />

                                    </div>
                                    <div className=' flex-1 flex flex-col justify-end pb-8 pr-8'>
                                        <div className='flex flex-col max-lsw:flex-col max-lsw:items-baseline gap-4 items-baseline '>
                                            <div className='flex-1 line-clamp-6'>
                                                <p className='max-lsw:text-[20px]  max-md:text-[18px] text-[24px]'>{i.text}</p>
                                            </div>
                                            <div className='flex flex-row gap-4 items-center '>
                                                <BsArrowRightCircle className={` ${isHovered.item === index && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={50} />
                                                <span className='font-black'>{t.home.mostWanted.more}</span>
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )
                        })

                    }

                    <Link href={`/${lang}/seedlings`} className={`hover:scale-101 transform  duration-300 relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl  bg-primary text-secondary-light  hover:cursor-pointer shadow-md hover:shadow-lg transition `}
                        onMouseEnter={() => animateHover(5, true)}
                        onMouseLeave={() => animateHover(5, false)}>
                        <div className='w-[500px] '>
                            <div className='pt-4 pl-8'>
                                <h1 className={`text-6xl max-md:text-4xl font-heading`}>{t.home.mostWanted.allProducts.title}</h1>

                            </div>
                        </div>
                        <div
                            className='flex-1 flex flex-col justify-end pb-8 pr-8 group'
                        >
                            <div className='flex flex-col max-lsw:flex-col max-lsw:items-baseline gap-4 items-end'>
                                <div className='flex flex-row gap-4 items-center max-lsw:items-baseline'>
                                    <BsArrowRightCircle
                                        className={`transform  transition-all duration-300 ease-out 
                                        ${isHovered.item === 5 && isHovered.hover ? '-translate-x-[0px] -rotate-45 ' : pathname === 'ru' ? 'translate-x-[250px]' : pathname === 'sr' ? 'translate-x-[130px]' : 'translate-x-[110px]'}`}
                                        size={50}
                                    />
                                    <span
                                        className={`font-black text-[30px] transition-all duration-300 ease-out 
                                        ${isHovered.item === 5 && isHovered.hover ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
                                    >
                                        {t.home.mostWanted.allProducts.text}
                                    </span>
                                </div>
                            </div>
                        </div>


                    </Link>
                </div>
                {/* Mobile */}
                <div
                    ref={carouselSmall}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        left: -currentCard * (carouselSize.width + 16)
                    }}
                    className='w-full h-full absolute flex gap-[16px] transition-all  duration-300  xsw:hidden'>
                    {
                        cardItems.map((i, index) => {
                            return (
                                <Link href={i.url} key={index} className={`relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl ${index === 1 ? 'bg-[#E0F1E2] text-[#245E1D]' : index === 2 ? 'bg-[#f0deec] text-[#330427]' : index === 3 ? 'bg-[#ffd2d5] text-[#9E030C]' : index === 4 ? 'bg-[#ffe5eb] text-[#D20A2E]' : 'bg-[#FFFBE4] text-[#FF910A]'} hover:cursor-pointer`}
                                    onMouseEnter={() => animateHover(index, true)}
                                    onMouseLeave={() => animateHover(index, false)}>
                                    <div className='w-full   flex flex-col justify-between'>
                                        <div className='px-4'>
                                            <div className='pt-4 '>
                                                <h1 className={`text-4xl font-bold font-heading`}>{i.tittle}</h1>

                                            </div>

                                            <div className=' flex-1 flex flex-col justify-end  py-4'>
                                                <div className='flex flex-col w-full gap-4'>
                                                    <div className='flex-1 line-clamp-6'>
                                                        <p className='text-[18px] '>{i.text}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-between items-end pl-4'>

                                            <Image
                                                className='max-lsw: max-lsw: '
                                                alt={`carousel-image-${0}`}
                                                width={170}
                                                height={300}
                                                src={i.src}
                                            />
                                            <div className='flex flex-col items-center p-4'>
                                                <BsArrowRightCircle className={` ${isHovered.item === index && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={35} />
                                                <span className='text-[16px]'>{t.home.mostWanted.more}</span>
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )
                        }
                        )
                    }

                    <Link href={`/${lang}/seedlings`} className={`relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl  bg-primary text-secondary-light hover:cursor-pointer`}
                        onMouseEnter={() => animateHover(5, true)}
                        onMouseLeave={() => animateHover(5, false)}>
                        <div className='w-full   flex flex-col justify-between'>
                            <div className='px-4'>
                                <div className='pt-4 '>
                                    <h1 className={`text-4xl font-bold font-heading`}>{t.home.mostWanted.allProducts.title}</h1>

                                </div>
                            </div>
                            <div className='flex flex-row justify-between items-end pl-4'>

                                <div className='flex flex-row gap-2 items-center pb-4'>
                                    <BsArrowRightCircle className={` ${isHovered.item === 5 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={35} />
                                    <span className='text-[16px]'>{t.home.mostWanted.more}</span>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>


            </div>
        </div >
    )
}

export default HomeCarousel