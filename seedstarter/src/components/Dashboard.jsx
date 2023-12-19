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
}

export default Dashboard;