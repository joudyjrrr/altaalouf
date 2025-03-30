import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";
import { sock_market_trading } from "../../../../public/images";
import ImportNote from "@/components/Layout/ImportNote";
import LicenseSection from "@/components/Layout/LicenseSection";
const cards = [
  {
    title: `Speculate in Both Rising and Falling Markets`,
    description:
      "CFDs are derivatives based on an underlying instrument. There is no ownership of the underlying asset, however they allow you to participate in the price movement of the asset. This means you can potentially profit in both rising and falling markets.In a rising market you would look to buy a CFD and then sell at a later date. This is called ‘going long’.In a falling market you would look to sell a CFD position first and then buy it back at a later date closing out the position. This is known as ‘going short’.",
  },
  {
    title: "Hedging Other Investments",
    description:
      "The ability ‘go long’ as well as ‘go short’ with CFDs means that they are a great tool for hedging an existing portfolio. They are a cost effective alternative to selling the portfolio prematurely and can be used to provide ‘insurance’ against adverse price movements.For example, if you have a long-term portfolio that you wish to keep, however you are of the view that there is some short term risk to the value of the portfolio you could use CFDs to ‘hedge’ your positions. If the value of the portfolio falls ",
  },
  {
    title: "Flexible Contract Sizes",
    description: `The contract sizes of CFDs are often less than the typical contract size of the underlying instrument which means you can gain exposure to the price movement of the instrument without a significant deposit. Flexible sizing allows you to tailor your trading according to your risk management criteria.`,
  },
  {
    title: "Access Global Financial Markets",
    description: `CFDs allow traders access to a wide range of global markets that would otherwise be difficult to access. CFDs make it easy to trade CFDs on Commodities like Gold, Silver, Oil, as well as a variety of global indices without having to trade the futures contract itself.`,
  },
  {
    title: "Efficient Use of Capital",
    description: `CFDs are leveraged products enabling traders to increase their exposure to an underlying asset with a small initial outlay. When you open a trade you only need to deposit a small percentage of the value of the position and this is known as margin. Your margin will vary depending on the value of your CFD position. Leverage can result in added gains should the market move in your favour, however it also carries risks and can result in increased looses should your position move against you.`,
  },
  {
    title: "Disadvantages",
    description: `ou should always consider your risk appetite and investment strategy prior to trading leveraged products. Leverage can work for you as well as against you and can magnify profits as well as losses. In the event of a significant move against you, you may lose more than your initial deposit. It is also important to be aware that you do not own the underlying instrument over which the CFD is based. Further information regarding the benefits and risks of CFD trading can be found in our Product Disclosure Statement.`,
  },
];

const page = () => {
  return (
    <div className="w-full h-full bg-primary">
      <div className="w-full  bg-optimizer_education_review   bg-cover bg-top bg-no-repeat  ">
        <div className="w-full pt-56 pb-24  bg-Education_Bg  bg-cover bg-center bg-no-repeat z-[100]">
          <div className="w-full  relative  text-center h-full flex justify-start items-center gap-8 flex-col">
            <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
              <h1 className={`text-secondary `}>{`Advantages `}</h1>
              <h1 className={`text-white `}>{`of CFDs`}</h1>
            </div>
            <h2 className="text-white text-xl">
              IC Markets Global offers flexible trading conditions across a
              broad range of CFDs covering Indices, Energies, Metals, <br />
              CFDs on Commodities and more.
            </h2>
            <Button className="bg-main_button  transition-all duration-800">
              Trade CFDs
              <FaCaretRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center w-full px-16 pt-8">
        <h1 className="text-[#038BD3] text-2xl font-bold leading-10">
          CFD stands for ‘Contract for Difference’ and is a contract between two
          parties <br /> agreeing to exchange the difference in the value of a
          security, instrument, or other <br /> asset between the time at which
          the CFD is opened and the time at which it is closed.
        </h1>
      </div>
      <div className="text-center w-full px-4 pt-8">
        <h1 className="text-white text-[18px]  leading-10">
          CFDs are extremely versatile products growing in popularity as a short
          term investment tool. They provide an efficient way <br /> of
          maximizing your capital outlay and can help diversify your existing
          investment portfolio or hedge a position. Some of <br /> the
          advantages of trading CFDs are listed below.
        </h1>
      </div>
      <div className="grid grid-cols-2 px-16 gap-8 py-16">
        {cards.map((cr, ind) => (
          <div
            key={ind}
            className="bg-about_Gr_Card w-full  p-8 text-center rounded-[20px] flex text-white flex-col gap-4 items-center justify-center"
          >
            <h1 className="text-xl  font-bold border-b-[1.5px] pb-3 border-[#08469A]">
              {cr.title}
            </h1>
            <p className="">{cr.description}</p>
          </div>
        ))}
      </div>
      <ImportNote />
      <LicenseSection />
    </div>
  );
};

export default page;
