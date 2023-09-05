/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tuacasa.com.br",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.gamersegames.com.br",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
