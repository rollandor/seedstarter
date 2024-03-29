"use client";

import React from "react";
import styles from "@/components/Navbar/Navbar.module.scss";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "../RainbowKitCustomConnectButton";
import { usePathname } from "next/navigation";
import {
  ListItemButton,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import ProfileButton from "../Buttons/Profile";
import { useUser } from "@/utils/swr";

const MENU = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'smth',
  },
  {
    name: 'Buy token',
    url: '/buytoken',
    icon: 'smth',
  },
  {
    name: 'Transactions',
    url: '/transactions',
    icon: 'smth',
  },
  {
    name: 'Profile',
    url: '/profile',
    icon: 'smth',
  },
  {
    name: 'My tokens',
    url: '/mytokens',
    icon: 'smth',
  },
  {
    name: 'Main site',
    url: 'https://github.com/rollandor/seedstarter',
    icon: 'smth',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const [authActive, setAuthActive] = React.useState(false);

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
              {MENU.map(({ name, url, icon }) => {
                const isActive = pathname === url;
                return (
                  <li key={url}>
                    <Link
                      href={url}
                      passHref
                      className={isActive ? `${styles['navbar__item__active']}` : styles['navbar__item']}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
          >
            <Box display='flex' alignItems='center' color='#0Bb489'>
              <Typography textAlign='center' py={2}>
                Welcome, {user ? user.username || user.email : 'guest'}
              </Typography>
              <ProfileButton />
            </Box>
            <Box display='flex' justifyContent='center'>
              <RainbowKitCustomConnectButton />
            </Box>
          </Box>

        </header>

      </div>
    </>
  );
};

export default Navbar;