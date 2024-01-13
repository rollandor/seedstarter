import React from "react";
import styles from "@/components/layout/payment/PaymentProcess.module.scss"

export function PaymentProcess() {
  return (
    <div className={styles.payment}>
      <h1 className='font-bold text-lg text-[#4C3F67]'>Payment process</h1>
      <div>
        <span>Please make payment of </span>
        <span className='text-[#8251DE]'>100.00 USDT </span>
        <span>to recieve </span>
        <span className='text-[#8251DE]'>1000 SDS </span>
        <span>token</span>
      </div>
      <p className='text-sm text-[#505050]'>You can choose any of following payment method to make your payment. The token balance will appear in your account after successful payment.</p>

      <h1 className='py-2 font-bold text-lg text-[#4C3F67]'>Select payment method:</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center py-4 px-4 border rounded-md'>
          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label className="ms-2 text-sm font-medium text-gray-900">Pay via wallet</label>
        </div>
        <div className='flex items-center py-4 px-4 border rounded-md'>
          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label className="ms-2 text-sm font-medium text-gray-900">Pay via exchange</label>
        </div>
      </div>

      <span className='text-xs italic text-[#505050]'>* Payment gateway may charge you a processing fees</span>

      <div className="py-2 flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label className="ms-2 text-sm font-medium text-gray-900">I hereby agree to the token purchase agreement and token sale terms.</label>
      </div>

      <button className='h-[36px] bg-secondary border-secondary border rounded-md inline-flex items-center justify-center py-3 px-4 text-center text-base font-bold bg-[#40E060] text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
        Buy token now
      </button>

      <div className='py-4 text-[#606060] text-xs flex gap-2'>
        <img src="/info_icon_gray.svg" alt="info_icon" />
        <span>Our payment address will appear  or  redirect you for payment after order is placed.</span>
      </div>

    </div>
  )
}