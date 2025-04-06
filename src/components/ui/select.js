import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { flag, Polygon } from "../../../public/images";
import Image from "next/image";
const Select = ({ label, placeholder, className, icon , isPlaholder }) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${isPlaholder && '!w-fit'}`}>
      {label && (
        <label className="text-white text-start text-lg max-xs:text-sm flex gap-2">
          {label}
          {icon && <Image src={icon} alt="" />}
        </label>
      )}
      <div className="input-border relative !p-[1.2px]">
        {placeholder ? (
          <Image
            src={Polygon}
            alt=""
            width={9}
            className=" absolute top-[1.1rem] end-[0.5rem] cursor-pointer"
          />
        ) : (
          <IoIosArrowDown className="text-secondary text-lg absolute top-4 end-4 cursor-pointer" />
        )}
        <select className={`w-full max-xs:text-xs  px-4 py-3 placeholder:!text-[#6D83B6] placeholder:text-base !text-[#6D83B6] !rounded-[10px] z-[1000]  !bg-[#040613e0]     appearance-none ${isPlaholder && '!px-6 !ps-1 !text-sm !py-2'}`}>
          <option
            className={`  `}
          >
            {placeholder ? placeholder: `Select ${label}` }
          </option>
          <option className="text-white">Option 1</option>
          <option className="text-white">Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
