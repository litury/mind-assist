'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { SECURITY_FEATURES } from '@/lib/constants'
import { Lock, ShieldCheck, Database, Users } from 'lucide-react'

const iconMap = {
  lock: Lock,
  mask: ShieldCheck,
  database: Database,
  users: Users,
}

export function Security() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Безопасность и <span className="gradient-text">приватность</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Защита конфиденциальных данных на всех уровнях платформы
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {SECURITY_FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={feature.id} delay={index * 0.1}>
                <Card hover3d className="h-full text-center">
                  <div className="space-y-4">
                    <div className="inline-flex p-4 rounded-2xl bg-emerald-50">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-medium">EU AI Act compliance</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-medium">GDPR-совместимая архитектура</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
