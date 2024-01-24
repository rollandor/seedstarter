import React from "react";
import TokenBalanceBoard from "@/components/layout/dashboard/TokenBalanceBoard";
import TokenSalesBoard from "@/components/layout/dashboard/TokenSalesBoard";
import PaymentBoard from "@/components/layout/payment/PaymentBoard";
import ICOStatusBoard from "@/components/layout/dashboard/ICOStatusBoard";

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