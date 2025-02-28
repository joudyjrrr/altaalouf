"use client"
import React, { useEffect, useState } from 'react'
import { tutorial } from "../../../../public/images"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLanguageDirection from '@/i18n/useLanguageDirection';
import DwMethods from '@/components/Layout/DwMethods';
const page = () => {
    const [dir, setDir] = useState("ltr");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setDir(localStorage.getItem("dir") || "ltr");
        }
    }, []);

    useLanguageDirection();
    return (
        <div className='w-full h-full'>
            <div className="w-full pt-4 bg-banner h-screen  bg-cover bg-center bg-no-repeat   z-[100]">
                <div className="w-full pt-32 bg-tutorial_Gr text-center h-full flex justify-center items-center gap-4 flex-col">
                    <div className='flex gap-2 text-5xl font-semibold'><h1 className='text-secondary'>Forex</h1><h1 className='text-white'>Tutorials</h1></div>
                    <div className='flex flex-col gap-1 text-white text-lg'>
                        <p>Join and trade through social networking, benefiting from the knowledge of trading experts to easily</p><p> copy the best traders from around the world and achieve your goals! Join and trade through social</p><p> networking, benefiting from knowledge.</p>
                    </div>
                    <Image src={tutorial} alt='' className='w-[800px]' />
                </div>

            </div>
            <div className={`bg-gradient-to-b  tutorial  from-[#0F2147]  via-[#0F2147] via-80% to-[#0f2147] relative `}>
                <div className="bg-award_back h-full py-24">
                    <div className="w-full  pb-3">
                        <Swiper
                            modules={[Autoplay,Pagination]}
                            spaceBetween={10}
                            slidesPerView={3}    
                            autoplay={{ delay: 3000 }}
                            centeredSlides={true}
                            loop={true}
                            dir={dir}
                           className="px-6 w-[98%]"
                        >
                            {[...Array(6)].map((_, index) => (
                                <SwiperSlide dir={dir} key={index} className='!w-fit relative'>
                                    <Image src={tutorial} alt='' className='w-[400px] z-[-1]' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <DwMethods />
        </div>
    )
}

export default page