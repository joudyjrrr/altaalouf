import React from "react";

import Link from "next/link";

import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";

import {
  partner4,
  partner3,
  partner2,
  partner1,
} from "../../../../public/images";
import { Button } from "@/components/ui/button";
import Title from "@/components/Layout/Title";
import MeetOurPartnersSection from "@/components/Layout/MeetOurPartnersSection";
import FinancialReportSection from "@/components/Layout/FinancialReportSection";

const termData = [
  {
    title: "Information",
    desc: "Now you can through this website, learn about our partners and access their educational channels.",
    img: partner4,
  },
  {
    title: "Offers & Services",
    desc: "You can participate in the contests provided by our partners, which are regularly issued.",
    img: partner3,
  },
  {
    title: "Comprehensive Plans",
    desc: "Inzoo's partners offer you trading plans to help you have an enjoyable trading experience.",
    img: partner2,
  },
  {
    title: "Responding To Inquiries",
    desc: "As per our policy at Inzoo, our agents provide quick and interactive responses to traders.",
    img: partner1,
  },
];

const page = () => {
  const data = [
    { value: 5, textValue: "Million", text: "Monthly ", text2: "Withdrawal" },
    { value: 50, textValue: "K", text: "MonthlyIB", text2: "Withdrawal" },
    {
      value: 75,
      textValue: "Billion",
      text: "Monthly ",
      text2: "Trading Range",
    },
    { value: 30, textValue: "K", text: "Monthly ", text2: "Active Client" },
  ];
  return (
    <>
      <div className="w-full h-full bg-[#0F2147] pb-20">
      <div className="w-full  bg-optimizer_successPartners_Bg   bg-cover bg-top bg-no-repeat  "> 
          <div className="w-full min-h-[100vh]  bg-successPartners_Bg   bg-cover bg-top bg-no-repeat   z-[100]">
            <div
              className="flex flex-col gap-2 text-white justify-end 
              items-center text-[22px] px-[5rem]  h-[350px]"
            >
              <Title
                title1={`Success `}
                title2={`Partners`}
                classNameImg="hidden"
                className="pb-0 !pt-20"
              />
              <p className="pt-10">
                What the partner offers comes from their own ideas and trading
                experience.
              </p>
              <p>
                The company is not responsible for the accuracy of their trading
                advice.
              </p>
            </div>

            <div className="mx-auto flex flex-col items-center  relative z-10 md:translate-y-52">
              <div className="grid grid-cols-[repeat(4,minmax(0,400px))] place-content-center gap-y-5  ">
                {termData.map((item, index) => (
                  <div
                    className={`flex flex-col items-center justify-start w-[300px]
                       h-[215px] text-white  mx-auto p-5 pt-8 pb-0 rounded-2xl
                        border  relative min-card-border text-center border-transparent ${
                          index == 0 && "-translate-y-11"
                        } ${index == 3 && "-translate-y-11"} `}
                    key={index}
                  >
                    <div className=" mt-3">
                      <p className="text-xl font-bold ">{item.title}</p>
                      <p className="text-[1rem] px-6 pt-4">{item.desc}</p>
                    </div>
                    <Image
                      src={item.img}
                      width={90}
                      height={90}
                      className="absolute -top-16 left-[35%]"
                      alt="inzo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center  h-[100vh] bg-[#62729400] mb-24">
          <div
            className="mt-[250px] w-[1200px] h-[500px] bg-successPartnersCard_Bg 
             bg-contain bg-center bg-no-repeat 
             "
          >
            <div
              className="mt-10 flex flex-col gap-2 text-white  
              items-center"
            >
              <Title
                title1={`Offers  `}
                title2={`Daily Trader Competition`}
                classNameImg="hidden"
                className="pb-0 !pt-20"
              />
              <div className="pt-16 text-[22px] text-center">
                <p>
                  Sponsored by Enzo Trading, get a $30 trading bonus and a free
                  one-month
                </p>
                <p>subscription to the signals channel worth $100</p>
              </div>

              <p className="pt-5 text-[26px] font-medium">
                The competition continues every week with a winner selected for
                the prize.
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <Button className="button-border-transparent2 relative p-x-5 rounded-md bg-[#04061380]">
                  Experience the best trading with Enzo
                </Button>

                <Button className="  bg-main_button  ">
                  Open Real Account
                  <FaCaretRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <MeetOurPartnersSection />

        <div
          className="relative  
  h-[70vh] flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 left-0 right-0 bg-teamStars_Bg  bg-no-repeat  bg-center h-[70%]"></div>
          <div className="mt-[80px]">
            <Title
              title1={`Financial`}
              title2={`Report`}
              classNameImg="hidden"
            />
            <div className="mt-[110px]">
              <FinancialReportSection data={data} className="!gap-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
