"use client"

import Image from "next/image";
import React from "react";
import styles from '@/components/layout/navbar/Navbar.module.scss'
import { MENU } from "./Navbar.data";
import { useState, useEffect } from "react";
import Link from "next/link";

import Metamask from "@/components/metamask/metamask";
import { signMessage } from "@/components/metamask/sign"

const Navbar = () => {
  const [haveMetamask, setHaveMetamask] = useState(true);
  const [client, setClient] = useState({
    isConnected: false,
    address: "",
  });

  const checkConnection = async () => {
    const { ethereum }: any = window;
    if (ethereum) {
      setHaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setClient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setClient({
          isConnected: false,
          address: "",
        });
      }
    } else {
      setHaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum }: any = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setClient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

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
                    console.log(item);
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

            {/* ---- */}
            <p>
              {!haveMetamask ? (
                <Metamask />
              ) : client.isConnected ? (
                <button className={styles['connect_wallet']} >
                  {client.address.slice(0, 4)}...
                  {client.address.slice(38, 42)}
                </button>
              ) : (
                <>
                  <br />
                  <button className={styles['connect_wallet']} onClick={connectWeb3}>
                    Connect Wallet
                  </button>
                </>
              )}
            </p>
          </div>

        </header>

      </div>
    </>
  )
};

export default Navbar;