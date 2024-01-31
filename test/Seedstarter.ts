import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";


/**
 * We define a fixture to reuse the same setup in every test.
 * We use loadFixture to run this setup once, snapshot that state,
 * and reset Hardhat Network to that snapshot in every test.
 */


const deployToken = async () => {
  const [owner] = await ethers.getSigners();

  const Seedstarter = await ethers.getContractFactory("Seedstarter");
  const sds = await Seedstarter.deploy(owner.address);

  return { sds, owner };
}

const deployPresale = async () => {
  const { sds, owner } = await loadFixture(deployToken);

  const Presale = await ethers.getContractFactory("SeedstarterPresale");
  const presale = await Presale.deploy(await sds.getAddress(), owner.address);

  await sds.approve(presale.target, await sds.totalSupply());
  await presale.setPresaleTokenAmount();

  // ----------------------------
  // add the 1st ICO stage
  // ----------------------------
  const price = ethers.parseUnits('0.001', "ether");
  const startTime = 1706209200;
  const endTime = 1706832000;

  await presale.addStage(20, price, startTime, endTime);

  return { presale };
}


describe("Seedstarter", function () {

  describe("Deployment", function () {
    it("[token] Should set the right owner", async function () {
      const { sds, owner } = await loadFixture(deployToken);
      expect(await sds.owner()).to.equal(owner.address);
    });

    it("[presale] Should set the right seller", async () => {
      const { owner } = await loadFixture(deployToken);
      const { presale } = await loadFixture(deployPresale);

      expect(await presale.sellerAddress()).to.equal(owner.address);
    });

    it("[presale] Should approve to seller to spend all total supply", async () => {
      const { sds, owner } = await loadFixture(deployToken);
      const { presale } = await loadFixture(deployPresale);

      expect(await sds.allowance(owner.address, presale.target)).to.equal(await sds.totalSupply());
      expect(await presale.presaleTokenAmount()).to.equal(await sds.totalSupply());
    });
  });

  describe("Setup ICO stages", () => {
    it("[presale] should set the first stage of ICO", async () => {
      const { presale } = await loadFixture(deployPresale);

      expect(await presale.getCurrentStageIdActive()).to.equal(1);
    })

    it("[presale] buying 1000 sds tokens", async () => {
      const { sds } = await loadFixture(deployToken);
      const { presale } = await loadFixture(deployPresale);

      const accounts = await ethers.getSigners();
      const signer = accounts[2];
      const buyer = new ethers.Contract(presale.target, presale.interface, signer);

      const amountSDS = 1000.0; // I want to buy 1000 SDS
      const currentStage = await presale.stages(await presale.getCurrentStageIdActive());
      const currentPrice = currentStage[2];

      const bonusPer = Number(currentStage[1]);
      const finalAmoundSDS = (bonusPer / 100 + 1) * amountSDS;

      let b;

      console.log(`-- Current stage ${currentStage[0]}; ${ethers.formatEther(currentPrice)} eth for one SDS token`);

      b = ethers.formatEther(await sds.balanceOf(signer.address));
      console.log(`-- signer balance before ${b}`)

      const tx = await buyer.buyToken(amountSDS, {value: BigInt(amountSDS) * currentPrice});

      b = ethers.formatEther(await sds.balanceOf(signer.address));
      console.log(`-- signer balance after ${b}`)

      expect(parseFloat(b)).to.equal(finalAmoundSDS);
    })
  })
});
