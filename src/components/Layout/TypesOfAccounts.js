import React from "react";
import Title from "./Title";
import { Button } from "../ui/button";
import { account1, account2, account3, account4 } from "../../../public/images";
import AccountCard from "./AccountCard";
import { useTranslations } from "next-intl";

const TypesOfAccounts = () => {
  const data = [
    {

      1: "accountInzoVip1",
      2: "accountInzoVip2",
      3: "accountInzoVip3",
      4: "accountInzoVip4",
      5: "accountInzoVip5",
      6: "accountInzoVip6",
      7: "accountInzoVip7",
      8: "accountInzoVip8",
      9: "accountInzoVip9"
    },
    {

      1: "accountZeroStandard1",
      2: "accountZeroStandard2",
      3: "accountZeroStandard3",
      4: "accountZeroStandard4",
      5: "accountZeroStandard5",
      6: "accountZeroStandard6",
      7: "accountZeroStandard7",
      8: "accountZeroStandard8",
      9: "accountZeroStandard9",
    },
    {

      1: "accountStandard1",
      2: "accountStandard2",
      3: "accountStandard3",
      4: "accountStandard4",
      5: "accountStandard5",
      6: "accountStandard6",
      7: "accountStandard7",
      8: "accountStandard8",
      9: "accountStandard9",
    },
    {

      1: "accountStocksVip1",
      2: "accountStocksVip2",
      3: "accountStocksVip3",
      4: "accountStocksVip4",
      5: "accountStocksVip5",
      6: "accountStocksVip6",
      7: "accountStocksVip7",
      8: "accountStocksVip8",
      9: "accountStocksVip9",

    },
    {

      1: "accountCrypto1",
      2: "accountCrypto2",
      3: "accountCrypto3",
      4: "accountCrypto4",
      5: "accountCrypto5",
      6: "accountCrypto6",
      7: "accountCrypto7",
      8: "accountCrypto8",

    },
    {
      1: "accountStandard1",
      2: "accountStandard2",
      3: "accountStandard3",
      4: "accountStandard4",
      5: "accountStandard5",
      6: "accountStandard6",
      7: "accountStandard7",
      8: "accountStandard8",
      9: "accountStandard9",
    },
  ];
  const t = useTranslations()  // console.log(data[0]);
  return (
    <div className="w-full px-8 mt-[100px]   max-sm:mt-[10px]">
      <div className="flex flex-col justify-center  items-center text-white">
        <Title className={`mb-8`} title={t("accountsTypesTitle")} />
        <h2 className="text-[25px] text-center ">
          {t("accountsTypesDescription")}
        </h2>
        <div className="flex gap-8 mt-8">
          <Button variant="red">cTrader</Button>
          <Button variant="red">MT5</Button>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-2 gap-y-4 w-full mt-8 justify-center items-center">
          <AccountCard img={account1} dataArr={data[0]} />
          <AccountCard img={account2} dataArr={data[1]} />
          <AccountCard img={account3} dataArr={data[2]} />
          <AccountCard img={account4} dataArr={data[3]} />
          <AccountCard img={account2} dataArr={data[4]} />
          <AccountCard img={account3} dataArr={data[5]} />
        </div>
      </div>
    </div>
  );
};

export default TypesOfAccounts;
