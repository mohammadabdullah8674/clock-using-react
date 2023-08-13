import { useState, useEffect } from "react";

export default function AnalogClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const [second, setSecond] = useState(seconds);
  const [minute, setMinute] = useState(minutes);
  const [hour, setHour] = useState(hours);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      setSecond(seconds);
      setMinute(minutes);
      setHour(hours);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="clock">
        <div className="centerPoint"></div>
        <div
          className="hourHandWrapper"
          style={{
            transform: `rotate(${hour * 30 + Math.round(minute / 2)}deg`
          }}
        >
          <div className="hourHand"></div>
        </div>
        <div
          className="minuteHandWrapper"
          style={{ transform: `rotate(${minute * 6}deg` }}
        >
          <div className="minuteHand"></div>
        </div>
        <div
          className="secondHandWrapper"
          style={{ transform: `rotate(${second * 6}deg` }}
        >
          <div className="secondHand"></div>
        </div>
      </div>
    </div>
  );
}
