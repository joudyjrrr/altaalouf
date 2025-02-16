import React from "react";
import Title from "./Title";
import WhyInzoCard from "./WhyInzoCard";
import {
  why1, why2, why3, why4, why5, why6
} from "../../../public/images"

const WhyInzo = () => {
  return (
    <div className="w-full px-8 mt-[80px]  max-sm:mt-[10px]">
      <div className="flex flex-col justify-center items-center text-white">
        <Title className={`mb-8`} title={`لماذا تختار INZO انزو؟`} />
        <h2 className="text-[25px] text-start max-sm:text-sm max-sm:text-center">
          ببساطة نحن نقدر الثقة والشفافية والمستوى العالي من الاحترام قبل كل
          شيء، ونقدم لعملائنا الأدوات المناسبة لتعزيز رحلة تداولهم.
        </h2>
        <div className="grid grid-cols-3 gap-8 w-full mt-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <WhyInzoCard img={why1} title={`تأسست INZO انزو L.L.C في SVG برقم تسجيل 967 LLC 2021`} />
          <WhyInzoCard img={why2} title={`تأسست INZO انزو L.L.C في SVG برقم تسجيل 967 LLC 2021`} />
          <WhyInzoCard img={why3} title={`تأسست INZO انزو L.L.C في SVG برقم تسجيل 967 LLC 2021`} />
          <WhyInzoCard img={why4} title={`تأسست INZO انزو L.L.C في SVG برقم تسجيل 967 LLC 2021`} />
          <WhyInzoCard img={why5} title={`تأسست INZO انزو L.L.C في SVG برقم تسجيل 967 LLC 2021`} />
          <WhyInzoCard img={why6} title={`تأسست INZO انزو L.L.C في SVG برقم تسجيل 967 LLC 2021`} />


        </div>
      </div>
    </div>
  );
};

export default WhyInzo;
