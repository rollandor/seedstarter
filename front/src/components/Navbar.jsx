import React from "react";

const MenuItem = (text) => {
  return(
    <li class='px-4'>{text}</li>
  )
}

const Button = (text) => {
  return (
    <button className='h-[36px] bg-secondary border-secondary border rounded-md inline-flex items-center justify-center py-3 px-4 text-center text-base font-bold bg-[#0BB489] text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      {text}
    </button>
  )
}

const Navbar = () => {
  return (
    <nav class='w-full h-32 bg-white flex justify-between'>
      <div class='w-4/5 flex flex-col justify-between'>
        <img class='w-[245px] pt-8 pl-7' src='src/assets/menu_logo_green.svg'/>
        <ul class='h-10 text-[#8060C8] flex justify-around items-center'>
          {MenuItem('Dashboard')}
          {MenuItem('Buy token')}
          {MenuItem('Transaction')}
          {MenuItem('Profile')}
          {MenuItem('My tokens')}
          {MenuItem('Main site')}
        </ul>
      </div>

      <div class='px-4 flex flex-col justify-center'>
        <div class='py-2 flex items-center'>
          <span class='text-[#0BB489]'>Welcome, User!</span>
          <img class='px-4' src='src/assets/male_user.svg'/>
        </div>
        {Button('Connect wallet')}
      </div>
    </nav>
  )
};

export default Navbar;