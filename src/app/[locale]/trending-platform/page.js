import Switch from "@/components/Layout/Switch";
import Title from "@/components/Layout/Title";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full bg-[#0F2147] pb-20">
      <div className="w-full pt-44 bg-ourTeamBg h-screen  bg-cover bg-top bg-no-repeat  z-[100]">
        <div className="w-full    text-center h-full flex justify-start items-center gap-2 flex-col">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary `}>{`Trading `}</h1>
            <h1 className={`text-white `}>{`Platforms`}</h1>
          </div>
          <p className="text-xl text-white">
            Download our app for all type of your devices.
          </p>
          <Switch className2={`!text-white`} />
        </div>
      </div>
    </div>
  );
};

export default page;
