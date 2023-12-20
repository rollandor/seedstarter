import React from "react";
import {
  TokenBalancePanel,
  ICOStatusBoard,
  AccountStatusBoard,
  WelcomeBoard,
  ProgressBoard,
} from "../components/Boards";

const Dashboard = () => {
  return(
    <div class='w-[1144px] gap-4 flex flex-col justify-center pt-4'>
      <TokenBalancePanel />
      <div class='h-[176px] gap-4 flex flex-row justify-between'>
        <ICOStatusBoard />
        <AccountStatusBoard />
      </div>
      <WelcomeBoard />
      <ProgressBoard />
    </div>
  )
}

export default Dashboard;