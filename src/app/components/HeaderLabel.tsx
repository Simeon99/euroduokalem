import React from 'react'
import { PiTree } from "react-icons/pi";
import { CiApple } from "react-icons/ci";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const HeaderLabel = () => {
    return (
        <div className='bg-secondary flex justify-center'>
            <div className=' max-w-screen-sw  w-full px-4 py-6'>
                <div className='grid grid-cols-4 max-md:grid-cols-2 gap-x-4 gap-y-6  content-center text-primary max-md:text-[16px] text-[20px] justify-between'>
                    <div className=' flex flex-row items-center gap-2 '>
                        <div>
                            <PiTree size={28} />

                        </div>
                        <span >Sadnice voca</span>

                    </div>
                    <div className=' flex flex-row items-center gap-2'>
                        <div>
                            <CiApple size={33} />

                        </div>
                        <span>Voćarstvo</span>

                    </div>
                    <div className=' flex flex-row items-center gap-2'>
                        <div>
                            <AiOutlineSafetyCertificate size={28} />

                        </div>
                        <span >Sertifikovane sadnice</span>

                    </div>
                    <div className=' flex flex-row items-center gap-2'>
                        <div>
                            <MdOutlineHealthAndSafety size={30} />

                        </div>
                        <span>Bezvirusni sadni materijal</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLabel