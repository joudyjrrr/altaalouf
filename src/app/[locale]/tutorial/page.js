"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    tutorial, arrowLeft,
    arrowRight,
} from "../../../../public/images";
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
            <div className="w-full pt-4 bg-banner h-screen bg-cover bg-center bg-no-repeat z-[100]">
                <div className="w-full pt-32 bg-tutorial_Gr text-center h-full flex justify-center items-center gap-4 flex-col">
                
                    <Title title1={`Forex`} title2={`Tutorials`} classNameImg={`hidden`} />

                    <div className="flex flex-col gap-1 text-white text-lg">
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
                    <Image src={tutorial} alt="" className="w-[800px]" />
                </div>
            </div>

            <div className="bg-gradient-to-b tutorial from-[#0F2147] via-[#0F2147] via-80% to-[#0f2147] relative">
                <div className="bg-award_back h-full py-24">
                    <div className="w-full flex justify-center relative px-24">
                        <div className=" flex justify-between items-center px-12  w-full absolute end-0 top-[30%] max-md:!bottom-0 z-[2000]">
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
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView="auto"
                            autoplay={{ delay: 3000 }}
                            centeredSlides={true}
                            loop={true} 
                            dir={dir}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="w-[98%] max-w-[1200px]"
                        >
                            {[...Array(6)].map((_, index) => (
                                <SwiperSlide key={index} className="!w-fit relative">
                                    <div className="next-prev"></div>
                                    <Image src={tutorial} alt="" className="w-[400px] z-[-1]" />
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
