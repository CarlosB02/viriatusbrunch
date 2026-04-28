/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  allowedDevOrigins: ['192.168.8.108', 'localhost:3000'],
};

export default nextConfig;
