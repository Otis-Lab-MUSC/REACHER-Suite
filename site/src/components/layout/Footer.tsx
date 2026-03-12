import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative z-20 border-t mt-auto"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(0,0,0,0.85)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="label-caps text-[0.6rem]" style={{ color: 'var(--color-text-dim)' }}>
          © 2025 Otis Lab — Open-source neuroscience tools
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/thejoshbq/REACHER-Suite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 label-caps text-[0.6rem] transition-colors duration-150"
            style={{ color: 'var(--color-text-dim)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-labrynth)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-dim)')}
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
