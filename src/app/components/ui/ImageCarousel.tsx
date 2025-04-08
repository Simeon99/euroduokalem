'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Arrow from './Arrow';
import { useEffect, useRef, useState } from 'react';

const images = [
    { src: '/images/home/carousel1.jpg', alt: 'Slide 1' },
    { src: '/images/home/carousel2.jpg', alt: 'Slide 2' },
    { src: '/images/home/carousel3.jpg', alt: 'Slide 4' },
    { src: '/images/home/carousel8.jpg', alt: 'Slide 7' },
];
const SLIDE_DURATION = 4000;

export default function ImageCarousel() {

    const [progressKey, setProgressKey] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    })

    const goNext = () => {
        instanceRef.current?.next();
        setProgressKey(prev => prev + 1);
        startAutoplay();

    };
    const goPrev = () => {
        instanceRef.current?.prev();
        setProgressKey(prev => prev + 1);
        startAutoplay();
    };

    const startAutoplay = () => {
        // Clear existing interval
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
    
        // Start new interval
        intervalRef.current = setInterval(() => {
          instanceRef.current?.next();
          setProgressKey(prev => prev + 1); // Reset bar
        }, SLIDE_DURATION);
      };

    useEffect(() => {
        if (instanceRef.current) {
            startAutoplay();
          }
      
          return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
          };
    }, [instanceRef]);


    return (
        <>
            <div ref={ref} className="relative keen-slider h-[200px] xsw:h-[400px]  md:h-[650px]  rounded-md shadow-md">

                {images.map(({ src, alt }, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide relative transition-opacity duration-1000"
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
                <div className='absolute flex flex-row w-full h-full justify-between items-center px-[16px]'>
                    <Arrow
                        left
                        onClick={goPrev}
                    />

                    <Arrow
                        onClick={goNext}
                    />
                </div>
                <div key={progressKey} className="absolute bottom-0 left-0 w-full h-1 bg-white/30 z-50 overflow-hidden">
                    <div
                        className="h-full bg-white animate-slide-progress"
                        style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                    />
                </div>
            </div>
        </>
    )
}
