'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export function useInView<T extends Element>(
  options: UseInViewOptions = {}
) {
  const { triggerOnce = false, ...observerOptions } = options
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting
      setIsInView(inView)

      if (inView && !hasBeenInView) {
        setHasBeenInView(true)
      }

      if (triggerOnce && inView) {
        observer.unobserve(element)
      }
    }, {
      threshold: 0.1,
      ...observerOptions,
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasBeenInView, triggerOnce, observerOptions])

  return { ref, isInView, hasBeenInView }
}
