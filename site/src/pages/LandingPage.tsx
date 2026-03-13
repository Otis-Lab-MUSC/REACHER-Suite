import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GlitchText from '../components/shared/GlitchText'

const BASE = import.meta.env.BASE_URL

// TODO: replace with live publication data
const publications = [
  {
    title: 'REACHER: An Open-Source Platform for Automated Operant Conditioning in Head-Fixed Mice',
    authors: 'Baquero J., et al.',
    venue: 'Journal of Neuroscience Methods',
    year: '2025',
    abstract:
      'We present REACHER, a hardware-software stack for running head-fixed operant and classical conditioning experiments. The system combines Arduino-based firmware with a Python kernel and browser-based interface, enabling real-time behavioral control and data logging without custom scripting.',
    doi: 'https://doi.org/10.1000/placeholder-doi-1',
  },
  {
    title: 'Labrynth: A Browser-Native Interface for Real-Time Behavioral Neuroscience',
    authors: 'Baquero J., Otis J.M.',
    venue: 'bioRxiv',
    year: '2024',
    abstract:
      'Labrynth provides a full-stack behavioral control interface built on FastAPI and React 19. It abstracts serial communication with REACHER hardware behind a WebSocket-driven event system, enabling live monitoring of lick detection, reward delivery, cue presentation, and trial outcomes.',
    doi: 'https://doi.org/10.1000/placeholder-doi-2',
  },
]

export default function LandingPage() {
  const navigate = useNavigate()
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
        <GlitchText
          as="h1"
          className="text-3xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-5"
          style={{ color: 'var(--color-text)' }}
        >
          Built for the bench,
          <br />
          <span style={{ color: 'var(--color-accent-labrynth)' }}>not the terminal.</span>
        </GlitchText>
        <p className="text-sm sm:text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
          Open-source tools for running and analyzing neuroscience experiments —
          from live behavioral control to interactive data exploration.
        </p>
      </section>

      {/* System cards */}
      <section className="w-full max-w-2xl pb-24 grid sm:grid-cols-1 gap-5">
        {/* Labrynth card */}
        <div
          className="panel-border p-7 flex flex-col gap-4 transition-all duration-200 group cursor-pointer"
          style={{ backgroundColor: 'var(--color-panel)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent-labrynth)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
          onClick={() => navigate('/labrynth')}
          role="link"
          aria-label="Explore Labrynth"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/labrynth') }}
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
            className="text-2xl font-bold tracking-[0.05em] glow-accent glitch-text"
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
            onClick={e => e.stopPropagation()}
          >
            Explore Labrynth <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="w-full max-w-2xl pb-24 flex flex-col gap-5">
        <p className="label-caps" style={{ color: 'var(--color-text-dim)' }}>
          Research &amp; Publications
        </p>
        {publications.map(pub => (
          <div
            key={pub.doi}
            className="panel-border p-6 flex flex-col gap-2"
            style={{ backgroundColor: 'var(--color-panel)' }}
          >
            <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--color-accent-labrynth)' }}>
              {pub.title}
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-dim)' }}>
              {pub.authors}
            </p>
            <p className="label-caps text-[0.6rem]" style={{ color: 'var(--color-text-dim)' }}>
              {pub.venue} — {pub.year}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{
                color: 'var(--color-text)',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {pub.abstract}
            </p>
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-[0.6rem] mt-1 transition-colors duration-150"
              style={{ color: 'var(--color-accent-labrynth)' }}
            >
              Read Article →
            </a>
          </div>
        ))}
      </section>
    </div>
  )
}
