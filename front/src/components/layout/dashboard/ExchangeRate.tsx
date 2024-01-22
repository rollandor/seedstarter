"use client"

import React from "react"
import styles from "@/components/layout/dashboard/ExchangeRate.module.scss";
import { ExchangeRatesArray } from "@/components/layout/dashboard/ExchangeRates";
import { useState, Fragment } from "react";

interface UserInputState {
  id: string,
  setId: React.Dispatch<React.SetStateAction<string>>,
}

function ExchangeRates({id, setId}: UserInputState) {
  const [active, setActive] = useState('');
  const handleClick = (event: any) => {
    console.log('passing id = %s; target id = %d', id, event.target.id);
    if ( active != event.target.id ) {
      setId(event.target.id);
      setActive(event.target.id);
    } else {
      setId('');
      setActive('');
    }
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