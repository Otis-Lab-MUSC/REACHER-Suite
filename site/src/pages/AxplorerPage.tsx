import { Github, AlignCenter, BarChart2, Download, Brain } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'

const ACCENT = 'var(--color-accent-axplorer)'

const features = [
  {
    icon: <AlignCenter size={18} />,
    title: 'Load and Align',
    description:
      'Import imaging sessions and automatically align neural activity to behavioral events. Flexible epoch definitions work across paradigms.',
  },
  {
    icon: <BarChart2 size={18} />,
    title: 'PETH at a Glance',
    description:
      'Peri-event time histograms in seconds. Select cells, choose an event, and visualize population-level responses instantly.',
  },
  {
    icon: <Download size={18} />,
    title: 'Export Anywhere',
    description:
      'Save figures as SVG or PNG and processed data in standard formats. Drop straight into your manuscript or analysis pipeline.',
  },
]

const questions = [
  {
    q: 'What problem does Axplorer solve?',
    a: 'Processing two-photon calcium imaging data typically involves chaining together multiple Python packages, writing custom alignment code, and re-running scripts every time you tweak a parameter. Axplorer collapses that pipeline into a single interactive interface so you can explore your data before you commit to an analysis approach.',
  },
  {
    q: 'Who is it for?',
    a: 'Any lab using two-photon imaging alongside behavioral paradigms — especially groups already using Labrynth. Axplorer is designed so that the same person who ran the experiment can explore the results without needing a data-science background.',
  },
  {
    q: 'What makes it different?',
    a: 'Axplorer is built for speed of exploration, not pipeline automation. The goal is to get from raw .tif stacks to interpretable plots in a single session. It integrates natively with Labrynth session files so behavioral timestamps are already correctly formatted.',
  },
]

export default function AxplorerPage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          Imaging data explorer
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4 glow-axplorer"
          style={{ color: ACCENT }}
        >
          Axplorer
        </h1>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
          Explore two-photon imaging data interactively.
        </p>
        <a
          href="https://github.com/thejoshbq/REACHER-Suite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 panel-border label-caps text-[0.65rem] transition-colors duration-150"
          style={{ color: ACCENT, borderColor: 'var(--color-border)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
        >
          <Github size={12} /> View on GitHub
        </a>
      </section>

      {/* 3 questions */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Overview
        </p>
        <div className="flex flex-col gap-6">
          {questions.map(({ q, a }) => (
            <div key={q} className="panel-border p-6" style={{ backgroundColor: 'var(--color-panel)' }}>
              <h3 className="text-sm font-semibold mb-2 tracking-[0.04em]" style={{ color: ACCENT }}>
                {q}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature cards */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Features
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {features.map(f => (
            <FeatureCard key={f.title} {...f} accent={ACCENT} />
          ))}
        </div>
      </section>

      {/* Demo scaffold */}
      <section className="w-full max-w-6xl mx-auto">
        <p className="label-caps mb-4" style={{ color: 'var(--color-text-dim)' }}>
          Interactive Demo
        </p>
        <div
          className="panel-border p-12 flex flex-col items-center justify-center gap-5 text-center"
          style={{ backgroundColor: 'var(--color-panel)', minHeight: '320px' }}
        >
          <Brain size={36} style={{ color: ACCENT, opacity: 0.5 }} />
          <div>
            <h3
              className="text-lg font-semibold tracking-[0.05em] mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              Coming Soon
            </h3>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'var(--color-text-dim)' }}>
              We're building an interactive demo. Check back soon or star the repo to follow along.
            </p>
          </div>
          <a
            href="https://github.com/thejoshbq/REACHER-Suite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 panel-border label-caps text-[0.65rem] transition-colors duration-150"
            style={{ color: ACCENT, borderColor: 'var(--color-border)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
          >
            <Github size={12} /> View on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
