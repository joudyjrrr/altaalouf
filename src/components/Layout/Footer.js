import React from "react";
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
import { FaXTwitter } from "react-icons/fa6";
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
  return (
    <div className="w-full h-full ">
      <div className="bg-Footer_bg w-full  bg-center bg-cover ">
        <div className="w-full flex justify-center bg-Footer_Gr p-4 pt-8 pb-0">
          <Image src={Get_In_Touch} width={350} height={50} alt="inzo" />
        </div>
        <div className="w-full flex justify-center  ">
          <div className="bg-Footer_Gr2 grid grid-cols-3 max-sm:grid-cols-2 px-8 py-4 rounded-xl max-md:px-4">
            <div className="flex flex-col gap-2 pe-4 max-md:!pe-8 border-e border-secondary">
              <h1 className="text-secondary text-lg font-semibold">Call Us</h1>
              <div className="flex gap-1 items-center text-white">
                <Image src={telephone} width={35} alt="inzo" />
                <p className="text-white max-md:text-sm">+97145429310</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 px-4 max-md:!pe-8   border-e border-secondary max-sm:!border-none">
              <h1 className="text-secondary text-lg font-semibold">Email Us</h1>
              <div className="flex gap-2 items-center">
                <Image src={envlope} width={25} alt="inzo" />
                <p className="text-white  max-md:text-sm">support@inzo.co</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 ps-4 mx-auto max-sm:mt-4 max-sm:col-span-2 ">
              <h1 className="text-secondary text-lg font-semibold">
                Chat with Us
              </h1>
              <div className="flex gap-2 items-center ">
                <Image src={massege} width={35} alt="inzo" />
                <p className="text-white ax-md:text-sm">
                  24/6 Live Chat Support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 px-8 w-full h-full mt-8 justify-between bg-Footer_Gr3">
          <Image src={logo} width={200} alt="inzo" className="max-sm:hidden" />
          {links.map((li, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h1 className="text-white text-xl font-semibold">{li.title}</h1>
              <div className="flex flex-col gap-2">
                {li.items.map((item, idx2) => (
                  <div key={idx2} className="flex text-white gap-2">
                    <Image
                      width={15}
                      height={10}
                      src={arrwos_footer}
                      alt="inzo"
                      className="rtl:rotate-180"
                    />{" "}
                    <Link className="max-sm:text-sm" href={item.url}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#020512]   relative z-[100] pt-8">
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
            <div className="flex flex-col text-white ">
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
            <div className="flex flex-col text-white">
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
            <div className="flex flex-col text-white">
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
            <div className="flex flex-col text-white">
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
            <div className="flex flex-col text-white">
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
            <div className="flex flex-col text-white">
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
            <div className="flex flex-col text-white">
              <p>
                <span className="font-semibold">Risk Warning:</span> Trading
                Forex and CFDs carries significant risks to your invested
                capital. Please read and ensure you fully understand our Risk
                Disclosure. Seychelles.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary p-4">
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 ">
            <p className="text-white">
              2025 © Copyright INZO All rights reserved.
            </p>
            <div className="flex gap-4">
              {" "}
              <Button className="button-border rounded-full h-8 w-8">
                <FaXTwitter />
              </Button>
              <Button className="button-border rounded-full h-8 w-8">
                <FaFacebookF />
              </Button>
              <Button className="button-border rounded-full h-8 w-8">
                <FaInstagram />
              </Button>
              <Button className="button-border rounded-full h-8 w-8">
                <FaTelegramPlane />
              </Button>
              <Button className="button-border rounded-full h-8 w-8">
                <FaYoutube />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
