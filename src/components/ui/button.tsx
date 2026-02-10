"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

// Gradient color configurations - maps color names to gradient styles
const gradientColors = {
  lime: "bg-gradient-to-bl from-lime-400 to-lime-600 text-white",
  green: "bg-gradient-to-bl from-green-400 to-green-600 text-white",
  emerald: "bg-gradient-to-bl from-emerald-400 to-emerald-600 text-white",
  teal: "bg-gradient-to-bl from-teal-400 to-teal-600 text-white",
  cyan: "bg-gradient-to-bl from-cyan-400 to-cyan-600 text-white",
  sky: "bg-gradient-to-bl from-sky-400 to-sky-600 text-white",
  blue: "bg-gradient-to-bl from-blue-400 to-blue-600 text-white",
  indigo: "bg-gradient-to-bl from-indigo-400 to-indigo-600 text-white",
  violet: "bg-gradient-to-bl from-violet-400 to-violet-600 text-white",
  purple: "bg-gradient-to-bl from-purple-400 to-purple-600 text-white",
  fuchsia: "bg-gradient-to-bl from-fuchsia-400 to-fuchsia-600 text-white",
  pink: "bg-gradient-to-bl from-pink-400 to-pink-600 text-white",
  rose: "bg-gradient-to-bl from-rose-400 to-rose-600 text-white",
  red: "bg-gradient-to-bl from-red-400 to-red-600 text-white",
  orange: "bg-gradient-to-bl from-orange-400 to-orange-600 text-white",
  amber: "bg-gradient-to-bl from-amber-400 to-amber-600 text-white",
  yellow: "bg-gradient-to-bl from-yellow-400 to-yellow-600 text-white",
  slate: "bg-gradient-to-bl from-slate-400 to-slate-600 text-white",
  gray: "bg-gradient-to-bl from-gray-400 to-gray-600 text-white",
  zinc: "bg-gradient-to-bl from-zinc-400 to-zinc-600 text-white",
  neutral: "bg-gradient-to-bl from-neutral-400 to-neutral-600 text-white",
  stone: "bg-gradient-to-bl from-stone-400 to-stone-600 text-white",
  black: "bg-gradient-to-bl from-neutral-700 to-neutral-900 text-white",
  rainbow:
    "bg-[linear-gradient(to_bottom_left,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#3b82f6,#8b5cf6)] text-white",
  "rainbow-soft":
    "bg-[linear-gradient(to_bottom_left,#fca5a5,#fdba74,#fde047,#86efac,#67e8f9,#93c5fd,#c4b5fd)] text-white",
  sunset:
    "bg-[linear-gradient(to_bottom_left,#f97316,#ec4899,#8b5cf6)] text-white",
  ocean:
    "bg-[linear-gradient(to_bottom_left,#06b6d4,#3b82f6,#8b5cf6)] text-white",
  forest:
    "bg-[linear-gradient(to_bottom_left,#22c55e,#14b8a6,#06b6d4)] text-white",
  leather: "bg-gradient-to-bl from-amber-600 to-amber-800 text-white",
  farcaster: "bg-gradient-to-bl from-farcaster-400 to-farcaster-600 text-white",
  base: "bg-gradient-to-bl from-base-400 to-base-600 text-white",
  telegram: "bg-gradient-to-bl from-telegram-400 to-telegram-600 text-white",
} as const;

export type GradientColor = keyof typeof gradientColors;

// 3D border colors for gradients (darker shade for depth effect)
const threeDGradientBorders: Record<GradientColor, string> = {
  lime: "border-lime-700",
  green: "border-green-700",
  emerald: "border-emerald-700",
  teal: "border-teal-700",
  cyan: "border-cyan-700",
  sky: "border-sky-700",
  blue: "border-blue-700",
  indigo: "border-indigo-700",
  violet: "border-violet-700",
  purple: "border-purple-700",
  fuchsia: "border-fuchsia-700",
  pink: "border-pink-700",
  rose: "border-rose-700",
  red: "border-red-700",
  orange: "border-orange-700",
  amber: "border-amber-700",
  yellow: "border-yellow-700",
  slate: "border-slate-700",
  gray: "border-gray-700",
  zinc: "border-zinc-700",
  neutral: "border-neutral-700",
  stone: "border-stone-700",
  black: "border-neutral-950",
  rainbow: "border-violet-700",
  "rainbow-soft": "border-violet-400",
  sunset: "border-violet-700",
  ocean: "border-violet-700",
  forest: "border-cyan-700",
  leather: "border-amber-900",
  farcaster: "border-farcaster-700",
  base: "border-base-700",
  telegram: "border-telegram-700",
};

// 3D border colors for variants (darker shade for depth effect)
const threeDVariantBorders: Record<string, string> = {
  default: "border-primary/80",
  destructive: "border-red-700",
  outline: "border-neutral-300",
  secondary: "border-secondary/80",
  glass: "border-white/10",
  ghost: "border-accent/50",
  link: "",
};

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        glass:
          "border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 border",
        ghost: "hover:bg-accent hover:text-primary dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 px-2 py-1 has-[>svg]:px-1.5 text-xs rounded",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4 font-bold",
        xl: "h-12 rounded-md px-8 has-[>svg]:px-6 font-bold text-lg",
        iconXl: "size-12",
        iconLg: "size-10",
        icon: "size-9",
        iconSm: "size-8",
        iconXs: "size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    /** Apply a gradient style using any Tailwind color */
    gradient?: GradientColor;
    /** Apply a 3D pressed effect with bottom border depth */
    is3d?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  isLoading = false,
  isDisabled = false,
  gradient,
  is3d = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const gradientClasses = gradient
    ? `shadow-lg hover:shadow-xl hover:brightness-110 active:brightness-95 border-0 ${gradientColors[gradient]}`
    : "";

  // 3D effect: thicker bottom border with depth shadow and press animation
  const threeDClasses = is3d
    ? cn(
        "border border-b-4 shadow-md active:border-b active:translate-y-[3px] active:shadow-sm",
        gradient
          ? threeDGradientBorders[gradient]
          : threeDVariantBorders[variant ?? "default"],
      )
    : "";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant: gradient ? undefined : variant, size }),
        gradientClasses,
        threeDClasses,
        className,
      )}
      disabled={isLoading || isDisabled || props.disabled}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
