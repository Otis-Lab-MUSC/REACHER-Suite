import { Github, Cpu, Zap, FileCode, Activity } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'

const ACCENT = '#FF9100'

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
    icon: <Cpu size={18} />,
    title: '5 Paradigms',
    description:
      'Fixed ratio, progressive ratio, variable interval, omission, and Pavlovian conditioning. Each paradigm compiles to its own Arduino hex file.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Hardware Control',
    description:
      'Drives levers, pumps, cue lights, tones, and lasers directly from the microcontroller with microsecond-precision timing.',
  },
  {
    icon: <FileCode size={18} />,
    title: 'Serial JSON Protocol',
    description:
      'All events emitted as newline-delimited JSON at 115200 baud. Event codes 000–1300 cover identification, logs, errors, behavioral events, and microscope frames.',
  },
  {
    icon: <Activity size={18} />,
    title: 'Event Streaming',
    description:
      'Behavioral events (code 007) fire in real time and are forwarded through the REACHER kernel to all connected WebSocket clients with no buffering.',
  },
]

const questions = [
  {
    q: 'What does the firmware do?',
    a: 'The firmware runs the operant conditioning task on the microcontroller itself. It manages trial logic, actuates hardware outputs, monitors sensor inputs, and emits timestamped JSON events over serial — all without needing the host computer for timing.',
  },
  {
    q: 'How are paradigms compiled?',
    a: 'Each paradigm (fr, pr, vi, omission, pavlovian) is a separate Arduino sketch. The compile.sh script builds all five in one pass using arduino-cli and deposits hex files in hex/. The REACHER server uploads the appropriate hex when a paradigm is selected in the UI.',
  },
  {
    q: 'How does it communicate with the server?',
    a: "The board sends newline-delimited UTF-8 JSON at 115200 baud. The REACHER kernel's serial-reader thread parses each line and pushes it into the session event queue. Commands flow the other direction: the kernel sends JSON command objects and the firmware executes them.",
  },
]

const WAVE_PATH =
  'M10,50 L10,20 L70,20 L70,50 L70,80 L130,80 L130,20 L190,20 L190,50 L190,80 L250,80 L250,20 L310,20 L310,50 L310,80 L370,80 L370,20 L430,20 L430,50'
const PATH_LEN = 900

export default function FirmwarePage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      <style>{`
        @keyframes waveDraw {
          0%   { stroke-dashoffset: ${PATH_LEN}; }
          100% { stroke-dashoffset: 0; }
        }
        .wave-path {
          stroke-dasharray: ${PATH_LEN};
          stroke-dashoffset: ${PATH_LEN};
          animation: waveDraw 2.4s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .wave-path {
            stroke-dashoffset: 0;
            animation: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          Arduino firmware
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4"
          style={{ color: ACCENT, textShadow: `0 0 8px ${ACCENT}, 0 0 24px ${ACCENT}40` }}
        >
          Firmware
        </h1>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
          Real-time operant conditioning on Arduino UNO.
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

      {/* Visualization: Oscilloscope */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Serial Event Signal
        </p>
        <div
          className="panel-border p-8"
          style={{ backgroundColor: 'var(--color-panel)' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 440 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {[20, 50, 80].map(y => (
              <line key={y} x1="0" y1={y} x2="440" y2={y} stroke={ACCENT} strokeOpacity={0.06} strokeWidth={1} />
            ))}
            <path
              className="wave-path"
              d={WAVE_PATH}
              fill="none"
              stroke={ACCENT}
              strokeWidth={2}
              strokeLinecap="square"
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
              'arduino-cli core install arduino:avr',
              'bash compile.sh',
              'arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno --input-file hex/fr.hex',
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
