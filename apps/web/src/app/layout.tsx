import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MindAssist AI - Интеллектуальная поддержка для психологов',
  description: 'Платформа ИИ-анализа постсессионных заметок психологов с генерацией терапевтических гипотез и рефлексивных вопросов',
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
