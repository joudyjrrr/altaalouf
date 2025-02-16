import React from "react";
import {
  asia,
  bit,
  bank,
  Ethereum,
  perfect,
  payeer,
  p2p,
  visaMaster,
  tether,
  voucherry,
} from "../../../public/images";
import Title from "./Title";
import Image from "next/image";
const DepositMethod = () => {
  return (
    <div className="w-full px-8 mt-4 md:mt-[250px]  ">
      <div className="flex flex-col justify-center items-center text-white">
        <Title className={`mb-8`} title={`طرق الإيداع والسحب`} />

        <div className="grid grid-cols-1 md:grid-cols-5  gap-y-10 w-full mt-8 ">
          {[
            asia,
            bit,
            bank,
            Ethereum,
            perfect,
            payeer,
            p2p,
            visaMaster,
            tether,
            voucherry,
          ].map((img, index) => (
            <div key={index} className="hover-effect mx-auto">
              <Image
                src={img}
                alt=""
                width={`100%`}
                height={`60`}
                className="max-w-[250px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositMethod;
