"use client"

function TokenBalanceBoard() {
  return (
    <div className='h-44 py-4 bg-[#8060C8] rounded-lg font-bold'>

      <div className='h-1/2 ml-7 flex items-center'>
        <div className='w-12 h-12 rounded-[50%] bg-[#D9D9D9]'></div>
        <div className='w-1/2 h-12 ml-4 flex flex-col justify-between'>
          <span className='text-[#40E060]'>TOKEN BALANCE</span>
          <div className="text-white">
            {/* {haveMetamask ? (
              <Suspense fallback="Processing...">
                {client.isConnected ? (
                  <span>{getBalanceOf(getCurrentAddress())} SDS</span>
                ) : (
                  <></>
                )}
              </Suspense>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>

      <div className='h-1/2 ml-7 flex flex-col'>
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
  )
}

export default TokenBalanceBoard;