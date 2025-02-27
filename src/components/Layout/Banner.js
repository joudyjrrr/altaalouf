"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import {
  FaCaretRight,
} from "react-icons/fa";
import VerticalSotial from "./VerticalSotial";

const Banner = () => {
  const t = useTranslations();
  return (
    <div className="w-full pt-4 bg-banner h-[100vh]  bg-cover bg-center bg-no-repeat   z-[100]">
      <div className="flex justify-between relative w-full  mt-[70px] max-md:flex-col max-md:gap-8">
        <div className="w-full flex justify-start max-md:justify-center text-white pt-20  px-16 ">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-7xl font-extrabold max-md:text-5xl">Trade Like a </h1>
            <h1 className="text-7xl font-extrabold text-secondary max-md:!text-5xl">Legend</h1>
            <div>
              <p className="text-2xl max-md:text-lg">
                Trade over 400 Global Instruments from FX,
              </p>
              <p className="text-2xl max-md:text-lg">
                Metals Shares, and Indices with
                <span className="font-semibold">INZO</span>.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Button className="bg-main_button  transition-all duration-800">
                Open Real Account
                <FaCaretRight />
              </Button>
              <Button className="button-border">
                Open Demo Account <FaCaretRight />
              </Button>
            </div>
          </div>
        </div>
        <VerticalSotial />
      </div>
    </div>
  );
};

export default Banner;
