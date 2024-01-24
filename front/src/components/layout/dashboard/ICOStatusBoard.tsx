
import React from "react"
import styles from "@/components/layout/dashboard/Dashboard.module.scss"


function ICOStatusBoard() {
  return (
    <div className='px-7 py-4 w-full rounded-lg bg-white flex flex-col justify-center gap-4'>
      <div className='flex items-center'>
        <h1 className='font-bold text-lg'>ICO Round 1</h1>
        <span className='bg-[#8060C8] py-1 px-2 ml-2 text-white rounded-lg'>TBA</span>
      </div>
      <div>
        <span>1 SDS = </span>
        <span>0.3 </span>
        <span>USD</span>
      </div>
      <div>
        <button className={styles['genericButton']} >
          Buy token now
        </button>
      </div>
    </div>
  )
}

export default ICOStatusBoard;
