"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 touch-manipulation',
  {
    variants: {
      variant: {
        default: 'bg-accent-blue text-background hover:bg-accent-blue/90',
        secondary: 'bg-background-secondary text-foreground border border-border hover:bg-background-secondary/80',
        outline: 'border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-background',
        ghost: 'text-foreground hover:bg-background-secondary',
        destructive: 'bg-accent-magenta text-background hover:bg-accent-magenta/90',
        success: 'bg-accent-green text-background hover:bg-accent-green/90',
      },
      size: {
        default: 'h-touch-target px-6 py-3 text-mobile-base',
        sm: 'h-10 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-mobile-lg',
        icon: 'h-touch-target w-touch-target',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Cargando...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };