/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "notfair.co",
        pathname: "/api/seo/**",
      },
    ],
  },
  trailingSlash: true,
}

export default nextConfig
