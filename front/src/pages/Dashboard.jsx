import React from "react";
import {
  TokenBalanceBoard,
  ICOStatusBoard,
  AccountStatusBoard,
  WelcomeBoard,
  ProgressBoard,
} from "../components/Boards";

const Dashboard = () => {
  return(
    <div class='w-[1144px] gap-4 flex flex-col justify-center'>
      <TokenBalanceBoard />
      <div class='h-44 gap-4 flex flex-row justify-between'>
        <ICOStatusBoard />
        <AccountStatusBoard />
      </div>
      <WelcomeBoard />
      <ProgressBoard />
    </div>
  )
}

export default Dashboard;