import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface DemoFrameProps {
  src: string
  title: string
  accent?: string
}

export default function DemoFrame({
  src,
  title,
  accent = 'var(--color-accent-labrynth)',
}: DemoFrameProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '480px' }}>
      {/* Loading overlay */}
      {!loaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 panel-border z-10"
          style={{ backgroundColor: 'var(--color-panel)' }}
        >
          <Loader2 size={20} className="animate-spin" style={{ color: accent }} />
          <span className="label-caps text-[0.65rem]" style={{ color: 'var(--color-text-dim)' }}>
            Loading demo...
          </span>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className="w-full h-full panel-border"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          minHeight: '480px',
        }}
        onLoad={() => setLoaded(true)}
        allow="fullscreen"
      />
    </div>
  )
}
