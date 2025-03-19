import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { flag, Polygon } from "../../../public/images";
import Image from "next/image";
const Select = ({ label, placeholder, className, icon }) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${placeholder && "!w-fit"}`}>
      {label && (
        <label className="text-white text-start text-lg flex gap-2">
          {label}
          {icon && <Image src={icon} alt="" />}
        </label>
      )}
      <div className="input-border relative !p-[1.2px]">
        {placeholder ? (
          <Image
            src={Polygon}
            alt=""
            className=" absolute top-[1.5rem] end-[0.5rem] cursor-pointer"
          />
        ) : (
          <IoIosArrowDown className="text-secondary text-lg absolute top-4 end-4 cursor-pointer" />
        )}
        <select className="w-full px-6 ps-1 text-sm py-3 placeholder:!text-white placeholder:text-base !text-white  !rounded-[10px] z-[1000]  !bg-[#040613e0]     appearance-none">
          <option
            className={` ${placeholder ? "!text-white" : "text-[#6D83B6]"}`}
          >
            {label ? `Select ${label}` : placeholder}
          </option>
          <option className="text-white">Option 1</option>
          <option className="text-white">Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
