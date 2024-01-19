"use client"

import React, { SyntheticEvent } from "react"
import styles from "@/components/layout/dashboard/ExchangeRate.module.scss";
import { ExchangeRatesArray } from "@/components/layout/dashboard/ExchangeRates";
import { useState, Fragment } from "react";

function ExchangeRates() {
  const [active, setActive] = useState('');
  const handleClick = (event: any) => {
    console.log(event.target);
    setActive(event.target.id)
  }

  const exchangeRateButton = (
    currencyName: string,
    networkName: string,
    value: number,
    key: string
  ) => {
    return (
      <div
        key={key}
        role="button"
        className={active === key ?  styles['button__currency'] + " " + styles.active : styles['button__currency']}
        id={key}
        onClick={handleClick}
      >
        <div className="pointer-events-none">
          <a className='font-bold'>{currencyName}</a>
          <a className='text-[#909090] pl-1'>
            {networkName ? '[' + networkName + ']' : ''}
          </a>
        </div>
        <div className="text-[#909090] pointer-events-none">{value} {currencyName}</div>
      </div>
    )
  }

  return (
    <div className='px-4 py-4 flex flex-col'>
      <h1 className='font-bold text-lg'>
        Choose your preferred currency and calculate SDS token price
      </h1>
      <span className='pb-4 text-[#606060]'>
        Buy SDS tokens with the currency of your choice  and become part of our project
      </span>
      <div className='flex flex-wrap'>
        <Fragment>
          {ExchangeRatesArray.map(item => (
            exchangeRateButton(item.currencyName, item.networkName, item.value, item.key)
          ))}
        </Fragment>
      </div>
    </div>
  )
}

export default ExchangeRates;