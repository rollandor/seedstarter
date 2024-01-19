"use client"

import React from "react"
import styles from "@/components/layout/dashboard/Dashboard.module.scss"
import Modal from "../modal/Modal"

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

