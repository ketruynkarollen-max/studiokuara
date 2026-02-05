/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuração para Netlify
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

