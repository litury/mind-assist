export default function Home() {
  return (
    <main className="min-h-screen terminal-grid scanlines noise relative overflow-hidden">
      {/* Brain/Mind Decorative Symbols */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-[10%] brain-stream text-xs" style={{ animationDelay: '0s' }}>◯◉◎</div>
        <div className="absolute top-20 left-[30%] brain-stream text-xs" style={{ animationDelay: '1.5s' }}>⚡✦✧</div>
        <div className="absolute top-0 left-[50%] brain-stream text-xs" style={{ animationDelay: '2.5s' }}>◈◇◆</div>
        <div className="absolute top-32 left-[70%] brain-stream text-xs" style={{ animationDelay: '1s' }}>⟡⬡⬢</div>
        <div className="absolute top-16 left-[85%] brain-stream text-xs" style={{ animationDelay: '3s' }}>▴▵△</div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        {/* Terminal Header */}
        <div className="w-full max-w-5xl mb-6 fade-in">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
            <span className="pulse">●</span>
            <span className="font-mono">SYSTEM_ONLINE</span>
            <span className="ml-auto">v0.1.0-alpha</span>
          </div>
          <div className="h-[1px] bg-[var(--border-color)]"></div>
        </div>

        {/* ASCII Logo */}
        <div className="mb-6 md:mb-8 fade-in fade-in-delay-1">
          {/* Desktop Logo */}
          <pre className="hidden md:block text-[var(--text-primary)] text-sm leading-tight neon-glow" style={{ fontFamily: 'var(--font-mono)' }}>
{`
███╗   ███╗██╗███╗   ██╗██████╗  █████╗ ███████╗███████╗██╗███╗   ███╗████████╗
████╗ ████║██║████╗  ██║██╔══██╗██╔══██╗██╔════╝██╔════╝██║████╗ ████║╚══██╔══╝
██╔████╔██║██║██╔██╗ ██║██║  ██║███████║███████╗███████╗██║██╔████╔██║   ██║
██║╚██╔╝██║██║██║╚██╗██║██║  ██║██╔══██║╚════██║╚════██║██║██║╚██╔╝██║   ██║
██║ ╚═╝ ██║██║██║ ╚████║██████╔╝██║  ██║███████║███████║██║██║ ╚═╝ ██║   ██║
╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝     ╚═╝   ╚═╝
                                          A I
`}
          </pre>

          {/* Mobile Logo - Compact */}
          <pre className="block md:hidden text-[var(--text-primary)] text-[10px] leading-tight neon-glow text-center" style={{ fontFamily: 'var(--font-mono)' }}>
{`
███╗   ███╗██╗███╗   ██╗██████╗
████╗ ████║██║████╗  ██║██╔══██╗
██╔████╔██║██║██╔██╗ ██║██║  ██║
██║╚██╔╝██║██║██║╚██╗██║██║  ██║
██║ ╚═╝ ██║██║██║ ╚████║██████╔╝
╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝
         ASSIST AI
`}
          </pre>
        </div>

        {/* Tagline */}
        <div className="mb-10 md:mb-12 text-center fade-in fade-in-delay-2">
          <h1 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-cyan)' }}>
            ИНТЕЛЛЕКТУАЛЬНАЯ ПОДДЕРЖКА ДЛЯ ПСИХОЛОГОВ<span className="cursor"></span>
          </h1>
          <p className="text-sm md:text-base text-[var(--text-muted)] font-mono max-w-3xl mx-auto">
            {'>'} Повышайте эффективность практики с помощью ИИ-анализа постсессионных заметок
          </p>
        </div>

        {/* Status Box */}
        <div className="w-full max-w-4xl mb-6 md:mb-10 fade-in fade-in-delay-3">
          <div className="border-2 border-[var(--border-color)] p-4 md:p-8 box-glow relative bg-[var(--bg-secondary)]">
            {/* Terminal Window Header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border-color)]">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-pink)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--accent-purple)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--accent-cyan)]"></div>
              <span className="ml-2 text-xs text-[var(--text-muted)] hidden sm:inline">terminal://mindassist/status</span>
              <span className="ml-2 text-xs text-[var(--text-muted)] sm:hidden">term://status</span>
            </div>

            {/* Status Content */}
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center gap-3">
                <span className="text-[var(--text-secondary)]">STATUS:</span>
                <span className="text-[var(--accent-pink)] neon-glow-pink font-bold">В РАЗРАБОТКЕ</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 md:px-4 py-2 border border-[var(--border-color)] text-xs hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:bg-[var(--text-primary)] active:text-[var(--bg-primary)] transition-all cursor-pointer touch-manipulation">[ЖУРНАЛ]</span>
                <span className="px-3 md:px-4 py-2 border border-[var(--border-color)] text-xs hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:bg-[var(--text-primary)] active:text-[var(--bg-primary)] transition-all cursor-pointer touch-manipulation">[АНАЛИЗ]</span>
                <span className="px-3 md:px-4 py-2 border border-[var(--border-color)] text-xs hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:bg-[var(--text-primary)] active:text-[var(--bg-primary)] transition-all cursor-pointer touch-manipulation">[ДИНАМИКА]</span>
                <span className="px-3 md:px-4 py-2 border border-[var(--border-color)] text-xs hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:bg-[var(--text-primary)] active:text-[var(--bg-primary)] transition-all cursor-pointer touch-manipulation">[ОТЧЕТЫ]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="w-full max-w-5xl grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
          {/* AI Analysis Card */}
          <div className="border-2 border-[var(--border-color)] p-4 md:p-6 box-glow hover:border-[var(--accent-purple)] active:border-[var(--accent-purple)] transition-all bg-[var(--bg-secondary)] fade-in fade-in-delay-4">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[var(--accent-purple)]">◉◎◯</div>
            <h3 className="text-base md:text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              ИИ-АНАЛИЗ
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-muted)] font-mono mb-3 md:mb-4">
              Терапевтические гипотезы и рефлексивные вопросы
            </p>
            <div className="text-[10px] md:text-xs text-[var(--text-muted)] font-mono">
              <div>$ mindassist analyze</div>
              <div className="text-[var(--text-secondary)]">{'>'} Generating insights...</div>
            </div>
          </div>

          {/* Dynamics Card */}
          <div className="border-2 border-[var(--border-color)] p-4 md:p-6 box-glow hover:border-[var(--accent-cyan)] active:border-[var(--accent-cyan)] transition-all bg-[var(--bg-secondary)] fade-in fade-in-delay-5">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[var(--accent-cyan)]">▴▵△</div>
            <h3 className="text-base md:text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              ДИНАМИКА
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-muted)] font-mono mb-3 md:mb-4">
              Продольный анализ эмоционального состояния
            </p>
            <div className="text-[10px] md:text-xs text-[var(--text-muted)] font-mono">
              <div>$ mindassist track</div>
              <div className="text-[var(--text-secondary)]">{'>'} Visualizing trends...</div>
            </div>
          </div>

          {/* Journal Card */}
          <div className="border-2 border-[var(--border-color)] p-4 md:p-6 box-glow hover:border-[var(--text-primary)] active:border-[var(--text-primary)] transition-all bg-[var(--bg-secondary)] fade-in fade-in-delay-6">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[var(--text-primary)]">◈◇◆</div>
            <h3 className="text-base md:text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              ЖУРНАЛ
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-muted)] font-mono mb-3 md:mb-4">
              Интеллектуальный поиск по заметкам
            </p>
            <div className="text-[10px] md:text-xs text-[var(--text-muted)] font-mono">
              <div>$ mindassist search</div>
              <div className="text-[var(--text-secondary)]">{'>'} Indexing notes...</div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="w-full max-w-4xl mb-8 md:mb-10 fade-in fade-in-delay-7">
          <div className="border-2 border-[var(--border-color)] p-6 md:p-8 box-glow bg-[var(--bg-secondary)]">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-[var(--accent-cyan)]" style={{ fontFamily: 'var(--font-display)' }}>
              [БЕЗОПАСНОСТЬ И ПРИВАТНОСТЬ]
            </h3>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-xs md:text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[var(--text-secondary)]">✓</span>
                <span className="text-[var(--text-muted)]">Шифрование всех передаваемых данных</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--text-secondary)]">✓</span>
                <span className="text-[var(--text-muted)]">Деперсонализация перед ИИ-анализом</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--text-secondary)]">✓</span>
                <span className="text-[var(--text-muted)]">Логическая сегрегация идентифицирующих данных</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--text-secondary)]">✓</span>
                <span className="text-[var(--text-muted)]">Разграничение прав доступа</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-5xl mt-6 md:mt-8 fade-in fade-in-delay-7">
          <div className="h-[1px] bg-[var(--border-color)] mb-4"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm font-mono text-[var(--text-muted)]">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="https://t.me/litury"
                className="hover:text-[var(--text-primary)] hover:neon-glow transition-all flex items-center gap-2"
              >
                <span>{'>'}</span>
                <span>TELEGRAM: @litury</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="https://github.com/litury/mind-assist"
                className="hover:text-[var(--text-primary)] hover:neon-glow transition-all flex items-center gap-2"
              >
                <span>{'>'}</span>
                <span>GITHUB: mind-assist</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="pulse">●</span>
              <span>CLINICAL SYSTEM READY</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
