'use client';

import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export default function ReadingProgressIndicator() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(progress);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-[4px] bg-background-primary">
      <div
        className="h-full bg-primary duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
