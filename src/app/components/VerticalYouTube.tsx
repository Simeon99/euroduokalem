"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

function extractYouTubeId(idOrUrl: string) {
  const m =
    idOrUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&].*)?$/) ||
    idOrUrl.match(/^([0-9A-Za-z_-]{11})$/);
  return m ? m[1] : idOrUrl;
}

export default function VerticalYouTube({
  id,
  title = "Video",
  poster,
  className = "",
}: {
  id: string;                 // YouTube ID ili ceo URL
  title?: string;
  poster?: string;            // opcioni custom poster
  className?: string;
}) {
  const videoId = useMemo(() => extractYouTubeId(id), [id]);
  const [playing, setPlaying] = useState(false);
  const posterSrc = poster || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={`relative w-full ${className}`}>
      {/* 9:16 frame */}
      <div className="relative w-full aspect-[9/16]">
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full overflow-hidden rounded-[32px] ring-1 ring-black/10"
            aria-label={`Play ${title}`}
          >
            <Image src={posterSrc} alt={title} fill sizes="(max-width:768px) 100vw, 600px" className="object-cover" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="w-16 h-16 rounded-full bg-white/90 grid place-items-center shadow-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </span>
          </button>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full rounded-[32px] ring-1 ring-black/10"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&modestbranding=1&rel=0&controls=1`}
            title={title}
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
    </div>
  );
}
