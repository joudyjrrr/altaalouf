"use client";
import React from "react";

import OurTeamSection from "../../../components/Layout/OurTeamSection";

import {
  mTeem1,
  mTeem2,
  mTeem3,
  mTeem4,
  mTeem5,
} from "../../../../public/images";

let imgData = [
  { img: mTeem2, name: "Mark", role: "CEO" },
  { img: mTeem1, name: "Jason", role: "HR Manager" },
  { img: mTeem3, name: "Chris", role: "Finance Manager" },
  { img: mTeem5, name: "Natasia", role: "Insight Manager" },
  { img: mTeem4, name: "Andy", role: "B2B Manager" },
];

const page = () => {
  return (
    <div className="w-full h-full bg-[#0F2147] pb-20">
      <div className="w-full pt-36 bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
        <div className="w-full   h-full flex flex-col justify-center items-end max-sm:items-center  pb-8">
          <div className="flex flex-col gap-2 text-center w-full ">
            <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
              <h1 className={`text-secondary `}>{`Our`}</h1>
              <h1 className={`text-white `}>{`Team`}</h1>
            </div>
            <div className="flex flex-col gap-2 text-white text-lg max-md:text-sm">
              <p>
                Meet the passionate individuals driving our mission forward,
                blending expertise, creativity, and
              </p>
              <p>dedication to achieve exceptional results.</p>
            </div>
          </div>
          <OurTeamSection imgData={imgData} showButton={true} />
        </div>
      </div>
      <OurTeamSection imgData={imgData} showButton={true} />
      <OurTeamSection imgData={imgData} showButton={true} />
    </div>
  );
};

export default page;
