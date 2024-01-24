import React from "react";
import TokenBalanceBoard from "@/components/layout/dashboard/TokenBalanceBoard";
import TokenSalesBoard from "@/components/layout/dashboard/TokenSalesBoard";
import ICOStatusBoard from "@/components/layout/dashboard/ICOStatusBoard";
import AccountStatusBoard from "@/components/layout/dashboard/AccountStatusBoard";
import WelcomeBoard from "@/components/layout/dashboard/WelcomeBoard";


export default function Dashboard() {
  return(
    <div className="gap-4 flex flex-col justify-center">
      <TokenBalanceBoard />
      <div className="h-44 gap-4 flex flex-row justify-between">
        <ICOStatusBoard />
        <AccountStatusBoard />
      </div>
      <WelcomeBoard />
      <TokenSalesBoard />
    </div>
  )
}