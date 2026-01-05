import { useEffect, useState } from "react";
import frame from "/home/frame.png"; // your frame image

const getTimeLeft = (target) => {
  const diff = target - new Date();

  if (diff <= 0)
    return { d: 0, h: 0, m: 0, s: 0 };

  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
};

export default function Countdown() {
  const targetDate = new Date("2026-01-16T00:00:00");
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-20 h-full pt-3 pb-3">
      <Box label="DAYS" value={time.d} />
      <Box label="HOURS" value={time.h} />
      <Box label="MINUTES" value={time.m} />
      <Box label="SECONDS" value={time.s} />
    </div>
  );
}

function Box({ value, label }) {
  return (
    <div className="relative w-[120px] h-[120px]">
      <img src={frame} className="absolute inset-0 w-full h-full scale-x-[1.5] origin-center"/>
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        <span
          style={{
            fontFamily: "'inter', sans-serif",
            fontWeight: "900",
            fontSize: "48px",
            color: "#FFFFFF",
            letterSpacing: '7%',
            lineHeight: '100%'
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
        <span className="text-xs tracking-widest text-white mt-1">
          {label}
        </span>
      </div>
    </div>
  );
}
