'use client';

import ExchangeRates from "../dashboard/ExchangeRate";
import AmountContribution from "../dashboard/AmountContribution";
import { useState } from "react";
import { createContext } from "react";

export const PaymentBoardContext = createContext({
  currencyID: '',
  setCurrencyID: (v: string) => {},
});

function PaymentBoard() {
  const [id, setID] = useState<string>('');

  return(
    <PaymentBoardContext.Provider
      value={{
        currencyID: id,
        setCurrencyID: setID,
      }}
    >
      <div className='w-3/5 h-full bg-white rounded-lg flex flex-col'>
        <ExchangeRates />
        <AmountContribution />
      </div>
    </PaymentBoardContext.Provider>
  )
}

export default PaymentBoard;