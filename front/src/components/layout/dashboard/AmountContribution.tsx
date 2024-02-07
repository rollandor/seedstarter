'use client';

import { useState, useContext } from "react";
import styles from "@/components/layout/dashboard/AmountContribution.module.scss";
import Modal from "../modal/Modal";
import PaymentProcess from "../payment/PaymentProcess";
import { ExchangeRatesArray, getCurrencyName } from "./ExchangeRates";
import { PaymentBoardContext } from "../payment/PaymentBoard";

function calculateFinalCost(
  currencyID: string,
  inAmount: string,
  amount: number,
  setAmount: Function
): number {
  if (currencyID == '' || inAmount == '') {
    return 0
  }
  const am = parseFloat(inAmount);
  const rate = ExchangeRatesArray.filter(item => {
    if (item.key == currencyID) return item;
  })[0].value

  const res = am * rate;
  if (amount != res) {
    // because every calling setter of any state component
    // trigger re-render so I have to compare before state
    // with after
    setAmount(res);
  }

  return res;
}

function AmountContribution() {

  const {currencyID} = useContext(PaymentBoardContext);

  const [paymentActive, setPaymentActive] = useState<boolean>(false);
  const [inputAmount, setInputAmount] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  return (
    <>
      <div className='flex flex-col'>
        <h1 className='font-bold text-lg'>Amount of contribution</h1>
        <span className='pb-4 text-[#606060]'>
          Enter the amount of SDS tokens that you want to buy. The
          calculator below helps to convert the required quantity of
          tokens into the amount of your selected currency
        </span>

        <div className='gap-4 flex items-center'>
          <input
            className={ currencyID == '' ? styles['inputbox__amount'] + " " + styles.disabled : styles['inputbox__amount']}
            placeholder="0"
            value={inputAmount}
            disabled={ currencyID == '' ? true : false }
            onChange={(e) => {
              setInputAmount(e.target.value);
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
          <span className='font-bold'>TOTAL</span>
          <span className='text-[#8060C8] text-lg font-bold'>
            {inputAmount != '' ? calculateFinalCost(currencyID, inputAmount, amount, setAmount).toString() : '' }
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
          <PaymentProcess
            amountSDS={parseFloat(inputAmount)}
            finalCost={calculateFinalCost(currencyID, inputAmount, amount, setAmount)}
            nameCurrency={getCurrencyName(currencyID)}
          />
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