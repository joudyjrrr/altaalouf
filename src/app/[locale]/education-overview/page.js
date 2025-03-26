import React from "react";

import { eduOveImg } from "../../../../public/images";
import DwMethods from "@/components/Layout/DwMethods";
import { Button } from "@/components/ui/button";
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import ImportNote from "@/components/Layout/ImportNote";
import LicenseSection from "@/components/Layout/LicenseSection";

const page = () => {
  return (
    <>
      <div className="w-full h-full bg-[#0F2147] pb-20">
        <div className="w-full  bg-optimizer_education_review   bg-cover bg-top bg-no-repeat  ">
          <div className="w-full  bg-EduOver_Bg   bg-cover bg-center bg-no-repeat  z-[100]">
            <div className="w-full   h-[100vh] flex flex-col justify-center items-end max-sm:items-center  pb-0">
              <div className="flex flex-col gap-5 text-center w-full pt-[10rem]">
                <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
                  <h1 className={`text-secondary `}>{`Education `}</h1>
                  <h1 className={`text-white `}>{`Overview`}</h1>
                </div>
                <p className="text-2xl text-white mt-4">
                  Experience  fast execution, tight spreads and unrestricted
                  trading conditions on the award-winning MetaTrader 4 platform.{" "}
                </p>
                <Button className="  bg-main_button  max-w-[150px] mx-auto mt-2">
                  Start Trading
                  <FaCaretRight />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-fit ">
          <div className="relative z-10 mt-10 flex items-center ms-10 pe-10">
            <div className="md:w-[700px] h-full flex flex-col ps-14 pe-14 justify-center gap-8 text-white">
              <h3 className="font-bold text-2xl text-[#038BD3] mb-1">
                Getting Started
              </h3>
              <p className="text-lg leading-10">
                Learn general concepts about the Forex (foreign exchange) market
                and become familiar with some of the basics of forex. Begin your
                journey into forex and understand the way in which the forex
                market operates, the basics of technical and fundamental
                analysis and what influences the forex market.
              </p>
              <Button
                variant="gradiant"
                className="!bg-[#04061380] max-w-[175px] mt-1"
              >
                See More
              </Button>
            </div>
            <div className="md:w-[500px] md:h-[450px] mt-1 ms-8">
              <Image src={eduOveImg} className="h-full w-full" alt="inzo" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 items-center relative py-24 ">
          <div className="flex justify-center items-center gap-12">
            <div className="flex flex-col items-center justify-start w-[40%] h-[300px] text-white p-5 pb-0 rounded-3xl border-transparent relative md-card-border custom-gradient2 text-center">
              <div className="mt-6">
                <h3 className="text-xl font-bold relative">
                  Advantages of Forex
                  <span className="absolute -bottom-5 left-[150px] w-[200px] h-[2px] bg-[#08469A]"></span>
                </h3>
                <p className="text-[1.3rem] px-10 pt-10">
                  Learn about the many benefits of trading the forex market and
                  discover why the forex market is one of the last true arenas
                  of fair market competition and genuine price discovery.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[40%] h-[300px] text-white p-5 pb-0 rounded-3xl border-transparent relative md-card-border custom-gradient2 text-center">
              <div className="mt-6">
                <h3 className="text-xl font-bold relative">
                  Advantages of CFDs
                  <span className="absolute -bottom-5 left-[150px] w-[200px] h-[2px] bg-[#08469A]"></span>
                </h3>
                <p className="text-[1.3rem] px-10 pt-10">
                  Learn about the many benefits of trading Index CFDs and
                  Discover why the Index CFD trading market is so popular.
                </p>
                <Link
                  className="relative z-30 !underline"
                  href="https://www.icmarkets.com/global/en/education/advantages-of-cfds"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:w-[83%] h-[300px] text-white mx-auto p-5 pb-0 rounded-3xl border-transparent relative md-card-border custom-gradient2 text-center">
            <div className="mt-6">
              <h3 className="text-xl font-bold relative">
                Video Tutorials
                <span className="absolute -bottom-5 left-[440px] w-[200px] h-[2px] bg-[#08469A]"></span>
              </h3>
              <p className="text-[1.3rem] px-20 pt-10">
                Watch some of our educational videos to help you get started in
                forex. Our educational videos are designed for traders of all
                levels and will provide a step by step guide on how to use our
                trading platforms. Many common platform questions are answered
                in our video tutorials.
              </p>
              <Button
                variant="gradiant"
                className="!bg-[#04061380] max-w-[175px] mt-6 relative z-30"
              >
                See More
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-teamStars_Bg  bg-no-repeat  bg-center h-[10%]"></div>
        </div>

        <ImportNote />
        <LicenseSection />
      </div>
    </>
  );
};

export default page;
