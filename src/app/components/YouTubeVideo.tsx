import React from 'react'

const YouTubeVideo = () => {
    return (
        <div className="w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/watch?v=vHbs0XlD4A4&t=43s"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default YouTubeVideo