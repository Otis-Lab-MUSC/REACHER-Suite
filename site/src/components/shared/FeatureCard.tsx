import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accent?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  accent = 'var(--color-accent-labrynth)',
}: FeatureCardProps) {
  return (
    <div
      className="panel-border p-5 flex flex-col gap-3 transition-colors duration-200"
      style={{ backgroundColor: 'var(--color-panel)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
      }}
    >
      <div style={{ color: accent }}>{icon}</div>
      <h3
        className="font-semibold text-sm tracking-[0.05em] glitch-text"
        style={{ color: 'var(--color-text)' }}
      >
        {title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
        {description}
      </p>
    </div>
  )
}
