"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider = [
  {
    title: "بونص الإيداع ",
    num: "30%",
    desc: "قم بإيداع الأموال في حسابك واحصل على ٪30 بونص على إيداعك",
  },
  {
    title: "تداول مثل الأسطورة",
    desc: " تداول بأكثر من 400 أداة عالمية من العملات الأجنبية والأسهم والمعادن والسلع مع  ",
    span2: "INZO انزو",
  },
  {
    title: "بونص ترحيبي ",
    num: "30$",
    desc: "قم بإيداع الأموال في حسابك واحصل على ٪30 بونص على إيداعك",
  },
];

const Banner = () => {
  return (
    <div className="w-full pt-4 bg-banner h-[100vh] bg-cover bg-center bg-no-repeat  mt-[80px] z-[100]">
      {/* <div className="w-full h-full absolute top-0 end-0 bg-[rgb(15,33,71)] opacity-[0.6]"></div> */}

      <div className="flex flex-col justify-end items-end h-full text-white relative z-[100]">
        {/* <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 justify-center items-center z-[100]">
          <Button className="!bg-[#177522] text-white rounded-lg text-xl p-4">النسخ</Button>
          <Button className="!bg-[#751817] text-white rounded-lg text-xl p-4">فتح حساب تداول حقيقي</Button>
          <Button className="!bg-[#11295e] text-white rounded-lg text-xl p-4">فتح حساب تداول تجريبي</Button>
          <Button className="!bg-[#9d5d27] text-white rounded-lg text-xl p-4">P2P</Button>
        </div> */}
        <div className="w-full text-white pb-24 max-lg:px-4 max-xs:!pb-32">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 7000 }}
            // loop
            className="w-full max-w-4xl"
          >
            {Slider.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative flex flex-col items-center text-center p-4 !bg-[#00000038] rounded-lg 
                        shadow-lg border !border-gray-400"
                >
                  <div className="flex gap-2 items-center  text-7xl max-lg:text-5xl max-xs:text-[20px]">
                    <h2 className=" font-extrabold mb-3 ">
                      {slide.title}
                    </h2>
                    {slide.num && (
                      <span className="text-white  font-[700]  ">
                        {slide.num}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 items-center font-semibold text-2xl max-lg:text-lg max-xs:text-sm">
                    <p className="mb-5">{slide.desc}</p>
                    {slide.span2 && (
                      <span className="">
                        {slide.span2}
                      </span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
