/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  compress: false, // <- having compression disabled breaks routing
};
export default config;
