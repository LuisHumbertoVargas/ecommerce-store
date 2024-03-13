import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ButtonBagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonBag = forwardRef<HTMLButtonElement, ButtonBagProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `
          w-auto
          rounded-full
          bg-black
          border-transparent
          px-5
          py-3
          disabled:cursor-not-allowed
          disabled:opacity-50
          text-white
          font-semibold
          hover:opacity-75
          transition
          `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

ButtonBag.displayName = 'ButtonBag';

export default ButtonBag;
