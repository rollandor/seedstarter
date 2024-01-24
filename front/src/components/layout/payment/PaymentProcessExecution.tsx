import React from "react";
import styles from "@/components/layout/payment/PaymentProcess.module.scss"
import { PaymentStates, ArgsType } from "./PaymentProcess";
import { OutViaWallet } from "./PaymentProcessOffer";


function PaymentProcessExecution({ 
  amountSDS,
  finalCost,
  nameCurrency,
  state,
  setState,
}: ArgsType) {
  const numOrder = '000003';

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
          Please send <span className="text-[#A760C8]">{finalCost?.toFixed(2)} {nameCurrency} </span> to
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
              Send Amount <span className="text-[#A760C8]">{finalCost?.toFixed(2)} {nameCurrency}</span>
            </h2>
            <div className='flex justify-between items-center py-2 px-2 border-2 border-[#D1D5DB] rounded-md'>
              <span className="text-sm text-[#939393]">0xB34e2223d92B5FF99a6F93416510a7e4aB66AdDE</span>
              <img src="/copy_button.svg" alt="" className="p-0.5 bg-[#E7EDF6]" />
            </div>
          </div>
        </div>

        <OutViaWallet />

        <div className="flex py-2 gap-4">
          <button 
            className={styles['button__buy_token']}
            onClick={() => {
              setState(PaymentStates.Success);
            }}
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