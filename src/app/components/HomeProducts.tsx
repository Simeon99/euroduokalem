'use client'

import React, { useState } from 'react'

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import HomeCarousel from './HomeCarousel';
import { Translation } from '../[lang]/dictionaries';
import { formatTextWithBreaks } from './ui/SplitText';

const HomeProducts = ({ t }: { t: Translation }) => {

  const [totapPage] = useState(6);
  const [currentCard, setCurrentCard] = useState(0);

  const DATA = [
    { image: "/phone copy@2x.png", title: "", text: "" },
    { image: "/magnifying_glass_2 copy@2x.png", title: "", text: "" },
    { image: "/phone copy@2x.png", title: "", text: "" }]


  return (
    <div className='flex justify-center px-4 '>
      <div className='max-w-screen-sw w-full'>

        <div className='max-w-[1004px]  w-full flex flex-row justify-between items-end'>
          <h2 className='text-[24px] md:text-[40px] leading-none font-heading font-bold text-primary'>
            {/* Orkrijte naše najtraženije <br />
            sadnice voća */}
            {formatTextWithBreaks(t.home.mostWanted.title)}
          </h2>
          <div className='flex-1 flex flex-col max-md:w-full items-end '>

              <div className='flex flex-col items-center gap-[14px]'>
                <span>{currentCard + 1}/{totapPage}</span>
                <div className='flex flex-row gap-[10px]'>
                  <button
                    disabled={currentCard === 0}
                    onClick={() => setCurrentCard(prev => prev - 1)}
                    className={`z-10 hover:cursor-pointer`}
                  >
                    <IoIosArrowBack size={36} className={`text-primary ${currentCard === 0 && 'opacity-50'}`} />
                  </button>
                  <button
                    disabled={currentCard === totapPage-1}
                    onClick={() => setCurrentCard(prev => prev + 1)}
                    className={`z-10 hover:cursor-pointer  ${currentCard === totapPage-1 && 'opacity-50'}`}
                  >
                    <IoIosArrowForward className={`text-primary ${currentCard === totapPage-1 && 'opacity-50'}`} size={36} />
                  </button>
                </div>
            </div>

          </div>
        </div>
        <div className='max-w-screen-sw w-full mt-4'>
          <HomeCarousel data={DATA} t={t} setCurrentCard={setCurrentCard} currentCard={currentCard} />
          {/* <div className={`text-[55px] mt-[195px] max-md:text-[44px] relative `}>
            <div className='flex flex-row justify-between'>
              <h1 className='text-white'>Industries we handle</h1>
              <div className='md:hidden min-w-[61px]'>
                <Image src="/Path 10 whiite.svg" alt='logo' width={61} height={51} />
              </div>
            </div>
            <h1 className='text-white'><span className='text-[#E3A9A9]'>Application Development</span>, <span className='text-[#E3E2A6]'>FinTech</span>,</h1>
            <h1 className='text-white'><span className='text-[#B3E2A2]'>Data analytics</span>, <span className='text-[#8FC7C1]'>Website developmet</span>…</h1>
            <div className='absolute -top-4  left-[590px] max-md:hidden'>
              <Image src="/Path 10 whiite.svg" alt='logo' width={61} height={51} />

            </div>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default HomeProducts