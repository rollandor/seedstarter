import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();
  const owner = accounts[0];

  const sds = await ethers.deployContract("Seedstarter", [owner.address]);
  await sds.waitForDeployment();

  console.log(`Seedstarter contract was deployed with owner ${owner.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
