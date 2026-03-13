import { Github, Box, Wrench, Printer, Package } from 'lucide-react'
import FeatureCard from '../components/shared/FeatureCard'
import GlitchText from '../components/shared/GlitchText'

const ACCENT = '#C084FC'

const features = [
  {
    icon: <Box size={18} />,
    title: 'Lever Assembly',
    description:
      'Lever arm, pivot mount, and sensor bracket designed for head-fixed mice. Prints in two parts and snaps together.',
  },
  {
    icon: <Wrench size={18} />,
    title: 'Syringe Pump',
    description:
      'Stepper-driven syringe pump delivers precise fluid rewards. Motor bracket, carriage, and syringe holder all printable.',
  },
  {
    icon: <Printer size={18} />,
    title: 'Surgery Tools',
    description:
      'Head-plate holders and stereotax adapters for implant surgeries. Sized for standard mouse head plates.',
  },
  {
    icon: <Package size={18} />,
    title: 'Circuit Box',
    description:
      'Enclosure for the Arduino and breakout board. Routes cables cleanly and prevents accidental shorts during experiments.',
  },
]

const questions = [
  {
    q: 'What is in the hardware models repo?',
    a: 'A library of FDM-printable STL files for every mechanical component in a standard REACHER rig: lever assemblies, syringe pump, surgery tools, and electronics enclosures. Each model is versioned alongside the firmware and software.',
  },
  {
    q: 'What printer settings are recommended?',
    a: 'Most parts print well in PLA at 0.2 mm layer height and 20% infill. ABS is an option for parts that will be autoclaved. Structural parts like the lever pivot and pump carriage benefit from 40% infill or more.',
  },
  {
    q: 'Do I need machine shop access?',
    a: 'No. The entire rig is designed to be assembled with a desktop FDM printer and basic hand tools. Fasteners are standard M3 hardware available online. The only non-printed parts are the Arduino, stepper motor, and syringe.',
  },
]

const PRINT_PARAMS = [
  ['Material', 'PLA or ABS'],
  ['Layer height', '0.2 mm'],
  ['Infill', '20%'],
  ['Supports', 'As needed'],
]

export default function HardwarePage() {
  return (
    <div className="relative z-10 flex flex-col px-4 pb-24">
      <style>{`
        @keyframes boxRotate {
          from { transform: rotateX(-20deg) rotateY(0deg); }
          to   { transform: rotateX(-20deg) rotateY(360deg); }
        }
        .box-scene {
          transform-style: preserve-3d;
          animation: boxRotate 8s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .box-scene {
            animation: none;
            transform: rotateX(-20deg) rotateY(30deg);
          }
        }
      `}</style>

      {/* Hero */}
      <section className="w-full max-w-6xl mx-auto pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          3D-printable rig
        </p>
        <GlitchText
          as="h1"
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4"
          style={{ color: ACCENT, textShadow: `0 0 8px ${ACCENT}, 0 0 24px ${ACCENT}40` }}
        >
          Hardware
        </GlitchText>
        <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
          Print, assemble, and run. No machinist required.
        </p>
        {/* TODO: add GitHub repo URL */}
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

      {/* Visualization: rotating 3D wireframe box */}
      <section className="w-full max-w-6xl mx-auto mb-16">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Model Preview
        </p>
        <div
          className="panel-border p-8 flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-panel)', minHeight: '240px' }}
          aria-hidden="true"
        >
          <div style={{ perspective: '600px' }}>
            <div
              className="box-scene"
              style={{ width: '100px', height: '100px', position: 'relative', transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div style={{
                position: 'absolute', width: '100px', height: '100px',
                border: `1px solid ${ACCENT}`, background: 'transparent', opacity: 0.7,
                transform: 'translateZ(50px)',
              }} />
              {/* Back */}
              <div style={{
                position: 'absolute', width: '100px', height: '100px',
                border: `1px solid ${ACCENT}`, background: 'transparent', opacity: 0.7,
                transform: 'rotateY(180deg) translateZ(50px)',
              }} />
              {/* Left */}
              <div style={{
                position: 'absolute', width: '100px', height: '100px',
                border: `1px solid ${ACCENT}`, background: 'transparent', opacity: 0.7,
                transform: 'rotateY(-90deg) translateZ(50px)',
              }} />
              {/* Right */}
              <div style={{
                position: 'absolute', width: '100px', height: '100px',
                border: `1px solid ${ACCENT}`, background: 'transparent', opacity: 0.7,
                transform: 'rotateY(90deg) translateZ(50px)',
              }} />
              {/* Top */}
              <div style={{
                position: 'absolute', width: '100px', height: '100px',
                border: `1px solid ${ACCENT}`, background: 'transparent', opacity: 0.7,
                transform: 'rotateX(90deg) translateZ(50px)',
              }} />
              {/* Bottom */}
              <div style={{
                position: 'absolute', width: '100px', height: '100px',
                border: `1px solid ${ACCENT}`, background: 'transparent', opacity: 0.7,
                transform: 'rotateX(-90deg) translateZ(50px)',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Getting the Files */}
      <section className="w-full max-w-6xl mx-auto">
        <p className="label-caps mb-6" style={{ color: 'var(--color-text-dim)' }}>
          Getting the Files
        </p>
        <div className="panel-border p-6" style={{ backgroundColor: 'var(--color-panel)' }}>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text)' }}>
            Download v1.0.0 ZIP from GitHub Releases
          </p>
          <table className="w-full text-xs" style={{ borderCollapse: 'collapse' }}>
            <tbody>
              {PRINT_PARAMS.map(([k, v]) => (
                <tr key={k} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td className="py-2 pr-8 label-caps text-[0.6rem]" style={{ color: 'var(--color-text-dim)' }}>
                    {k}
                  </td>
                  <td className="py-2 text-xs" style={{ color: 'var(--color-text)' }}>
                    {v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Links */}
      <section className="w-full max-w-6xl mx-auto mt-12">
        <p className="label-caps mb-4" style={{ color: 'var(--color-text-dim)' }}>
          Links
        </p>
        {/* TODO: add GitHub repo URL */}
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
