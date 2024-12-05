import { cn } from "@/common/utils/cn";

export default function Container({
  children,
  className,
  withPadding = false,
  withPaddingTop = false,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
  withPaddingTop?: boolean;
}>): JSX.Element {
  return (
    <section
      className={cn(
        `mx-auto w-full relative overflow-hidden ${
          withPadding ? "max-w-7xl p-4" : ""
        } ${withPaddingTop ? "mt-[60px]" : ""}`,
        className
      )}
    >
      {children}
    </section>
  );
}
