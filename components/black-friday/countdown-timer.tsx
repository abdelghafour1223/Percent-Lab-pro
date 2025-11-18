'use client';

import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const blackFriday = new Date('2025-11-29T00:00:00');
      const now = new Date();
      const difference = blackFriday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-yellow-600 to-red-600 text-white p-6 rounded-lg mb-8 shadow-lg">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Zap className="h-6 w-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">Black Friday 2025 Countdown</h2>
          <Zap className="h-6 w-6 text-yellow-400" />
        </div>
        <p className="text-sm mb-4">November 29, 2025</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-black/30 backdrop-blur-sm px-4 py-3 rounded-lg min-w-[80px]">
              <div className="text-3xl font-bold text-yellow-400">{item.value}</div>
              <div className="text-xs uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
