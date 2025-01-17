'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { ROUTE_PATH } from '@/constants/route';
import HamburgerButton from '@/feature/layout/components/HamburgerButton';
import ThemeButton from '@/feature/layout/components/ThemeButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
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
    <header
      className={clsx('h-header bg-bg flex items-center justify-between px-lg w-full border-b', {
        'border-b-bg-secondary': !isOpen,
        'border-b-transparent': isOpen,
      })}
    >
      <div className="mx-auto max-w-[1200px] w-full h-full flex items-center justify-between gap-lg">
        <Link className="italic font-semibold" href={ROUTE_PATH.ROOT}>
          {process.env.NEXT_PUBLIC_APP_TITLE}.
        </Link>
        <div className="flex-1 flex items-center justify-end gap-lg">
          <nav className="flex-1 flex justify-end">
            <ul
              className={clsx(
                'bg-bg fixed top-header left-0 px-2xl overflow-hidden text-right w-[100vw] flex flex-col gap-lg border-b border-b-bg-secondary transition-all ease-in-out duration-150',
                'md:static md:border-none md:p-0 md:w-auto md:h-auto md:flex-row',
                {
                  'h-auto py-lg': isOpen,
                  'h-0': !isOpen,
                },
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
          <div className="flex items-center gap-sm">
            <ThemeButton />
            <HamburgerButton isOpen={isOpen} onClick={toggleMenu} className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
