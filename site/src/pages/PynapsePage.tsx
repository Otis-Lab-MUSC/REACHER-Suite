import { Github, Layers, Database, TrendingUp, BookMarked } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'

const ACCENT = '#38BDF8'

function CodeBlock({ lang, lines }: { lang: string; lines: string[] }) {
  return (
    <div className="panel-border overflow-hidden" style={{ backgroundColor: 'var(--color-panel)' }}>
      <div
        className="px-4 py-2 border-b label-caps text-[0.6rem]"
        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-dim)' }}
      >
        {lang}
      </div>
      <pre className="px-4 py-4 text-sm leading-loose overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <div key={i}>
              <span style={{ color: 'var(--color-text-dim)' }}>$</span>{' '}
              <span style={{ color: 'var(--color-text)' }}>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

function PythonBlock({ lines }: { lines: string[] }) {
  return (
    <div className="panel-border overflow-hidden" style={{ backgroundColor: 'var(--color-panel)' }}>
      <div
        className="px-4 py-2 border-b label-caps text-[0.6rem]"
        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-dim)' }}
      >
        python
      </div>
      <pre className="px-4 py-4 text-sm leading-loose overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <div key={i}>
              <span style={{ color: 'var(--color-text)' }}>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

const features = [
  {
    icon: <Layers size={18} />,
    title: 'Sample / Population / Project',
    description:
      'Three data abstractions for single sessions, multi-animal cohorts, and multi-project meta-analyses. Consistent API across all three levels.',
  },
  {
    icon: <Database size={18} />,
    title: 'OTIS_PIPE',
    description:
      'Composable preprocessing pipeline: baseline correction, dF/F normalization, motion artifact rejection, and event alignment in a single fluent chain.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'SampleEventTensor',
    description:
      'Peri-event tensors sliced from fluorescence traces. Shape: (cells × trials × time). Supports arbitrary event windows and multiple reference events.',
  },
  {
    icon: <BookMarked size={18} />,
    title: 'Event Dictionaries',
    description:
      'Pre-built event maps for REACHER, legacy Ethernet, and legacy serial paradigms. Pass your paradigm key and timestamps are automatically decoded.',
  },
]

const questions = [
  {
    q: 'What does pynapse do?',
    a: 'Pynapse converts raw fiber photometry data (xlsx or mat files) into structured Python objects ready for analysis. It handles signal normalization, event alignment, and tensor construction so you can go from raw files to peri-event histograms in a few lines of code.',
  },
  {
    q: 'How does it fit in the pipeline?',
    a: 'Pynapse sits between raw acquisition files and the Axplorer visualization layer. It is also used as a standalone library for custom analysis scripts. Sessions logged by REACHER are natively supported — behavioral timestamps are already in the correct format.',
  },
  {
    q: 'What data formats does it support?',
    a: 'Input: .xlsx (TDT Synapse exports) and .mat (legacy MATLAB exports). Output: numpy arrays, pandas DataFrames, and HDF5 via the OTIS_PIPE export step. PyPI packaging is not yet available — install from source.',
  },
]

const CALCIUM_PATH =
  'M10,70 C20,70 25,70 35,70 C42,70 45,20 50,15 C55,10 58,30 65,50 C72,65 80,70 95,70 C105,70 115,70 130,70 C138,70 141,20 146,15 C151,10 154,30 161,50 C168,65 176,70 190,70 C200,70 215,70 230,70 C238,70 241,25 246,15 C251,8 254,32 262,55 C268,68 278,70 295,70 L440,70'
const CALCIUM_PATH_LEN = 800

export default function PynapsePage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      <style>{`
        @keyframes calcDraw {
          0%   { stroke-dashoffset: ${CALCIUM_PATH_LEN}; opacity: 1; }
          75%  { stroke-dashoffset: 0; opacity: 1; }
          90%  { stroke-dashoffset: 0; opacity: 0; }
          100% { stroke-dashoffset: ${CALCIUM_PATH_LEN}; opacity: 0; }
        }
        .calc-trace {
          stroke-dasharray: ${CALCIUM_PATH_LEN};
          stroke-dashoffset: ${CALCIUM_PATH_LEN};
          animation: calcDraw 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .calc-trace {
            stroke-dashoffset: 0;
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          Neural data engine
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4"
          style={{ color: ACCENT, textShadow: `0 0 8px ${ACCENT}, 0 0 24px ${ACCENT}40` }}
        >
          Pynapse
        </h1>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
          From raw fluorescence to peri-event tensors in three lines.
        </p>
        <a
          href="https://github.com/Otis-Lab-MUSC/REACHER-Suite"
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

      {/* Overview */}
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

      {/* Features */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Features
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(f => (
            <FeatureCard key={f.title} {...f} accent={ACCENT} />
          ))}
        </div>
      </section>

      {/* Visualization: Calcium trace */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Calcium Signal
        </p>
        <div
          className="panel-border p-8"
          style={{ backgroundColor: 'var(--color-panel)' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 450 90" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Baseline grid */}
            <line x1="0" y1="70" x2="450" y2="70" stroke={ACCENT} strokeOpacity={0.08} strokeWidth={1} />
            <line x1="0" y1="40" x2="450" y2="40" stroke={ACCENT} strokeOpacity={0.05} strokeWidth={1} />
            {/* Calcium transient trace */}
            <path
              className="calc-trace"
              d={CALCIUM_PATH}
              fill="none"
              stroke={ACCENT}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Installation */}
      <section className="w-full max-w-6xl mx-auto">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Installation
        </p>
        <div className="flex flex-col gap-4">
          <CodeBlock
            lang="bash"
            lines={[
              'git clone https://github.com/Otis-Lab-MUSC/REACHER-Suite',
              'cd pynapse && pip install -e .',
            ]}
          />
          <PythonBlock
            lines={[
              'from pynapse import Sample',
              's = Sample("session.xlsx")',
              'tensor = s.event_tensor(event="reward", window=(-2, 5))',
            ]}
          />
        </div>
      </section>

      {/* Links */}
      <section className="w-full max-w-6xl mx-auto mt-12">
        <p className="label-caps mb-4" style={{ color: 'var(--color-text-dim)' }}>
          Links
        </p>
        <a
          href="https://github.com/Otis-Lab-MUSC/REACHER-Suite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 panel-border label-caps text-[0.65rem] transition-colors duration-150"
          style={{ color: ACCENT, borderColor: 'var(--color-border)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
        >
          <Github size={12} /> GitHub
        </a>
      </section>
    </div>
  )
}
