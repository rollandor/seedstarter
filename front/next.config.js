/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SDS_ADDR: process.env.SDS_ADDR,
    SDS_PRESALE_ADDR: process.env.SDS_PRESALE_ADDR,
    WALLET_CLOUD_PROJECT_ID: process.env.WALLET_CLOUD_PROJECT_ID,
  }
}

module.exports = nextConfig
