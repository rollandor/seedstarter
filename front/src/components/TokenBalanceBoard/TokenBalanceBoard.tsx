'use client';

import React from "react";
import { formatEther, parseEther } from "viem";
import { useAccount, useContractRead, erc20ABI } from "wagmi";

const TokenBalanceBoardActive = ({ acc }: { acc: string; }) => {

  const { data } = useContractRead({
    abi: erc20ABI,
    address: process.env.SDS_ADDR,
    functionName: 'balanceOf',
    args: [acc],
  });

  return (
    <div className='bg-[#8060C8] rounded-lg font-bold flex flex-col gap-4 py-8'>

      <div className='h-1/2 px-8 flex items-center'>
        <div className='w-12 h-12 rounded-[50%] bg-[#D9D9D9]'></div>
        <div className='w-full h-12 ml-4 flex flex-col justify-between'>
          <span className='text-[#40E060]'>TOKEN BALANCE</span>
          <div className="text-white">
            {data !== undefined ? (
              <span>{formatEther(data)} SDS</span>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      </div>

      <div className='h-1/2 px-8 flex flex-col'>
        <span className='text-[#40E060]'>YOUR CONTRIBUTION IN</span>
        <div className='text-white w-full h-full gap-20 flex items-center'>
          <div className='flex flex-col items-center'>
            <span>~</span>
            <span>USD</span>
          </div>
          <div className='flex flex-col items-center'>
            <span>~</span>
            <span>USDT</span>
          </div>
          <div className='flex flex-col items-center'>
            <span>~</span>
            <span>RUB</span>
          </div>
        </div>
      </div>

    </div>
  );
};

const TokenBalanceBoardDisable = () => {
  return (
    <div className='bg-[#8060C8] rounded-lg font-bold flex justify-center items-center p-4 gap-4'>
      <span className="text-white">No connected wallets</span>
    </div>
  );
};

function TokenBalanceBoard() {
  const acc = useAccount();

  return (
    <React.Fragment>
      {acc.isConnected ? (
        <TokenBalanceBoardActive acc={acc.address!} />
      ) : (
        <TokenBalanceBoardDisable />
      )}
    </React.Fragment>
  );
}

export default TokenBalanceBoard;