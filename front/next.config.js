/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DAI_ADDRESS: process.env.DAI_ADDRESS,
    DAI_DECIMALS: process.env.DAI_DECIMALS,
    SEPOLIA_RPC_URL: process.env.SEPOLIA_RPC_URL,
  }
}

module.exports = nextConfig
