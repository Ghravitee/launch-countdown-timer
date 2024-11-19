import { useState, useEffect } from "react";
import TimeBox from "./TimeBox";

const Countdown = (props) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    // eslint-disable-next-line react/prop-types
    const totalSeconds = Math.floor((props.deadline - Date.now()) / 1000);

    if (totalSeconds < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 lg:gap-6 justify-center items-center">
      {timeLeft.days > 0 && <TimeBox value={timeLeft.days} label="days" />}
      <TimeBox value={timeLeft.hours} label="hours" />
      <TimeBox value={timeLeft.minutes} label="minutes" />
      <TimeBox value={timeLeft.seconds} label="seconds" />
    </div>
  );
};

export default Countdown;
