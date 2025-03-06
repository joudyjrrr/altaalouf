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
    text: "The inzo. is exclusively operated by INZO broker under the Comoros entity. Other entities in our group include: INZO Group LTD (Registration No. 8434998-1), authorized and regulated by the Financial Services Authority (the “FSA”, license no. SD163).",
    img: about3,
    titleLocation: "Registered Address:",
    textLocation:
      "IMAD Complex, Office 6, situated at Ile Du Port, Seychelles.",
  },
  {
    text: "The official domain operated by INZO Group LTD Seychelles is inzo., which is exclusively linked to its Seychelles operations. INZO L.L.C, incorporated by the Financial Services Authority (SVG) as a limited liability company with registration number 967 LLC 2021.",
    img: about3,
    titleLocation: "Registered Address:",
    textLocation:
      "Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines.",
  },
];
const page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full pt-4 bg-aboutBanner h-screen  bg-cover bg-center bg-no-repeat  z-[100]">
        <div className="w-full  bg-about_Gr h-full flex justify-center items-end max-sm:items-center  pb-8">
          <div className="flex flex-col gap-2 text-center w-full ">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary `}>{`About `}</h1>
            <h1 className={`text-white `}>{`the company`}</h1>
          </div>
     
            <div className="flex flex-col gap-1 pt-4  text-white text-lg max-md:text-sm">
              <p>
                INZO is a leading global broker providing trading services. .
              </p>
              <p>
                It is licensed by multiple global authorities to offer the
                highest levels of security and privacy for all traders
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0f2147] pt-24 pb-8">
        <div className="flex gap-8 w-full justify-center max-md:flex-col  max-md:gap-8">
          {data1.map((d, idx) => (
            <div
              key={idx}
              className="bg-about_Gr_Card p-8 px-16 max-md:mx-2 text-center rounded-md flex text-white justify-center flex-col items-center relative"
            >
              <Image
                src={d.img}
                alt=""
                className="absolute top-[-50px] end-[40%] w-[70px]"
              />
              <h1 className="text-2xl">{d.title}</h1>
              <p className="text-lg">{d.desc1}</p>
              <p className="text-lg">{d.desc2}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-8 w-full justify-center  mt-8 px-24 max-md:px-2  max-md:flex-col">
          {data2.map((d, idx) => (
            <div
              key={idx}
              className="bg-about_Gr_Card2 p-8 border max-md:mx-4 border-secondary text-center rounded-md flex text-white justify-center flex-col items-center relative"
            >
              <p className="text-lg pb-4 font-medium max-md:text-sm">
                {d.text}
              </p>

              <span className="w-[100px] h-[1.2px] bg-[#04061380]"></span>
              <div className="flex gap-2 w-full  text-white items-center text-start mt-4">
                <Image src={d.img} alt="" className="w-[50px]" />
                <div className="flex flex-col">
                  <h3 className="text-lg  font-semibold ">{d.titleLocation}</h3>
                  <p className="max-md:text-sm">{d.textLocation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhyInzo />
      <div className="bg-stars_white bg-[#0f2147]  w-full mb-12  ">
        <div className="bg-stars_white bg-center bg-no-repeat bg-cover h-full text-center p-16  ">
          <p className="text-white text-xl">
            Since the company's inception, it has been committed to offering the
            best trading environment and solving all traders' issues by
            providing them with the best solutions. Starting with the lowest
            spreads in the Middle East, for which it received an award at the
            <span className="text-secondary font-semibold">
              Mumbai Expo 2023
            </span>
            , and moving on to offering multiple deposit and withdrawal methods
            available worldwide, including the easiest, most powerful, and
            exclusive P2P deposit and withdrawal service in the forex world,
            INZO P2P. The company also provides a variety of accounts and
            trading tools suitable for all traders, allowing them to trade from
            multiple platforms provided by INZO through a secure and fast STP
            system. The company was awarded the Best STP Broker in the Middle
            East at the{" "}
            <span className="text-secondary font-semibold">
              Dubai Expo 2023.
            </span>
          </p>
        </div>
      </div>
      <AwardSection isExplore={false} />
      <div className="bg-[#030613] to-white  relative">
      <div className="bg-award_back h-full p-12 max-md:p-2">
        <div className="bg-about_Gr_Card3 w-full flex max-md:flex-col  rounded-lg border border-secondary">
          <div className="relative h-full flex items-start">
            <Image
              src={about4}
              alt=""
              className="rtl:rotate-180 w-[300px] h-[300px] max-md:w-[150px] max-md:h-[150px]"
            />
            <Image
              src={about5}
              alt=""
              className="absolute top-[7%] start-[8%]  w-[150px] h-[300px] max-md:w-[100px] max-md:h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-2 py-8 justify-center max-md:!px-2">
            <h2 className="text-secondary font-semibold text-2xl max-md:text-lg ">
              Important Note
            </h2>
            <p className="text-white text-lg max-md:text-sm">
              References to the Seychelles entity in the footer are included for
              transparency, reflecting the broader group structure and are not
              intended to imply any onboarding of clients through the inzo.co
              domain by INZO Seychelles.
              <br /> <span className="font-semibold">Address</span>: 59 Agios
              Athanasios Avenue, D.VRACHIMIS BUILDING, 4102 Agios Athanasios,
              Limassol, Cyprus.
            </p>
            <p className="text-white text-lg max-md:text-sm">
              <span className="font-semibold"> Risk Warning:</span> Trading Forex and CFDs carries
              significant risks to your invested capital. Please read and ensure
              you fully understand our Risk Disclosure
            </p>
          </div>
        </div>
      </div>
      </div>
      <LicenseSection />
    </div>
  );
};

export default page;
