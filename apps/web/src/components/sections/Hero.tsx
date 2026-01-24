'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { SITE_CONFIG } from '@/lib/constants'
import { Brain3D } from '@/components/3d/Brain3D'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative min-h-screen grid-background overflow-hidden">
      {/* 3D Brain Background - only on mobile */}
      <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
        <Brain3D />
      </div>

      <div className="container mx-auto px-4 flex min-h-screen items-center py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 z-10 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700 border border-sky-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="font-medium">{SITE_CONFIG.status} · {SITE_CONFIG.version}</span>
            </motion.div>

            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-7xl font-bold leading-tight"
              >
                <GradientText as="span" className="block">
                  {SITE_CONFIG.name}
                </GradientText>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl lg:text-3xl font-serif italic text-gray-700"
              >
                {SITE_CONFIG.tagline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl"
              >
                {SITE_CONFIG.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                Получить ранний доступ
              </Button>
              <Button size="lg" variant="secondary" onClick={scrollToContent}>
                Узнать больше
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Brain (hidden on mobile, shown on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-150 hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse" />
            <Brain3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer group"
        aria-label="Scroll to content"
      >
        <span className="text-sm font-medium">Прокрутить</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 group-hover:text-sky-500 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  )
}
