import type { ReactNode } from 'react'

interface HeroSectionProps {
  label?: string
  title: string
  tagline: string
  accent?: string
  children?: ReactNode
}

export default function HeroSection({
  label,
  title,
  tagline,
  accent = 'var(--color-accent-labrynth)',
  children,
}: HeroSectionProps) {
  return (
    <section className="relative z-10 py-16 sm:py-24 px-4 max-w-6xl mx-auto w-full">
      {label && (
        <p className="label-caps mb-4" style={{ color: accent }}>
          {label}
        </p>
      )}
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] mb-4 leading-tight"
        style={{ color: accent }}
      >
        {title}
      </h1>
      <p
        className="text-base sm:text-lg max-w-2xl leading-relaxed"
        style={{ color: 'var(--color-text)' }}
      >
        {tagline}
      </p>
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </section>
  )
}
