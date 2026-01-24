'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Check } from 'lucide-react'

const waitlistSchema = z.object({
  email: z.string().email('Введите корректный email адрес'),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Waitlist form submitted:', data)
    setIsSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-br from-sky-50 via-purple-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Получить <span className="gradient-text">ранний доступ</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Присоединяйтесь к первым пользователям платформы
            </p>
          </div>

          {!isSubmitted ? (
            <div className="glass p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl">
              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Ранний доступ к beta-версии',
                  'Приоритетная техническая поддержка',
                  'Влияние на roadmap и функции',
                  'Специальные условия подписки',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="email@example.com"
                  error={errors.email?.message}
                  disabled={isSubmitting}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Присоединиться к листу ожидания'}
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Никакого спама. Только важные обновления о развитии платформы.
                </p>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-12 rounded-3xl shadow-2xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 items-center justify-center mb-4 sm:mb-6"
              >
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Вы в списке ожидания!</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Проверьте ваш email для подтверждения подписки.
                <br />
                Мы свяжемся с вами, как только запустим beta-версию.
              </p>
            </motion.div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
