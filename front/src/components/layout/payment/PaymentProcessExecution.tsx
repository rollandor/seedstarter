import React from "react";
import styles from "@/components/layout/payment/PaymentProcess.module.scss"
import { PaymentStates, ArgsType, PaymentProcessContext } from "./PaymentProcess";
import { useContext } from "react";
import { OutViaWallet } from "./PaymentProcessOffer";

import { 
  parseEther,
  formatEther,
  ethers,
  TransactionResponse,
  TransactionReceipt,
} from "ethers";
import SeedstarterContract from "@/../artifacts/contracts/Seedstarter.sol/Seedstarter.json";
import PresaleContract from "@/../artifacts/contracts/SeedstarterPresale.sol/SeedstarterPresale.json";

function PaymentProcessExecution({ 
  amountSDS,
  finalCost,
  nameCurrency,
}: ArgsType) {
  const numOrder = '000003';
  const {state, setState} = useContext(PaymentProcessContext);

  const buyToken = async() => {
    if (amountSDS <= 0) {
      console.error("invalid amount sds");
      return;
    }
    if (!window.ethereum) {
      console.error('unable to get window ethereum object');
      return;
    }

    const web3Provider = new ethers.BrowserProvider(window.ethereum);
    const buyerAddr = (await web3Provider.listAccounts())[0];
    const signer = await web3Provider.getSigner(buyerAddr.address);

    const sds = new ethers.Contract(process.env.SDS_ADDR, SeedstarterContract.abi, web3Provider);
    const presale = new ethers.Contract(process.env.SDS_PRESALE_ADDR, PresaleContract.abi, signer);

    const sellerAddr = await presale.sellerAddress();
    if (buyerAddr === sellerAddr) {
      console.error('failed to buy tokens, error: buyer address is equal seller');
      return;
    }

    const _amountSDS = parseEther(amountSDS.toString())
    const currentStage = await presale.stages(await presale.getCurrentStageIdActive());
    console.log(currentStage)
    const bonusPer: bigint = currentStage[1];
    const priceSDS: bigint = currentStage[2];
    const decimals: bigint = BigInt(await sds.decimals());

    const paymentEth = _amountSDS / (10n ** decimals) * priceSDS;

    console.log(`paymentEth = ${paymentEth} wei`);
    const finalAmoundSDS = (
      (_amountSDS * bonusPer / 100n) + _amountSDS
    );
    console.log(`final amount = ${finalAmoundSDS} SDS`);

    const tx: TransactionResponse = await presale.buyToken(
      _amountSDS,
      { value: paymentEth }
    );
    console.log(tx);
    const receipt: TransactionReceipt | null = await tx.wait()
    console.log(receipt);

    setState(PaymentStates.Success);
  }

  return (
    <div className={styles['payment']}>
      <h1 className='font-bold text-lg pb-4 text-[#4C3F67]'>
        Payment process
      </h1>

      <div className="flex flex-col">
        <span className={styles['text__info_banner']}>
          Your Order no. <span className="text-[#A760C8] font-bold">{numOrder}</span> has been placed successfully.
        </span>
        <span className={styles['text__regular']}>
          Please send <span className="text-[#A760C8]">{finalCost.toString()} {nameCurrency} </span> to
          the address below. The token
          balance will appear in your account only after transaction gets 8
          confirmations and approved by our team.
        </span>
        <h3 className="py-4 font-bold text-[12px]">
          Payment to the following Tether Wallet Address:
        </h3>

        <div className="flex">
          <img src="/qr_code_payment.svg" alt="qr code" className="p-0.5 border-2 border-[#D1D5DB] rounded-md" />
          <div className="w-full pl-4 flex flex-col justify-between ">
            <h2 className={styles['h2'] + "pt-2"}>
              Send Amount <span className="text-[#A760C8]">{finalCost.toString()} {nameCurrency}</span>
            </h2>
            <div className='flex justify-between items-center py-2 px-2 border-2 border-[#D1D5DB] rounded-md'>
              <span className="text-sm text-[#939393]">{process.env.SDS_PRESALE_ADDR}</span>
              <img src="/copy_button.svg" alt="" className="p-0.5 bg-[#E7EDF6]" />
            </div>
          </div>
        </div>

        <OutViaWallet />

        <div className="flex py-2 gap-4">
          <button 
            className={styles['button__buy_token']}
            onClick={buyToken}
          >
            Confirm Payment
          </button>

          <button
            className={styles['button__cancel_order']}
            onClick={() => {
              setState(PaymentStates.Offering);
            }}
          >
            Cancel order
          </button>
        </div>

        <div className='py-4 text-[#31B54C] text-xs flex gap-2'>
          <img src="/warn_icon_green.svg" alt="info_icon" />
          <span>
            Do not make payment through exchanges (Binance, HTX, e .t. c.) instead you can
            use MetaMask, Trust Wallet or any wallet that support BNB chain,
          </span>
        </div>

        <div className='text-[#D11000C4] text-xs flex gap-2'>
          <img src="/warn_icon_red.svg" alt="info_icon" />
          <span>
            On case you send a diffrent amount, number of SDS token will update accordingly.
          </span>
        </div>

      </div>

    </div>
  )
}

export default PaymentProcessExecution;