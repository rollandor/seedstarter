'use client'

import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { useOwnerBalance, useSalesProgress } from "@/hooks/useContractInfo";
import { useGlobalState } from "@/services/store/store"
import CountdownTimer from "@/components/CountdownTimer";

function TokenSalesBoard() {
  const [salesProgress, setSalesProgress] = useState<number>(0);

  const tokenData = useGlobalState(state => state.tokenData);
  const ownerBalance = useOwnerBalance();
  const presaleState = useGlobalState(state => state.presaleData)

  const salesProgressPercent = useSalesProgress();

  useEffect(() => {
    if (salesProgressPercent) {
      setSalesProgress(salesProgressPercent);
    }
  }, [salesProgressPercent, salesProgress])

  return (
    <div className='bg-white rounded-lg px-7 py-6 flex flex-col justify-center'>
      <h1 className='font-bold text-lg'>Token sales progress</h1>

      <div className="flex justify-between mb-1">
        <div className='text-sm text-[#909090] font-bold py-2 flex flex-col'>
          <span>RAISED AMOUNT</span>
          {ownerBalance !== undefined && tokenData !== undefined ? (
            <span>{formatEther(tokenData.totalSupply.value - ownerBalance)} SDS</span>
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
      <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-[#909090]">
        {salesProgress ? (
          <div className={"h-2.5 rounded-full " + `w-[${salesProgress.toFixed(1)}%] bg-[#8251DE]`}></div>
        ) : (
          <div className="h-2.5 rounded-full"></div>
        )}
      </div>

      {presaleState !== undefined ? (
        <CountdownTimer targetDate={Number(presaleState.end) * 1000} />
      ) : ""}
    </div>
  )
}

export default TokenSalesBoard;