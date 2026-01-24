'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { ROADMAP } from '@/lib/constants'
import { CheckCircle2, Circle, Loader2 } from 'lucide-react'

const statusIcons = {
  completed: CheckCircle2,
  'in-progress': Loader2,
  planned: Circle,
}

const statusColors = {
  completed: 'text-emerald-600',
  'in-progress': 'text-sky-600 animate-spin',
  planned: 'text-gray-400',
}

export function Roadmap() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Дорожная карта <span className="gradient-text">разработки</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Поэтапное развитие платформы в течение 2026 года
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-purple-500 to-gray-300" />

            {/* Quarters */}
            <div className="space-y-12">
              {ROADMAP.map((quarter, quarterIndex) => (
                <ScrollReveal key={quarterIndex} delay={quarterIndex * 0.1}>
                  <div className="relative pl-16 sm:pl-20">
                    {/* Quarter Marker */}
                    <div className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg">
                      {quarter.quarter.split(' ')[0]}
                    </div>

                    {/* Quarter Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold">{quarter.quarter}</h3>
                      <div className="space-y-3">
                        {quarter.items.map((item, itemIndex) => {
                          const StatusIcon = statusIcons[item.status as keyof typeof statusIcons]
                          const statusColor = statusColors[item.status as keyof typeof statusColors]

                          return (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              <StatusIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${statusColor}`} />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{item.title}</p>
                                {item.progress !== undefined && (
                                  <div className="mt-2">
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-500"
                                        style={{ width: `${item.progress}%` }}
                                      />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{item.progress}% завершено</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Legend */}
          <ScrollReveal delay={0.6} className="mt-12 flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-sm text-gray-600">Завершено</span>
            </div>
            <div className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 text-sky-600" />
              <span className="text-sm text-gray-600">В процессе</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Запланировано</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
