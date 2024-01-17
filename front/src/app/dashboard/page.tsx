import React from "react";
import TokenBalanceBoard from "@/components/layout/dashboard/TokenBalanceBoard";
import TokenSalesBoard from "@/components/layout/dashboard/TokenSalesBoard";
import {
  ICOStatusBoard,
  AccountStatusBoard,
  WelcomeBoard,
} from "@/components/layout/dashboard/Dashboard";

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