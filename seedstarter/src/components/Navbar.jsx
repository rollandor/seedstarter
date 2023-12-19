import React from "react";

const Navbar = () => {
  return (
    <div class='gap-1 h-20 mb-1 bg-teal-200 flex flex-row justify-between items-center'>
      <div class='ml-1 h-[90%] w-3/4 bg-teal-400'>
        <div class='h-1/2 bg-teal-600'></div>
        <div class='h-1/2 bg-teal-400'>
          <ul class='h-full w-full flex justify-between items-center'>
            <li class='mx-4 '>Dashboard</li>
            <li class='mx-4'>Buy token</li>
            <li class='mx-4'>Transaction</li>
            <li class='mx-4'>My action</li>
            <li class='mx-4'>About</li>
          </ul>
        </div>
      </div>
      <div class='mr-1 h-[90%] w-1/4 bg-teal-400'></div>
    </div>
  )
};

export default Navbar;