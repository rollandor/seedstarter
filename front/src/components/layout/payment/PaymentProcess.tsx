'use client';

import React from "react";
import styles from "@/components/layout/payment/PaymentProcess.module.scss"
import { useState } from "react";

function OutViaWallet() {
  return(
    <>
      <h1 className='text-[#8251DE] text-sm py-4'>
        For transaction authentication purposes, it is mandatory  to submit the wallet
        address from which you will send the funds.
      </h1>
      <input 
        type='text'
        className={styles['input__wallet_address']}
        spellCheck={false}
      />
    </>
  )
}

function OutViaExchange() {
  return(
    <>
      <span className={styles['text__out_via_exchange']}>
        Do not forget to enter your transaction ID (provided by exchange). It will be 
        generated on your exchange after sending the funds. It's possible
        to add later the transaction ID in your transactions page.
      </span>
    </>
  )
}

interface ArgsType {
  amountSDS?: number,
  finalCost?: number,
};

function PaymentProcess({amountSDS, finalCost}: ArgsType) {
  const [method, setMethod] = useState<string>('');

  return (
    <div className={styles.payment}>
      <h1 className='font-bold text-lg pb-4 text-[#4C3F67]'>
        Payment process
      </h1>

      <div>
        <span>Please make payment of </span>
        <span className='text-[#8251DE]'>{finalCost?.toFixed(2)} USDT </span>
        <span>to recieve </span>
        <span className='text-[#8251DE]'>{amountSDS?.toFixed(2)} SDS </span>
        <span>token</span>
      </div>

      <p className='pb-4 text-sm text-[#505050]'>
        You can choose any of following payment method to make your payment. The 
        token balance will appear in your account after successful payment.
      </p>

      <h1 className='py-2 font-bold text-lg text-[#4C3F67]'>
        Select payment method:
      </h1>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center py-4 px-4 border-2 border-[#D1D5DB] rounded-md'>
          <input 
            type="checkbox"
            checked={method == 'wallet' ? true : false}
            onClick={e => {
              if (method == 'wallet') {
                setMethod('');
                return;
              }
              setMethod('wallet');
            }}
            className={styles['checkbox__method']}
          />
          <label className="ms-2 text-sm font-medium text-gray-900">
            Pay via wallet
          </label>
        </div>
        <div className='flex items-center py-4 px-4 border-2 border-[#D1D5DB] rounded-md'>
          <input 
            type="checkbox"
            checked={method == 'exchange' ? true : false}
            onClick={e => {
              if (method == 'exchange') {
                setMethod('');
                return;
              }
              setMethod('exchange');
            }}
            className={styles['checkbox__method']}
          />
          <label className="ms-2 text-sm font-medium text-gray-900">
            Pay via exchange
          </label>
        </div>
      </div>

      <span className='text-xs italic text-[#505050]'>
        * Payment gateway may charge you a processing fees
      </span>

      <>
        {method == 'wallet' ? (
          <OutViaWallet />
        ) : method == 'exchange' ? (
          <div>
            <OutViaExchange />
          </div>
        ) : ''}
      </>

      <div className="pt-4 flex items-center mb-4">
        <input type="checkbox" value="" className={styles['checkbox__method']} />
        <label className="ms-2 text-sm font-medium text-gray-900">
          I hereby agree to the token purchase agreement and token sale terms.
        </label>
      </div>

      <button className={styles['button__buy_token']}>
        Buy token now
        <img src="/arrow_to_right.svg" alt="" className="pl-4 pointer-events-none" />
      </button>

      <div className='py-4 text-[#606060] text-xs flex gap-2'>
        <img src="/info_icon_gray.svg" alt="info_icon" />
        <span>Our payment address will appear or redirect you for payment after order is placed.</span>
      </div>

    </div>
  )
}

export default PaymentProcess;