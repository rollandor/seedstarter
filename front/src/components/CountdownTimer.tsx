import React from 'react';
import { useCountdown } from '@/hooks/useCountdown';
import styles from "@/components/TokenSalesBoard/TokenSalesBoard.module.scss";

const DateTimeDisplay = ({ value, type, isDanger }: {
  value: number,
  type: string,
  isDanger: boolean,
}) => {
  return (
    <div className={styles['calendar__item']}>
      <span className='text-xl'>{value}</span>
      <span className='text-sm text-[#909090] font-bold'>{type}</span>
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}) => {
  return (
    <div className="flex pt-6 gap-2">
      <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
      <DateTimeDisplay value={seconds} type={'Sec'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }: { targetDate: number }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
