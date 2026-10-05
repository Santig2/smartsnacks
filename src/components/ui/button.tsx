import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55C5D5] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer group active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Aqua primary: Freshness & energy (25% hierarchy)
        default:
          "bg-[#55C5D5] text-[#17343A] shadow-[0_4px_10px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(20,110,130,0.25)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.16),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(20,110,130,0.3)] hover:-translate-y-[2px]",
        // Pink accent: Conversion highlight (10% hierarchy)
        accent:
          "bg-[#E83C8B] text-white shadow-[0_4px_10px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.45),inset_0_-3px_6px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.16),inset_0_2px_4px_rgba(255,255,255,0.55),inset_0_-3px_6px_rgba(0,0,0,0.25)] hover:-translate-y-[2px]",
        // Neutral secondary: Clean cream/white (60% hierarchy)
        secondary:
          "bg-white text-[#17343A] border border-[#17343A]/10 shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_6px_rgba(0,0,0,0.05)] hover:border-[#17343A]/20 hover:-translate-y-[2px]",
        outline:
          "border-2 border-[#55C5D5] text-[#17343A] bg-transparent hover:bg-[#EBF8FA] hover:shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:-translate-y-[2px]",
        ghost:
          "text-[#17343A] hover:bg-[#EBF8FA] hover:text-[#17343A]",
        link:
          "text-[#17343A] underline-offset-4 hover:underline hover:text-[#55C5D5]",
      },
      size: {
        default: "h-[46px] px-7 text-sm",
        sm: "h-10 px-5 text-xs",
        lg: "h-[54px] px-9 text-base",
        icon: "h-[46px] w-[46px] p-0 rounded-full",
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
