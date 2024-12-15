'use client';
import { CONTENT_TYPE } from '@/common/constants/content-type.enum';
import { useMouse } from '@/hooks/useMouse';
import { memo } from 'react';

const CardMouseHighlightingBorder = ({
  contentType,
  children,
}: {
  contentType: CONTENT_TYPE;
  children: React.ReactNode;
}) => {
  const [mouse, parentRef] = useMouse();

  const getSpotlightColorStop = () => {
    if (contentType === CONTENT_TYPE.ANIME) {
      return 'hsl(var(--anime-color))';
    } else if (contentType === CONTENT_TYPE.MANGA) {
      return 'hsl(var(--manga-color))';
    } else {
      return 'hsl(var(--novel-color))';
    }
  };

  return (
    <div
      className="relative w-full h-full transform-gpu overflow-hidden rounded-[--radius] bg-white/10 p-2 [--radius:theme(borderRadius.2xl)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] max-w-[500px] max-h-[1000px] aspect-[2/3] transition-all duration-500 ease-in-out shadow  border border-border/50"
      ref={parentRef}
      style={{
        //@ts-expect-error : This is a valid css variable
        '--x': `${mouse.elementX}px`,
        '--y': `${mouse.elementY}px`,
        '--spotlight-color-stops': `${getSpotlightColorStop()} ,transparent`,
        '--spotlight-size': '200px',
        '--radius': '1rem',
      }}
    >
      <div className="absolute inset-px transform-gpu rounded-[calc(var(--radius)-1px)] bg-neutral-100/95 dark:bg-neutral-800/90 transition-all duration-500 ease-in-out" />

      <div className="relative overflow-hidden w-full h-full">{children}</div>
    </div>
  );
};

export default memo(CardMouseHighlightingBorder);
