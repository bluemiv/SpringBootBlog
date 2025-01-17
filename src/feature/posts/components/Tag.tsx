import clsx from 'clsx';
import { PropsWithComponent } from '@/types/base';

export default function Tag({ children, className }: PropsWithComponent) {
  return (
    <span
      className={clsx(className, 'text-sm bg-bg-secondary text-secondary px-sm py-xs rounded-full')}
    >
      #{children}
    </span>
  );
}
