/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['docs.sejapluma.com', 'm.docs.sejapluma.com'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'm.docs.sejapluma.com',
            },
          ],
          destination: '/mobile/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 