import React from "react"

const Dashboard = () => {
  return (
    <div class='flex flex-col justify-center'>
      <div class='h-[186px] bg-[#8060C8] rounded font-bold'>

        <div class='h-1/2 ml-[27px] flex items-center'>
          <div class='w-[48px] h-[48px] rounded-[50%] bg-[#D9D9D9]'></div>
          <div class='w-1/2 h-[48px] ml-4 flex flex-col justify-between'>
            <span class='text-[#40E060]'>TOKEN BALANCE</span>
            <div>
              <span class='text-white'>1222 </span>
              <span class='text-white'>SDS</span>
            </div>
          </div>
        </div>

        <div class='h-1/2 ml-[27px] flex flex-col'>
          <span class='text-[#40E060]'>YOUR CONTRIBUTION IN</span>
          <div class='text-white w-full h-full gap-20 flex items-center'>
            <div class='flex flex-col'>
              <span>~</span>
              <span>USD</span>
            </div>
            <div class='flex flex-col'>
              <span>~</span>
              <span>USDT</span>
            </div>
            <div class='flex flex-col'>
              <span>~</span>
              <span>RUB</span>
            </div>
          </div>
        </div>

      </div>
      <div class='m-1 gap-1 flex flex-row justify-between'>
        <div class='h-20 w-1/2 bg-blue-300'></div>
        <div class='h-20 w-1/2 bg-blue-300'></div>
      </div>
      <div class='h-20 bg-blue-500'></div>
    </div>
  );
}

export default Dashboard;