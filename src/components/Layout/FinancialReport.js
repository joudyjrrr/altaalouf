import React from "react";

import Title from "./Title";
import FinancialReportSection from "./FinancialReportSection";

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
        <FinancialReportSection data={data} />
      </div>
    </div>
  );
};

export default FinancialReport;
