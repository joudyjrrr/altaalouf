"use client"
import Banner from "@/components/Layout/Banner";
import Header from "@/components/Layout/Header";
import Title from "@/components/Layout/Title";
import TypesOfAccounts from "@/components/Layout/TypesOfAccounts";
import { Button } from "@/components/ui/button";
import { downloadApps, downloadwindows, googleplay, appstore, downloadmac } from "../../../public/images"
import Image from "next/image";
import Link from "next/link";
import WhyInzo from "@/components/Layout/WhyInzo";
import DepositMethod from "@/components/Layout/DepositMethod";
import {useTranslations} from 'next-intl';
import useLanguageDirection from "@/i18n/useLanguageDirection";
export default function Home() {
  const t = useTranslations();
  // useLanguageDirection();
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full h-full bg-[#3040614]">
        <Banner />
      </div>
      <h1 className="text-white text-2xl ">{t("HomePage.title")}</h1>
      <TypesOfAccounts />
      <div className="w-full px-8 mt-[80px] h-[100vh] max-sm:mt-[10px] ">
        <div className="flex flex-col justify-center items-center text-white">
          <Title className={`mb-8`} title={` حمل الان`} />
          <div className="flex gap-8 mt-8">
            <Button variant="red">cTrader</Button>
            <Button variant="red">MT5</Button>
          </div>
        </div>
        <div className="flex justify-between w-full text-white px-32 max-lg:px-16 max-sm:px-4 max-sm:flex-col max-sm:items-center max-sm:justify-center mx-auto">
          <div className="w-full">
            <Image
              alt=""
              src={downloadApps}
              width={`100%`}
              height={``}
              className="max-w-[500px] max-sm:max-w-[300px] mx-auto"
            />
          </div>
          <div className="flex flex-col items-center w-full h-full gap-4 mt-8 ">
            <h1 className="mb-2 text-[2.5rem]">INZO MT5</h1>
            <p className="text-[1rem]">ميتاتريدر 5 لنظام ويندوز</p>
            <Link
              href={``}
              className="max-w-[150px] my-0 mx-auto rounded-[6px]"
            >
              <Image
                alt=""
                src={downloadwindows}
                width={`100%`}
                height={``}
                className="img-soial"
              />
            </Link>
            <p className="text-[1rem]">ميتاتريدر 5 لنظام الحاسب Mac</p>
            <Link
              href={``}
              className="max-w-[150px] my-0 mx-auto rounded-[6px]"
            >
              <Image
                alt=""
                src={downloadmac}
                width={`100%`}
                height={``}
                className="img-soial"
              />
            </Link>
            <p className="text-[1rem]"> ميتاتريدر 5 لنظام الاندرويد و iOS</p>
            <div className="flex">
              <Link
                href={``}
                className="max-w-[150px] my-0 mx-auto rounded-[6px]"
              >
                <Image
                  alt=""
                  src={googleplay}
                  width={`100%`}
                  height={``}
                  className="img-soial"
                />
              </Link>
              <Link
                href={``}
                className="max-w-[150px] my-0 mx-auto rounded-[6px]"
              >
                <Image
                  src={appstore}
                  alt=""
                  width={`100%`}
                  height={``}
                  className="img-soial"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-8 mt-[80px]  max-sm:mt-[10px]">
        <div className="flex flex-col justify-center items-center text-white">
          <Title
            className={`mb-8 max-sm:text-2xl mt-[100px]  max-sm:mt-[10px]`}
            title={`Straight through processing (STP)`}
          />
          <h2 className="text-4xl text-start max-sm:text-xl leading-[2.7rem]">
            وهو نظام تعتمده الشركات التي توجه تداولات العملاء لمجموعة من مزودي
            السيولة ويعمل هذا النظام وفق ادوات لا يتم استخدامها من قبل مزود منصة
            التداول بل من خلال طرف ثالث يعمل على ربط مجموعة من مزودي السيولة
            بنظام يسمى ال (Aggregation) حيث يعمل هذا النظام على تنقية الأسعار
            المُستلمة من مزودي السيولة والحصول على افضل سعر للشراء وافضل سعر
            للبيع حيث يمكن ان يكون سعر الشراء من مزود سيولة X على سبيل المثال
            وسعر البيع من مزود سيولة Y وتفضل الشركات هذا النظام للحصول على افضل
            فروقات سعرية لتوفيرها لعملائها حيث يوفر هذا النظام فروقات سعرية تصل
            الى (– 3 ) وتعتمد شركة انزو هذا النظام من خلال نظام ال (Aggregation)
            الذي توفره شركة OneZero وشركة Centroid وهي شركات برمجية (طرف ثالث )
            تعمل على توفير حلول ربط التداولات بين منصة التداول التي توفرها شركة
            الوساطة ومزودي السيولة
          </h2>
        </div>
      </div>
      <WhyInzo />
      <DepositMethod />
    </div>
  );
}
