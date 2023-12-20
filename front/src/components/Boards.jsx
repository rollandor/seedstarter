import React from "react"

function Button(text) {
  return (
    <button className='h-[36px] bg-secondary border-secondary border rounded-md inline-flex items-center justify-center py-3 px-4 text-center text-base font-bold bg-[#40E060] text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      {text}
    </button>
  )
}

export function TokenBalancePanel() {
  return (
    <div class='h-44 py-4 bg-[#8060C8] rounded-lg font-bold'>

      <div class='h-1/2 ml-7 flex items-center'>
        <div class='w-12 h-12 rounded-[50%] bg-[#D9D9D9]'></div>
        <div class='w-1/2 h-12 ml-4 flex flex-col justify-between'>
          <span class='text-[#40E060]'>TOKEN BALANCE</span>
          <div>
            <span class='text-white'>1222 </span>
            <span class='text-white'>SDS</span>
          </div>
        </div>
      </div>

      <div class='h-1/2 ml-7 flex flex-col'>
        <span class='text-[#40E060]'>YOUR CONTRIBUTION IN</span>
        <div class='text-white w-full h-full gap-20 flex items-center'>
          <div class='flex flex-col items-center'>
            <span>~</span>
            <span>USD</span>
          </div>
          <div class='flex flex-col items-center'>
            <span>~</span>
            <span>USDT</span>
          </div>
          <div class='flex flex-col items-center'>
            <span>~</span>
            <span>RUB</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export function ICOStatusBoard() {
  return (
    <div class='px-7 w-1/2 gap-4 rounded-lg bg-white flex flex-col justify-center'>
      <div class='flex items-center'>
        <h1 class='font-bold text-lg'>ICO Round 1</h1>
        <span class='bg-[#8060C8] py-1 px-2 ml-2 text-white rounded-lg'>TBA</span>
      </div>
      <div>
        <span>1 SDS = </span>
        <span>0.3 </span>
        <span>USD</span>
      </div>
      <div>
        {Button('Buy token now')}
      </div>
    </div>
  )
}

export function AccountStatusBoard() {
  return (
    <div class='w-1/2 px-7 rounded-lg bg-white flex flex-col justify-center gap-4'>
      <h1 class='font-bold text-lg'>Your account status</h1>
      <div>
        <span class='bg-[#40E060] text-white rounded-lg px-2 py-2 font-bold'>Email verified</span>
      </div>
      <h1 class='font-bold text-lg'>Receiving wallet</h1>
      <div class='flex justify-between'>
        <span>00000000000000000</span>
        <button class='text-[#8060C8]'>ADD</button>
      </div>
    </div>
  )
}

export function WelcomeBoard() {
  return (
    <div class='bg-white rounded-lg px-7 py-4 flex flex-col justify-center'>
      <h1 class='font-bold text-lg'>Thank you and Welcome!</h1>
      <div class='flex justify-between items-center'>
        <p class='w-1/2'>Feel free to ask us any questions and chat with our community on the [EN] English Telegram channel</p>
        {Button('Download whitepaper')}
      </div>
    </div>
  )
}

export function ProgressBoard() {
  const calendarWindow = (text) => {
    return (
      <div class='h-16 w-16 bg-secondary border-secondary border rounded flex flex-col justify-center items-center'>
        <span class='text-xl'>00</span>
        <span class='text-sm text-[#909090] font-bold'>{text}</span>
      </div>
    )
  }

  return (
    <div class='bg-white rounded-lg px-7 py-6 flex flex-col justify-center'>
      <h1 class='font-bold text-lg'>Token sales progress</h1>

      <div class="flex justify-between mb-1">
        <div class='text-sm text-[#909090] font-bold py-2 flex flex-col'>
          <span>RAISED AMOUNT</span>
          <div>
            <span>1000.00 </span>
            <span>SDS</span>
          </div>
        </div>

        <div class='text-sm text-[#909090] font-bold py-2 flex flex-col items-end'>
          <span>TOTAL TOKEN SUPPLY</span>
          <div>
            <span>22000000.00 SDS</span>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#909090]">
        <div class="bg-[#8251DE] h-2.5 w-[20%] rounded-full"></div>
      </div>

      <div class='flex flex-col pt-6 gap-2'>
        <span class='text-sm text-[#909090] font-bold'>SALES END IN</span>
        <div class='flex gap-2'>
          {calendarWindow('DAY')}
          {calendarWindow('HOUR')}
          {calendarWindow('MIN')}
          {calendarWindow('SEC')}
        </div>
      </div>
    </div>
  )
}
