/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  allowedDevOrigins: ['192.168.8.108', 'localhost:3000'],
  async rewrites() {
    return [
      {
        source: '/en/contacts',
        destination: '/contactos?lang=en',
      },
      {
        source: '/en/about',
        destination: '/sobre-nos?lang=en',
      },
      {
        source: '/en/gallery',
        destination: '/galeria?lang=en',
      },
      {
        source: '/en',
        destination: '/?lang=en',
      },
    ];
  },
};

export default nextConfig;

