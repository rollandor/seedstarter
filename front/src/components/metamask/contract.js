import { ethers } from "ethers"
import { SeedstarterABI } from "@/components/metamask/contractABI"

const BALANCEOF_ABI = [
  {
    inputs: [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
]

let provider = null;
let signer = null;

/**
 * Returns the total supply
 * Calculate without Metamask
 */
export async function getTotalSupply() {
  try {
    const rpcProvider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const daiContract = new ethers.Contract(process.env.DAI_ADDRESS, SeedstarterABI, rpcProvider);
    const totalSupply = await daiContract.totalSupply() / 1e18;

    console.log("total supply = " + totalSupply)

    return totalSupply;
  } catch (error) {
    console.error("failed to get total supply: " + error)
    return -1
  }
}

/**
 * Returns remaining token part of the total supply
 * Calculate without Metamask
 */
export async function getAmountSaledTokens() {
  try {
    const rpcProvider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL)

    const daiContract = new ethers.Contract(process.env.DAI_ADDRESS, SeedstarterABI, rpcProvider);
    const totalSupply = await daiContract.totalSupply() / 1e18;

    const owner = await daiContract.owner();
    const ownerBalance = parseFloat(
      ethers.utils.formatUnits(
        await daiContract.balanceOf(owner), 18
      )
    );

    console.log("amount of saled tokens = " + (totalSupply - ownerBalance))

    return totalSupply - ownerBalance;
  } catch (error) {
    console.error("failed to get amount of saled tokens: " + error)
    return -1
  }
}

export async function sandbox() {
  // -----------------------
  // check web3 section
  // -----------------------
  const { ethereum } = window;
  if (!ethereum) {
    console.error("ethereum var not found, install metamask extension")
    return -1
  }
  if (provider == null) {
    provider = new ethers.providers.Web3Provider(ethereum);
  }

  const daiContract = new ethers.Contract(process.env.DAI_ADDRESS, SeedstarterABI, provider);

  const name = await daiContract.name();
  console.log("name = " + name);

  const symbol = await daiContract.symbol();
  console.log("symbol = " + symbol);

  const balance = await daiContract.balanceOf(getCurrentAddress());
  console.log(ethers.utils.formatUnits(balance, 18));

  console.log(daiContract);
}

export async function getAllAccounts() {
  return provider ? await provider.listAccounts() : null;
}

export async function getCurrentAddress() {
  // -----------------------
  // check web3 section
  // -----------------------
  const { ethereum } = window;
  if (!ethereum) {
    console.error("ethereum var not found, install metamask extension")
    return -1
  }
  if (provider == null) {
    provider = new ethers.providers.Web3Provider(ethereum);
  }

  let accounts = await provider.send("eth_requestAccounts", []);
  let account = accounts[0];

  return account
}

export async function getBalanceOf(address) {
  const rpcProvider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL)
  const DAI = new ethers.Contract(process.env.DAI_ADDRESS, BALANCEOF_ABI, rpcProvider)

  const DAIBalanceBigInt = await DAI.balanceOf(address)
  const DAIBalanceNumber = ethers.utils.formatUnits(
    DAIBalanceBigInt.toString(),
    process.env.DAI_DECIMALS
  )

  return DAIBalanceNumber
}