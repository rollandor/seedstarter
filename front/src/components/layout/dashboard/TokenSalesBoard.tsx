"use client"

import { Suspense } from "react";
import { getAmountSaledTokens, getTotalSupply } from "@/components/metamask/contract";

export function TokenSalesBoard() {
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
          <Suspense fallback="Processing...">
            <span>RAISED AMOUNT</span>
            <span>{getAmountSaledTokens()} SDS</span>
          </Suspense>
        </div>

        <div className='text-sm text-[#909090] font-bold py-2 flex flex-col items-end'>
          <Suspense>
            <span>TOTAL TOKEN SUPPLY</span>
            <span>{getTotalSupply()} SDS</span>
          </Suspense>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#909090]">
        <div className="bg-[#8251DE] h-2.5 w-[25%] rounded-full"></div>
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

export default TokenSalesBoard;