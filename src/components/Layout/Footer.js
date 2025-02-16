import React from "react";
import {
  contact1,
  contact2,
  contact3,
  logo,
  social1,
  social2,
  social3,
  social4,
} from "../../../public/images";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const LinksFooter = [
    {
      title: "التداول",
      sublink: [
        { link: "", title: "السوق" },
        { link: "", title: "أنواع الحسابات" },
        { link: "", title: "منصات التداول" },
        { title: "حذف cTrader", link: "" },
      ],
    },
    {
      title: "الشركاء",
      sublink: [
        { title: "برنامج الوكلاء", link: "" },
        { title: "تعرف علينا", link: "" },
      ],
    },
    {
      title: "التعليم",
      sublink: [
        { title: "مصطلحات فوركس", link: "" },
        { title: "المفكرة الاقتصادية", link: "" },
        { title: "السئلة الشائعة", link: "" },
      ],
    },
    {
      title: "الشركة",
      sublink: [
        { title: "عن الشركة", link: "" },
        { title: "الشروط والاحكام", link: "" },
        { title: "اتصل بنا", link: "" },
      ],
    },
  ];
  return (
    <div className="w-full px-8 mt-[100px] mb-[20px]  max-sm:mt-[10px]">
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
        <Card img={contact1} title={`اتصل بنا`} info={`+442081575734`} />
        <Card
          img={contact2}
          title={`أرسل لنا عبر الايميل`}
          info={`support@inzo.co`}
        />
        <Card img={contact3} title={`دردش معنا `} info={`24/6 دعم الدردشة`} />
      </div>
      <div className="mt-[60px] grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {LinksFooter.map((li, index) => (
          <div
            key={index}
            className="flex flex-col text-center gap-2 max-sm:gap-4 items-center text-white"
          >
            <h1 className="text-3xl max-sm:text-2xl">{li.title}</h1>
            {li.sublink.map((sub, index) => (
              <Link
                key={index}
                href={sub.link}
                className="hover:underline text-2xl max-sm:text-lg"
              >
                {sub.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="my-[60px] flex justify-between px-40 max-sm:flex-col max-sm:px-10 max-sm:gap-8 max-sm:items-center max-sm:justify-center">
        <Image
          width={``}
          height={70}
          src={logo}
          alt="Logo"
          className="max-w-[300px] transition transform duration-500   hover:rotate-3"
        />
        <div className="flex gap-4 items-center">
          <Link href={`/`}>
            {" "}
            <Image
              width={``}
              height={``}
              src={social1}
              alt=""
              className=" max-w-[65px] max-xs:max-w-[30px] transition transform duration-500   hover:scale-110"
            />
          </Link>
          <Image
            width={``}
            height={``}
            src={social2}
            alt=""
            className="max-w-[65px] max-xs:max-w-[30px] transition transform duration-500   hover:scale-110"
          />
          <Image
            width={``}
            height={``}
            src={social3}
            alt=""
            className="max-w-[65px] max-xs:max-w-[30px] transition transform duration-500   hover:scale-110"
          />
          <Image
            width={``}
            height={``}
            src={social4}
            alt=""
            className=" max-w-[65px] max-xs:max-w-[30px] transition transform duration-500   hover:scale-110"
          />
        </div>
      </div>
      <TextCard />
      <div className="w-full justify-center flex mt-[50px] text-white text-2xl md:text-3xl text-center ">
        <h1> 2025© جميع الحقوق محفوظة </h1>
      </div>
    </div>
  );
};

export default Footer;

const Card = ({ img, title, info }) => {
  return (
    <div className="flex transform hover:rotate-3  hover:scale-105 p-4 justify-start gap-12 rounded-[50px] transition duration-500 ease-in-out items-center  border border-[#ececec] shadow-md shadow-white">
      <Image
        alt=""
        src={img}
        width={`100%`}
        height={``}
        className="max-w-[120px]"
      />
      <div className="flex flex-col items-center gap-4 text-white">
        <h1 className="text-3xl max-sm:text-xl">{title}</h1>
        <p className="text-xl max-sm:text-sm">{info}</p>
      </div>
    </div>
  );
};
const TextCard = () => {
  return (
    <div
      className=" p-[22px] bg-[#ffffff1c] mb-5 [word-spacing:0.2rem]
     rounded-lg text-base md:text-2xl text-start md:leading-[2.2rem]  
      text-[#fffff1] mt-12 transition-transform duration-300 ease-in-out 
      hover:z-[100] hover:scale-[1.01]  hover:-translate-y-2"
    >
      <p>
        INZO مرخّص من قبل هيئة الخدمات الدولية برقم الترخيص T2023182 كوسيط دولي.
      </p>
      <p>المكتب المسجل: طريق بونوفو، جزيرة فومبوني، موهيلي، اتحاد جزر القمر.</p>
      <p>مكان الإصدار: فومبوني، جزيرة موهيلي، اتحاد جزر القمر.</p>
      <p>
        النطاق{" "}
        <Link
          href="https://inzo.co"
          className="text-[#0d6efd] hover:text-blue-700 underline"
        >
          inzo.co
        </Link>{" "}
        يُدار حصريًا من قبل وسيط INZO تحت الكيان القمري. وتشمل الكيانات الأخرى
        في مجموعتنا: INZO Group LTD (رقم التسجيل 8434998-1)، المرخّص والمنظم من
        قبل هيئة الخدمات المالية (FSA، رقم الترخيص SD163).
      </p>
      <p>
        العنوان المسجل: مجمع IMAD، المكتب رقم 6، الواقع في جزيرة دو بورت، سيشيل.
      </p>
      <p>
        النطاق الرسمي الذي تديره INZO Group LTD سيشيل هو{" "}
        <Link
          href="https://inzo.store"
          className="text-[#0d6efd] hover:text-blue-700 underline"
        >
          inzo.store
        </Link>
        ، وهو مرتبط حصريًا بأنشطة الشركة في سيشيل. شركة INZO L.L.C مسجلة كشركة
        ذات مسؤولية محدودة لدى هيئة الخدمات المالية (SVG) برقم التسجيل 967 LLC
        2021.
      </p>
      <p>
        العنوان المسجل: الجناح 305، مركز غريفيث للأعمال، بيتشمونت، كينغستاون،
        سانت فنسنت والغرينادين.
      </p>
      <p>شركة INZO LLC مسجلة في سانت فنسنت والغرينادين.</p>
      <p>
        ملاحظة هامة: الإشارات إلى كيان سيشيل في التذييل مُدرجة للشفافية، لتعكس
        هيكل المجموعة الأشمل، ولا يُقصد بها الإشارة إلى قبول العملاء عبر النطاق{" "}
        <Link
          href="https://inzo.co"
          className="text-[#0d6efd] hover:text-blue-700 underline"
        >
          inzo.co
        </Link>{" "}
        من قبل INZO سيشيل.
      </p>
      <p>
        59 شارع أغيوس أثاناسيوس، مبنى D.VRACHIMIS، 4102 أغيوس أثاناسيوس،
        ليماسول، قبرص.
      </p>
      <p>
        تحذير من المخاطر: تداول الفوركس والعقود مقابل الفروقات يحمل مخاطر كبيرة
        على رأس المال المستثمر. يُرجى قراءة وفهم إفصاح المخاطر الخاص بنا بشكل
        كامل.
      </p>
    </div>
  );
};
