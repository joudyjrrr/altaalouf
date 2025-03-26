/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0f2147",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#00C0FF",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        banner: "url('/images/banner.png')",
        optimizer_banner: "url('/images/jpeg-optimizer_banner.png')",

        main_button: "linear-gradient(90deg, #084196 0%, #00C0FF 100%)",
        header_gradiant:
          "linear-gradient(180deg, #08142E 34.01%, rgba(8, 20, 46, 0) 100%)",
        border_gradiant: " linear-gradient(90deg, #084398, #00befd)",
        star_background: "url('/images/star2.png')",
        star_background2: "url('/images/start.jpg')",
        optimizer_start: "url('/images/jpeg-optimizer_start.jpg')",
        optimizer_trend_platform_bg:
          "url('/images/jpeg-optimizer_trend-platform-bg.png')",
        optimizer_parthner_bg: "url('/images/jpeg-optimizer_parthner_bg.png')",
        optimizer_Footer_bg: "url('/images/jpeg-optimizer_Footer_bg.png')",
        optimizer_aboutBanner: "url('/images/jpeg-optimizer_aboutBanner.png')",
        optimizer_education_review:
          "url('/images/jpeg-optimizer_education-review.png')",
        optimizer_ourTeamBg:
          "url('/images/jpeg-optimizer_ourTeamBg.png')",
        optimizer_frequantly_bg:
          "url('/images/jpeg-optimizer_frequantly_bg.png')",
        optimizer_successPartners_Bg:
          "url('/images/jpeg-optimizer_successPartners_Bg.png')",
          optimizer_contact:
          "url('/images/jpeg-optimizer_contact.png')",

        card_bakgound:
          "linear-gradient(101.76deg, #1654B0 5.98%, rgba(10, 41, 90, 0.628674) 45.75%, rgba(8, 20, 46, 0) 71.79%)",
        team_gradiat:
          "linear-gradient(360deg, rgba(0,0,0,0.002) 0%, rgba(15,29,62,1) 35%)",
        team_card: "url('/images/team-back.png')",
        award_back1: "url('/images/awardBack.png')",
        award_back: "url('/images/award-back.png')",
        awarc_card_back:
          "linear-gradient(269deg, rgba(7, 23, 55, 0.04) 12.89%, #0BBDF5 99.15%)",
        card_bakgound:
          "linear-gradient(101.76deg, card_Bg#1654B0 5.98%, rgba(10, 41, 90, 0.628674) 45.75%, rgba(8, 20, 46, 0) 71.79%)",
        card_Bg: "url('/images/cardBg.png')",
        bannercardBg: "url('/images/bannercardBg.svg')",
        social_gradiant:
          "linear-gradient(306.57deg, #0F2147 11.87%, #17708E 89.47%);",
        Straight_Bg:
          " linear-gradient(to bottom, white, rgba(255, 255, 255, 0)), url('/images/Straight3.png')",
        Straight_Bg2: "url('/images/Straight2.png')",
        License_gradient:
          "linear-gradient(0.56deg, rgba(8, 20, 46, 0) 35.71%, #040C1D 122.86%);",
        License_Bg: "url('/images/License6.png')",
        License_Bg2:
          "linear-gradient(160.75deg, #08142e 24.94%, rgba(10, 41, 90, 0.628674) 72.23%, #168AB0 110.77%);",
        License_Bg3: "url('/images/License3.png')",
        MultiStarTop: "url('/images/MultiStarTop.png')",
        card_why: "url('/images/card-Back_why.png')",
        MultiStarBottom: "url('/images/MultiStarBottom.png')",
        location_back: "url('/images/location_back.png')",
        Testimonial_back:
          "linear-gradient(174.71deg, rgba(8, 20, 46, 0) 6.18%, rgba(0, 192, 255, 0.628674) 79.61%, #00C0FF 119.12%)",
        company_global:
          "linear-gradient(180deg, rgba(15, 33, 71, 0) 0%, #0F2147 63.5%);",
        company1: "url('/images/company1.png')",
        Representative_card_bg: "url('/images/Representative_card_bg.png')",
        DwMethods_Bg: "url('/images/DwMethods.png')",
        DwIcons_Bg: "url('/images/DwIcons.png')",
        stars_white: "url('/images/stars_white.png')",
        Footer_bg: "url('/images/Footer_bg.png')",
        Footer_Gr:
          "linear-gradient(360deg, rgba(15, 33, 71, 0) 0%, #0F2147 100%);",
        Footer_Gr2:
          "linear-gradient(178.99deg, rgba(1, 8, 28, 0.05) 5.01%, rgba(237, 242, 248, 0.02) 23.88%, rgba(237, 242, 248, 0.08) 109.65%);",
        Footer_Gr3:
          " linear-gradient(0deg, #030613 0%, rgba(3, 6, 19, 0) 100%)",

        Footer_bg: "url('/images/Footer_bg.png')",

        teamStars_Bg: "url('/images/teamStars_Bg.png')",
        aboutBanner: "url('/images/aboutBanner.png')",
        about_Gr:
          "linear-gradient(0deg, #0F2147 5%, rgba(15, 33, 71, 0) 100%);",

        about_Gr_Card:
          "linear-gradient(0deg, #084196 0%, #0575C1 59.64%, #00C0FF 143.83%);",
        about_Gr_Card2:
          "linear-gradient(0deg, rgba(8, 20, 46, 0.5) 24.42%, rgba(10, 41, 90, 0.628674) 63.78%, #1654B0 110.77%);",
        about_Gr_Card3:
          "linear-gradient(135deg, #08142E 14%, #0A295A 45%, #1654B0 100%), #0F1B34;",

        tutorial_Gr:
          "linear-gradient(0deg, #0F2147 52.46%, rgba(15, 33, 71, 0.5) 100%);",
        toutorial_gr_img: "linear-gradient(0deg, #007399 0%, #00C0FF 100%);",
        toutorial_gr_swiper:
          "linear-gradient(0deg, rgba(15, 33, 71, 0) 0%, #0F2147 100%);",
        real_account_Gr:
          "linear-gradient(180deg, #0F2147 1%, rgba(15, 33, 71, 0.3) 100%);",
        frequantly_Gr:
          "linear-gradient(180deg, #0F2147 1%, rgba(15, 33, 71, 0) 100%);",
        contact_Bg: "url('/images/conatct2.png')",
        real_account_bg: "url('/images/real_account_bg.jpg')",
        frequantly_bg: "url('/images/frequantly_bg.png')",
        frequantly_card_bg: "url('/images/freq_card_bg.png')",

        ourTeamBg: "url('/images/ourTeamBg.png')",
        teamPartnerBg: "url('/images/teamPartnerBg.png')",
        inzoReal_Bg: "url('/images/inzoReal_Bg.png')",

        trend_platform_bg: "url('/images/trend-platform-bg.png')",
        awardBack: "url('/images/awardBack.png')",
        awardBG3: "url('/images/awardBG3.png')",
        starTopBot: "url('/images/starTopBot.png')",
        testemoneaialsCardBg: "url('/images/testemoneaialsCardBg.png')",

        parthner_bg: "url('/images/parthner_bg.png')",
        location_bg: "url('/images/location_bg.png')",
        whayChozBg: "url('/images/whayChozBg.png')",
        award_card1: "url('/images/award_card1.png')",

        ourTeamBg: "url('/images/ourTeamBg.png')",
        teamPartnerBg: "url('/images/teamPartnerBg.png')",
        inzoReal_Bg: "url('/images/inzoReal_Bg.png')",

        trend_platform_bg: "url('/images/trend-platform-bg.png')",
        trend_platform_Gr:
          "linear-gradient(180deg, #0F2147 15%, transparent 100%);",
        trend_platform_Gr2:
          "linear-gradient(0deg, #0F2147 0%, transparent 100%);",

        awardBack: "url('/images/awardBack.png')",
        awardBG3: "url('/images/awardBG3.png')",
        starTopBot: "url('/images/starTopBot.png')",
        testemoneaialsCardBg: "url('/images/testemoneaialsCardBg.png')",

        parthner_bg: "url('/images/parthner_bg.png')",
        location_bg: "url('/images/location_bg.png')",

        terms_Bg: "url('/images/terms&co_Bg.png')",

        agent_Bg: "url('/images/agent_Bg.png')",

        successPartners_Bg: "url('/images/successPartners_Bg.png')",
        successPartnersCard_Bg: "url('/images/successPartnersCard_Bg.png')",
        caluclatour_bg:
          "linear-gradient(0deg, transparent 50%, #0F2147 63.5%);",
        EduOver_Bg: "url('/images/EduOver_Bg.png')",
        Education_Bg: "url('/images/education-review.png')",
      },

      fontFamily: {
        moharram: ["Ah Moharram Bold", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xl: "1800px",
        lg: "1400px",
        xs: "500px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
