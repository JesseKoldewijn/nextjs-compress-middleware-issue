/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  compress: false, // <- having compression disabled breaks routing
  skipTrailingSlashRedirect: true,
  experimental: {
    appDir: true
  }
};
export default config;
