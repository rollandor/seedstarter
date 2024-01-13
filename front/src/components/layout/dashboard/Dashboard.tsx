import React from "react"

function Button(text: string) {
  return (
    <button className='h-[36px] bg-secondary border-secondary border rounded-md inline-flex items-center justify-center py-3 px-4 text-center text-base font-bold bg-[#40E060] text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      {text}
    </button>
  )
}

export function TokenBalanceBoard() {
  return (
    <div className='h-44 py-4 bg-[#8060C8] rounded-lg font-bold'>

      <div className='h-1/2 ml-7 flex items-center'>
        <div className='w-12 h-12 rounded-[50%] bg-[#D9D9D9]'></div>
        <div className='w-1/2 h-12 ml-4 flex flex-col justify-between'>
          <span className='text-[#40E060]'>TOKEN BALANCE</span>
          <div>
            <span className='text-white'>1222 </span>
            <span className='text-white'>SDS</span>
          </div>
        </div>
      </div>

      <div className='h-1/2 ml-7 flex flex-col'>
        <span className='text-[#40E060]'>YOUR CONTRIBUTION IN</span>
        <div className='text-white w-full h-full gap-20 flex items-center'>
          <div className='flex flex-col items-center'>
            <span>~</span>
            <span>USD</span>
          </div>
          <div className='flex flex-col items-center'>
            <span>~</span>
            <span>USDT</span>
          </div>
          <div className='flex flex-col items-center'>
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
        {Button('Buy token now')}
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

export function ProgressBoard() {
  const calendarWindow = (text: string) => {
    return (
      <div className='h-16 w-16 bg-secondary border-secondary border rounded flex flex-col justify-center items-center'>
        <span className='text-xl'>00</span>
        <span className='text-sm text-[#909090] font-bold'>{text}</span>
      </div>
    )
  }

  return (
    <div className='bg-white rounded-lg px-7 py-6 flex flex-col justify-center'>
      <h1 className='font-bold text-lg'>Token sales progress</h1>

      <div className="flex justify-between mb-1">
        <div className='text-sm text-[#909090] font-bold py-2 flex flex-col'>
          <span>RAISED AMOUNT</span>
          <div>
            <span>1000.00 </span>
            <span>SDS</span>
          </div>
        </div>

        <div className='text-sm text-[#909090] font-bold py-2 flex flex-col items-end'>
          <span>TOTAL TOKEN SUPPLY</span>
          <div>
            <span>22000000.00 SDS</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#909090]">
        <div className="bg-[#8251DE] h-2.5 w-[20%] rounded-full"></div>
      </div>

      <div className='flex flex-col pt-6 gap-2'>
        <span className='text-sm text-[#909090] font-bold'>SALES END IN</span>
        <div className='flex gap-2'>
          {calendarWindow('DAY')}
          {calendarWindow('HOUR')}
          {calendarWindow('MIN')}
          {calendarWindow('SEC')}
        </div>
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

      <button className='h-11 w-44 bg-secondary border-secondary border rounded-md inline-flex items-center justify-center py-3 px-4 text-center text-base font-bold bg-[#5AABFF] text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>Make payment</button>

      <div className='w-full h-0.5 my-4 bg-[#F5F5F5] rounded'></div>

      <span className='text-sm text-[#909090]'>Tokens will appear in your account after payment successfully made and approved by our team. Please note that SDS token will be distributed after the token sales and-date.</span>

    </div>
  )
}