import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
        secondary:
          'bg-white border-2 border-sky-500 text-sky-600 hover:bg-sky-50',
        ghost:
          'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
        link: 'text-sky-600 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-8 text-base',
        lg: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
