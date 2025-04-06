import React from "react";
import { about4, about5 } from "../../../public/images";
import Image from "next/image";

const ImportNote = () => {
  return (
    <div className="bg-[#030613] to-white  relative">
      <div className="absolute top-0 left-0 right-0 bg-award_back   bg-no-repeat  bg-center h-[50%]"></div>

      <div className="h-full p-12 max-md:p-4 max-sm:py-12">
        <div className="custm-grid2  relative w-full flex max-md:flex-col-reverse  rounded-lg border-transparent card-border">
          <div className=" h-full flex items-center">
            <Image
              src={about4}
              alt=""
              className="rtl:rotate-180 absolute top-0 max-sm:top-auto max-sm:!bottom-[10px] max-sm:transform max-sm:rotate-[268deg] start-[0%] max-sm:start-[-3%]  w-[300px] h-full  max-md:w-[140px] max-md:h-[120px]"
            />
            <Image
              src={about5}
              alt=""
              className=" w-[155px] h-[150px] mx-10 max-sm:ms-2  mt-10 max-sm:mt-[4.5rem] max-md:w-[100px]  max-md:h-[100px]"
            />
            <div>
              <p className="text-white text-lg max-md:text-xs hidden max-sm:block">
                <span className="font-semibold">Address</span>: 59 Agios
                Athanasios Avenue, D.VRACHIMIS BUILDING, 4102 Agios Athanasios,
                Limassol, Cyprus. <br />
              </p>
              <p className="text-white text-lg max-md:text-xs hidden max-sm:block py-4">
                <span className="font-semibold"> Risk Warning:</span> Trading
                Forex and CFDs carries significant risks to your invested capital.
                Please read and ensure <br /> you fully understand our
                Risk Disclosure
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-8 justify-center max-sm:items-center max-sm:text-center max-md:!px-2">
            <h2 className="text-secondary font-bold text-2xl max-md:text-lg ">
              Important Note
            </h2>
            <p className="text-white text-lg max-md:text-xs leading-9">
              References to the Seychelles entity in the footer are included for
              transparency, reflecting the broader group <br /> structure and
              are not intended to imply any onboarding of clients through the
              <span className="text-secondary font-bold"> inzo.co</span> domain
              by INZO Seychelles.
              <br /> <span className="text-white max-sm:hidden">
                <span className="font-semibold">Address</span>: 59 Agios
                Athanasios Avenue, D.VRACHIMIS BUILDING, 4102 Agios Athanasios,
                Limassol, Cyprus. <br />
              </span>
            </p>
            <p className="text-white text-lg max-sm:text-xs max-md:hidden">
              <span className="font-semibold"> Risk Warning:</span> Trading
              Forex and CFDs carries significant risks to your invested capital.
              Please read and ensure <br /> you fully understand our
              Risk Disclosure
            </p>
          </div>

          <div className="absolute -bottom-20 left-0 right-0 mx-auto h-[60px] w-[1000px] bg-gradient-to-l from-[#3f9ce9] to-[#00C0FF] blur-[95px] z-30"></div>
        </div>
      </div>
    </div>
  );
};

export default ImportNote;
