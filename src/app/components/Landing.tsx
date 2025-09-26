'use client';

import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { Translation } from '../[lang]/dictionaries';
import { formatTextWithBreaks } from './ui/SplitText';
import Button from './ui/Button';
import { useParams, useRouter } from 'next/navigation';
import { useLoadingBar } from 'react-top-loading-bar';
import { AnimatePresence, motion } from 'framer-motion';
import { CountUp } from './ui/CoundUp';

type Props = {
    t: Translation;
    images?: string[]; // allow override if you want different sets per locale/campaign
    cycleMs?: number;  // default 5000ms
};

const Landing: React.FC<Props> = ({ t, images, cycleMs = 10000 }) => {
    const params = useParams();
    const lang = (params?.lang as string) || 'en';
    const router = useRouter();

    const { start, complete } = useLoadingBar({
        color: 'orange',
        height: 2,
    });

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
                    '/images/home/vinograd.jpeg',
                    '/images/home/landing-image1.jpeg',
                ],
        [images]
    );

    // reduced motion preference
    const [reducedMotion, setReducedMotion] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const m = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(m.matches);
        const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        m.addEventListener?.('change', onChange);
        return () => m.removeEventListener?.('change', onChange);
    }, []);

    // slideshow index
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        if (slides.length <= 1) return;
        const i = setInterval(() => {
            setIdx((p) => (p + 1) % slides.length);
        }, cycleMs);
        return () => clearInterval(i);
    }, [slides.length, cycleMs]);

    const currentSrc = slides[idx];

    return (
        <section
            className="relative w-full h-full -mt-[69.35px] overflow-hidden"
            aria-label="Hero section"
        >
            {/* BACKDROP LAYER: cross-fade + subtle ken burns zoom */}
            <div className="absolute inset-0">
                {/* Preload NEXT image to avoid flash */}
                <Image
                    src={slides[(idx + 1) % slides.length]}
                    alt=""
                    priority
                    fetchPriority="high"
                    width={1}
                    height={1}
                    className="absolute w-0 h-0 opacity-0 pointer-events-none"
                />

                <AnimatePresence  mode="sync">
                    <motion.div
                        key={currentSrc}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} // overlap ensures no white gap
                        transition={{
                            duration: reducedMotion ? 0 : 0.9,
                            ease: 'easeOut',
                        }}
                    >
                        {/* zoom wrapper for Ken Burns */}
                        <motion.div
                            className="absolute inset-0 will-change-transform"
                            initial={{ scale: 1 }}                          // new image starts at 1
                            animate={{ scale: reducedMotion ? 1 : 1.1 }}     // zooms in over the cycle
                            transition={{
                                duration: reducedMotion ? 0 : cycleMs / 1000,
                                ease: 'linear',
                            }}
                        >
                            <Image
                                src={currentSrc}
                                alt="Orchard and seedlings background"
                                fill
                                priority
                                sizes="100vw"
                                // Prevent layout jank & ensure GPU compositing
                                className="object-cover [transform:translateZ(0)] will-change-transform"
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* OVERLAYS: gradient for readability + soft vignette */}
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

                    {/* Stats strip (optional – looks premium). Remove if not needed. */}
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
                                    compact={item.compact}                 // 10000 => 10K
                                    locale={lang === 'sr' ? 'en' : lang === 'ru' ? 'ru-RU' : 'en'}
                                    reducedMotion={reducedMotion}
                                    className="text-xl font-bold sm:text-2xl"
                                    durationMs={700}                       // tweak for faster/slower
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
                            onClick={() => router.push(`/${lang}/contact`)}
                            aria-label={t.home.contactBtn ?? 'Contact'}
                            variant="contact" // 👉 optional, if your Button supports "primary/secondary"
                        />
                    </div>
                </div>
            </div>

            {/* GRAIN (very subtle film texture for “luxury” feel) */}
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
