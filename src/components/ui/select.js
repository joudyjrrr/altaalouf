import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { flag } from "../../../public/images"
import Image from 'next/image'
const Select = ({ label, placeholder, className }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-white text-lg">
                {label}
            </label>
            <div className="input-border relative !p-[1.2px]">
                <IoIosArrowDown className='text-secondary text-lg absolute top-4 end-4 cursor-pointer' />
                <select
                        className="w-full px-4 py-3 placeholder:!text-[#6D83B6] placeholder:text-base !text-[#6D83B6]  !rounded-[10px] z-[1000]  !bg-[#040613e0]     appearance-none"
                >
                    <option className="!text-[#6D83B6]"> {`Select ${label}`}</option>
                    <option className="text-white">Option 1</option>
                    <option className="text-white">Option 2</option>
                </select>
            </div>
        </div>
    )
}

export default Select