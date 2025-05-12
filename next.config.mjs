import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
