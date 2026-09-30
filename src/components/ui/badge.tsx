import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase transition-colors select-none",
  {
    variants: {
      variant: {
        // Aqua: Freshness & clean energy
        default:
          "bg-[#EBF8FA] text-[#17343A] border border-[#55C5D5]/40",
        // Pink: Accent highlight (used intentionally)
        accent:
          "bg-[#FDF0F6] text-[#E83C8B] border border-[#E83C8B]/35",
        // Yellow: Used sparingly for subtle hints
        yellow:
          "bg-[#FEF9EC] text-[#997510] border border-[#F4C84A]/40",
        // Neutral clean
        secondary:
          "bg-white text-[#17343A] border border-[#17343A]/15 shadow-2xs",
        // Dark contrast
        dark:
          "bg-[#17343A] text-[#FDF9F3]",
        outline:
          "border border-[#55C5D5] text-[#17343A] bg-transparent",
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
