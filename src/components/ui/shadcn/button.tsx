import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/shadcn-utils";

const buttonVariants = cva(
  "focus-visible:border-ring transition-all focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      color: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
        destructive: "btn-destructive",
      },
      variant: {
        default: "bg-[var(--btn-bg)] text-[var(--btn-fg)]",
        outline: "bg-accent text-[var(--btn-bg)]",
        invert:
          "bg-accent text-[var(--btn-bg)] hover:bg-[var(--btn-bg)] hover:text-[var(--btn-fg)]",
      },
      size: {
        default:
          "px-2.5 py-1.5 md:px-3.5 md:py-2 text-xs md:text-sm has-[>svg]:px-3",
        sm: "px-1.5 py-0.5 text-xs md:px-2 md:py-1 has-[>svg]:px-2.5",
        lg: "px-2.5 text-sm md:text-base py-1.5 md:px-3.5 md:py-2.5 has-[>svg]:px-4",
        icon: "size-7 md:size-9",
      },
      shape: {
        default: "rounded-md",
        square: "rounded-none",
        round: "rounded-full",
        diagonal: "[clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)]",
      },
      animation: {
        none: "",
        scale: "active:scale-95",
        slide: "hover:-translate-y-0.5 active:translate-y-0.5",
        press: "active:translate-y-1",
        pop: "hover:scale-105 active:scale-95",
      },
      effect: {
        none: "",
        glow: "shadow-[0_0_10px_var(--btn-bg)] hover:shadow-[0_0_20px_var(--btn-bg)] active:shadow-[0_0_30px_var(--btn-bg)] duration-300",
        shadowLift:
          "hover:shadow-[0_0_30px_var(--btn-bg)] active:shadow-[0_0_15px_var(--btn-bg)] duration-300",
        shine:
          "relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
      },
      border: {
        solid: "border border-[var(--btn-bg)]",
        double: "border-4 border-double border-[var(--btn-bg)]",
        glow: "border border-[var(--btn-bg)] shadow-[0_0_5px_var(--btn-bg)]",
        gradient:
          "border border-[var(--btn-bg)] hover:border-[var(--btn-fg)] transition-colors duration-300",
      },
    },
    defaultVariants: {
      color: "primary",
      variant: "default",
      size: "default",
      shape: "default",
      border: "solid",
      animation: "none",
      effect: "none",
    },
  },
);

function Button({
  className,
  color,
  variant,
  size,
  shape,
  animation,
  border,
  effect,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          color,
          variant,
          size,
          shape,
          animation,
          effect,
          border,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
