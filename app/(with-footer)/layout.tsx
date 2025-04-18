import { FooterContent } from '@/components/layout/footer/FooterContent';
import { StickyFooter } from '@/components/layout/footer/StickyFooter';
import Navbar from '@/components/layout/navbar/Navbar';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="pb-10 w-full min-h-dvh shadow-md rounded-ee-3xl rounded-b-3xl dark:bg-neutral-900 transition-all duration-500 ease-in-out text-neutral-900 dark:text-neutral-100">
        {children}
      </div>
      <StickyFooter className="text-neutral-900 dark:text-neutral-100">
        <FooterContent />
      </StickyFooter>
    </div>
  );
}
