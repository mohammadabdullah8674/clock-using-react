import { useState, useEffect } from "react";

export default function DigitalClock() {
  const date = new Date();
  const [time, setTime] = useState(date.toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="date">
        <h1>{date.toDateString()}</h1>
        <h1>{time}</h1>
      </div>
    </div>
  );
}
