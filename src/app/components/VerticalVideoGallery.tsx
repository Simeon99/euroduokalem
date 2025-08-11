"use client";

import VerticalYouTube from "./VerticalYouTube";
import { useState } from "react";
import Image from "next/image";

export type VideoItem = { id: string; title: string; poster?: string };

export default function VerticalVideoGallery({
    videos = [
        { id: "YOUR_VIDEO_ID_1", title: "From Seedling to Juicy Pear", poster: '/images/about/thubnail1.png' },
        { id: "YOUR_VIDEO_ID_2", title: "Blooming Orchard Walkthrough", poster: '/images/about/thubnail2.png' },
    ]
}: {
    videos?: VideoItem[];
    viewAllHref?: string;
}) {
    const [active, setActive] = useState(0);
    const current = videos[active];

    return (
        <section className="w-full flex justify-center max-[1441px]:px-4">
            {/* two-tone bg */}
            <div className="relative  max-w-screen-sw  w-full  py-16">
                <div className="rounded-3xl  bg-secondary backdrop-blur-xl p-6 ring-1 ring-white/10 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-center">
                        {/* LEFT: heading + rail + CTA */}
                        <div className="flex flex-col gap-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Watch Our Videos</h2>
                                <p className="mt-1 text-black/70">Hand-grafting, orchards in bloom, and export packing.</p>
                            </div>

                            {/* thumbnail rail */}
                            <div className="flex gap-4 overflow-x-auto pb-1">
                                {videos.map((v, i) => {
                                    const poster = v.poster || `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
                                    const isActive = i === active;
                                    return (
                                        <button
                                            key={(v.poster || v.id) + i}
                                            onClick={() => setActive(i)}
                                            className={`hadow transform-gpu duration-300 ease-out hover:scale-[1.03] relative shrink-0 hover:cursor-pointer  w-[140px] aspect-[9/16] rounded-2xl overflow-hidden ring-1 transition-all
                        ${isActive ? "ring-white/70" : "ring-white/20 hover:ring-white/40"}`}
                                            title={v.title}
                                            aria-pressed={isActive}
                                        >
                                            <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
                                            <Image src={poster} alt={v.title} fill sizes="140px" className="object-cover" />
                                            <div className="absolute inset-0 bg-black/20" />
                                            <span className="absolute bottom-2 left-2 right-2 text-left text-white text-xs leading-tight line-clamp-2 drop-shadow">
                                                {v.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* <div className="pt-2">
                                <Link
                                    href={viewAllHref}
                                    className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0E3A27] px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition"
                                >
                                    View All
                                    <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                                        <path d="M13 5l7 7-7 7M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </Link>
                            </div> */}
                        </div>

                        {/* RIGHT: phone-like player */}
                        <div className="mx-auto w-full max-w-[420px]">
                            <div className="relative rounded-[40px] bg-secondary shadow-2xl p-3">
                                <div className="rounded-[32px] bg-black/5 ring-1 ring-black/10 overflow-hidden">
                                    {/* key resetuje state (poster -> play) kad promeniš video */}
                                    <VerticalYouTube key={current.id} id={current.id} title={current.title} poster={current.poster} />
                                </div>
                                <div className="flex justify-center gap-1 py-3">
                                    {videos.map((_, i) => (
                                        <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === active ? "bg-primary" : "bg-secondary-light"}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
