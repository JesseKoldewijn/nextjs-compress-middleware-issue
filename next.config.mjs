/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  compress: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    appDir: true
  }
};
export default config;
