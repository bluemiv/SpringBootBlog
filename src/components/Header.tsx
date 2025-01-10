'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { ROUTE_PATH } from '@/constants/route';
import HamburgerButton from '@/components/HamburgerButton';
import ThemeButton from '@/components/ThemeButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="flex justify-center py-3 px-8 w-full h-16 bg-background-primary sm:bg-transparent sm:bg-gradient-to-b sm:from-background-primary sm:from-40% sm:to-transparent">
      <div className="max-w-[1200px] w-full h-full flex items-center justify-between">
        <Link href={ROUTE_PATH.ROOT} className="cursor-pointer font-semibold italic text-lg">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </Link>
        <div className="flex-1 flex items-center justify-end gap-8">
          <nav>
            <ul
              className={clsx(
                {
                  'right-0 h-full p-10 bg-background-primary/80 backdrop-blur-sm': isOpen,
                  'right-[-200vw]': !isOpen,
                },
                'w-[100vw] top-16 fixed flex flex-col items-end transition-all ease-in-out duration-150 h-full sm:w-full sm:static sm:flex-row sm:items-center gap-6',
              )}
            >
              {[
                { href: ROUTE_PATH.ABOUT, label: 'About' },
                { href: ROUTE_PATH.POSTS, label: 'Posts' },
              ].map((v) => (
                <li key={v.label}>
                  <Link href={v.href} className="italic font-semibold">
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeButton />
            <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
