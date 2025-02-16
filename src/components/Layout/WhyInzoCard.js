import Image from "next/image";
import React from "react";

const WhyInzoCard = ({ img, title, description }) => {
  return (
    <div className="flex transition duration-500 transform hover:scale-95 hover:-translate-y-5 flex-col text-center rounded-[50px] justify-center items-center border bg-[#040614] border-[#ececec] px-4 py-5 shadow-lg shadow-gray-400">
      <Image    alt="" src={img} width={`100%`} height={``} className="max-w-[300px] max-sm:max-w-[200px]" />
      <p className="text-2xl font-semibold max-sm:text-lg">{title}</p>
    </div>
  );
};

export default WhyInzoCard;
  