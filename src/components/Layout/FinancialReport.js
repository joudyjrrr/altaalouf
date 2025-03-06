import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Title from "./Title";

const FinancialReport = () => {
  const data = [
    { value: 5, textValue: "Million", text: "Monthly ", text2: "Withdrawal" },
    { value: 50, textValue: "K", text: "MonthlyIB", text2: "Withdrawal" },
    {
      value: 75,
      textValue: "Billion",
      text: "Monthly ",
      text2: "Trading Range",
    },
    { value: 30, textValue: "K", text: "Monthly ", text2: "Active Client" },
  ];
  return (
    <div className="bg-stars_white bg-[#0f2147]  w-full pb-12   ">
      <div className="bg-stars_white bg-center bg-no-repeat bg-cover h-full">
        <Title title1={`Financial`} title2={`Report`} />
        <div className="mt-16 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 px-32 py-8 justify-center mx-auto">
          {data.map((d, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col justify-center items-center text-center"
            >
              <div className="w-[200px] h-[200px] overflow-hidden rounded-xl relative">
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
                  className={`flex  text-secondary text-4xl w-full justify-center items-center font-bold absolute  top-[35%] ${
                    d.textValue === "K" ? "!flex-row" : "!flex-col"
                  }`}
                >
                  <span className="text-5xl font-bold"> {d.value}</span>
                  <span
                    className={`font-bold ${
                      d.textValue === "K" ? "text-5xl" : "text-3xl"
                    }`}
                  >
                    {" "}
                    {d.textValue}
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-white mt-4 text-lg font-semibold">{d.text}</h1>
                <h1 className="text-white  text-lg font-semibold">{d.text2}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialReport;
