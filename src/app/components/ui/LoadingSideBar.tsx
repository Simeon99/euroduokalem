import React from 'react'
import LoadingSeedling from './LoadingSeedling'

const LoadingSideBar = () => {
    return (
        <div className='flex flex-row max-md:flex-col'>
            <div className='flex flex-col'>
                <div className=" w-52 h-[40px] bg-gray-300 animate-pulse  md:ml-2 mb-4">

                </div>
                <div
                    className="relative max-md:hidden w-48 h-[680px] bg-gray-300 animate-pulse rounded-t-2xl">

                </div>
                <div className='flex flex-wrap gap-4 md:hidden'>
                    <div className=" w-[170px] flex flex-col items-center justify-center h-[60px] bottom-0 bg-gray-300 rounded-2xl">
                    </div>
                    <div className=" w-[130px] flex flex-col items-center justify-center h-[60px] bottom-0 bg-gray-300 rounded-2xl">
                    </div>
                    <div className=" w-[180px] flex flex-col items-center justify-center h-[60px] bottom-0 bg-gray-300 rounded-2xl">
                    </div>
                    <div className=" w-[160px] flex flex-col items-center justify-center h-[60px] bottom-0 bg-gray-300 rounded-2xl">
                    </div>
                    <div className=" w-[190px] flex flex-col items-center justify-center h-[60px] bottom-0 bg-gray-300 rounded-2xl">
                    </div>
                    <div className=" w-[140px] flex flex-col items-center justify-center h-[60px] bottom-0 bg-gray-300 rounded-2xl">
                    </div>

                </div>

            </div>
            <div className='mt-[60px] w-full'>
            <LoadingSeedling />

            </div>
        </div>
    )
}

export default LoadingSideBar