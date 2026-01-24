import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MindAssist AI - Интеллектуальная поддержка для психологов',
  description:
    'Веб-платформа интеллектуальной поддержки работы психологов. Автоматизация постсессионной работы с помощью ИИ-анализа заметок, продольный мониторинг динамики клиентов, интеллектуальный журнал и генерация отчетов.',
  keywords: [
    'MindAssist AI',
    'психологи',
    'психотерапия',
    'ИИ-анализ',
    'постсессионные заметки',
    'интеллектуальный журнал',
    'продольная динамика',
  ],
  authors: [{ name: 'MindAssist AI Team' }],
  openGraph: {
    title: 'MindAssist AI - Интеллектуальная поддержка для психологов',
    description:
      'Автоматизация постсессионной работы с помощью ИИ-анализа заметок',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindAssist AI - Интеллектуальная поддержка для психологов',
    description:
      'Автоматизация постсессионной работы с помощью ИИ-анализа заметок',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
