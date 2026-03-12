import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

export default function LandingPage() {
  return (
    <div className="relative z-10 flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-6xl pt-16 sm:pt-24 pb-12 flex flex-col items-center text-center">
        {/* Banner */}
        <img
          src={`${BASE}reacher-icon-banner.png`}
          alt="Reacher Suite"
          className="w-full max-w-2xl mb-10 opacity-90"
          style={{ filter: 'drop-shadow(0 0 20px rgba(0,229,255,0.2))' }}
        />

        <p className="label-caps mb-3" style={{ color: 'var(--color-accent-labrynth)' }}>
          Otis Lab — Reacher Suite
        </p>
        <h1
          className="text-3xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-5"
          style={{ color: 'var(--color-text)' }}
        >
          Built for the bench,
          <br />
          <span style={{ color: 'var(--color-accent-labrynth)' }}>not the terminal.</span>
        </h1>
        <p className="text-sm sm:text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
          Open-source tools for running and analyzing neuroscience experiments —
          from live behavioral control to interactive data exploration.
        </p>
      </section>

      {/* System cards */}
      <section className="w-full max-w-5xl pb-24 grid sm:grid-cols-2 gap-5">
        {/* Labrynth card */}
        <div
          className="panel-border p-7 flex flex-col gap-4 transition-all duration-200 group"
          style={{ backgroundColor: 'var(--color-panel)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent-labrynth)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
        >
          <div className="flex items-center gap-2">
            <span
              className="status-pulse inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--color-accent-labrynth)', color: 'var(--color-accent-labrynth)' }}
            />
            <span className="label-caps text-[0.65rem]" style={{ color: 'var(--color-accent-labrynth)' }}>
              Behavioral control
            </span>
          </div>
          <h2
            className="text-2xl font-bold tracking-[0.05em] glow-accent"
            style={{ color: 'var(--color-accent-labrynth)' }}
          >
            Labrynth
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            Browser-based interface for running head-fixed mouse experiments —
            operant and classical conditioning without writing a single script.
          </p>
          <Link
            to="/labrynth"
            className="mt-auto flex items-center gap-2 label-caps text-[0.65rem] transition-colors duration-150 group-hover:gap-3"
            style={{ color: 'var(--color-accent-labrynth)' }}
          >
            Explore Labrynth <ArrowRight size={12} />
          </Link>
        </div>

        {/* Axplorer card */}
        <div
          className="panel-border p-7 flex flex-col gap-4 transition-all duration-200 group"
          style={{ backgroundColor: 'var(--color-panel)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent-axplorer)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
        >
          <div className="flex items-center gap-2">
            <span
              className="status-pulse inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--color-accent-axplorer)', color: 'var(--color-accent-axplorer)' }}
            />
            <span className="label-caps text-[0.65rem]" style={{ color: 'var(--color-accent-axplorer)' }}>
              Data exploration
            </span>
          </div>
          <h2
            className="text-2xl font-bold tracking-[0.05em] glow-axplorer"
            style={{ color: 'var(--color-accent-axplorer)' }}
          >
            Axplorer
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            Interactive explorer for two-photon imaging data —
            align sessions, compute PETHs, and export publication-ready figures in minutes.
          </p>
          <Link
            to="/axplorer"
            className="mt-auto flex items-center gap-2 label-caps text-[0.65rem] transition-colors duration-150 group-hover:gap-3"
            style={{ color: 'var(--color-accent-axplorer)' }}
          >
            Explore Axplorer <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </div>
  )
}
