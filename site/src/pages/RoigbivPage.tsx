import { Github, Scan, Zap, Save, FileOutput } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'
import GlitchText from '../components/shared/GlitchText'

const ACCENT = '#F472B6'

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

const features = [
  {
    icon: <Scan size={18} />,
    title: 'Fine-tuned Cellpose',
    description:
      'Cellpose segmentation model fine-tuned on lab-specific imaging data. Achieves higher precision on your cell morphology than the generic model.',
  },
  {
    icon: <Zap size={18} />,
    title: 'GPU / CUDA Support',
    description:
      'CUDA 12.1 + PyTorch 2.5.1 tested. Falls back to CPU automatically. Training a 500-image dataset takes minutes on a single consumer GPU.',
  },
  {
    icon: <Save size={18} />,
    title: 'Checkpoint Saving',
    description:
      'Model weights saved at configurable intervals during training. Resume from any checkpoint without restarting from scratch.',
  },
  {
    icon: <FileOutput size={18} />,
    title: 'Mask Output for pynapse',
    description:
      'Segmentation masks exported in the format expected by pynapse. Drop into your analysis pipeline without any format conversion.',
  },
]

const questions = [
  {
    q: 'What is Roigbiv?',
    a: 'Roigbiv is a tool for training a custom ROI segmentation model on your own two-photon imaging data. It fine-tunes Cellpose on annotated examples from your specific preparation so the model generalizes to your cell morphology rather than a generic dataset.',
  },
  {
    q: 'Who is it for?',
    a: 'Documentation coming soon.',
  },
  {
    q: 'How does it integrate with the rest of the suite?',
    a: 'Documentation coming soon.',
  },
]

const GRID_COLS = 8
const GRID_ROWS = 5
const CELLS = Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => i)

export default function RoigbivPage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      <style>{`
        @keyframes cellDetect {
          0%, 100% { border-color: #1a0510; box-shadow: none; }
          50%       { border-color: ${ACCENT}; box-shadow: 0 0 8px ${ACCENT}40; }
        }
        .roi-cell {
          animation: cellDetect 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .roi-cell {
            animation: none;
            border-color: ${ACCENT};
          }
        }
      `}</style>

      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          ROI segmentation
        </p>
        <GlitchText
          as="h1"
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4"
          style={{ color: ACCENT, textShadow: `0 0 8px ${ACCENT}, 0 0 24px ${ACCENT}40` }}
        >
          Roigbiv
        </GlitchText>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
          Train a custom cell segmentation model on your own data.
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

      {/* WIP banner */}
      <div
        className="panel-border p-4 flex items-center gap-3 mb-8 w-full max-w-6xl mx-auto"
        style={{ backgroundColor: '#1a0a10', borderColor: ACCENT }}
      >
        <span
          className="status-pulse w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: ACCENT, color: ACCENT }}
        />
        <p className="text-xs" style={{ color: ACCENT }}>
          <span className="font-semibold">Work in progress.</span>{' '}
          Roigbiv is under active development. Documentation and features are incomplete.
        </p>
      </div>

      {/* Overview */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Overview
        </p>
        <div className="flex flex-col gap-6">
          {questions.map(({ q, a }, idx) => (
            <div
              key={q}
              className={`panel-border p-6 ${idx > 0 ? 'opacity-40' : ''}`}
              style={{ backgroundColor: 'var(--color-panel)' }}
            >
              <h3 className="text-sm font-semibold mb-2 tracking-[0.04em] glitch-text" style={{ color: ACCENT }}>
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

      {/* Visualization: cell detection grid */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Cell Detection
        </p>
        <div
          className="panel-border p-8 flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-panel)' }}
          aria-hidden="true"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
              gap: '8px',
            }}
          >
            {CELLS.map(i => (
              <div
                key={i}
                className="roi-cell"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1px solid #1a0510',
                  animationDelay: `${(i * 0.15) % 3}s`,
                }}
              />
            ))}
          </div>
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
              'pip install cellpose torch',
              'python scripts/train.py --run_id run001',
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
