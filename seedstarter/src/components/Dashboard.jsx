import React from "react"

const Dashboard = () => {
  return (
    <div class='flex flex-col justify-center'>
      <div class='h-20 bg-blue-200'></div>
      <div class='m-1 gap-1 flex flex-row justify-between'>
        <div class='h-20 w-1/2 bg-blue-300'></div>
        <div class='h-20 w-1/2 bg-blue-300'></div>
      </div>
      <div class='h-20 bg-blue-500'></div>
    </div>
  );
  // return (
  //   <div className='w-full flex md:justify-center justify-between items-center p-4'>
  //     <div className='token_balance'>Token balance</div>
  //     <div className='ico_status'>
  //       <div>ICO round</div>
  //       <div>Account status</div>
  //     </div>
  //     <div className='welcome_board'>Welcome board</div>
  //     <div className='token_sales'>Token sales</div>
  //   </div>
  // )
}

export default Dashboard;