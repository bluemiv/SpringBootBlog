import { PropsWithClassName } from '@/types/base';
import Button from '@/components/Button';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: PropsWithClassName<Props>) {
  return (
    <Button shape="circle" className="hover:bg-bg-secondary sm:hidden" onClick={onClick}>
      <div className="flex flex-col items-center justify-center w-full h-full gap-[3px]">
        <div
          className={`h-[3px] w-5 bg-text-primary rounded transition-transform ${
            isOpen ? 'rotate-45 translate-y-[6px]' : ''
          }`}
        />
        <div
          className={`h-[3px] w-5 bg-text-primary rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`}
        />
        <div
          className={`h-[3px] w-5 bg-text-primary rounded transition-transform ${
            isOpen ? '-rotate-45 -translate-y-[6px]' : ''
          }`}
        />
      </div>
    </Button>
  );
}
