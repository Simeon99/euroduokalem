'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';
import { Translation } from '../[lang]/dictionaries';
import { usePathname } from 'next/navigation';

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

    const pathname = usePathname().substring(1);
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
            text: t.home.mostWanted.pear.text
        },
        {
            src: '/images/home/apple.png',
            tittle: t.home.mostWanted.apple.title,
            text: t.home.mostWanted.apple.text
        },
        {
            src: '/images/home/plum.png',
            tittle: t.home.mostWanted.plum.title,
            text: t.home.mostWanted.plum.text
        },
        {
            src: '/images/home/sour-cherry.png',
            tittle: t.home.mostWanted.sourCherry.title,
            text: t.home.mostWanted.sourCherry.text
        },
        {
            src: '/images/home/cherry.png',
            tittle: t.home.mostWanted.cherry.title,
            text: t.home.mostWanted.cherry.text
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
        if (windowWidth < 768) {
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


        console.log("ww", windowWidth)
    }, [windowWidth])
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX
    }
    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current
        if (deltaX > 50 && currentCard < cardItems.length - 1) {
            setCurrentCard(currentCard + 1) // swipe left
        } else if (deltaX < -50 && currentCard > 0) {
            setCurrentCard(currentCard - 1) // swipe right
        }
    }

    return (
        <div className='max-w-[1004px] max-lsw:w-[95%] w-full lsw:h-[496px] md:h-[538px] h-[500px]'>
            <div className='w-full h-full overflow-visible relative'>
                {/* <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={popUpItems?.title} text={popUpItems?.text} /> */}
                {/* Desktop */}
                <div
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        left: windowWidth < 1080 ? -currentCard * (carouselSize.width + 32) : -currentCard * (carouselSize.width + 67)
                    }}
                    className={`left-[${-currentCard * carouselSize.width + 32}px] left-[50px] w-full h-full absolute flex gap-[67px] max-lsw:gap-[29px] transition-all duration-300 max-xsw:hidden py-4`}>
                    {
                        cardItems.map((i, index) => {
                            return (
                                <div key={index} className={` relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl  ${index === 1 ? 'bg-[#E0F1E2] text-[#245E1D]' : index === 2 ? 'bg-[#f0deec] text-[#330427]' : index === 3 ? 'bg-[#ffd2d5] text-[#9E030C]' : index === 4 ? 'bg-[#ffe5eb] text-[#D20A2E]' : 'bg-[#FFFBE4] text-[#FF910A]'}  hover:cursor-pointer shadow-md hover:shadow-lg transition `}
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
                                            <div className='flex flex-row gap-4 items-center max-lsw:items-baseline '>
                                                <BsArrowRightCircle className={` ${isHovered.item === index && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={50} />
                                                <span className='font-black'>{t.home.mostWanted.more}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })

                    }

                    <div className={`hover:scale-101 transform  duration-300 relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl  bg-primary text-secondary-light  hover:cursor-pointer shadow-md hover:shadow-lg transition `}
                        onMouseEnter={() => animateHover(5, true)}
                        onMouseLeave={() => animateHover(5, false)}>
                        <div className='w-[500px] '>
                            <div className='pt-4 pl-8'>
                                <h1 className={`text-6xl max-md:text-4xl font-heading`}>{t.home.mostWanted.allProducts.title}</h1>

                            </div>
                            {/* <Image
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
                            /> */}

                        </div>
                        <div
                            className='flex-1 flex flex-col justify-end pb-8 pr-8 group'
                        >
                            <div className='flex flex-col max-lsw:flex-col max-lsw:items-baseline gap-4 items-end'>
                                <div className='flex flex-row gap-4 items-center max-lsw:items-baseline'>
                                    <BsArrowRightCircle
                                        className={`transform  transition-all duration-300 ease-out 
                                        ${isHovered.item === 5 && isHovered.hover ? '-translate-x-[0px] -rotate-45 ' : pathname === 'ru' ? 'translate-x-[250px]': pathname === 'sr' ? 'translate-x-[130px]': 'translate-x-[110px]'}`}
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


                    </div>

                    {/* <div className='relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl bg-[#FFFBE4] text-[#FF910A] hover:cursor-pointer shadow-md hover:shadow-lg transition '
                        onMouseEnter={() => animateHover(0, true)}
                        onMouseLeave={() => animateHover(0, false)}>
                        <div className='w-[370px] max-md:w-[200px] '>
                            <div className='pt-4 pl-8'>
                                <h1 className={`text-6xl max-md:text-4xl font-heading`}>{cardItems[0].tittle}</h1>

                            </div>
                            <Image
                                className='absolute bottom-0 max-md:hidden max-lsw: '
                                alt={`carousel-image-${0}`}
                                width={300}
                                height={300}
                                src={cardItems[0].src}
                            />
                            <Image
                                className='absolute bottom-0 md:hidden max-lsw: '
                                alt={`carousel-image-${0}`}
                                width={150}
                                height={300}
                                src={cardItems[0].src}
                            />

                        </div>
                        <div className=' flex-1 flex flex-col justify-end pb-8 pr-8'>
                            <div className='flex flex-col max-lsw:flex-col max-lsw:items-baseline gap-4 items-baseline '>
                                <div className='flex-1 line-clamp-6'>
                                    <p className='max-lsw:text-[20px]  max-md:text-[18px] text-[24px]'>{cardItems[0].text}</p>
                                </div>
                                <div className='flex flex-row gap-4 items-center max-lsw:items-baseline '>
                                    <BsArrowRightCircle className={` ${isHovered.item === 0 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={50} />
                                    <span className='font-black'>Saznaj više</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl bg-[#E0F1E2] text-[#245E1D] hover:cursor-pointer shadow-md hover:shadow-lg transition '
                        onMouseEnter={() => animateHover(1, true)}
                        onMouseLeave={() => animateHover(1, false)}>
                        <div className='w-[370px] '>
                            <div className='pt-4 pl-8'>
                                <h1 className={`text-6xl font-heading`}>{cardItems[1].tittle}</h1>

                            </div>
                            <Image
                                className='absolute bottom-0 max-lsw: max-lsw: '
                                alt={`carousel-image-${0}`}
                                width={300}
                                height={300}
                                src={cardItems[1].src}
                            />

                        </div>
                        <div className=' flex-1 flex flex-col justify-end pb-8 pr-8'>
                            <div className='flex flex-row gap-4 items-end'>
                                <div className='flex-1 '>
                                    <p className='text-[24px] max-md:text-[20px] '>{cardItems[1].text}</p>
                                </div>
                                <div className='flex flex-col items-center '>
                                    <BsArrowRightCircle className={` ${isHovered.item === 1 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={50} />
                                    <span className='font-black'>Saznaj više</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='relative shrink-0 w-full h-full rounded-2xl bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute bottom-0 max-lsw: max-lsw: '
                            alt={`carousel-image-${0}`}
                            width={300}
                            height={300}
                            src={cardItems[0].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] `}>{cardItems[0].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[0].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(0, true)}
                                onMouseLeave={() => animateHover(0, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[0].tittle,
                            //         text: cardItems[0].text
                            //     }), setIsOpen(true)
                            // }}
                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 0 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative shrink-0 w-full h-full rounded-2xl bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute bottom-0 max-lsw: max-lsw: '
                            alt={`carousel-image-${0}`}
                            width={300}
                            height={300}
                            src={cardItems[0].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] `}>{cardItems[0].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[0].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(0, true)}
                                onMouseLeave={() => animateHover(0, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[0].tittle,
                            //         text: cardItems[0].text
                            //     }), setIsOpen(true)
                            // }}
                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 0 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative shrink-0 w-full h-full rounded-2xl bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute bottom-0 max-lsw: max-lsw: '
                            alt={`carousel-image-${0}`}
                            width={300}
                            height={300}
                            src={cardItems[0].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] `}>{cardItems[0].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[0].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(0, true)}
                                onMouseLeave={() => animateHover(0, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[0].tittle,
                            //         text: cardItems[0].text
                            //     }), setIsOpen(true)
                            // }}
                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 0 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div> */}





                    {/* <div className='relative shrink-0 w-full h-full rounded-2xl bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute bottom-0 max-lsw: max-lsw: '
                            alt={`carousel-image-${0}`}
                            width={300}
                            height={300}
                            src={cardItems[0].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] ${dmSans.className}`}>{cardItems[0].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[0].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(0, true)}
                                onMouseLeave={() => animateHover(0, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[0].tittle,
                            //         text: cardItems[0].text
                            //     }), setIsOpen(true)
                            // }}
                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 0 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='relative shrink-0 w-full h-full bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute -left-[150px] -top-[80px] max-[951px]:max-w-[550px] max-[951px]:top-[0px] max-[951px]:-left-[115px]'
                            alt={`carousel-image-${0}`}
                            width={700}
                            height={450}
                            src={cardItems[1].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] ${dmSans.className}`}>{cardItems[1].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[1].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(1, true)}
                                onMouseLeave={() => animateHover(1, false)}
                                // onClick={() => {
                                //     setPopUpItems({
                                //         title: cardItems[1].tittle,
                                //         text: cardItems[1].text
                                //     }), setIsOpen(true)
                                // }}
                                >
                                <BsArrowRightCircle className={` ${isHovered.item === 1 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative shrink-0 w-full h-full bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute -left-[60px] top-[0px] max-[950px]:-left-[80px] max-[900px]:max-w-[500px] max-[900px]:top-[40px]'
                            alt={`carousel-image-${0}`}
                            width={600}
                            height={350}
                            src={cardItems[2].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] ${dmSans.className}`}>{cardItems[2].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[2].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(2, true)}
                                onMouseLeave={() => animateHover(2, false)}
                                // onClick={() => {
                                //     setPopUpItems({
                                //         title: cardItems[2].tittle,
                                //         text: cardItems[2].text
                                //     }), setIsOpen(true)
                                // }}
                                >
                                <BsArrowRightCircle className={` ${isHovered.item === 2 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative shrink-0 w-full h-full bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute  -left-[100px] top-[25px] max-[900px]:max-w-[500px] max-[900px]:top-[35px]'
                            alt={`carousel-image-${0}`}
                            width={550}
                            height={350}
                            src={cardItems[3].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] ${dmSans.className}`}>{cardItems[3].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[3].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(3, true)}
                                onMouseLeave={() => animateHover(3, false)}
                                // onClick={() => {
                                //     setPopUpItems({
                                //         title: cardItems[3].tittle,
                                //         text: cardItems[3].text
                                //     }), setIsOpen(true)
                                // }}
                                >
                                <BsArrowRightCircle className={`${isHovered.item === 3 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative shrink-0 w-full h-full bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute  -left-[50px] top-[10px]  max-[900px]:max-w-[480px] max-[900px]:top-[50px]'
                            alt={`carousel-image-${0}`}
                            width={550}
                            height={350}
                            src={cardItems[4].src}
                        />
                        <div className='absolute max-lsw:pr-8 left-1/2 transform flex flex-col justify-between h-full pt-[65px] pb-[65px] max-w-[392px]'>
                            <div className='flex flex-col'>
                                <h1 className={`text-[48px] ${dmSans.className}`}>{cardItems[4].tittle}</h1>
                                <p className='text-[20px] '>{cardItems[4].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(4, true)}
                                onMouseLeave={() => animateHover(4, false)}
                                // onClick={() => {
                                //     setPopUpItems({
                                //         title: cardItems[4].tittle,
                                //         text: cardItems[4].text
                                //     }), setIsOpen(true)
                                // }}
                                
                                >
                                <BsArrowRightCircle className={` ${isHovered.item === 4 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* Mobile */}
                <div
                    ref={carouselSmall}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        left: -currentCard * (carouselSize.width + 29)
                    }}
                    className='w-full h-full absolute flex gap-[29px] transition-all  duration-300  xsw:hidden'>
                    {
                        cardItems.map((i, index) => {
                            return (
                                <div key={index} className={`relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl ${index === 1 ? 'bg-[#E0F1E2] text-[#245E1D]' : index === 2 ? 'bg-[#f0deec] text-[#330427]' : index === 3 ? 'bg-[#ffd2d5] text-[#9E030C]' : index === 4 ? 'bg-[#ffe5eb] text-[#D20A2E]' : 'bg-[#FFFBE4] text-[#FF910A]'} hover:cursor-pointer`}
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

                                </div>
                            )
                        }
                        )
                    }

                    <div className={`relative flex flex-row justify-between shrink-0 w-full h-full rounded-2xl  bg-primary text-secondary-light hover:cursor-pointer`}
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

                    </div>


                    {/* <div className='relative  shrink-0 w-full h-full flex bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute overflow-visible left-1/2 transform -translate-x-1/2 -top-[150px]   min-w-[440px]'
                            alt={`carousel-image-${0}`}
                            width={420}
                            height={420}
                            src={cardItems[1].src}
                        />
                        <div className='absolute p-[24px]  flex flex-col justify-between h-full pt-[65px] pb-[42px] max-w-[392px]'>

                            <div className='flex flex-col mt-[100px]'>
                                <Image
                                    alt={`1`}
                                    width={46}
                                    height={46}
                                    src={'/Group 11.svg'}
                                />
                                <h1 className={`text-[35px] leading-none mt-[35px]`}>{cardItems[1].tittle}</h1>
                                <p className='text-[16px] mt-[25px]'>{cardItems[1].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(1, true)}
                                onMouseLeave={() => animateHover(1, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[1].tittle,
                            //         text: cardItems[1].text
                            //     }), setIsOpen(true)
                            // }}

                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 1 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative  shrink-0 w-full h-full flex bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute overflow-visible left-1/2 transform -translate-x-1/2 -top-[110px]   min-w-[350px]'
                            alt={`carousel-image-${0}`}
                            width={350}
                            height={350}
                            src={cardItems[2].src}
                        />
                        <div className='absolute p-[24px]  flex flex-col justify-between h-full pt-[65px] pb-[42px] max-w-[392px]'>

                            <div className='flex flex-col mt-[100px]'>
                                <Image
                                    alt={`1`}
                                    width={46}
                                    height={46}
                                    src={'/Group 12.svg'}
                                />
                                <h1 className={`text-[35px] leading-none mt-[35px] `}>{cardItems[2].tittle}</h1>
                                <p className='text-[16px] mt-[25px]'>{cardItems[2].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(2, true)}
                                onMouseLeave={() => animateHover(2, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[2].tittle,
                            //         text: cardItems[2].text
                            //     }), setIsOpen(true)
                            // }}

                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 2 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative  shrink-0 w-full h-full flex bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute overflow-visible left-1/2 transform -translate-x-1/2 -top-[110px]   min-w-[350px]'
                            alt={`carousel-image-${0}`}
                            width={350}
                            height={350}
                            src={cardItems[3].src}
                        />
                        <div className='absolute p-[24px]  flex flex-col justify-between h-full pt-[65px] pb-[42px] max-w-[392px]'>

                            <div className='flex flex-col mt-[100px]'>
                                <Image
                                    alt={`1`}
                                    width={46}
                                    height={46}
                                    src={'/Group 13.svg'}
                                />
                                <h1 className={`text-[35px] leading-none mt-[35px]`}>{cardItems[3].tittle}</h1>
                                <p className='text-[16px] mt-[25px]'>{cardItems[3].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(3, true)}
                                onMouseLeave={() => animateHover(3, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[3].tittle,
                            //         text: cardItems[3].text
                            //     }), setIsOpen(true)
                            // }}

                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 3 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative  shrink-0 w-full h-full flex bg-[#2C2C2C] text-white'>
                        <Image
                            className='absolute overflow-visible left-1/2 transform -translate-x-1/2 -top-[110px]   min-w-[350px]'
                            alt={`carousel-image-${0}`}
                            width={350}
                            height={350}
                            src={cardItems[4].src}
                        />
                        <div className='absolute p-[24px]  flex flex-col justify-between h-full pt-[65px] pb-[42px] max-w-[392px]'>

                            <div className='flex flex-col mt-[100px]'>
                                <Image
                                    alt={`1`}
                                    width={46}
                                    height={46}
                                    src={'/Group 14.svg'}
                                />
                                <h1 className={`text-[35px] leading-none mt-[35px]`}>{cardItems[4].tittle}</h1>
                                <p className='text-[16px] mt-[25px]'>{cardItems[4].text}</p>
                            </div>
                            <div className='flex flex-row items-center hover:cursor-pointer gap-[14px]'
                                onMouseEnter={() => animateHover(4, true)}
                                onMouseLeave={() => animateHover(4, false)}
                            // onClick={() => {
                            //     setPopUpItems({
                            //         title: cardItems[4].tittle,
                            //         text: cardItems[4].text
                            //     }), setIsOpen(true)
                            // }}

                            >
                                <BsArrowRightCircle className={` ${isHovered.item === 4 && isHovered.hover ? '-rotate-45 transition' : ''} duration-300 ease-out`} size={36} />
                                <span>View more</span>
                            </div>
                        </div>
                    </div> */}
                </div>


            </div>
        </div >
    )
}

export default HomeCarousel