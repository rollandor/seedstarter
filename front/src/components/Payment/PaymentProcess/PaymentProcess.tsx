'use client';

import React from "react";
import { useState, createContext } from "react";
import PaymentProcessOffer from "../PaymentProcessOffer/PaymentProcessOffer";
import PaymentProcessExecution from "../PaymentProcessExecution/PaymentProcessExecution";
import PaymentProcessSuccess from "../PaymentProcessSuccess/PaymentProcessSuccess";

export enum PaymentStates {
  Offering,
  Execution,
  Success,
  Failed,
  Undefined,
}

export interface ArgsType {
  amountSDS: number,
  finalCost: number,
  nameCurrency: string,
};

export const PaymentProcessContext = createContext({
  state: PaymentStates.Undefined,
  setState: (a: PaymentStates) => { },
});

function PaymentProcess({
  amountSDS,
  finalCost,
  nameCurrency,
}: ArgsType) {

  const [state, setState] = useState<PaymentStates>(PaymentStates.Offering);

  return (
    <PaymentProcessContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {state == PaymentStates.Offering ? (
        <PaymentProcessOffer 
          amountSDS={amountSDS} 
          finalCost={finalCost}
          nameCurrency={nameCurrency}
        />
      ) : state == PaymentStates.Execution ? (
        <PaymentProcessExecution 
          amountSDS={amountSDS}
          finalCost={finalCost}
          nameCurrency={nameCurrency}
        />
      ) : state == PaymentStates.Success ? (
        <PaymentProcessSuccess 
          amountSDS={amountSDS}
          finalCost={finalCost}
          nameCurrency={nameCurrency}
        />
      ) : "" }
    </PaymentProcessContext.Provider>
  )
}

export default PaymentProcess;