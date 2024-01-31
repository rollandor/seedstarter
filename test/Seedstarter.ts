import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { SeedstarterPresale } from "../typechain-types";
import { parseEther, formatEther, BaseContract } from "ethers";


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
};

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
};


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
    });

    it("[presale] buying 1233 sds tokens", async () => {
      const { sds } = await loadFixture(deployToken);
      const { presale } = await loadFixture(deployPresale);

      const signer = (await ethers.getSigners())[2];
      const buyer = new ethers.Contract(presale.target, presale.interface, signer);

      const userInput = 1233.332333;

      const amountSDS = parseEther(userInput.toString());
      const currentStage = await presale.stages(await presale.getCurrentStageIdActive());
      const paymentEth = amountSDS / (10n ** await sds.decimals()) * currentStage.price;

      const finalAmoundSDS = (
        (amountSDS * currentStage.bonus / 100n) + amountSDS
      );

      let balance = await sds.balanceOf(signer.address);

      await buyer.buyToken(
        amountSDS,
        { value: paymentEth }
      );

      balance = await sds.balanceOf(signer.address);

      expect(await sds.balanceOf(signer.address)).to.equal(finalAmoundSDS);
    });

    it("[presale] every account buys any value of SDS tokens", async () => {
      const { sds } = await loadFixture(deployToken);
      const { presale } = await loadFixture(deployPresale);

      // all accounts except owner
      const accounts = (await ethers.getSigners()).slice(1);

      type BuyerSDS = {
        address: string,
        presale: SeedstarterPresale,
      };
      let buyers: any[] = [];

      for (const acc of accounts) {
        buyers.push({
          address: acc.address,
          presale: new ethers.Contract(presale.target, presale.interface, acc),
        });
      }

      // buying token via presale contract
      const currentStage = await presale.stages(await presale.getCurrentStageIdActive());

      for (const buyer of buyers) {
        const userInput = (Math.random() * 3000);

        console.log(`\t-- ${buyer.address} input ${userInput} SDS`);

        const amountSDS = parseEther(userInput.toString());
        const currentStage = await presale.stages(await presale.getCurrentStageIdActive());
        const paymentEth = amountSDS / (10n ** await sds.decimals()) * currentStage.price;

        const finalAmoundSDS = (
          (amountSDS * currentStage.bonus / 100n) + amountSDS
        );

        let balance = await sds.balanceOf(buyer.address);

        await buyer.presale.buyToken(
          amountSDS,
          { value: paymentEth }
        );

        balance = await sds.balanceOf(buyer.address);

        expect(await sds.balanceOf(buyer.address)).to.equal(finalAmoundSDS);
      }

      for (const buyer of buyers) {
        console.log(`\t-- ${buyer.address} balance ${
          formatEther(await sds.balanceOf(buyer.address))
        } SDS`)
      }
    });


  });
});
