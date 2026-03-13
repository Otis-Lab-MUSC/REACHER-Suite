import { Github, Server, BookOpen, Radio, Layers } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'

const ACCENT = '#39FF14'

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
    icon: <Server size={18} />,
    title: 'Session Management',
    description:
      'Thread-safe session manager handles multiple concurrent experiment sessions. Each session binds one serial port to one kernel instance with automatic cleanup on disconnect.',
  },
  {
    icon: <BookOpen size={18} />,
    title: 'Command Registry',
    description:
      '71 hardware commands grouped by device: controller, session setup, cue, pump, lick, laser, and microscope. Rate-limited to 20 commands per second.',
  },
  {
    icon: <Radio size={18} />,
    title: 'WebSocket Streaming',
    description:
      'Thread-safe queue bridges kernel threads to async broadcast. All connected clients receive real-time events with dropped-event tracking at /health.',
  },
  {
    icon: <Layers size={18} />,
    title: 'REST API',
    description:
      'FastAPI on port 6229. Routes for sessions, serial ports, firmware upload, hardware commands, program control, data export, and lifecycle management.',
  },
]

const questions = [
  {
    q: 'What is the REACHER server?',
    a: 'REACHER is a Python process that owns the full experiment lifecycle. It reads serial JSON from Arduino firmware, exposes a REST + WebSocket API for clients, and writes timestamped logs to disk. A single server process can manage multiple concurrent sessions.',
  },
  {
    q: 'How does it handle multiple clients?',
    a: 'Each session runs three daemon threads — a serial reader, a queue processor, and a limit monitor — bridged to an async WebSocket broadcast task. All session state is protected by a thread-safe SessionManager, so multiple GUI tabs and CLI sessions can connect simultaneously without conflicts.',
  },
  {
    q: 'What auth model does it use?',
    a: 'All /api/* routes require a Bearer token. The key is auto-generated to ~/.reacher/api_key on first start or read from the REACHER_API_KEY environment variable. WebSocket connections pass the token as a query parameter.',
  },
]

export default function ReacherPage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      <style>{`
        @keyframes apiDotMove {
          0%   { opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .api-dot { display: none; }
        }
      `}</style>

      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          Python backend
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4"
          style={{ color: ACCENT, textShadow: `0 0 8px ${ACCENT}, 0 0 24px ${ACCENT}40` }}
        >
          Reacher
        </h1>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
          The experiment server. Control, stream, and log from a single process.
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

      {/* Visualization: API Request Flow */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Request Flow
        </p>
        <div
          className="panel-border p-8"
          style={{ backgroundColor: 'var(--color-panel)' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <path id="reacher-path-0" d="M120,40 L180,40" />
              <path id="reacher-path-1" d="M270,40 L330,40" />
              <path id="reacher-path-2" d="M420,40 L480,40" />
            </defs>
            {/* Boxes */}
            {[
              { x: 30, label: 'Client' },
              { x: 180, label: 'FastAPI' },
              { x: 330, label: 'Kernel' },
              { x: 480, label: 'Arduino' },
            ].map(({ x, label }) => (
              <g key={label}>
                <rect
                  x={x} y={22} width={90} height={36} rx={3}
                  fill="none" stroke={ACCENT} strokeOpacity={0.35} strokeWidth={1}
                />
                <text
                  x={x + 45} y={45}
                  textAnchor="middle" fill={ACCENT} fontSize={10} fontFamily="monospace"
                >
                  {label}
                </text>
              </g>
            ))}
            {/* Connector lines */}
            <line x1="120" y1="40" x2="180" y2="40" stroke={ACCENT} strokeOpacity={0.25} strokeWidth={1} />
            <line x1="270" y1="40" x2="330" y2="40" stroke={ACCENT} strokeOpacity={0.25} strokeWidth={1} />
            <line x1="420" y1="40" x2="480" y2="40" stroke={ACCENT} strokeOpacity={0.25} strokeWidth={1} />
            {/* Animated dots */}
            <circle r={4} fill={ACCENT} className="api-dot">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
                <mpath href="#reacher-path-0" />
              </animateMotion>
            </circle>
            <circle r={4} fill={ACCENT} className="api-dot">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.8s">
                <mpath href="#reacher-path-1" />
              </animateMotion>
            </circle>
            <circle r={4} fill={ACCENT} className="api-dot">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.6s">
                <mpath href="#reacher-path-2" />
              </animateMotion>
            </circle>
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
              'pip install reacher',
              'git clone https://github.com/Otis-Lab-MUSC/REACHER-Suite && pip install -e ".[dev]"',
              'reacher',
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
