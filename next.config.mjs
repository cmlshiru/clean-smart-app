/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
      return [
        {
          source: '/',
          destination: '/pages/home',
          permanent: true,
        },
      ]
    },
};

export default nextConfig;
