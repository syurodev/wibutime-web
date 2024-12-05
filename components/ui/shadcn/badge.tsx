import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/common/utils/cn";

const badgeVariants = cva(
  "select-none inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        low_score:
          "text-foreground backdrop-blur-lg bg-rose-500/50 border-rose-500 shadow-sm font-bold flex flex-row items-center gap-1",
        medium_score:
          "text-foreground backdrop-blur-lg bg-amber-500/50 border-amber-500 shadow-sm font-bold flex flex-row items-center gap-1",
        high_score:
          "text-foreground backdrop-blur-lg bg-teal-500/50 border-teal-500 shadow-sm font-bold flex flex-row items-center gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
