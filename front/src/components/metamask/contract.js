import { ethers } from "ethers"
import { SeedstarterABI } from "@/components/metamask/contractABI"

const DAI_ADDRESS = "0x69e458B75fe17869F2E72AE2E9DC8A441F28d6B8"
const DAI_DECIMALS = 18
const SEPOLIA_RPC_URL = "https://1rpc.io/sepolia"

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

export async function getTotalSupply() {
  if (provider == null) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  const daiContract = new ethers.Contract(DAI_ADDRESS, SeedstarterABI, provider);
  const totalSupply = await daiContract.totalSupply() / 1e18;

  return totalSupply;
}

/**
 * Returns remaining token part of the total supply
 */
export async function getAmountSaledTokens() {
  if (provider == null) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  const daiContract = new ethers.Contract(DAI_ADDRESS, SeedstarterABI, provider);
  const totalSupply = await daiContract.totalSupply() / 1e18;
 
  const owner = await daiContract.owner();
  const ownerBalance = parseFloat(
    ethers.utils.formatUnits(
      await daiContract.balanceOf(owner), 18
    )
  );

  return totalSupply - ownerBalance;
}

export async function sandbox() {
  if (provider == null) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  const daiContract = new ethers.Contract(DAI_ADDRESS, SeedstarterABI, provider);

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
  provider = new ethers.providers.Web3Provider(window.ethereum)

  let accounts = await provider.send("eth_requestAccounts", []);
  let account = accounts[0];

  return account
}

export async function getBalanceOf(address) {
  const rpcProvider = new ethers.providers.JsonRpcProvider(SEPOLIA_RPC_URL)
  const DAI = new ethers.Contract(DAI_ADDRESS, BALANCEOF_ABI, rpcProvider)

  const DAIBalanceBigInt = await DAI.balanceOf(address)
  const DAIBalanceNumber = ethers.utils.formatUnits(
    DAIBalanceBigInt.toString(),
    DAI_DECIMALS
  )

  return DAIBalanceNumber
}