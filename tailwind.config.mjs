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
          DEFAULT: "#0a1f44",
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
        star_background:
          "url('/images/star2.png')",
          star_background2:
          "url('/images/start.jpg')",
        card_bakgound:"linear-gradient(101.76deg, #1654B0 5.98%, rgba(10, 41, 90, 0.628674) 45.75%, rgba(8, 20, 46, 0) 71.79%)",
        team_gradiat:"linear-gradient(360deg, rgba(0,0,0,0.002) 0%, rgba(15,29,62,1) 35%)",
        team_card:"url('/images/team-back.png')",
        award_back:"url('/images/award-back.png')",
        awarc_card_back:"linear-gradient(269deg, rgba(7, 23, 55, 0.04) 12.89%, #0BBDF5 99.15%)"
        


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

