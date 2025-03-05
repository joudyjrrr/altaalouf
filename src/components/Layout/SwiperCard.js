import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import { arrowIcon, cardLogo } from "../../../public/images";
const SwiperCard = ({ cardData, className }) => {
  if (!cardData) return null;
  return (
    <div
      className={`p-6 mx-auto bg-card_Bg bg-cover bg-center h-[450px] w-[350px] 
   rounded-xl text-white flex flex-col items-center ${className}`}
    >
      <div className="w-full flex gap-4">
        <div className="w-full flex flex-col ps-5">
          <div className="flex justify-between overflow-visible max-h-[50px]">
            <h3 className="text-[41px] font-bold ">{cardData.title}</h3>
            <Image
              src={cardLogo}
              alt="icon"
              className="w-[97px] h-[97px] relative bottom-[15px]"
            />
          </div>
          <div className="mt-3">
            {cardData.features.map((item, index) => (
              <p
                key={index}
                className="text-[16.5px] font-medium mt-[.4rem] flex items-center "
              >
                <Image
                  src={arrowIcon}
                  alt="icon"
                  width={12}
                  height={12}
                  className="me-4"
                />
                {item}
              </p>
            ))}
          </div>
          <Button className="button-border hover:bg-main_button  p-[21px_18px] max-w-[235px] m-auto mt-4">
            Open Demo Account <FaCaretRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
