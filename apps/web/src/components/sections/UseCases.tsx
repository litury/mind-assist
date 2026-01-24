'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { USE_CASES } from '@/lib/constants'
import { Brain, TrendingUp, Search, Users } from 'lucide-react'

const icons = {
  analysis: Brain,
  trends: TrendingUp,
  search: Search,
  users: Users,
}

export function UseCases() {
  const [activeTab, setActiveTab] = useState(0)
  const activeCase = USE_CASES[activeTab]
  const Icon = icons[activeCase.icon as keyof typeof icons]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ключевые <span className="gradient-text">сценарии использования</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Платформа адаптирована под реальные задачи психологов в различных контекстах работы
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <div className="mb-8 sm:mb-12 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 justify-start sm:justify-center min-w-max mx-auto pb-2">
            {USE_CASES.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                }`}
              >
                {useCase.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Icon */}
            <div className="flex justify-center order-first lg:order-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse" />
                <div className="relative bg-gradient-to-br from-sky-50 to-purple-50 p-8 sm:p-10 lg:p-12 rounded-3xl">
                  <Icon className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-sky-600" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">{activeCase.title}</h3>
              <p className="text-base sm:text-lg text-gray-600">{activeCase.description}</p>

              <div className="space-y-3">
                {activeCase.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
