'use client';

import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { Translation } from '../[lang]/dictionaries';
import { formatTextWithBreaks } from './ui/SplitText';
import Button from './ui/Button';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useLoadingBar } from 'react-top-loading-bar';
import { CountUp } from './ui/CoundUp';
import { useNavbar } from '../context/NavbarContext';

type Props = {
    t: Translation;
    images?: string[];
    cycleMs?: number; // default 10000ms
};

const Landing: React.FC<Props> = ({ t, images, cycleMs = 10000 }) => {
    const params = useParams();
    const lang = (params?.lang as string) || 'en';
    const router = useRouter();
    const { scrollTo } = useNavbar();
    const pathname = usePathname();

    const { start, complete } = useLoadingBar({ color: 'orange', height: 2 });

    const handleClick = () => {
        start();
        setTimeout(() => {
            router.push(`/${lang}/seedlings`);
            complete();
        }, 300);
    };

    // finalize image set
    const slides = useMemo(
        () =>
            images && images.length > 0
                ? images
                : [
                    '/images/home/landing-photo.jpg',
                    '/images/home/vinograd-landing.jpg',
                    '/images/home/landing-image1.jpeg',
                ],
        [images]
    );

    // slideshow index (like HomeMessage)
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (slides.length <= 1) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, cycleMs);
        return () => clearInterval(id);
    }, [slides.length, cycleMs]);

    const handleScroll = (section: string) => {
        if (pathname === `/${lang}`) {
            scrollTo(section);
        } else {
            router.push(`/?scrollTo=${section}`);
        }
    };

    return (
        <section
            className="relative w-full h-full -mt-[69.35px] overflow-hidden"
            aria-label="Hero section"
        >
            {/* BACKDROP: stack all images and cross-fade like in HomeMessage */}
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    {slides.map((src, i) => (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${i === index ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <Image
                                src={src}
                                alt=""
                                fill
                                sizes="(max-width: 640px) 120vw, (max-width: 1024px) 110vw, 100vw"
                                quality={95}
                                priority={i === 0 || i === index}
                                {...(i === index ? { loading: 'eager', fetchPriority: 'high' } : {})}
                                className={`object-cover transform transition-transform duration-[10000ms] ease-linear
    ${i === index ? 'scale-105' : 'scale-100'}`}
                                style={{ willChange: 'transform' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* OVERLAYS */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 [box-shadow:_inset_0_0_200px_rgba(0,0,0,0.5)]"
            />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto flex h-full max-w-screen-2xl items-end">
                <div className="w-full px-6 pb-10 sm:pb-14 md:pb-16 lg:pb-20 flex flex-col items-end">
                    <h1
                        className="font-heading tracking-tight text-right text-secondary-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]
                       text-[clamp(32px,6vw,72px)] leading-[1.05]"
                    >
                        {formatTextWithBreaks(t.home.title)}
                    </h1>

                    <div className=" pt-4 z-20">
                        <div
                            className="rounded-2xl border border-white/25 px-5 py-3 backdrop-blur-md shadow-lg"
                            style={{ backgroundColor: "rgba(216, 178, 96, 0.28)" }} // #d8b260 w/ opacity
                        >
                            <p className="text-white text-lg leading-tight">
                                <span className='font-bold text-[#d8b260] '><b>{formatTextWithBreaks(t.home.anniversary)}</b></span> {formatTextWithBreaks(t.home.anniversaryMess)}
                            </p>
                        </div>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-5 grid w-full max-w-xl grid-cols-3 gap-2 text-center text-white/90">
                        {[
                            { k: t.home?.stats?.varieties ?? 'Varieties', to: 150, suffix: '+' },
                            { k: t.home?.stats?.trees ?? 'Trees shipped', to: 4000000, suffix: '+', compact: true },
                            { k: t.home?.stats?.countries ?? 'Countries', to: 20, suffix: '+' },
                        ].map((item) => (
                            <div key={item.k} className="rounded-xl bg-black/30 backdrop-blur-[2px] p-3">
                                <CountUp
                                    to={item.to}
                                    suffix={item.suffix}
                                    compact={item.compact}
                                    locale={lang === 'sr' ? 'sr-RS' : lang === 'ru' ? 'ru-RU' : 'en'}
                                    className="text-xl font-bold sm:text-2xl"
                                    durationMs={700}
                                />
                                <div className="text-[13px] sm:text-sm">{item.k}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-start gap-4">
                        <Button
                            label={t.home.titleBtn}
                            onClick={handleClick}
                            aria-label={t.home.titleBtn}
                        />
                        <Button
                            label={t.home.contactBtn ?? 'Contact'}
                            onClick={() => {
                                handleScroll('contact');
                            }}
                            aria-label={t.home.contactBtn ?? 'Contact'}
                            variant="contact"
                        />
                    </div>
                </div>
            </div>

            {/* GRAIN */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27300%27 height=%27300%27 viewBox=%270 0 300 300%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E%3C/filter%3E%3Crect width=%27300%27 height=%27300%27 filter=%27url(%23n)%27 opacity=%270.35%27/%3E%3C/svg%3E")',
                    backgroundSize: '300px 300px',
                }}
            />
        </section>
    );
};

export default Landing;
