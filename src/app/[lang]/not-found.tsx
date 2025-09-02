'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale, Translation } from './dictionaries';
import { useEffect, useState } from 'react';


export default function NotFound() {

  const params = useParams() as { lang?: Locale };

  const [t, setT] = useState<Translation | null>(null);

  useEffect(() => {
    if (!params?.lang) return;

    import(`../../../public/locales/${params.lang}.json`)
      .then((mod) => setT(mod.default))
      .catch(() => setT(null));
  }, [params?.lang]);

  const homeHref = `/`;
  const catalogHref = `/seedlings`;

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden px-6 py-20">
      {/* FULL-SCREEN BACKGROUND SVG */}
      <div className="absolute inset-0 -z-20">
        {/* soft gradient blobs on top of bg */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-lime-300 to-emerald-400 opacity-35 blur-3xl animate-pulse-slow" />
          <div className="absolute right-[-10rem] bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-amber-200 to-rose-300 opacity-30 blur-3xl animate-pulse-slower" />
        </div>
      </div>

      {/* FLOATING FRUIT */}
      <Fruit x="6%" y="16%" delay="0s" emoji="🍎" />
      <Fruit x="88%" y="22%" delay="0.25s" emoji="🍐" />
      <Fruit x="12%" y="70%" delay="0.5s" emoji="🍒" />
      <Fruit x="82%" y="74%" delay="0.75s" emoji="🍇" />
      <Fruit x="50%" y="86%" delay="1s" emoji="🍑" />

      {/* CONTENT: 2-COLUMN LAYOUT */}
      <section className="relative z-10 mx-auto w-full max-w-6xl">
        {/* animated edge glow */}
        <div className="absolute -inset-[2px] rounded-3xl bg-[conic-gradient(var(--tw-gradient-stops))] from-emerald-400 via-lime-400 to-amber-400 opacity-40 blur-[6px] animate-revolve pointer-events-none" />
        <div className="relative rounded-3xl   p-0  md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* LEFT: 404 + headline */}
            <header className="text-left">
              <div className="leading-none">
                <span className="block font-heading text-7xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-[#0E3A27] via-[#027d09] to-[#027d09] bg-clip-text text-transparent">
                  404
                </span>
              </div>
              <h1 className="mt-2 font-heading text-4xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-[#0E3A27] via-[#027d09] to-amber-500 bg-clip-text text-transparent">
               {t?.notFoundPage.title}
              </h1>
              <p className="mt-4 max-w-prose text-lg text-gray-700">
                {t?.notFoundPage.text}
              </p>
            </header>

            {/* RIGHT: actions + quick links */}
            <div className="flex flex-col items-start md:items-end gap-6">
              <div className="flex flex-col items-start md:items-end gap-6">
                <div className="flex flex-wrap items-center justify-start md:justify-end gap-4">
                  {/* Home button */}
                  <Link
                    href={homeHref}
                    className="inline-flex items-center gap-2
                              rounded-full border border-emerald-600/30
                              bg-gradient-to-r from-white/90 to-white/70
                              px-6 py-3 text-base font-medium text-[#0E3A27]
                              shadow-md backdrop-blur
                              transition-all duration-300
                              hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-600/50
                              active:scale-95"
                  >
                    <span className="text-lg">🏠</span>
                    <span>{t?.notFoundPage.btnApple}</span>
                  </Link>

                  {/* Catalog button */}
                  <Link
                    href={catalogHref}
                    className="inline-flex items-center gap-2
                              rounded-full
                              bg-gradient-to-r from-[#269163] to-[#0E3A27]
                              px-7 py-3 text-base font-semibold text-white
                              shadow-md
                              transition-all duration-300
                              hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>{t?.notFoundPage.btnSeedlings}</span>
                    <span className="text-lg">🌱</span>
                  </Link>
                </div>

                {/* Quick links */}
                <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 md:w-auto">
                  <Chip href="/seedlings/apple" label={t?.notFoundPage.btnSeedlings || 'Apples'} emoji="🍎" />
                  <Chip href="/seedlings/pear" label={t?.notFoundPage.btnSeedlings || 'Pears'} emoji="🍐" />
                  <Chip href="/seedlings/sour-cherry" label={t?.notFoundPage.btnSeedlings || 'Cherries'} emoji="🍒" />
                </div>
              </div>

              <p className="text-sm text-neutral-500 md:text-right">
                {t?.notFoundPage.tip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HILLS */}
      <Hills />
    </main>
  );
}

/* ——— UI bits ——— */

function Chip({ href, label, emoji }: { href: string; label: string; emoji: string }) {
  return (
    <Link
      href={href}
      className="
        group inline-flex items-center gap-2
        rounded-full border border-transparent
        bg-white/70 px-5 py-2 text-sm font-medium
        shadow-sm backdrop-blur-sm
        transition-all duration-300
        hover:shadow-md hover:bg-white
        active:scale-95
      "
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-lime-500/30 text-lg transition-transform group-hover:scale-110">
        {emoji}
      </span>
      <span className="text-neutral-700">{label}</span>
    </Link>
  );
}

function Fruit({
  x, y, delay, emoji,
}: { x: string; y: string; delay?: string; emoji: string }) {
  return (
    <span
      className="pointer-events-none absolute -z-10 text-4xl opacity-70 drop-shadow-sm animate-float motion-reduce:animate-none"
      style={{ left: x, top: y, animationDelay: delay }}
      aria-hidden
    >
      {emoji}
    </span>
  );
}

function Hills() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-56 overflow-hidden">
      <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="h-full w-full">
        <path
          fill="#14532d"
          d="M0,120 C300,60 900,180 1200,100 L1200,200 L0,200 Z"
        >
          <animate attributeName="d" dur="14s" repeatCount="indefinite" values="
            M0,120 C300,60 900,180 1200,100 L1200,200 L0,200 Z;
            M0,130 C300,80 900,160 1200,110 L1200,200 L0,200 Z;
            M0,110 C300,70 900,170 1200,120 L1200,200 L0,200 Z;
            M0,120 C300,60 900,180 1200,100 L1200,200 L0,200 Z" />
        </path>

        <path
          fill="#0E3A27"
          d="M0,140 C400,90 800,170 1200,130 L1200,200 L0,200 Z"
        >
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
            M0,140 C400,90 800,170 1200,130 L1200,200 L0,200 Z;
            M0,135 C400,100 800,160 1200,140 L1200,200 L0,200 Z;
            M0,145 C400,80 800,180 1200,120 L1200,200 L0,200 Z;
            M0,140 C400,90 800,170 1200,130 L1200,200 L0,200 Z" />
        </path>
      </svg>
    </div>
  );
}
