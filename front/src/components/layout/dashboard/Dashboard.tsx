"use client"

import React from "react"
import styles from "@/components/layout/dashboard/Dashboard.module.scss"
import Modal from "../modal/Modal"
import { PaymentProcess } from "../payment/PaymentProcess"
import { useState } from "react"

function Button(text: string) {
  return (
    <button className={styles['genericButton']}>
      {text}
    </button>
  )
}

export function ICOStatusBoard() {
  return (
    <div className='px-7 py-4 w-full rounded-lg bg-white flex flex-col justify-center gap-4'>
      <div className='flex items-center'>
        <h1 className='font-bold text-lg'>ICO Round 1</h1>
        <span className='bg-[#8060C8] py-1 px-2 ml-2 text-white rounded-lg'>TBA</span>
      </div>
      <div>
        <span>1 SDS = </span>
        <span>0.3 </span>
        <span>USD</span>
      </div>
      <div>
        <button className={styles['genericButton']} >
          Buy token now
        </button>
      </div>
    </div>
  )
}

export function AccountStatusBoard() {
  return (
    <div className='px-7 py-4 w-full rounded-lg bg-white flex flex-col justify-center gap-4'>
      <h1 className='font-bold text-lg'>Your account status</h1>
      <div>
        <span className='bg-[#40E060] text-white rounded-lg px-2 py-2 font-bold'>Email verified</span>
      </div>
      <h1 className='font-bold text-lg'>Receiving wallet</h1>
      <div className='flex justify-between'>
        <span>00000000000000000</span>
        <button className='text-[#8060C8]'>ADD</button>
      </div>
    </div>
  )
}

export function WelcomeBoard() {
  return (
    <div className='bg-white rounded-lg px-7 py-4 flex flex-col justify-center'>
      <h1 className='font-bold text-lg'>Thank you and Welcome!</h1>
      <div className='flex justify-between items-center'>
        <p className='w-1/2'>Feel free to ask us any questions and chat with our community on the [EN] English Telegram channel</p>
        {Button('Download whitepaper')}
      </div>
    </div>
  )
}

export function CurrentPrice() {
  const exchangeRate = (nameCur: string, nameNetwork: string, value: number) => {
    return (
      <div className='w-1/2 rounded-lg bg-[#E7DBF7] h-14 px-4 flex justify-between items-center'>
        <div>
          <span className='font-bold'>{nameCur}</span>
          <span className='text-[#909090] pl-1'>
            {nameNetwork ? '[' + nameNetwork + ']' : ''}
          </span>
        </div>
        <div>
          <span className='text-[#909090]'>{value}</span>
          <span className='text-[#909090] pl-1'>{nameCur}</span>
        </div>
      </div>
    )
  }

  return (
    <div className='px-4 py-4 flex flex-col'>
      <h1 className='font-bold text-lg'>Choose your preferred currency and calculate SDS token price</h1>
      <span className='pb-4 text-[#606060]'>Buy SDS tokens with the currency of your choice  and become part of our project</span>
      <div className='flex flex-col gap-4'>
        {/* TODO: make by using flex-wrap */}
        <div className='flex gap-4'>
          {exchangeRate('USD', '', 0.442)}
          {exchangeRate('RUB', '', 0.442)}
        </div>

        <div className='flex gap-4'>
          {exchangeRate('USDT', 'BEP20', 0.442)}
          {exchangeRate('USDC', '', 0.442)}
        </div>

        <div className='flex gap-4'>
          {exchangeRate('USDT', 'ERC20', 0.442)}
          {exchangeRate('BUSD', '', 0.442)}
        </div>

      </div>
    </div>
  )
}

export function AmountContribution() {
  const [paymentActive, setPaymentActive] = useState(false);

  return(
    <div className='px-4 py-4 flex flex-col'>
      <h1 className='font-bold text-lg'>Amount of contribution</h1>
      <span className='pb-4 text-[#606060]'>Enter the amount of SDS tokens that you want to buy. The calculator below helps to convert the required quantity of tokens into the amount of your selected currency</span>

      <div className='gap-4 flex items-center'>
        <input type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-24 p-2.5 " placeholder="0" required></input>
        <span>=</span>
        <div className='flex flex-col items-center'>
          <span>0</span>
          <span>USD</span>
        </div>
      </div>

      <div className='py-4 text-[#606060] text-sm flex gap-2'>
        <img src="/info_icon_gray.svg" alt="info_icon" />
        <span className='font-bold'>250.000000 USDT (250.0000 SDS)</span>
        <span>Minimum contribution amount is required</span>
      </div>

      <div className='h-24 px-8 border rounded-lg flex flex-col justify-center'>
        <span className='font-bold'>TOTAL SDS</span>
        <span className='text-[#8060C8] text-lg font-bold'>0</span>
      </div>

      <span className='py-4 text-sm text-[#A40000]'>Your contribution will be calculated based on exchange rate at the moment your transaction is confirmed.</span>

      <button className={styles['makePayment']} onClick={() => setPaymentActive(true)}>
        Make payment
      </button>
      <Modal active={paymentActive} setActive={setPaymentActive}>
        <PaymentProcess />
      </Modal>

      <div className='w-full h-0.5 my-4 bg-[#F5F5F5] rounded'></div>

      <span className='text-sm text-[#909090]'>Tokens will appear in your account after payment successfully made and approved by our team. Please note that SDS token will be distributed after the token sales and-date.</span>

    </div>
  )
}