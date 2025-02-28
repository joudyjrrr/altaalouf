import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Title from "./Title";

const FinancialReport = () => {
  const data = [
    { value: 1, textValue: "Million", text: "Monthly Withdrawal" },
    { value: 50, textValue: "K", text: "MonthlyIB Withdrawal" },
    { value: 75, textValue: "Billion", text: "Monthly Trading Range" },
    { value: 30, textValue: "K", text: "Monthly Active Client" },
  ];
  return (
<<<<<<< HEAD
    <div className="bg-stars_white bg-[#0f2147]  w-full pb-12 mb-12  ">
=======
    <div className="bg-stars_white bg-[#0f2147]  w-full pb-12   ">
>>>>>>> 8ebdc52a07dadd82e90c9a0d50f5af098cb5c3c1
      <div className="bg-stars_white bg-center bg-no-repeat bg-cover h-full">
        <Title title1={`Financial`} title2={`Report`} />
        <div className="mt-16 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 px-32 py-8 justify-center mx-auto">
          {data.map((d, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col justify-center items-center text-center"
            >
              <div className="w-[200px] h-[175px] overflow-hidden rounded-xl relative">
                <CircularProgressbar
                  value={d.value}
                  minValue={0}
                  maxValue={100}
                  strokeWidth={5} // تقليل سمك الخط لجعل الشكل أنيق
                  styles={buildStyles({
                    pathColor: "#00C0FF",
                    trailColor: "#fff",
                    textColor: "#00AEEF",
                    textSize: "12px",
                    rotation: 75,
                  })}
                />
                <div
                  className={`flex  text-secondary text-4xl w-full justify-center items-center font-bold absolute  top-[35%] ${
                    d.textValue === "K" ? "!flex-row" : "!flex-col"
                  }`}
                >
                  <span> {d.value}</span>
                  <span> {d.textValue}</span>
                </div>
              </div>
              <h1 className="text-white mt-4 text-lg">{d.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialReport;
