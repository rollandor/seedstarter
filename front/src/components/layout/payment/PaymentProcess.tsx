'use client';

import React from "react";
import styles from "@/components/layout/payment/PaymentProcess.module.scss"
import { useState } from "react";
import { setTotalSupply } from "@/components/metamask/contract";

enum PayMethods {
  Wallet = 'wallet',
  Echange = 'exchange',
  None = '',
}

export enum PaymentStates {
  Offering,
  Execution,
  Success,
  Failed,
  Undefined,
}

function OutViaWallet() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <span className={styles['text__out_via_exchange']}>
        For transaction authentication purposes, it is mandatory  to submit the wallet
        address from which you will send the funds.
      </span>
      <input
        type='text'
        className={styles['input__wallet_address']}
        spellCheck={false}
      />
    </div>
  )
}

function OutViaExchange() {
  return (
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
  amountSDS: number,
  finalCost: number,
  nameCurrency: string,
  state: PaymentStates,
  setState: React.Dispatch<React.SetStateAction<PaymentStates>>,
};

function PaymentProcessOffer({ 
  amountSDS,
  finalCost,
  nameCurrency,
  state,
  setState,
}: ArgsType) {

  const [method, setMethod] = useState<PayMethods>(PayMethods.None);

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
            checked={method == PayMethods.Wallet ? true : false}
            onChange={e => {
              if (method == PayMethods.Wallet) {
                setMethod(PayMethods.None);
                return;
              }
              setMethod(PayMethods.Wallet);
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
            onChange={e => {
              if (method == 'exchange') {
                setMethod(PayMethods.None);
                return;
              }
              setMethod(PayMethods.Echange);
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

      <button 
        className={styles['button__buy_token']}
        onClick={() => {
          setState(PaymentStates.Execution);
        }}
      >
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

function PaymentProcessSuccess({
  amountSDS,
  finalCost,
  nameCurrency,
  state,
  setState,
}: ArgsType) {
  return(
    <div className={styles['payment']}>
      <div className="p-10 flex flex-col gap-4 justify-center text-center items-center text-[#252525]">
        <img src="/payment_success.svg" alt="" />
        <h1 className="text-lg">
          We are verifying your payment.
        </h1>
        <p className="text-sm">
          We will review your transaction and contact you in a few
          hours. You will receive an email with detailed information
          about your contribution.
        </p>

        <button 
          className={styles['button__buy_token']}
          onClick={() => {
            setState(PaymentStates.Offering);
          }}
        >
          View Transaction
        </button>
      </div>
    </div>
  )
}

function PaymentProcess({ 
  amountSDS, 
  finalCost,
  nameCurrency,
}: ArgsType) {

  const [state, setState] = useState<PaymentStates>(PaymentStates.Offering);

  return (
    <>
      {state == PaymentStates.Offering ? (
        <PaymentProcessOffer 
          amountSDS={amountSDS} 
          finalCost={finalCost}
          nameCurrency={'USDC'}
          state={state}
          setState={setState}
        />
      ) : state == PaymentStates.Execution ? (
        <PaymentProcessExecution 
          amountSDS={amountSDS}
          finalCost={finalCost}
          nameCurrency={'USDC'}
          state={state}
          setState={setState}
        />
      ) : state == PaymentStates.Success ? (
        <PaymentProcessSuccess 
          amountSDS={amountSDS}
          finalCost={finalCost}
          nameCurrency={'USDC'}
          state={state}
          setState={setState}
        />
      ) : "" }
    </>
  )
}

export default PaymentProcess;