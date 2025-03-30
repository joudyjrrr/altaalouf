import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import {
  halfCircule,
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  ParthnerImg,
  half_circule2,
} from "../../../public/images";
import Image from "next/image";
import { Button } from "../ui/button";
import MeetOurPartnersSection from "./MeetOurPartnersSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLanguageDirection from "@/i18n/useLanguageDirection";


const Card = ({ index, d }) => {
  return (
    <div
      key={index}
      className=" button-border-transparent !rounded-lg !p-0 before:!rounded-lg relative h-[300px]  w-[300px] max-md:w-[250px]">
      <Image
        width={300}
        height={300}
        src={d.background}
        alt=""
        className="absolute top-0 w-full h-full z-[-1] start-0 !rounded-lg"
      />
      <div className="w-full !h-full flex flex-col justify-between items-center gap-8  pt-6">
        <Image
          width={200}
          height={50}
          src={d.teextimg}
          alt=""
          className="pt-8"
        />

        <div className="bg-company_global h-[100px] pt-8 items-center !rounded-lg w-full flex justify-center">
          <h1 className="text-white text-lg font-semibold">{d.text}</h1>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    background: company4,
    teextimg: company7,
    text: "Oman Summit 2024",
  },
  {
    background: company2,
    teextimg: company6,
    text: "Mumbai Expo 2023",
  },
  {
    background: company3,
    teextimg: company8,
    text: "Dubai Expo 2023",
  },

  {
    background: company1,
    teextimg: company5,
    text: "Eygpt Expo 2023",
  },
];
const CompanyGlobalSection = () => {
  const [dir, setDir] = useState("ltr");
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDir(localStorage.getItem("dir") || "ltr");
    }
  }, []);

  useLanguageDirection();
  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [dir]);
  return (
    <>
      <div className="w-full relative  pb-24">
        <Image
          className="absolute top-0 start-0 max-md:hidden"
          width={150}
          src={halfCircule}
          alt=""
        />
        <Image
          className="absolute bottom-[-40px] end-0 z-[-1] max-md:hidden"
          width={150}
          src={half_circule2}
          alt=""
        />
        <Title
          title1={`Company's`}
          title2={`Global Presence`}
          title2Color={`!text-primary !font-extrabold`}
          title1Color={`!font-bold !font-extrabold`}
        />
        <div className="mt-32  grid grid-cols-4  gap-6 px-16 max-md:!hidden">
          {data.map((d, index) => (
           <div key={index}>
             <Card d={d} index={index} />
           </div>
          ))}
        </div>
          <Swiper
            key={swiperKey}
            modules={[Autoplay]}
            pagination={{
              el: ".custom-pagination3",
              clickable: true,
            }}
            dir={dir}
            spaceBetween={1}
            slidesPerView={1.4}
            autoplay={{ delay: 15000 }}
            className="p-8 mt-16 ms-4 max-md:p-4 mb-12 !hidden max-md:!block"
          >
            {data.map((d, index) => (
              <SwiperSlide key={index} className={`${index === 0 && 'ms-4'}`}>
                <Card d={d} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        <div className="w-full flex mt-12 justify-center items-center">
          <Button className="button-border-transparent  before:!rounded-md text-primary !bg-white before:!bg-white !rounded-md text-base !px-12 !py-4">
            See More
          </Button>
        </div>
      </div>
      <MeetOurPartnersSection />
    </>
  );
};

export default CompanyGlobalSection;


