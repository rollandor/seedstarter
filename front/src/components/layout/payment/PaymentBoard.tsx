'use client';

import ExchangeRates from "../dashboard/ExchangeRate";
import AmountContribution from "../dashboard/AmountContribution";
import { useState } from "react";

function PaymentBoard() {
  const [value, setValue] = useState<string>('');

  return(
    <div className='w-3/5 h-full bg-white rounded-lg flex flex-col'>
      <ExchangeRates id={value} setId={setValue} />
      <AmountContribution id={value} setId={setValue} />
    </div>
  )
}

export default PaymentBoard;