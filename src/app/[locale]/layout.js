import FirstHeader from "@/components/Layout/FirstHeader";
import "./globals.css";
import SecondHeader from "@/components/Layout/SecondHeader";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import Footer from "@/components/Layout/Footer";
import { AppProvider } from "@/lib/AppContext";

const tajawal = localFont({
  src: [
    {
      path: "./../../../public/font/Tajawal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../public/font/Tajawal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../../public/font/Tajawal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "Altaalouf",
  description: "Generated by create next app",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html>
      <body className={`${tajawal.className} relative`}>
        <NextIntlClientProvider messages={messages}>
          <AppProvider>{children} </AppProvider>
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
