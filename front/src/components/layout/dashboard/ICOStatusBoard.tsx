'use client';

import React from "react";
import styles from "@/components/layout/dashboard/Dashboard.module.scss";
import Link from "next/link";
import { useGlobalState } from "@/services/store/store";
import { formatEther } from "viem";

function ICOStatusBoard() {

  const presaleData = useGlobalState(state => state.presaleData);

  return (
    <div className='w-full p-8 rounded-lg bg-white flex flex-col justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <h1 className='font-bold text-lg'>ICO Round {presaleData?.currentStageIdAcite.toString()}</h1>
        <span className='bg-[#8060C8] px-2 py-1 text-white rounded-lg'>TBA</span>
      </div>

      <div>
        {presaleData !== undefined ? (
          <span>1 SDS = {formatEther(presaleData.price)} ETH</span>
        ) : ""}
      </div>

      <button 
        className={styles['genericButton']}
      >
        <Link href="/buytoken">Buy token now</Link>
      </button>
    </div>
  );
}

export default ICOStatusBoard;
