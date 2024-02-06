'use client';

import React from "react";
import styles from "@/components/layout/dashboard/Dashboard.module.scss";
import Link from "next/link";
import { useGlobalState } from "@/services/store/store";
import { formatEther } from "viem";

function ICOStatusBoard() {

  const presaleData = useGlobalState(state => state.presaleData);

  return (
    <div className='px-7 py-4 w-full rounded-lg bg-white flex flex-col justify-center gap-4'>
      <div className='flex items-center'>
        <h1 className='font-bold text-lg'>ICO Round {presaleData?.currentStageIdAcite.toString()}</h1>
        <span className='bg-[#8060C8] py-1 px-2 ml-2 text-white rounded-lg'>TBA</span>
      </div>
      <div>
        {presaleData !== undefined ? (
          <span>1 SDS = {formatEther(presaleData.price)} ETH</span>
        ) : ""}
      </div>
      <div>
        <button 
          className={styles['genericButton']}
        >
          <Link href="/buytoken">
            Buy token now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ICOStatusBoard;
