import styles from "@/components/layout/dashboard/TokenSalesBoard.module.scss"
import { getAmountSaledTokens, getTotalSupply } from "@/components/metamask/contract";

async function TokenSalesBoard() {
  const calendarWindow = (text: string) => {
    return (
      <div className={styles['calendar__item']}>
        <span className='text-xl'>00</span>
        <span className='text-sm text-[#909090] font-bold'>{text}</span>
      </div>
    )
  }

  // const amountTokens = await getAmountSaledTokens();
  // const totalSupply = await getTotalSupply();

  return (
    <div className='bg-white rounded-lg px-7 py-6 flex flex-col justify-center'>
      <h1 className='font-bold text-lg'>Token sales progress</h1>

      <div className="flex justify-between mb-1">
        <div className='text-sm text-[#909090] font-bold py-2 flex flex-col'>
          <span>RAISED AMOUNT</span>
          {/* <span>{amountTokens} SDS</span> */}
        </div>

        <div className='text-sm text-[#909090] font-bold py-2 flex flex-col items-end'>
          <span>TOTAL TOKEN SUPPLY</span>
          {/* <span>{totalSupply} SDS</span> */}
        </div>
      </div>

      {/* slider */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#909090]">
        <div className="bg-[#8251DE] h-2.5 w-[25%] rounded-full"></div>
      </div>

      <div className='flex flex-col pt-6 gap-2'>
        <span className='text-sm text-[#909090] font-bold'>SALES END IN</span>
        <div className='flex gap-2'>
          {calendarWindow('DAY')}
          {calendarWindow('HOUR')}
          {calendarWindow('MIN')}
          {calendarWindow('SEC')}
        </div>
      </div>
    </div>
  )
}

export default TokenSalesBoard;