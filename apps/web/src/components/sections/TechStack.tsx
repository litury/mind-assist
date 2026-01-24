'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { TECH_STACK } from '@/lib/constants'
import { ArrowDown } from 'lucide-react'

export function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Технологическая <span className="gradient-text">архитектура</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Современный стек технологий для надежной и безопасной работы
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-8">
          {Object.entries(TECH_STACK).map(([key, layer], index) => (
            <div key={key}>
              <ScrollReveal delay={index * 0.2}>
                <div className="group relative bg-gradient-to-r from-sky-50 to-purple-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-sky-200 transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{layer.title}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {layer.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-lg text-sm sm:text-base text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {index < Object.keys(TECH_STACK).length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="flex flex-col items-center gap-2">
                    <ArrowDown className="w-6 h-6 text-gray-400 animate-float" />
                    <div className="h-4 w-px bg-gradient-to-b from-gray-300 to-transparent" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
