'use client';

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function ThemeButton() {
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null); // 초기값은 null로 설정

  useEffect(() => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const curTheme = cookies['theme'] || (isDarkTheme ? 'dark' : 'light');
    setThemeValue(curTheme);
  }, []);

  const setThemeValue = (nextTheme: 'light' | 'dark') => {
    setTheme(nextTheme);
    setCookie('theme', nextTheme, { path: '/' });
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    setThemeValue(theme === 'dark' ? 'light' : 'dark');
  };

  if (theme === null) return null;
  return <button onClick={toggleTheme}>테마 변경</button>;
}
