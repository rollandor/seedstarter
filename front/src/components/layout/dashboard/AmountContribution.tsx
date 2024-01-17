"use client"
import { useState } from "react";
import styles from "@/components/layout/dashboard/AmountContribution.module.scss";
import Modal from "../modal/Modal";
import { PaymentProcess } from "../payment/PaymentProcess";

const SDS_USDT_EXCHANGE_RATE = 0.000253;  // 1 SDS = 0.000253 USDT
const USDT_SDS_EXCHANGE_RATE = 1 / SDS_USDT_EXCHANGE_RATE;

function AmountContribution() {
  const [paymentActive, setPaymentActive] = useState(false);
  const [amount, setAmount] = useState('');

  return (
    <>
      <div className='px-4 py-4 flex flex-col'>
        <h1 className='font-bold text-lg'>Amount of contribution</h1>
        <span className='pb-4 text-[#606060]'>
          Enter the amount of SDS tokens that you want to buy. The
          calculator below helps to convert the required quantity of
          tokens into the amount of your selected currency
        </span>

        <div className='gap-4 flex items-center'>
          <input
            className={styles['inputbox__amount']}
            placeholder="0"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
          />
        </div>

        <div className='py-4 text-[#606060] text-sm flex gap-2'>
          <img src="/info_icon_gray.svg" alt="info_icon" />
          <span className='font-bold'>250.000000 USDT (250.0000 SDS)</span>
          <span>Minimum contribution amount is required</span>
        </div>

        <div className='h-24 px-8 border rounded-lg flex flex-col justify-center'>
          <span className='font-bold'>TOTAL SDS</span>
          <span className='text-[#8060C8] text-lg font-bold'>
            {amount != '' ? (parseFloat(amount) * USDT_SDS_EXCHANGE_RATE).toFixed(2) : '0'}
          </span>
        </div>

        <span className='py-4 text-sm text-[#A40000]'>
          Your contribution will be calculated based on exchange rate at the 
          moment your transaction is confirmed.
        </span>

        <button className={styles['make__payment']} onClick={() => setPaymentActive(true)}>
          Make payment
        </button>
        <Modal active={paymentActive} setActive={setPaymentActive}>
          <PaymentProcess />
        </Modal>

        <div className='w-full h-0.5 my-4 bg-[#F5F5F5] rounded'></div>

        <span className='text-sm text-[#909090]'>
          Tokens will appear in your account after payment successfully made and 
          approved by our team. Please note that SDS token will be distributed 
          after the token sales and-date.
        </span>

      </div>
    </>
  )
} export default AmountContribution;