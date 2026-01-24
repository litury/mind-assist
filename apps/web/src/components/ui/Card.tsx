'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover3d?: boolean
  gradient?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover3d = false, gradient = false, children, ...props }, ref) => {
    const baseClassName = cn(
      'rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300',
      hover3d && 'cursor-pointer hover:shadow-2xl',
      gradient && 'gradient-border',
      className
    )

    if (hover3d) {
      return (
        <motion.div
          ref={ref}
          className={baseClassName}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          {...(props as HTMLMotionProps<'div'>)}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={baseClassName} {...props}>
        {children}
      </div>
    )
  }
)
Card.displayName = 'Card'

export { Card }
