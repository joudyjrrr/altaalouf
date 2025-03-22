import React from "react";
import {
  Explore,
  Apps,
  mobileInzo,
  gift,
  square_left,
  square_rigtht,
} from "../../../public/images";
import Image from "next/image";
import Switch from "./Switch";
const ExploreSection = () => {
  return (
    <div className="w-full h-full relative">
      <div className="relative z-[1000] bg-star_background  h-full text-white mt-16 max-md:pt-8 trend_clip">
        <div className="relative w-full bg-transparent flex justify-center items-center text-center pt-8">
          <Image
            src={Explore}
            width={200}
            height={50}
            className=""
            alt="inzo"
          />
          <div className="absolute top-[55px] flex gap-2 text-5xl max-md:text-4xl font-bold">
            {" "}
            <h1 className="text-white">{`Our`}</h1>
            <h1 className="text-secondary">{`Trading Platforms`}</h1>
          </div>
          {/* <div className='absolute top-[100px] end-[25%]'>
                        <Image src={arrwos} width={200} height={50} className="" alt="inzo" />
                    </div> */}
        </div>
        <div className="flex px-32 pt-10 justify-between max-md:flex-col">
          <Image
            src={mobileInzo}
            width={500}
            height={50}
            className="max-md:hidden"
            alt="inzo"
          />
          <div className="flex flex-col items-center  pt-[8rem] max-md:pt-0">
            <div className="flex flex-col text-center gap-1 text-white text-2xl  max-md:text-sm font-medium">
              <h1>Download our app</h1>
              <h1>for all type of your devices.</h1>
            </div>
            <Switch className2={`!text-white`} />
            <Image
              src={Apps}
              alt=""
              className="w-[400px] max-md:max-w-[300px] max-mdw-[300px] my-4"
            />
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="flex gap-4 max-md:gap-1">
            <div className="bg-social_gradiant rounded-xl p-4  max-md:p-2 ">
              <div className="flex justify-between ">
                <h1 className="text-secondary  text-5xl max-md:text-4xl font-semibold">
                  {" "}
                  <span>$</span>30
                </h1>
                <Image src={gift} alt="" className="w-[60px] max-md:w-[40px]" />
              </div>
              <h1 className="text-2xl  max-md:text-lg">Welcome Bonus</h1>
              <p className="text-lg max-md:text-sm">
                Open real trading account and get .
              </p>
              <p className=" max-md:text-xs">$30 welcome bonus</p>
            </div>

            <div className="bg-social_gradiant rounded-t-xl p-4 max-md:p-1 pb-8">
              <div className="flex justify-between ">
                <h1 className="text-secondary  text-5xl max-md:text-4xl font-semibold">
                  30 <span>%</span>
                </h1>
                <Image src={gift} alt="" className="w-[60px] max-md:w-[40px]" />
              </div>
              <h1 className="text-2xl mb-2 max-md:text-lg">Deposit Bonus</h1>
              <p className="text-lg max-md:text-sm">
                Deposit money for 30% bonuses.
              </p>
              <p className=" max-md:text-xs">on your account</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between absolute bottom-[-70px] w-full">
        <Image
          src={square_left}
          width={400}
          height={400}
          className=""
          alt="inzo"
        />
        <Image
          src={square_rigtht}
          width={400}
          height={400}
          className=""
          alt="inzo"
        />
      </div>
      </div>
    
    </div>
  );
};

export default ExploreSection;
