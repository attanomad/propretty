/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [{ hostname: "localhost" }],
  },
};

export default nextConfig;
