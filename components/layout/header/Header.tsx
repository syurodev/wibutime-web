'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ThemeSwitcherButton = dynamic(
  () =>
    import('@/components/ui/buttons/ThemeSwitcherButton').then(
      (module) => module.ThemeSwitcherButton,
    ),
  {
    ssr: false,
  },
);
const Header = () => {
  return (
    <header className="h-[50px] w-full fixed backdrop-blur-md z-50 top-0 left-0 flex items-center justify-center">
      Header
      <ThemeSwitcherButton />
    </header>
  );
};

export default Header;
