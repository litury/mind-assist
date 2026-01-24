'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover3d?: boolean
  gradient?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover3d = false, gradient = false, children, ...props }, ref) => {
    const CardComponent = hover3d ? motion.div : 'div'

    const hoverProps = hover3d
      ? {
          whileHover: { y: -8, scale: 1.02 },
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }
      : {}

    return (
      <CardComponent
        ref={ref as any}
        className={cn(
          'rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300',
          hover3d && 'cursor-pointer hover:shadow-2xl',
          gradient && 'gradient-border',
          className
        )}
        {...hoverProps}
        {...props}
      >
        {children}
      </CardComponent>
    )
  }
)
Card.displayName = 'Card'

export { Card }
