import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';

export default function Header() {
  return (
    <header className="py-3 px-8 w-full h-16 bg-gradient-to-b from-background-primary from-40% to-transparent flex justify-center">
      <div className="max-w-[1200px] w-full h-full">
        <Link href={ROUTE_PATH.ROOT} className="cursor-pointer">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </Link>
      </div>
    </header>
  );
}
