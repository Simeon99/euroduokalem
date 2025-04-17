import React from 'react'

const LoadingSeedling = () => {
    return (
        <>
            {/* Desktop */}
            <div className='flex flex-col gap-8 w-full max-md:hidden'>
                <div className='flex flex-row w-full gap-4'>
                    <div
                        className="relative   w-1/2 h-[400px] bg-gray-300 animate-pulse rounded-2xl">

                    </div>
                    <div className='flex flex-col items-end w-1/2 h-[400px] gap-8'>
                        <div
                            className="relative max-md:hidden w-[40%] h-12  bg-gray-300 animate-pulse rounded-2xl">

                        </div>
                        <div className='w-full flex flex-col gap-4'>
                            <div
                                className="relative max-md:hidden w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                            </div>
                            <div
                                className="relative max-md:hidden w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                            </div>
                            <div
                                className="relative max-md:hidden w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                            </div>
                            <div
                                className="relative max-md:hidden w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                            </div>
                            <div
                                className="relative max-md:hidden w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                            </div>
                            <div
                                className="relative max-md:hidden w-[45%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="relative max-md:hidden w-full h-12  bg-gray-300 animate-pulse rounded-2xl">
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <div
                        className="relative max-md:hidden w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative max-md:hidden w-[45%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative max-md:hidden w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative max-md:hidden w-[65%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative max-md:hidden w-[86%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='flex flex-col mt-8 gap-8 w-full md:hidden'>
                <div
                    className=" w-full h-[250px] bg-gray-300 animate-pulse rounded-2xl">

                </div>
                <div
                    className=" w-[40%] h-10  bg-gray-300 animate-pulse rounded-2xl">
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div
                        className=" w-full h-[60px] bg-gray-300 animate-pulse rounded-2xl">

                    </div>
                    <div
                        className=" w-full h-[60px] bg-gray-300 animate-pulse rounded-2xl">

                    </div>
                    <div
                        className=" w-full h-[60px] bg-gray-300 animate-pulse rounded-2xl">

                    </div>
                    <div
                        className=" w-full h-[60px] bg-gray-300 animate-pulse rounded-2xl">

                    </div>
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <div
                        className="relative w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-[45%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                </div>

                <div className='w-full flex flex-col gap-4'>
                    <div
                        className="relative w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-[45%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-full h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-[65%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                    <div
                        className="relative w-[86%] h-5  bg-gray-300 animate-pulse rounded-2xl">
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoadingSeedling