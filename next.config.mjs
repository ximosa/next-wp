/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Agregas esta línea
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

