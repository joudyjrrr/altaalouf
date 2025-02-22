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
      <div className="flex justify-between relative w-full  mt-[70px]">
        <div className="w-full flex justify-start text-white pt-20  px-16 max-lg:px-4 max-xs:!pb-32">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-7xl font-extrabold">Trade Like a </h1>
            <h1 className="text-7xl font-extrabold text-secondary">Legend</h1>
            <div>
              <p className="text-2xl">
                Trade over 400 Global Instruments from FX,
              </p>
              <p className="text-2xl">
                {" "}
                Metals Shares, and Indices with{" "}
                <span className="font-semibold">INZO</span>.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Button className="bg-main_button">
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
