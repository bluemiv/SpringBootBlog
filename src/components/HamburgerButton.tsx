import { PropsWithClassName } from '@/types/base';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: PropsWithClassName<Props>) {
  return (
    <button
      className="flex flex-col items-center justify-center space-y-[0.25rem] w-5 h-[2rem] focus:outline-none"
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <span
        className={`h-[0.12rem] w-full bg-text-primary rounded transition-transform ${
          isOpen ? 'rotate-45 translate-y-[0.37rem]' : ''
        }`}
      />
      <span
        className={`h-[0.12rem] w-full bg-text-primary rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`h-[0.12rem] w-full bg-text-primary rounded transition-transform ${
          isOpen ? '-rotate-45 -translate-y-[0.37rem]' : ''
        }`}
      />
    </button>
  );
}
