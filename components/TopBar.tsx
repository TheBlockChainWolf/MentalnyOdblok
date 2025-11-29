import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const TopBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 58, seconds: 51 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
            // Reset for demo purposes
            return { minutes: 59, seconds: 59 }; 
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#cc0000] text-white text-[10px] sm:text-xs md:text-sm font-bold py-2 px-2 md:px-4 flex justify-center items-center gap-2 sticky top-0 z-50 shadow-md">
      <AlertCircle size={14} className="text-white shrink-0" />
      <span className="text-center truncate">
        Tylko DZISIAJ! Cena 37zł. Okazja kończy się za {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default TopBar;