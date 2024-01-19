import React from "react";
import TokenBalanceBoard from "@/components/layout/dashboard/TokenBalanceBoard";
import TokenSalesBoard from "@/components/layout/dashboard/TokenSalesBoard";
import AmountContribution from "@/components/layout/dashboard/AmountContribution";
import ExchangeRates from "@/components/layout/dashboard/ExchangeRate";
import {
  ICOStatusBoard,
} from "@/components/layout/dashboard/Dashboard";

export default function Buytoken() {
  return(
    <div className='w-full gap-4 flex justify-between'>
      <div className='w-3/5 h-full bg-white rounded-lg flex flex-col'>
        <ExchangeRates />
        <AmountContribution />
      </div>
      <div className='w-2/5 flex flex-col gap-4'>
        <TokenBalanceBoard />
        <ICOStatusBoard />
        <TokenSalesBoard />
      </div>

    </div>
  )
}