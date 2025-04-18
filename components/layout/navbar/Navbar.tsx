'use client';
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
const Navbar = () => {
  return (
    <nav className="h-[50px] w-full max-w-[700px] sticky bg-background/70 rounded-full backdrop-blur-md z-50 top-2 left-0 flex items-center justify-center mx-auto">
      Header
      <ThemeSwitcherButton />
    </nav>
  );
};

export default Navbar;
