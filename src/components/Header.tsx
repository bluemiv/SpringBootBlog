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
        <div className="flex items-center gap-3">
          <ThemeButton />
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
