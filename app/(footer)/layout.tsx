import type { Metadata } from "next";
import { StickyFooter } from "@/components/layout/footer/StickyFooter";
import { FooterContent } from "@/components/layout/footer/FooterContent";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="pb-10 shadow-md rounded-ee-3xl rounded-b-3xl dark:bg-neutral-900 transition-all duration-500 ease-in-out text-neutral-900 dark:text-neutral-100">
        {children}
      </div>
      <StickyFooter className="text-neutral-900 dark:text-neutral-100">
        <FooterContent />
      </StickyFooter>
    </main>
  );
}
