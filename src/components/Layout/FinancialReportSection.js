"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FinancialReportSection = ({ data, className }) => {
  return (
    <div
      className={`mt-16 grid grid-cols-4 max-mdd:grid-cols-2 
      gap-6 px-32 max-sLg:px-8 py-8 justify-center mx-auto ${className} max-sm:px-4`}
    >
      {data.map((d, idx) => (
        <div
          key={idx}
          className="w-full flex flex-col justify-center items-center text-center"
        >
          <div className="w-[200px]  h-[200px] max-sm:w-[150px]   max-sm:h-[150px]  overflow-hidden rounded-xl relative">
            <CircularProgressbar
              value={d.value}
              minValue={0}
              maxValue={100}
              strokeWidth={5}
              circleRatio={0.85}
              styles={buildStyles({
                pathColor: "#00A8FF",
                trailColor: "#FFFFFF",
                strokeLinecap: "round",
                textColor: "#00A8FF",
                textSize: "18px",
                rotation: 0.57,
              })}
            />
            <div
              className={`flex  text-secondary text-4xl w-full justify-center
                 items-center font-bold absolute  top-[35%]  ${d.textValue === "K" ? "!flex-row" : "!flex-col"
                }`}
            >
              <span className="text-5xl font-bold max-mdd:text-4xl"> {d.value}</span>
              <span
                className={`font-bold  ${d.textValue === "K" ? "text-5xl max-mdd:text-4xl" : "text-3xl max-mdd:text-xl"
                  }`}
              >
                {" "}
                {d.textValue}
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-white mt-4 text-lg max-sm:text-sm font-semibold">{d.text}</h1>
            <h1 className="text-white  text-lg max-sm:text-sm font-semibold">{d.text2}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinancialReportSection;
