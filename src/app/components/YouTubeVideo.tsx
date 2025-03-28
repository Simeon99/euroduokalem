import React from 'react'

const YouTubeVideo = () => {
    return (
        <div className='flex flex-col px-4 '>
        <div className="max-w-screen-sw  w-full  mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/vHbs0XlD4A4"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        </div>
    )
}

export default YouTubeVideo