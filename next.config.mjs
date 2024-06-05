/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "es"],
    defaultLocale: "en-US",
  },
  async headers() {
    return [
      {
        source: "/about",
        headers: [{ key: "X-Custom-Header", value: "value" }],
      },
    ];
  },
};

export default nextConfig;
