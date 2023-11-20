import React from "react"

const Dashboard = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='token_balance'>Token balance</div>
      <div className='ico_status'>
        <div>ICO round</div>
        <div>Account status</div>
      </div>
      <div className='welcome_board'>Welcome board</div>
      <div className='token_sales'>Token sales</div>
    </div>
  )
}

export default Dashboard;