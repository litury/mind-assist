'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'
import { TrendingUp, Package, Shield } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: STATS.progress,
    suffix: '%',
    label: 'готовности',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
  },
  {
    icon: Package,
    value: STATS.modules,
    suffix: '',
    label: 'модуля',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Shield,
    value: STATS.security,
    suffix: '%',
    label: 'безопасности',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
]

export function StatsBar() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <ScrollReveal
                  key={index}
                  delay={index * 0.1}
                  className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2 lg:space-y-3"
                >
                  <div className={`${stat.bgColor} p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${stat.color}`} />
                  </div>
                  <div className="space-y-0 sm:space-y-0.5">
                    <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
