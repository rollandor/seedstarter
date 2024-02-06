import React from "react";

function AccountStatusBoard() {
  return (
    <div className='w-full p-8 rounded-lg bg-white flex flex-col justify-center gap-2'>
      <h1 className='font-bold text-lg'>Your account status</h1>
      <div>
        <span className='bg-[#0BB489] text-white rounded-lg px-4 py-1 font-bold'></span>
      </div>

      <h1 className='font-bold text-lg'>Receiving wallet</h1>
      <div className='flex justify-between'>
        <span className="text-gray-500">{process.env.SDS_PRESALE_ADDR} {"[SEP]"}</span>
        <button className='text-[#8060C8] font-bold'>ADD</button>
      </div>
    </div>
  );
}

export default AccountStatusBoard;