import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55C5D5] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        // Aqua primary: Freshness & energy (25% hierarchy)
        default:
          "bg-[#55C5D5] text-[#17343A] shadow-xs hover:bg-[#42B3C3] hover:-translate-y-0.5 active:translate-y-0",
        // Pink accent: Conversion highlight (10% hierarchy)
        accent:
          "bg-[#E83C8B] text-white shadow-xs hover:bg-[#D22B77] hover:-translate-y-0.5 active:translate-y-0",
        // Neutral secondary: Clean cream/white (60% hierarchy)
        secondary:
          "bg-white text-[#17343A] border border-[#17343A]/15 shadow-2xs hover:bg-[#FDF9F3] hover:border-[#17343A]/25 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-[#55C5D5] text-[#17343A] bg-transparent hover:bg-[#EBF8FA]",
        ghost:
          "text-[#17343A] hover:bg-[#EBF8FA] hover:text-[#17343A]",
        link:
          "text-[#17343A] underline-offset-4 hover:underline hover:text-[#55C5D5]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
