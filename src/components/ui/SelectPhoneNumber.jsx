"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { flag, iraq } from "../../../public/images";
import { IoIosArrowDown } from "react-icons/io";
const SelectPhoneNumber = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex flex-col  !w-fit   gap-1">
      <span className="text-lg text-nowrap text-white max-xs:text-sm">Phone Number</span>
      <div className="input-border relative">
      <IoIosArrowDown className='text-secondary z-[2000] text-lg absolute top-4 end-2 cursor-pointer' />
        <ReactFlagsSelect
          selected={selected}
          onSelect={(code) => setSelected(code)}
          countries={["US", "GB", "FR", "DE", "IT"]}
          customLabels={{
            US: "EN-US",
            GB: "EN-GB",
            FR: "FR",
            DE: "DE",
            IT: "IT",

          }}
          searchable
          placeholder={
            <div className="flex gap-2 py-1 max-xs:text-sm">
              <Image src={iraq} alt="" width={25} height={20}/>{" "}
              <p className="!text-white">+269</p>
            </div>  
          }
          className="w-full !border-none bg-[#7676801F] px-4 py-1 placeholder:!text-[#6D83B6] !text-[#6D83B6]  !rounded-[10px] z-[1000]      appearance-none"
        />
      </div>
    </div>
  );
};

export default SelectPhoneNumber;
