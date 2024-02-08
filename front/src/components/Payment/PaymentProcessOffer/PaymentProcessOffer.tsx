'use client';

import React, { useContext } from "react";
import styles from "../PaymentProcess/PaymentProcess.module.scss";
import { useState } from "react";
import { PaymentStates, ArgsType, PaymentProcessContext } from "../PaymentProcess/PaymentProcess";
import { useAccount } from "wagmi";

enum PayMethods {
  Wallet = 'wallet',
  Echange = 'exchange',
  None = '',
}

export function OutViaWallet() {
  const account = useAccount();

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
        disabled={true}
        defaultValue={account !== undefined ? account.address : ""}
      />
    </div>
  );
}

export function OutViaExchange() {
  return (
    <>
      <span className={styles['text__out_via_exchange']}>
        Do not forget to enter your transaction ID (provided by exchange). It will be
        generated on your exchange after sending the funds. It's possible
        to add later the transaction ID in your transactions page.
      </span>
    </>
  );
}

function PaymentProcessOffer({
  amountSDS,
  finalCost,
  nameCurrency,
}: ArgsType) {

  const { state, setState } = useContext(PaymentProcessContext);
  const [method, setMethod] = useState<PayMethods>(PayMethods.None);

  return (
    <div className={styles.payment}>
      <h1 className='font-bold text-lg pb-4 text-[#4C3F67]'>
        Payment process
      </h1>

      <div>
        <span>Please make payment of </span>
        <span className='text-[#8251DE]'>{finalCost?.toString()} {nameCurrency} </span>
        <span>to recieve </span>
        <span className='text-[#8251DE]'>{amountSDS?.toString()} SDS </span>
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
  );
}

export default PaymentProcessOffer;