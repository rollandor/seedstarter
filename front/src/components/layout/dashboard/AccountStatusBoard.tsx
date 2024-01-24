import React from "react"

function AccountStatusBoard() {
  return (
    <div className='px-7 py-4 w-full rounded-lg bg-white flex flex-col justify-center gap-4'>
      <h1 className='font-bold text-lg'>Your account status</h1>
      <div>
        <span className='bg-[#40E060] text-white rounded-lg px-2 py-2 font-bold'>Email verified</span>
      </div>
      <h1 className='font-bold text-lg'>Receiving wallet</h1>
      <div className='flex justify-between'>
        <span>00000000000000000</span>
        <button className='text-[#8060C8]'>ADD</button>
      </div>
    </div>
  )
}

export default AccountStatusBoard;