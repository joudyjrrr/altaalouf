"use client";
import React from "react";
import {
  about1,
  about2,
  about3,
  about4,
  about5,
} from "../../../../public/images";
import Image from "next/image";
import WhyInzo from "@/components/Layout/WhyInzo";
import LicenseSection from "@/components/Layout/LicenseSection";
import AwardSection from "@/components/Layout/AwardSection";
import Title from "@/components/Layout/Title";
import ImportNote from "@/components/Layout/ImportNote";

const data1 = [
  {
    img: about1,
    title: "Registered Office",
    desc1: `  Bonovo Road, Fomboni Island.`,
    desc2: ` of Mohéli, Comoros Union`,
  },
  {
    img: about2,
    title: "Place of Issue",
    desc1: "Fomboni, Island of Mohéli ",
    desc2: " Comoros Union.",
  },
];
const data2 = [
  {
    text: "The  inzo.co   is exclusively operated by INZO broker under the Comoros entity. Other entities in our group include: INZO Group LTD (Registration No. 8434998-1), authorized and regulated by the Financial Services Authority (the “FSA”, license no. SD163).",
    img: about3,
    titleLocation: "Registered Address:",
    textLocation:
      "IMAD Complex, Office 6, situated at Ile Du Port, Seychelles.",
  },
  {
    text: "The official domain operated by INZO Group LTD Seychelles is  inzo.store ,   which is exclusively linked to its Seychelles operations. INZO L.L.C, incorporated by the Financial Services Authority (SVG) as a limited liability company with registration number 967 LLC 2021.",
    img: about3,
    titleLocation: "Registered Address:",
    textLocation:
      "Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines.",
  },
];
const page = () => {
  return (
    <div className="w-full h-full">
      <div className=" bg-optimizer_aboutBanner  h-screen max-sm:h-fit  bg-cover bg-center bg-no-repeat">
        <div className="w-full  bg-aboutBanner max-sm:bg-about_mobile  h-screen max-sm:h-fit  bg-cover  bg-no-repeat  z-[100]">
          <div className="w-full  bg-about_Gr max-sm:bg-none h-full flex justify-center items-center max-sm:items-start  pb-8">
            <div className="flex flex-col pt-44 max-sm:pt-44 gap-2 text-center w-full ">
              <div className="flex gap-2 text-5xl font-extrabold max-md:text-3xl  text-center justify-center">
                <h1 className={`text-secondary `}>{`About `}</h1>
                <h1 className={`text-white `}>{`the company`}</h1>
              </div>
              <div className="flex flex-col gap-1 pt-8 max-sm:pt-2 text-white text-xl max-md:text-sm">
                <p>
                  INZO is a leading global broker providing trading services.
                </p>
                <p>
                  It is licensed by multiple global authorities to offer the
                  highest levels of security and privacy for all traders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0f2147]  pb-8 max-sm:pt-20">
        <div className="flex gap-8 w-full justify-center max-md:flex-col  max-md:gap-20">
          {data1.map((d, idx) => (
            <div
              key={idx}
              className="bg-about_Gr_Card  p-8 px-28 max-sm:px-8 max-md:mx-4 text-center rounded-[26px] flex text-white justify-center flex-col items-center relative"
            >
              <Image
                src={d.img}
                alt=""
                className="absolute top-[-55px] end-[40%] w-[100px]"
              />
              <h1 className="text-2xl font-bold mt-8 max-sm:text-xl">{d.title}</h1>
              <p className="text-lg mt-4">{d.desc1}</p>
              <p className="text-lg">{d.desc2}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-8 w-full justify-center  mt-16 px-24 max-sLg:px-8 max-md:px-2  max-md:flex-col">
          {data2.map((d, idx) => (
            <div
              key={idx}
              className="bg-about_Gr_Card2 p-8 max-sm:p-4 border max-md:mx-4 border-secondary text-center rounded-[30px] flex text-white justify-center flex-col items-center relative"
            >
              <p className="text-lg pb-4 font-medium max-md:text-sm">
                {d.text.split(" ").map((word, i) =>
                  word.includes("inzo.co") ? (
                    <span key={i} className="text-secondary font-bold">
                      inzo.co
                    </span>
                  ) : word.includes("inzo.store") ? (
                    <span key={i} className="text-secondary font-bold">
                      inzo.store
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </p>

              <span className="w-[150px] h-[1.2px] bg-[#04061380]"></span>
              <div className="flex gap-8 w-full text-white items-center text-start mt-4">
                <Image src={d.img} alt="" className="w-[70px]" />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold max-sm:text-sm">{d.titleLocation}</h3>
                  <p className="max-md:text-xs">{d.textLocation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhyInzo />
      <div className="bg-stars_white max-sm:!bg-none  bg-[#0f2147]  w-full   ">
        <div className="bg-stars_white max-sm:!bg-none bg-center bg-no-repeat bg-cover h-full text-center p-12 max-sm:px-2 max-sm:py-8 ">
          <p className="text-white text-xl leading-9 max-sm:text-xs max-sm:leading-5">
            Since the company's inception, it has been committed to offering the
            best trading environment and solving all traders'
            <br /> issues by providing them with the best solutions. Starting
            with the lowest spreads in the Middle East, for which it received{" "}
            <br /> an award at the
            <span className="text-secondary font-semibold">
              Mumbai Expo 2023
            </span>
            , and moving on to offering multiple deposit and withdrawal methods
            available <br /> worldwide, including the easiest, most powerful,
            and exclusive P2P deposit and withdrawal service in the forex world,
            INZO <br /> P2P. The company also provides a variety of accounts and
            trading tools suitable for all traders, allowing them to trade from
            <br />
            multiple platforms provided by INZO through a secure and fast STP
            system. The company was awarded the Best STP <br /> Broker in the
            Middle East at the{" "}
            <span className="text-secondary font-semibold">
              Dubai Expo 2023.
            </span>
          </p>
        </div>
      </div>
      <AwardSection isExplore={false} />
      <ImportNote />
      <LicenseSection />
    </div>
  );
};

export default page;
