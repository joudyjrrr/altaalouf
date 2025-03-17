"use client"
import { Input } from "@/components/ui/input";
import Table from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { standardConfig } from "@/lib/data/standardConfig";
import React from "react";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const tabs = [
  { title: "Standard", value: "Standard" },
  { title: "Stocks", value: "Stocks" },
  { title: "INZO Vip", value: "Vip" },
  { title: "Zero", value: "Zero" },
  { title: "Zero Standard", value: "Zero_Standard" },
];
const tabs2 = [
  { title: "Forex", value: "Forex" },
  { title: "Index", value: "Index" },
  { title: "Metals", value: "Metals" },
  { title: "Crypto", value: "Crypto" },
  { title: "Energy", value: "Energy" },
];
const cols = [
  {
    name: "Instrument Name",
    selector: (row) => (
      <span>
        {row.name}
      </span>
    ),
  },
  {
    name: "Nominal Value of contract size",
    selector: (row) => (
      <span>
        {row.value}
      </span>
    ),
  width:"200px"
  },
  {
    name: "Quote precision",
    selector: (row) => (
      <span>
        {row.quote}
      </span>
    ),

  },
  {
    name: "Minimum Order Size in Units",
    selector: (row) => (
      <span>
        {row.size}
      </span>
    ),
     width:"200px"
  },
  {
    name: "Markup Bid",
    selector: (row) => (
      <span>
        {row.bid}
      </span>
    ),

  },
  {
    name: "Markup Ask",
    selector: (row) => (
      <span>
        {row.ask}
      </span>
    ),

  },
  {
    name: "Spread Min",
    selector: (row) => (
      <span>
        {row.spread}
      </span>
    ),

  },
  {
    name: "Sunday Open GMT+2",
    selector: (row) => (
      <span>
        {row.open}
      </span>
    ),

  },
  {
    name: "Friday Close GMT+2",
    selector: (row) => (
      <span>
        {row.close}
      </span>
    ),
  },
]
const page = () => {
  return (
    <div className="w-full h-full bg-primary">
      <div className="w-full pt-32 bg-ourTeamBg  bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full  relative  h-full flex justify-center  items-center  gap-4 flex-col">
          <div className="flex gap-2 mt-44 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary `}>{`Financial  `}</h1>
            <h1 className={`text-white `}>{` Markets`}</h1>
          </div>
          <div className="w-full flex justify-center items-center">
          <Tabs defaultValue="Standard" className="mb-8 w-full px-16">
            <TabsList className="flex !bg-transparent gap-4">
              {tabs.map((tab, idx) => (
                <TabsTrigger
                  key={idx}
                  value={tab.value}
                  className={`data-[state=active]:border-b-2 font-semibold data-[state=active]:border-secondary`}
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent
              value="Standard"
              className={`bg-[#061534] shadow-md  w-[100%] rounded-lg p-4 mt-4`}
            >
              <div>
                <Tabs defaultValue="Forex" className="mb-8 w-full">
                  <div className="w-full flex gap-8">
                    <TabsList className="flex !bg-transparent gap-4 w-full">
                      {tabs2.map((tab, idx) => (
                        <TabsTrigger
                          key={idx}
                          value={tab.value}
                          className={`data-[state=active]:bg-[#10253F] rounded-md font-medium data-[state=active]:!text-secondary`}
                        >
                          {tab.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <div className=" relative w-[70%]">
                      <input
                        className="border-none w-full h-12 !py-4 focus:outline-none focus:border-none !ps-10 bg-[#1A2A48] rounded-md text-white placeholder:text-white placeholder:text-lg"
                        placeholder={`Search`}
                      />
                      <IoIosSearch className="text-secondary text-2xl absolute start-[10px] top-[10px]" />
                    </div>
                  </div>
                  <TabsContent value="Forex">
                    <Table
                      table={
                        {
                          columns: cols,
                          data: standardConfig.forex
                        }
                      }
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
