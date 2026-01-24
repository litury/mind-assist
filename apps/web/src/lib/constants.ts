export const SITE_CONFIG = {
  name: 'MindAssist AI',
  tagline: 'Интеллектуальная поддержка для психологов',
  description:
    'Автоматизация постсессионной работы с помощью ИИ-анализа заметок',
  version: 'v0.1.0-alpha',
  status: 'В разработке',
  social: {
    telegram: 'https://t.me/litury',
    github: 'https://github.com/litury/mind-assist',
    email: 'contact@mindassist.ai',
  },
}

export const STATS = {
  progress: 25,
  modules: 4,
  security: 100,
}

export const USE_CASES = [
  {
    id: 'post-session',
    title: 'Постсессионная аналитика',
    description:
      'Психолог фиксирует заметки после консультации. ИИ-модуль анализирует и формирует терапевтические гипотезы, стартовые вопросы и рефлексивные запросы.',
    steps: [
      'Фиксация заметок после сессии',
      'ИИ-анализ неструктурированного текста',
      'Генерация гипотез и вопросов',
      'Формирование краткого отчета',
    ],
    icon: 'analysis',
  },
  {
    id: 'long-term',
    title: 'Длительные случаи',
    description:
      'Ведение клиента в течение нескольких месяцев с отслеживанием эмоциональной и тематической динамики между сессиями.',
    steps: [
      'Накопление заметок по сессиям',
      'Полнотекстовый и теговый поиск',
      'Сопоставление эмоционального состояния',
      'Визуализация динамики изменений',
    ],
    icon: 'trends',
  },
  {
    id: 'preparation',
    title: 'Подготовка к встрече',
    description:
      'Быстрое восстановление контекста последних сессий и незавершенных линий терапии перед встречей с клиентом.',
    steps: [
      'Открытие карточки клиента',
      'Поиск по темам и ключевым словам',
      'Просмотр актуальных тем',
      'Подготовка стартовых вопросов',
    ],
    icon: 'search',
  },
  {
    id: 'team',
    title: 'Командная работа',
    description:
      'Разграничение доступа и безопасная совместная работа нескольких специалистов с одним клиентом в организации.',
    steps: [
      'Настройка прав доступа (RBAC)',
      'Деперсонализация данных',
      'Доступ к согласованным отчетам',
      'Преемственность при смене специалиста',
    ],
    icon: 'users',
  },
]

export const MODULES = [
  {
    id: 'ai-analysis',
    title: 'ИИ-Анализ',
    description:
      'Автоматическое выделение тем, генерация терапевтических гипотез и рефлексивных вопросов',
    features: ['Темы', 'Гипотезы', 'Вопросы', 'Подходы'],
    icon: 'brain',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    id: 'dynamics',
    title: 'Динамика',
    description:
      'Продольный анализ эмоционального и тематического состояния клиента между сессиями',
    features: ['Эмоции', 'Тренды', 'Графики', 'Прогресс'],
    icon: 'chart',
    gradient: 'from-purple-400 to-violet-600',
  },
  {
    id: 'journal',
    title: 'Журнал',
    description:
      'Интеллектуальный поиск по заметкам с поддержкой тегов и пользовательских меток',
    features: ['Поиск', 'Теги', 'История', 'Метки'],
    icon: 'book',
    gradient: 'from-cyan-400 to-teal-600',
  },
  {
    id: 'reports',
    title: 'Отчеты',
    description:
      'Формирование структурированных отчетов по сессиям на основе шаблонов',
    features: ['Шаблоны', 'Экспорт', 'Супервизия', 'Архив'],
    icon: 'report',
    gradient: 'from-indigo-400 to-blue-600',
  },
]

export const TECH_STACK = {
  frontend: {
    title: 'Frontend',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  backend: {
    title: 'Backend (planned)',
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'GraphQL'],
  },
  ai: {
    title: 'ИИ & Security Layer',
    tech: ['LLM', 'RAG', 'E2E Encryption', 'Деперсонализация'],
  },
}

export const SECURITY_FEATURES = [
  {
    id: 'encryption',
    title: 'Шифрование',
    description: 'End-to-end шифрование всех передаваемых и хранимых данных',
    icon: 'lock',
  },
  {
    id: 'depersonalization',
    title: 'Деперсонализация',
    description:
      'Обязательная деперсонализация идентифицирующих сведений перед ИИ-анализом',
    icon: 'mask',
  },
  {
    id: 'segregation',
    title: 'Сегрегация данных',
    description:
      'Логическое разделение идентифицирующих данных от клинических материалов',
    icon: 'database',
  },
  {
    id: 'rbac',
    title: 'RBAC',
    description:
      'Разграничение прав доступа для безопасной командной работы',
    icon: 'users',
  },
]

export const ROADMAP = [
  {
    quarter: 'Q1 2026',
    items: [
      { title: 'Прототип архитектуры', status: 'completed' },
      { title: 'Landing page', status: 'completed' },
      { title: 'Формирование корпуса данных', status: 'in-progress', progress: 25 },
    ],
  },
  {
    quarter: 'Q2 2026',
    items: [
      { title: 'ИИ-модуль анализа заметок', status: 'planned' },
      { title: 'Интеллектуальный журнал', status: 'planned' },
      { title: 'Базовый поиск и теги', status: 'planned' },
    ],
  },
  {
    quarter: 'Q3 2026',
    items: [
      { title: 'Модуль динамики и визуализации', status: 'planned' },
      { title: 'Генерация отчетов', status: 'planned' },
      { title: 'Пилотное тестирование', status: 'planned' },
    ],
  },
  {
    quarter: 'Q4 2026',
    items: [
      { title: 'Рефлексивные вопросы для психологов', status: 'planned' },
      { title: 'RBAC и мультитенантность', status: 'planned' },
      { title: 'Beta-релиз v0.5', status: 'planned' },
    ],
  },
]
