'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import HamburgerButton from '@/components/HamburgerButton';
import ThemeButton from '@/components/ThemeButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="py-3 px-8 w-full h-16 bg-gradient-to-b from-background-primary from-40% to-transparent flex justify-center">
      <div className="max-w-[1200px] w-full h-full flex items-center justify-between">
        <Link href={ROUTE_PATH.ROOT} className="cursor-pointer font-semibold italic text-lg">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </Link>
        <div className="flex-1 flex items-center justify-end gap-8">
          <nav>
            <ul className="flex items-center gap-4">
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
