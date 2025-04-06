
"use client"
import React, { useState } from "react";
import {
  Get_In_Touch,
  massege,
  telephone,
  envlope,
  logo,
  arrwos_footer,
  footer_img,
} from "../../../public/images";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FaCaretDown, FaCartArrowDown, FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
const links = [
  {
    title: "Trading",
    items: [
      { name: "Market", url: "/market" },
      { name: "Accounts Types", url: "/accounts-types" },
      { name: "Platforms", url: "/platforms" },
      { name: "cTrader Deletion", url: "/ctrader-deletion" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", url: "/about-us" },
      { name: "Terms & Conditions", url: "/terms-conditions" },
      { name: "Contact Us", url: "/contact-us" },
    ],
  },
  {
    title: "Education",
    items: [
      { name: "Forex Terms", url: "/forex-terms" },
      { name: "Economic Calendar", url: "/economic-calendar" },
      { name: "FAQ", url: "/faq" },
    ],
  },
  {
    title: "Partnerships",
    items: [
      { name: "IB program", url: "/ib-program" },
      { name: "Get to know us", url: "/get-to-know-us" },
    ],
  },
];

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (idx) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  return (
    <div className="w-full h-full ">
      <div className="bg-optimizer_Footer_bg w-full relative  bg-center bg-cover ">
        <div className="bg-Footer_bg w-full relative  bg-center bg-cover ">
          <div className="absolute inset-0 w-ful h-full  bg-[#030305]/60"></div>
          <div className="w-full   flex relative z-[100] justify-center bg-Footer_Gr p-4 pt-24 pb-0">
            <Image src={Get_In_Touch} width={500} height={60} alt="inzo" />
          </div>
          <div className="w-full flex justify-center ">
            <div className="bg-Footer_Gr2 grid grid-cols-3  relative z-[100] max-md:flex max-md:flex-col px-8 max-md:px-10 max-md:gap-4  py-10 rounded-xl">
              <div className="flex flex-col relative gap-2  max-md:!pe-8 ">
                <h1 className="text-secondary text-lg font-semibold">Call Us</h1>
                <div className="flex gap-1 items-center text-white">
                  <Image src={telephone} width={35} alt="inzo" />
                  <p className="text-white text-lg font-semibold max-md:text-sm">
                    +97145429310
                  </p>
                </div>
                <div className="bg-main_button max-md:hidden absolute end-0 top-0 h-[80px] w-[1.2px]"></div>
              </div>

              <div className="flex flex-col relative  gap-2 px-4 max-md:!pe-0 max-sm:px-0   max-sm:!border-none">
                <h1 className="text-secondary text-lg font-semibold">Email Us</h1>
                <div className="flex gap-2 items-center">
                  <Image src={envlope} width={30} alt="inzo" />
                  <p className="text-white text-lg font-semibold max-md:text-sm">
                    support@inzo.co
                  </p>
                </div>
                <div className="bg-main_button  max-md:hidden  absolute end-0 top-0 h-[80px] w-[1.2px]"></div>
              </div>

              <div className="flex flex-col gap-2 ps-4 max-md:!ps-0 mx-auto max-sm:mt-4 max-sm:col-span-2 ">
                <h1 className="text-secondary text-lg font-semibold">
                  Chat with Us
                </h1>
                <div className="flex gap-2 items-center ">
                  <Image src={massege} width={35} alt="inzo" />
                  <p className="text-white font-semibold text-lg max-md:text-sm">
                    24/6 Live Chat Support
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 relative z-[100] max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-4 gap-12 px-16 max-sm:px-4 w-full h-full mt-16 justify-between bg-Footer_Gr3">
            <Image
              src={logo}
              width={278}
              alt="inzo"
              className=" me-8"
            />
            {links.map((li, idx) => (
              <div key={idx} className=" flex-col gap-4 hidden max-sm:flex ">
                <div className="flex justify-between text-white cursor-pointer border-b border-gray-700 pb-6" onClick={() => toggleSection(idx)}>
                  <h1 className="text-white text-xl font-semibold" >{li.title}</h1>
                  <FaCaretDown className="" style={{ transform: openSections[idx] ? "rotate(180deg)" : "rotate(0deg)" }} />
                </div>
                <div
                  className={`flex flex-col gap-2 transition-all duration-300 overflow-hidden md:block ${openSections[idx] ? "max-h-40 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
                    }`}
                >
                  {li.items.map((item, idx2) => (
                    <div key={idx2} className="flex text-white gap-2">
                      <Image width={17} height={15} src={arrwos_footer} alt="inzo" className="rtl:rotate-180" />
                      <Link className="text-sm" href={item.url}>
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {links.map((li, idx) => (
              <div key={idx} className="flex flex-col gap-4 max-sm:hidden">
                <h1 className="text-white text-xl font-semibold">{li.title}</h1>
                <div className="flex flex-col gap-2">
                  {li.items.map((item, idx2) => (
                    <div key={idx2} className="flex text-white gap-2">
                      <Image
                        width={17}
                        height={15}
                        src={arrwos_footer}
                        alt="inzo"
                        className="rtl:rotate-180"
                      />{" "}
                      <Link className="text-sm" href={item.url}>
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#020512]   relative z-[100] pt-8 max-sm:pt-2">
        <Image
          src={footer_img}
          className="absolute end-0 bottom-0 z-[-1]"
          alt="inzo"
        />
        <div className="flex flex-col gap-4 text-sm  p-8">
          <div className="flex gap-2">
            <Image
              width={15}
              className="items-start h-fit rtl:rotate-180"
              src={arrwos_footer}
              alt="inzo"
            />{" "}
            <div className="flex flex-col text-white !text-sm max-sm:text-xs">
              <p>
                INZO broker is authorised by the MWALI INTERNATIONAL SERVICES
                AUTHORITY with licence number T2023182 as an INTERNATIONAL
                BROKERAGE.
              </p>
              <p>
                <span className="font-semibold">Registered Office: </span>Bonovo
                Road, Fomboni Island of Mohéli, Comoros Union.
              </p>
              <p>
                <span className="font-semibold">Place of issue: </span>Fomboni,
                Island of Mohéli, Comoros Union.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              width={15}
              className="items-start h-fit rtl:rotate-180"
              src={arrwos_footer}
              alt="inzo"
            />{" "}
            <div className="flex flex-col text-white !text-sm max-sm:text-xs">
              <p>
                The inzo.co domain is exclusively operated by INZO broker under
                the Comoros entity. Other entities in our group include: INZO
                Group LTD (Registration No. 8434998-1), authorized and regulated
                by the Financial Services Authority (the “FSA”, license no.
                SD163).
              </p>
              <p>
                <span className="font-semibold">Registered address: </span>IMAD
                Complex, Office 6, situated at Ile Du Port, Seychelles.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              width={15}
              className="items-start h-fit rtl:rotate-180"
              src={arrwos_footer}
              alt="inzo"
            />{" "}
            <div className="flex flex-col text-white !text-sm max-sm:text-xs">
              <p>
                The official domain operated by INZO Group LTD Seychelles is
                inzo.store, which is exclusively linked to its Seychelles
                operations. INZO L.L.C, incorporated by the Financial Services
                Authority (SVG) as a limited liability company with registration
                number 967 LLC 2021.
              </p>
              <p>
                <span className="font-semibold">Registered address: </span>{" "}
                Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St.
                Vincent and the Grenadines..
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              width={15}
              className="items-start h-fit rtl:rotate-180"
              src={arrwos_footer}
              alt="inzo"
            />{" "}
            <div className="flex flex-col text-white !text-sm max-sm:text-xs">
              <p>
                INZO LLC is registered in the Saint Vincent and the Grenadines.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Image
              width={15}
              className="items-start h-fit rtl:rotate-180"
              src={arrwos_footer}
              alt="inzo"
            />{" "}
            <div className="flex flex-col text-white !text-sm max-sm:text-xs">
              <p>
                <span className="font-semibold">Important Note:</span>{" "}
                References to the Seychelles entity in the footer are included
                for transparency, reflecting the broader group structure and are
                not intended to imply any onboarding of clients through the
                inzo.co domain by INZO Seychelles.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Image
              width={15}
              className="items-start h-fit rtl:rotate-180"
              src={arrwos_footer}
              alt="inzo"
            />{" "}
            <div className="flex flex-col text-white !text-sm max-sm:text-xs">
              <p>
                59 Agios Athanasios Avenue, D.VRACHIMIS BUILDING, 4102 Agios
                Athanasios, Limassol, Cyprus..
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              width={15}
              className="items-start h-fit rtl:rotate-180"
              src={arrwos_footer}
              alt="inzo"
            />{" "}
            <div className="flex flex-col text-white !text-sm max-sm:text-xs">
              <p>
                <span className="font-semibold">Risk Warning:</span> Trading
                Forex and CFDs carries significant risks to your invested
                capital. Please read and ensure you fully understand our Risk
                Disclosure. Seychelles.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="button-border-footer"></div>
          <div className="flex px-8 py-4 items-center justify-between max-md:flex-col max-md:gap-4 ">
            <p className="text-white text-lg max-sm:text-sm">
              2025 © Copyright INZO All rights reserved.
            </p>
            <div className="flex gap-2">
              <Button className="button-border-transparent p-4 bg-transparent rounded-full h-10 w-10">
                <FaXTwitter className="text-lg" />
              </Button>
              <Button className="button-border-transparent bg-transparent rounded-full h10- w-10">
                <FaFacebookF className="text-lg" />
              </Button>
              <Button className="button-border-transparent bg-transparent rounded-full h-10 w-10">
                <FaInstagram className="text-lg" />
              </Button>
              <Button className="button-border-transparent bg-transparent rounded-full h-10 w-10">
                <FaTelegramPlane className="text-lg" />
              </Button>
              <Button className="button-border-transparent bg-transparent rounded-full h-10 w-10">
                <FaYoutube className="text-lg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
