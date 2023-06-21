
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
images: {
  remotePatterns: [
    {
      hostname: "commons.wikimedia.org"
    }
  ]
}
};

module.exports = nextConfig;
