import React from "react";
import {
  TokenBalanceBoard,
  ICOStatusBoard,
  ProgressBoard,
} from "../components/Boards";

function CurrentPrice() {
  const exchangeRate = (nameCur, nameNetwork, value) => {
    return (
      <div class='w-1/2 rounded-lg bg-[#E7DBF7] h-14 px-4 flex justify-between items-center'>
        <div>
          <span class='font-bold'>{nameCur}</span>
          <span class='text-[#909090] pl-1'>
            {nameNetwork ? '[' + nameNetwork + ']' : ''}
          </span>
        </div>
        <div>
          <span class='text-[#909090]'>{value}</span>
          <span class='text-[#909090] pl-1'>{nameCur}</span>
        </div>
      </div>
    )
  }

  return (
    <div class='px-4 py-4 flex flex-col'>
      <h1 class='font-bold text-lg'>Choose your preferred currency and calculate SDS token price</h1>
      <span class='pb-4 text-[#606060]'>Buy SDS tokens with the currency of your choice  and become part of our project</span>
      <div class='flex flex-col gap-4'>
        {/* TODO: make by using flex-wrap */}
        <div class='flex gap-4'>
          {exchangeRate('USD', '', 0.442)}
          {exchangeRate('RUB', '', 0.442)}
        </div>

        <div class='flex gap-4'>
          {exchangeRate('USDT', 'BEP20', 0.442)}
          {exchangeRate('USDC', '', 0.442)}
        </div>

        <div class='flex gap-4'>
          {exchangeRate('USDT', 'ERC20', 0.442)}
          {exchangeRate('BUSD', '', 0.442)}
        </div>

      </div>
    </div>
  )
}

function AmountContribution() {
  return(
    <div class='px-4 py-4 flex flex-col'>
      <h1 class='font-bold text-lg'>Amount of contribution</h1>
      <span class='pb-4 text-[#606060]'>Enter the amount of SDS tokens that you want to buy. The calculator below helps to convert the required quantity of tokens into the amount of your selected currency</span>
      <input type="text" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-24 p-2.5 " placeholder="0" required></input>
    </div>
  )
}

const BuyToken = () => {
  return (
    <div class='w-[1144px] gap-4 flex justify-between'>
      <div class='w-3/5 h-full bg-white rounded-lg flex flex-col'>
        <CurrentPrice />
        <AmountContribution />
      </div>
      <div class='w-2/5 flex flex-col gap-4'>
        <TokenBalanceBoard />
        <ICOStatusBoard />
        <ProgressBoard />
      </div>

    </div>
  )
}

export default BuyToken;