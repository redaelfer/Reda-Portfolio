import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const variants = cva("button", {
  variants: {
    variant: {
      primary: "button-primary",
      outline: "button-outline",
      ghost: "button-ghost",
      light: "button-light",
    },
    size: { default: "", small: "button-small", icon: "button-icon" },
  },
  defaultVariants: { variant: "primary", size: "default" },
});
type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & { asChild?: boolean };
export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(variants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
