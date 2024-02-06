import React from "react";
import TokenBalanceBoard from "@/components/layout/dashboard/TokenBalanceBoard";
import TokenSalesBoard from "@/components/layout/dashboard/TokenSalesBoard";
import ICOStatusBoard from "@/components/layout/dashboard/ICOStatusBoard";
import AccountStatusBoard from "@/components/layout/dashboard/AccountStatusBoard";
import WelcomeBoard from "@/components/layout/dashboard/WelcomeBoard";


export default function Dashboard() {
  return(
    <div className="w-full flex flex-col justify-center gap-4">
      <TokenBalanceBoard />
      <div className="flex flex-row justify-between gap-4">
        <ICOStatusBoard />
        <AccountStatusBoard />
      </div>
      <WelcomeBoard />
      <TokenSalesBoard />
    </div>
  )
}