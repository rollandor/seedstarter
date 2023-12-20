import React from "react";
import {
  TokenBalanceBoard,
  ICOStatusBoard,
  ProgressBoard,
} from "../components/Boards";

function BuyDashboard() {
  return(
    <div class='w-3/5 h-60 flex'>

    </div>
  )
}

const BuyToken = () => {
  return(
    <div class='w-[1144px] gap-4 flex justify-between'>
      <BuyDashboard />
      <div class='w-2/5 flex flex-col gap-4'>
        <TokenBalanceBoard />
        <ICOStatusBoard />
        <ProgressBoard />
      </div>

    </div>
  )
}

export default BuyToken;