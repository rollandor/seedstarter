import React from "react";
import {
  TokenBalanceBoard,
  ICOStatusBoard,
  AccountStatusBoard,
  WelcomeBoard,
  ProgressBoard,
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
      <ProgressBoard />
    </div>
  )
}