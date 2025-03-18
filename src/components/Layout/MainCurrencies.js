import React from 'react'
import Table from '../ui/table'
import { US } from '../../../public/images';
import Image from 'next/image';

const cols = [
  {
    name: "Symbol",
    selector: (row) => (
      <div className="ps-4">
        <Image alt="" width={25} height={25} src={row.symbol} />
      </div>
    ),
  },
  {
    name: "Instrument",
    selector: (row) => (
      <span>
        <span className="bg-[#1A2A48] p-2 rounded-lg mx-2">{row.sub_name}</span>{" "}
        {row.name}
      </span>
    ),
  },
  {
    name: "Price",
    selector: (row) => <span>{row.price}</span>,
  },
];
const data = [
  {
    symbol: US,
    name: "Australian Dollar / U.S. Dollar",
    sub_name: "AUDUSD",
    price: "0.6275",
  },
  {
    symbol: US,
    name: "Australian Dollar / U.S. Dollar",
    sub_name: "AUDUSD",
    price: "0.6275",
  },
];
const MainCurrencies = () => {
  return (
    <div className="bg-[#061534] w-full   mt-16 rounded-md flex flex-col gap-4 text-start">
    <h1 className="text-white text-2xl p-6">Main Currencies</h1>
    <Table
      table={{
        columns: cols,
        data: data,
      }}
    />
  </div>
  )
}

export default MainCurrencies