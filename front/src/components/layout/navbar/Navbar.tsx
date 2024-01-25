"use client"

import React from "react";
import styles from '@/components/layout/navbar/Navbar.module.scss'
import { MENU } from "./Navbar.data";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "../RainbowKitCustomConnectButton";

const Navbar = () => {
  return (
    <>
      <div id="header" className={styles['fixed_top']}>
        <header className={styles['navbar']}>
          <div className='w-4/5 flex flex-col justify-between'>

            {/* seedstarter logo */}
            <div className={styles['navbar__logo']}>
              <Link href={
                // TODO: called more than one time 
                MENU.filter(item => {
                  if (item.name === 'Main site') {
                    // console.log(item);
                    return item;
                  }
                })[0].url
              }>
                <img src='/menu_logo_green.svg' />
              </Link>
            </div>

            <ul className={styles['navbar__list']}>
              {MENU.map(item => (
                <li key={item.url} className={styles['navbar__item']}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='px-4 flex flex-col justify-center'>
            <div className='py-2 flex items-center'>
              <span className='text-[#0BB489]'>Welcome, User!</span>
              <img className='px-4' src='/male_user.svg' />
            </div>
            <RainbowKitCustomConnectButton />
          </div>

        </header>

      </div>
    </>
  )
};

export default Navbar;