import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import {
  location1,
  location2,
  location3,
  Testimonials,
  Testimonials1,
  gold_star,
  coma,
  arrowLeft,
  arrowRight,
} from "../../../public/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Button } from "../ui/button";
import useLanguageDirection from "@/i18n/useLanguageDirection";

const data = [
  {
    img: location1,
    title: "United Arab Emirates",
  },
  {
    img: location2,
    title: "London",
  },
  {
    img: location3,
    title: "Lebanon",
  },
  {
    img: location3,
    title: "Lebanon",
  },
  {
    img: location1,
    title: "United Arab Emirates",
  },
];
const dataTestimonials = [
  {
    img: Testimonials1,
  },
  {
    img: Testimonials1,
  },

  {
    img: Testimonials1,
  },
];
const RepresentativeSection = () => {
  const swiperRef = useRef(null);
  const dir =
    typeof window !== "undefined" ? localStorage.getItem("dir") : "ltr";
  const [swiperKey, setSwiperKey] = useState(0);
  useLanguageDirection();
  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [dir]);
  useLanguageDirection();
  return (
    <div className="bg-[#030613] h-full Testimonials    ">
      <div className="w-full h-full">
        <Title
          title1={`Representative`}
          title2={`Location`}
          title2Color={`white`}
        />
        <Swiper
          key={swiperKey}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 5000 }}
          dir={dir}
          className="!p-8 mt-12"
        >
          {data.map((d, index) => (
            <SwiperSlide dir={dir} key={index}>
              <div className="bg-location_back rounded-xl gap-8 h-[500px] bg-no-repeat bg-center flex justify-start p-8 flex-col items-center">
                <Image src={d.img} alt="" height={300} />
                <h1 className="text-2xl font-semibold text-white ">
                  {d.title}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-between w-full items-center pe-16 h-[200px]">
        <div
          className={`relative w-full bg-transparent flex justify-center items-center text-center pt-8 `}
        >
          <Image
            src={Testimonials}
            width={300}
            height={50}
            className="image-mask"
            alt="inzo"
          />
          <div className="absolute top-[45px] flex gap-2 text-5xl font-bold">
            <h1 className={`text-secondary`}>{`What  People Are`}</h1>
            <h1 className={`text-white`}>{`Saying`}</h1>
          </div>
        </div>
        <div className="w-full flex justify-end items-center h-full pt-12">
          <Button className="button-border w-fit !rounded-lg text-lg">
            View More
          </Button>
        </div>
      </div>
      <div className="relative ">
        <div className=" flex justify-center items-center gap-32 mt-6 absolute end-0 bottom-[10%] z-[2000]">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="relative z-[2000]"
          >
            <Image
              src={arrowLeft}
              alt="icon"
              width={22}
              height={22}
              className="me-4 rtl:rotate-180 "
            />
          </button>
          <div
            style={{
              top: "10px !important",
            }}
            className="custom-pagination3   flex justify-center gap-2 !top-0 absolute z-[1000000000000]"
          ></div>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="relative z-[2000]"
          >
            <Image
              src={arrowRight}
              alt="icon"
              width={22}
              height={22}
              className="me-4  rtl:rotate-180"
            />
          </button>
        </div>
        <Swiper
          key={swiperKey}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{
            el: ".custom-pagination3",
            clickable: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          dir={dir}
          spaceBetween={40}
          slidesPerView={"auto"}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1.3, spaceBetween: 20 },
            1024: { slidesPerView: 1.7, spaceBetween: 30 },
          }}
          className="!p-8 mt-12"
        >
          {dataTestimonials.map((d, index) => (
            <SwiperSlide dir={dir} key={index} className="!w-[65%] ">
              <div className="bg-Testimonial_back rounded-xl">
                <div className="bg-award_back gap-8 bg-no-repeat flex flex-col bg-center p-8">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-8">
                      <Image src={d.img} alt="" />
                      <div className="flex flex-col text-white justify-center">
                        <h1 className="text-3xl font-semibold">
                          Hashim Al-Sakkal
                        </h1>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src={gold_star}
                              alt=""
                              width={25}
                              height={25}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-secondary text-xl font-medium">
                      2021-05-05
                    </p>
                  </div>
                  <div className="flex items-start gap-8">
                    <Image src={coma} alt="" width={80} height={80} />
                    <div className="flex flex-col gap-1 text-white text-xl">
                      <p>
                        From my experience with INZO, I've opened more than one
                      </p>
                      <p>
                        account with different brokers, but finally, I found
                        this
                      </p>
                      <p>broker has many advantages...</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RepresentativeSection;
