import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Arrow = (props: {
    left?: boolean
    onClick: () => void
}) => {
    // const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <div
            onClick={props.onClick}
            className={`bg-[var(--color-secondary-transparent)] backdrop-blur-md rounded-full flex flex-col items-center justify-center w-[40px] h-[40px] hover:cursor-pointer active:scale-75 transition-transform duration-300`}
        >
            {props.left && (
                <IoIosArrowBack size={30} color='white'/>
            )}
            {!props.left && (
                <IoIosArrowForward size={30} color='white'/>
            )}
        </div>
    )
}

export default Arrow