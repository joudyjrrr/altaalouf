"use client";
import React, { useEffect, useRef, useState } from "react";
import { tutorial, arrowLeft, arrowRight } from "../../../../public/images";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import DwMethods from "@/components/Layout/DwMethods";
import Title from "@/components/Layout/Title";

const Page = () => {
  const [dir, setDir] = useState("ltr");
  const swiperRef = useRef(null);
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [dir]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDir(localStorage.getItem("dir") || "ltr");
    }
  }, []);

  useLanguageDirection();

  return (
    <div className="w-full h-full">
      <div className="w-full pt-32 bg-ourTeamBg  bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full pt-32  text-center h-full flex justify-center items-center gap-8 flex-col">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary `}>{`Forex `}</h1>
            <h1 className={`text-white `}>{`Tutorials`}</h1>
          </div>

          <div className="flex flex-col gap-1  text-white text-lg">
            <p>
              Join and trade through social networking, benefiting from the
              knowledge of trading experts to easily
            </p>
            <p>
              copy the best traders from around the world and achieve your
              goals! Join and trade through social
            </p>
            <p>networking, benefiting from knowledge.</p>
          </div>

          <div className="relative flex justify-center pb-24">
            <div className="absolute w-[90%] top-[230px] h-[50%] opacity-80 blur-[384px] bg-toutorial_gr_img"></div>
            <Image src={tutorial} alt="" className="w-[800px] relative z-[100]" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b tutorial from-[#0F2147] via-[#0F2147] via-100% to-[#0f2147] relative">
        <div className="bg-award_back h-full py-24 relative">
          <div className="absolute w-full h-[35%] bg-primary end-0 bottom-0"></div>
          <div className="w-full flex justify-center relative px-24">
            <div className=" flex justify-between items-center px-32  w-full absolute end-0 top-[30%] max-md:!bottom-0 z-[2000]">
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
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Pagination]}
              spaceBetween={1}
              slidesPerView={"auto"}
              autoplay={{ delay: 7000 }}
              centeredSlides={true}
              initialSlide={1}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!w-[75%] !mx-0 !px-0"
            >
              {[...Array(6)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="relative !w-[300px] !h-[200px]"
                >
                  <div className="next-prev"></div>
                  <Image
                    src={tutorial}
                    alt=""
                    className="!w-full !h-full z-[-1]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <DwMethods />
    </div>
  );
};

export default Page;
