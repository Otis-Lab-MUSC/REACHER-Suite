import type { ReactNode } from 'react'
import { Github, Plug, Activity, HardDrive, Layers, Download, Monitor, Laptop, Terminal } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'
import DemoFrame from '../components/shared/DemoFrame'
import GlitchText from '../components/shared/GlitchText'

const ACCENT = 'var(--color-accent-labrynth)'

type Platform = 'windows' | 'macos' | 'linux'

function detectPlatform(): Platform | null {
  if (typeof navigator === 'undefined') return null
  const ua = navigator.userAgent
  if (/Windows/i.test(ua)) return 'windows'
  if (/Mac OS X|Macintosh/i.test(ua)) return 'macos'
  if (/Linux/i.test(ua)) return 'linux'
  return null
}

const PLATFORMS: Record<Platform, { label: string; sublabel: string; icon: ReactNode; url: string }> = {
  windows: {
    label: 'Windows',
    sublabel: 'Windows 10 / 11 · x64',
    icon: <Monitor size={16} />,
    url: '#', // TODO: replace with GitHub release asset URL
  },
  macos: {
    label: 'macOS',
    sublabel: 'macOS 12+ · Universal',
    icon: <Laptop size={16} />,
    url: '#', // TODO: replace with GitHub release asset URL
  },
  linux: {
    label: 'Linux',
    sublabel: 'AppImage · x64',
    icon: <Terminal size={16} />,
    url: '#', // TODO: replace with GitHub release asset URL
  },
}
const BASE = import.meta.env.BASE_URL


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
    q: 'What is Labrynth?',
    a: 'Labrynth is a full-stack behavioral control interface for running head-fixed rodent experiments. It ships as a browser-based GUI (labrynth/web, React 19) and a terminal CLI (labrynth/cli, prompt_toolkit), both built on top of the REACHER Python engine — a multi-threaded FastAPI server that manages serial communication with REACHER hardware over a 115,200 baud, newline-delimited JSON protocol.',
  },
  {
    q: 'How does the stack work?',
    a: 'The REACHER Python engine (reacher/) runs three daemon threads per session: a serial reader, a queue processor, and a limit monitor. It exposes a REST API and WebSocket server that Labrynth\'s frontend connects to. Hardware state is driven by REACHER firmware — open-source Arduino C++ running on ATmega328P boards — which executes five behavioral paradigms (fixed ratio, progressive ratio, variable interval, omission, and Pavlovian) and streams structured JSON event codes back to the kernel in real time. Every component in the stack — firmware, engine, and interface — is open source and freely available on GitHub, so labs can inspect, extend, or adapt the system to their own protocols. Labrynth handles firmware uploads, session lifecycle (idle → uploading → connected → running → paused → stopped), and live event broadcasting — all from the browser or terminal.',
  },
  {
    q: 'What makes it different?',
    a: 'Existing open-source systems (PyBpod, Bonsai, MedPC) are scripting environments or low-level toolkits — they require programming knowledge to configure and run. Labrynth is a product: paradigm selection, device configuration, live monitoring, and data export all happen through a UI. The firmware is pre-compiled and uploaded through the interface; there are no config files to edit or Python environments to manage. The same hardware and data format work whether you use the browser GUI or the terminal CLI.',
  },
]

function DownloadSection() {
  const detected = detectPlatform()
  const platformKeys: Platform[] = ['windows', 'macos', 'linux']

  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
        Download
      </p>

      {detected && (
        <div className="panel-border p-6 mb-4" style={{ backgroundColor: 'var(--color-panel)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span style={{ color: ACCENT }}>{PLATFORMS[detected].icon}</span>
              <div>
                <p className="text-sm font-semibold tracking-[0.04em]" style={{ color: 'var(--color-text)' }}>
                  Download for {PLATFORMS[detected].label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-dim)' }}>
                  {PLATFORMS[detected].sublabel}
                </p>
              </div>
            </div>
            <a
              href={PLATFORMS[detected].url}
              className="inline-flex items-center gap-2 px-4 py-2 label-caps text-[0.65rem] font-semibold transition-opacity duration-150 hover:opacity-80"
              style={{ backgroundColor: ACCENT, color: 'var(--color-bg)', borderRadius: 2 }}
            >
              <Download size={12} /> Download
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3">
        {platformKeys.map(key => {
          const p = PLATFORMS[key]
          const isDetected = key === detected
          return (
            <a
              key={key}
              href={p.url}
              className="panel-border flex items-center gap-2 px-4 py-3 label-caps text-[0.65rem] transition-colors duration-150"
              style={{
                backgroundColor: 'var(--color-panel)',
                color: isDetected ? ACCENT : 'var(--color-text-dim)',
                borderColor: isDetected ? ACCENT : 'var(--color-border)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = isDetected ? ACCENT : 'var(--color-border)')}
            >
              {p.icon}
              {p.label}
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default function LabrynthPage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          Behavioral control system
        </p>
        <GlitchText
          as="h1"
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4 glow-accent"
          style={{ color: ACCENT }}
        >
          Labrynth
        </GlitchText>
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

      {/* Demo */}
      <section className="w-full max-w-6xl mx-auto mb-16">
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

      {/* Download */}
      <DownloadSection />
    </div>
  )
}
