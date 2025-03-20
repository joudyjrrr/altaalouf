import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";
import { sock_market_trading } from "../../../../public/images";
import ImportNote from "@/components/Layout/ImportNote";
import LicenseSection from "@/components/Layout/LicenseSection";
const cards = [
  {
    title: "24 Hour Market",
    description:
      "The Forex market is open 24 hours a day, 5 days a week. Trading starts when major global financial centres around the world open. The market opens in New Zealand on Sunday evening and ends after the market closes in New York on Friday. The greatest liquidity occurs when multiple time zones overlap.",
  },
  {
    title: "Transparency",
    description:
      "In some exchange based markets, larger players have been known to move stocks or CFDs on Commodities in order to gain an unfair advantage. Given the deep liquidity in the foreign exchange market it is almost impossible to interfere with general market forces. This results in a fair and transparent market for all participants.",
  },
  {
    title: "Trade Both Rising and Falling Markets",
    description:
      "There are no restrictions in the Forex market as to which direction you can trade. This means that if you believe a currency pair is going to increase in value you can buy it or ‘go long’. Similarly, if you believe the pair is going to decrease in value you could sell it, or ‘go short’.",
  },
  {
    title: "Accessibility",
    description:
      "The amount required to trade Forex is generally lower than what would be required to trade other financial markets. In addition to this, multiple desktop and mobile trading platforms make it easy to access the Forex markets at any time.",
  },
  {
    title: "Leverage",
    description:
      "Forex can be traded on leverage. Leverage means a lower initial outlay is required to open a larger position. For example, if you have $1,000 in your trading account and use leverage of 1:100, you would be able to open a position with a value of $100,000 (100 times the amount in the your account). It is however important to note that although leverage gives traders the ability to open larger positions to maximise potential profits, the potential for loss is equally as large..",
  },
  {
    title: "Volatility",
    description:
      "Due to the huge daily volumes of the Forex market there is always volatility. Increased volatility means more access to trading opportunities. You have the ability to pick currency pairs that suit your trading style. For example the AUD/NZD is a great currency to begin trading as a beginner due to its lower daily range and low spread, whereas the EUR/USD would be better suited for an advanced trader due to its large daily range and the speed with which it moves. ",
  },
  {
    title: "Liquidity",
    description:
      "Forex can be traded on leverage. Leverage means a lower initial outlay is required to open a larger position. For example, if you have $1,000 in your trading account and use leverage of 1:100, you would be able to open a position with a value of $100,000 (100 times the amount in the your account). It is however important to note that although leverage gives traders the ability to open larger positions to maximise potential profits, the potential for loss is equally as large.",
  },
  {
    title: "Disadvantages",
    description:
      "You should always consider your risk appetite and investment strategy prior to trading leveraged products. Leverage can work for you as well as against you and can magnify profits as well as losses. In the event of a significant move against you, you may lose more than your initial deposit. Further information regarding the benefits and risks can be found in our Product Disclosure Statement.",
  },
  {
    title: "Low Cost of Trading",
    description:
      "The cost per transaction in Forex is less than a tenth of the cost of your average stock trade. This represents a huge saving. It also means a lower investment amount is needed to begin trading Forex.",
  },
  {
    title: "Non-Standardised Contract Sizes",
    description:
      "Forex is an over-the-counter market unlike the stock and futures markets. This means Forex traders have flexibility in position sizing and can trade any amount between 0.01 lots (1 micro lot) and 200 lots. This gives traders a greater ability to manage their risk.",
  },
];

const page = () => {
  return (
    <div className="w-full h-full bg-primary">
      <div className="w-full pt-56 pb-24  bg-Education_Bg  bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full  relative  text-center h-full flex justify-start items-center gap-8 flex-col">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary `}>{`Advantages   `}</h1>
            <h1 className={`text-white `}>{` of Forex`}</h1>
          </div>
          <h2 className="text-white text-xl">
            The Forex market is the world’s largest financial market and is open
            24 hours a day, 5 days a week. Trade Forex whenever it suits you.
          </h2>
          <Button className="bg-main_button  transition-all duration-800">
            Trade Forex
            <FaCaretRight />
          </Button>
        </div>
      </div>
      <div className="text-center w-full px-16 pt-8">
        <h1 className="text-[#038BD3] text-3xl font-bold leading-10">
          Margin foreign exchange is a contract between two parties agreeing to
          exchange the <br /> difference in the value of a currency between the
          time at which the position is <br /> opened and the time at which it
          is closed.
        </h1>
      </div>
      <div className="text-center w-full px-4 pt-8">
        <h1 className="text-white text-[22px]  leading-10">
          The main advantage of foreign exchange (Forex) is that is open around
          the clock 24 hours a day 5 days a week, enabling <br /> traders to buy
          and sell from Sunday night to Friday night and access leverage in
          order to speculate from global currency <br />
          flows and news events. Forex is also the largest and most liquid
          market in the world making it the last of the true arenas <br /> where
          fair market competition and real price discovery exists. <br />
          Some of the advantages of Forex trading are listed below. Find out why
          Forex is fastest growing market in the world.
        </h1>
      </div>
      <div className="grid grid-cols-2 px-16 gap-8 py-16">
        {cards.map((cr, ind) => (
          <div
            key={ind}
            className="bg-about_Gr_Card w-full  p-8 text-center rounded-[20px] flex text-white flex-col gap-4 items-center justify-center"
          >
            <h1 className="text-2xl  font-bold border-b-[1.5px] pb-3 border-[#08469A]">
              {cr.title}
            </h1>
            <p className="text-lg">{cr.description}</p>
          </div>
        ))}
      </div>
      <ImportNote/>
        <LicenseSection />
    </div>
  );
};

export default page;
