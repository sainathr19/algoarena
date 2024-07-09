import React, { useEffect } from "react";
interface TimerProps {
  startTime: string;
  endTime: string;
}
const Timer = (props: TimerProps) => {
  const { startTime, endTime } = props;
  useEffect(() => {
    console.log(startTime);
    console.log(endTime);
  }, [startTime, endTime]);
  return <div>05:05:05</div>;
};

export default Timer;
