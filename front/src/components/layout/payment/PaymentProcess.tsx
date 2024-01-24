'use client';

import React from "react";
import { useState } from "react";
import PaymentProcessOffer from "./PaymentProcessOffer";
import PaymentProcessExecution from "./PaymentProcessExecution";
import PaymentProcessSuccess from "./PaymentProcessSuccess";

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
  state: PaymentStates,
  setState: React.Dispatch<React.SetStateAction<PaymentStates>>,
};

function PaymentProcess({ 
  amountSDS, 
  finalCost,
  nameCurrency,
}: ArgsType) {

  const [state, setState] = useState<PaymentStates>(PaymentStates.Offering);

  return (
    <>
      {state == PaymentStates.Offering ? (
        <PaymentProcessOffer 
          amountSDS={amountSDS} 
          finalCost={finalCost}
          nameCurrency={'USDC'}
          state={state}
          setState={setState}
        />
      ) : state == PaymentStates.Execution ? (
        <PaymentProcessExecution 
          amountSDS={amountSDS}
          finalCost={finalCost}
          nameCurrency={'USDC'}
          state={state}
          setState={setState}
        />
      ) : state == PaymentStates.Success ? (
        <PaymentProcessSuccess 
          amountSDS={amountSDS}
          finalCost={finalCost}
          nameCurrency={'USDC'}
          state={state}
          setState={setState}
        />
      ) : "" }
    </>
  )
}

export default PaymentProcess;