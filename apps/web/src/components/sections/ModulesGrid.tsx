'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { MODULES } from '@/lib/constants'
import { Brain, TrendingUp, BookOpen, FileText } from 'lucide-react'

const iconMap = {
  brain: Brain,
  chart: TrendingUp,
  book: BookOpen,
  report: FileText,
}

export function ModulesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Основные <span className="gradient-text">модули платформы</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексное решение для всех этапов работы с клиентом
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {MODULES.map((module, index) => {
            const Icon = iconMap[module.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={module.id} delay={index * 0.1}>
                <Card hover3d className="h-full group">
                  <div className="space-y-4">
                    {/* Icon with gradient background */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold">{module.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {module.description}
                    </p>

                    {/* Features */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {module.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
