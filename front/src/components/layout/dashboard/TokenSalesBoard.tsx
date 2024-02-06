'use client'

import styles from "@/components/layout/dashboard/TokenSalesBoard.module.scss"
import { useRaisedAmount } from "@/hooks/useContractInfo";
import { useGlobalState } from "@/services/store/store"
import { formatEther } from "viem";
import CountdownTimer from "@/components/CountdownTimer";

function TokenSalesBoard() {
  const tokenData = useGlobalState(state => state.tokenData);
  const raisedAmount = useRaisedAmount();

  const presaleState = useGlobalState(state => state.presaleData)

  const calendarWindow = (text: string) => {
    return (
      <div className={styles['calendar__item']}>
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
          {raisedAmount !== undefined && tokenData !== undefined ? (
            <span>{formatEther(tokenData.totalSupply.value - raisedAmount)} SDS</span>
          ) : ""} 
        </div>

        <div className='text-sm text-[#909090] font-bold py-2 flex flex-col items-end'>
          <span>TOTAL TOKEN SUPPLY</span>
          {tokenData !== undefined ? (
            <span>{tokenData.totalSupply.formatted}</span>
          ): ""}
        </div>
      </div>

      {/* slider */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#909090]">
        <div className="bg-[#8251DE] h-2.5 w-[25%] rounded-full"></div>
      </div>

      {presaleState !== undefined ? (
        <CountdownTimer targetDate={Number(presaleState.end) * 1000} />
      ) : ""}
    </div>
  )
}

export default TokenSalesBoard;