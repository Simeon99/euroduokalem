import React from 'react'

const Loading = () => {
    return (
        <div
            className="relative w-full h-[300px] bg-gray-300 animate-pulse rounded-2xl">
            {/* <div
                className="w-[318px] h-[162px] max-[1190px]:w-[287px] max-[1190px]:h-[140px] pt-[21px] px-[26px] absolute bottom-[-52px] max-[1190px]:bottom-[-32px] left-0 bg-[#FAFAFA] ">
                <div className="w-[250px]  h-3 bg-gray-300 mb-2"></div>
                <div className="w-[230px]  h-3 bg-gray-300"></div>
                <div className="mt-[34px] w-[100px]  h-3 bg-gray-300">
                </div>
            </div> */}
            <div className='absolute w-full h-[142px] bottom-0 rounded-b-2xl bg-white'>
                <div className="w-[80%] mt-4  h-3 bg-gray-300 mb-4"></div>
                <div className="w-[60%]  h-3  bg-gray-300"></div>
                <div className="mt-4 w-[70%] h-3 bg-gray-300">
                </div>

            </div>
            <div className="absolute w-full h-[50px] bottom-0 bg-gray-300 rounded-b-2xl">
            </div>
        </div>
    )
}

export default Loading