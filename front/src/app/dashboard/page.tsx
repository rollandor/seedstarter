import React from "react";
import TokenBalanceBoard from "@/components/TokenBalanceBoard/TokenBalanceBoard";
import TokenSalesBoard from "@/components/TokenSalesBoard/TokenSalesBoard";
import ICOStatusBoard from "@/components/ICOStatusBoard/ICOStatusBoard";
import AccountStatusBoard from "@/components/AccountStatusBoard/AccountStatusBoard";
import WelcomeBoard from "@/components/WelcomeBoard/WelcomeBoard";


export default function Dashboard() {
  return (
    <div className="w-full flex flex-col justify-center gap-4">
      <TokenBalanceBoard />
      <div className="flex flex-row justify-between gap-4">
        <ICOStatusBoard />
        <AccountStatusBoard />
      </div>
      <WelcomeBoard />
      <TokenSalesBoard />
    </div>
  );
}