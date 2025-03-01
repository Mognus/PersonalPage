import { NextConfig } from "next"

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    // Mit dem Nginx-Setup müssen wir nur noch den aktuellen Host erlauben
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
}

module.exports = nextConfig