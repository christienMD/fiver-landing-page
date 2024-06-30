/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://fiverr-res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
