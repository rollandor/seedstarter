import React from "react"
import styles from "@/components/layout/dashboard/Dashboard.module.scss"

function Button(text: string) {
  return (
    <button className={styles['genericButton']}>
      {text}
    </button>
  )
}

function WelcomeBoard() {
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

export default WelcomeBoard;