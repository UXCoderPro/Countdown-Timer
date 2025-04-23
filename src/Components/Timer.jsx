import React, { useState, useEffect } from "react";

import Clock from "./Clock";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-15T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: "0",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: days.toString(),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateTimer(); // Call immediately
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col w-4/5 h-auto items-center gap-[60px] bg-bg backdrop-blur-3xl px-24 py-16 border-2 border-solid border-white rounded-3xl ">
      <h3 className="text-clr text-center text-2xl font-light leading-normal ">
        Event Starts On
      </h3>
      <div className="flex items-center gap-14">
        <Clock title="days" time={timeLeft.days} />
        <Clock title="hours" time={timeLeft.hours} />
        <Clock title="minutes" time={timeLeft.minutes} />
        <Clock title="seconds" time={timeLeft.seconds} />
      </div>
    </div>
  );
};

export default Timer;
