import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/arbetsomr-den", destination: "/tjanster", permanent: true },
      { source: "/kontakta-oss", destination: "/kontakt", permanent: true },
      { source: "/kvalit", destination: "/kvalitet", permanent: true },
      { source: "/milj", destination: "/miljo", permanent: true },
    ];
  },
  outputFileTracingRoot: __dirname,
  images: {
    qualities: [75, 85],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
