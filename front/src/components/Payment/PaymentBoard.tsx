'use client';

import ExchangeRates from "../ExchangeRates/ExchangeRate";
import AmountContribution from "../AmountContribution/AmountContribution";
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
      <div className='p-8 w-3/5 h-full bg-white rounded-lg flex flex-col gap-8'>
        <ExchangeRates />
        <AmountContribution />
      </div>
    </PaymentBoardContext.Provider>
  )
}

export default PaymentBoard;