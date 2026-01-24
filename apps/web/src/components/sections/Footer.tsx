import { SITE_CONFIG } from '@/lib/constants'
import { Mail, Send, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{SITE_CONFIG.name}</h3>
            <p className="text-sm font-serif italic text-gray-400">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-gray-500">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Документация (скоро)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a
                href={SITE_CONFIG.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram: @litury</span>
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub: mind-assist</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.social.email}`}
                className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.social.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 {SITE_CONFIG.name}. Все права защищены.</p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{SITE_CONFIG.version} · Платформа в разработке</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
