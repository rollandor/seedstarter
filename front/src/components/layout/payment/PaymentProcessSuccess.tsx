import React from "react";
import styles from "@/components/layout/payment/PaymentProcess.module.scss"
import { PaymentStates, ArgsType, PaymentProcessContext } from "./PaymentProcess";
import { useContext } from "react";

function PaymentProcessSuccess({
  amountSDS,
  finalCost,
  nameCurrency,
}: ArgsType) {

  const {state, setState} = useContext(PaymentProcessContext);

  return(
    <div className={styles['payment']}>
      <div className="p-10 flex flex-col gap-4 justify-center text-center items-center text-[#252525]">
        <img src="/payment_success.svg" alt="" />
        <h1 className="text-lg">
          We are verifying your payment.
        </h1>
        <p className="text-sm">
          We will review your transaction and contact you in a few
          hours. You will receive an email with detailed information
          about your contribution.
        </p>

        <button 
          className={styles['button__buy_token']}
          onClick={() => {
            setState(PaymentStates.Offering);
          }}
        >
          View Transaction
        </button>
      </div>
    </div>
  )
}

export default PaymentProcessSuccess;