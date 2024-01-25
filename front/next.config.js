/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DAI_ADDRESS: process.env.DAI_ADDRESS,
    DAI_DECIMALS: process.env.DAI_DECIMALS,
    SEPOLIA_RPC_URL: process.env.SEPOLIA_RPC_URL,
    WALLET_CLOUD_PROJECT_ID: process.env.WALLET_CLOUD_PROJECT_ID,
  }
}

module.exports = nextConfig
