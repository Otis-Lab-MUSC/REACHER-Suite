import { Github, Plug, Activity, HardDrive, Layers } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'
import DemoFrame from '../components/shared/DemoFrame'

const BASE = import.meta.env.BASE_URL
const ACCENT = 'var(--color-accent-labrynth)'

const features = [
  {
    icon: <Plug size={18} />,
    title: 'Zero Setup',
    description:
      'Plug in the hardware and open the browser. Labrynth auto-discovers connected devices — no drivers, no config files, no Python environment to manage.',
  },
  {
    icon: <Activity size={18} />,
    title: 'Live Monitoring',
    description:
      'Watch every event unfold in real time. The live event stream shows licks, rewards, tones, and trial outcomes the moment they happen.',
  },
  {
    icon: <HardDrive size={18} />,
    title: 'Your Data, Your Disk',
    description:
      'Session data logs directly to your local machine — no cloud dependency, no subscription. Your data stays where you put it.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Multiple Paradigms',
    description:
      'Operant and classical conditioning are built in. Switch paradigms from the UI without touching code.',
  },
]

const questions = [
  {
    q: 'What problem does Labrynth solve?',
    a: 'Setting up behavioral experiments typically requires custom scripts, low-level hardware drivers, and hours of debugging before a single trial runs. Labrynth replaces that stack with a browser-based interface that talks directly to the hardware — so researchers spend time doing science, not configuring software.',
  },
  {
    q: 'Who is it for?',
    a: 'Labrynth is built for neuroscience labs running head-fixed mouse experiments. It assumes no programming background — a student new to the rig can run a full session on day one.',
  },
  {
    q: 'What makes it different?',
    a: "Most open-source behavioral systems are Python scripts or MATLAB toolboxes that require a developer mindset. Labrynth is a product: it has a UI, it gives live feedback, and it handles errors gracefully. You interact with it the same way you'd interact with any web app.",
  },
]

export default function LabrynthPage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          Behavioral control system
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4 glow-accent"
          style={{ color: ACCENT }}
        >
          Labrynth
        </h1>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
          Run head-fixed mouse experiments from your browser.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(f => (
            <FeatureCard key={f.title} {...f} accent={ACCENT} />
          ))}
        </div>
      </section>

      {/* Demo */}
      <section className="w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <p className="label-caps" style={{ color: 'var(--color-text-dim)' }}>
            Interactive Demo
          </p>
          <span
            className="status-pulse inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: ACCENT, color: ACCENT }}
          />
          <span className="label-caps text-[0.6rem]" style={{ color: ACCENT }}>
            Live
          </span>
        </div>
        <DemoFrame
          src={`${BASE}labrynth-demo/`}
          title="Labrynth interactive demo"
          accent={ACCENT}
        />
        <p className="mt-3 text-xs" style={{ color: 'var(--color-text-dim)' }}>
          Fully static demo — no backend required. Create a session, configure a program, and watch the event stream.
        </p>
      </section>
    </div>
  )
}
