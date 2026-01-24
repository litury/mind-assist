import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-base transition-all duration-200',
            'placeholder:text-gray-400',
            'focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
