'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 2,
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(count, value, { duration })
    return controls.stop
  }, [count, value, duration])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <motion.span className={className}>
      {displayValue}{suffix}
    </motion.span>
  )
}
