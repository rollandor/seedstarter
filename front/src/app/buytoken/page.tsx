import React from "react";
import TokenBalanceBoard from "@/components/TokenBalanceBoard/TokenBalanceBoard";
import TokenSalesBoard from "@/components/TokenSalesBoard/TokenSalesBoard";
import PaymentBoard from "@/components/Payment/PaymentBoard";
import ICOStatusBoard from "@/components/ICOStatusBoard/ICOStatusBoard";

export default function Buytoken() {
  return(
    <div className='w-full gap-4 flex justify-between'>
      <PaymentBoard />
      <div className='w-2/5 flex flex-col gap-4'>
        <TokenBalanceBoard />
        <ICOStatusBoard />
        <TokenSalesBoard />
      </div>

    </div>
  )
}