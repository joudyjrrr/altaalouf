import React from "react";
import { Button } from "../ui/button";

const Switch = ({ title1, title2, className, className1, className2 }) => {
  return (
    <div
      className={`flex button-border-transparent !rounded-[100px] my-4 md:my-8 w-[300px] max-md:!w-[250px] !p-[5px] ${className}`}
    >
      <Button
        className={`bg-main_button rounded-[50px] !p-[22px] w-full text-2xl max-md:text-lg font-bold cursor-pointer ${className1}`}
      >
        {title1 ? title1 : "MT5"}
      </Button>
      <Button
        className={`bg-transparent rounded-[50px] !p-[22px] w-full text-2xl max-md:text-lg font-bold cursor-pointer text-[#0F2147] ${className2}`}
      >
        {title2 ? title2 : "cTrader"}
      </Button>
    </div>
  );
};

export default Switch;
