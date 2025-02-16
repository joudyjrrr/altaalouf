import Banner from "@/components/Layout/Banner";
import Header from "@/components/Layout/Header";
import Title from "@/components/Layout/Title";
import TypesOfAccounts from "@/components/Layout/TypesOfAccounts";
import { Button } from "@/components/ui/button";
import DepositMethod from "@/components/Layout/DepositMethod";

export default function Home() {
  return (
    <div className="w-full">
      <div className="py-20 ">
        <TypesOfAccounts>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="flex gap-8 mt-8">
              <Button variant="red">cTrader</Button>
              <Button variant="red">MT5</Button>
            </div>
          </div>
        </TypesOfAccounts>
      </div>
      <DepositMethod />
    </div>
  );
}
