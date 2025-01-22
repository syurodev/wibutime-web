import { cn } from '@/common/utils/cn';
import type { ComponentProps, ReactNode } from 'react';

export function StickyFooter({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & ComponentProps<'div'>) {
  return (
    <div
      className={`relative min-h-[500px]`}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      {...props}
    >
      <div className={cn(`fixed bottom-0 min-h-[500px] w-full`, className)}>
        {children}
      </div>
    </div>
  );
}
