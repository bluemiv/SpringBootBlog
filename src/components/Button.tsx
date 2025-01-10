import clsx from 'clsx';
import { PropsWithComponent } from '@/types/base';

interface Props {
  shape?: 'round' | 'circle';
  onClick?: () => void;
}

export default function Button({
  className,
  children,
  onClick,
  shape = 'round',
}: PropsWithComponent<Props>) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'focus:outline-none p-1 min-w-9 min-h-9 flex items-center justify-center',
        className,
        {
          rounded: shape === 'round',
          'rounded-full': shape === 'circle',
        },
      )}
    >
      {children}
    </button>
  );
}
