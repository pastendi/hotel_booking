/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb+srv://root:root@cluster0.wua3hoe.mongodb.net/',
  },
}

module.exports = nextConfig
