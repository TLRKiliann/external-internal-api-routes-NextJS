/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/enterall',
        destination: '/',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
