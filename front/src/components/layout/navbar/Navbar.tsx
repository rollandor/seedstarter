import Image from "next/image";
import React from "react";
import styles from '@/components/layout/navbar/Navbar.module.scss'
import { MENU } from "./Navbar.data";
import Link from "next/link";

const Button = (text: string) => {
  return (
    <button className='h-[36px] bg-secondary border-secondary border rounded-md inline-flex items-center justify-center py-3 px-4 text-center text-base font-bold bg-[#0BB489] text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      {text}
    </button>
  )
}

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='w-4/5 flex flex-col justify-between'>
        <img className='w-[245px] pt-8 pl-7' src='/menu_logo_green.svg'/>
        <ul className='h-10 text-[#8060C8] flex justify-around items-center'>
          {MENU.map(item => (
            <li key={item.url} className="px-4">
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='px-4 flex flex-col justify-center'>
        <div className='py-2 flex items-center'>
          <span className='text-[#0BB489]'>Welcome, User!</span>
          <img className='px-4' src='/male_user.svg'/>
        </div>
        {Button('Connect wallet')}
      </div>
    </nav>
  )
};

export default Navbar;