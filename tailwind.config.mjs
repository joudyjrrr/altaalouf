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
        main_button: "linear-gradient(90deg, #084196 0%, #00C0FF 100%)",
        header_gradiant:
          "linear-gradient(180deg, #08142E 34.01%, rgba(8, 20, 46, 0) 100%)",
        border_gradiant: " linear-gradient(90deg, #084398, #00befd)",
        star_background: "url('/images/star2.png')",
        star_background2: "url('/images/start.jpg')",
        card_bakgound:
          "linear-gradient(101.76deg, #1654B0 5.98%, rgba(10, 41, 90, 0.628674) 45.75%, rgba(8, 20, 46, 0) 71.79%)",
        team_gradiat:
          "linear-gradient(360deg, rgba(0,0,0,0.002) 0%, rgba(15,29,62,1) 35%)",
        team_card: "url('/images/team-back.png')",
        award_back: "url('/images/award-back.png')",
        awarc_card_back:
          "linear-gradient(269deg, rgba(7, 23, 55, 0.04) 12.89%, #0BBDF5 99.15%)",
        card_bakgound:
          "linear-gradient(101.76deg, #1654B0 5.98%, rgba(10, 41, 90, 0.628674) 45.75%, rgba(8, 20, 46, 0) 71.79%)",
        card_Bg: "url('/images/cardBg.png')",
        social_gradiant:
          "linear-gradient(306.57deg, #0F2147 11.87%, #17708E 89.47%);",
        Straight_Bg:
          " linear-gradient(to bottom, white, rgba(255, 255, 255, 0)), url('/images/Straight3.png')",
        Straight_Bg2: "url('/images/Straight2.png')",
        License_gradient:
          "linear-gradient(0.56deg, rgba(8, 20, 46, 0) 35.71%, #040C1D 122.86%);",
        License_Bg: "url('/images/License6.png')",
        License_Bg2: "url('/images/License1.png')",
        License_Bg3: "url('/images/License3.png')",
        MultiStarTop: "url('/images/MultiStarTop.png')",
        card_why: "url('/images/card-Back_why.png')",
        MultiStarBottom: "url('/images/MultiStarBottom.png')",
        location_back: "url('/images/location_back.png')",
        Testimonial_back:
          "linear-gradient(174.71deg, rgba(8, 20, 46, 0) 6.18%, rgba(0, 192, 255, 0.628674) 79.61%, #00C0FF 119.12%)",
        company_global:
          "linear-gradient(0deg, rgba(15,33,71,1) 0%, rgba(15,33,71,0) 100%)",
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
        teamCard_Bg: "url('/images/teamCardBg.svg')",

        aboutBanner: "url('/images/aboutBanner.png')",
        about_Gr: "linear-gradient(0deg, #0f214785  52.46%, #0f21476b  100%)",
        about_Gr_Card: "linear-gradient(0deg, #084196 0%, #0575C1 61.01%)",
        about_Gr_Card2:
          "linear-gradient(90deg, rgba(8, 20, 46, 0.5) 24.42%, rgba(10, 41, 90, 0.628674) 63.78%, #1654B0 110.77%);",
        about_Gr_Card3:
          "linear-gradient(180deg, rgba(8, 20, 46, 0.5) 24.42%, rgba(10, 41, 90, 0.628674) 63.78%, #1654B0 110.77%);",
        tutorial_Gr:
          "linear-gradient(0deg, #0F2147 52.46%, rgba(15, 33, 71, 0.5) 100%);",
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
      },

      fontFamily: {
        moharram: ["Ah Moharram Bold", "sans-serif"],
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
