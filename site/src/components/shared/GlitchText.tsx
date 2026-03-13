import type { ReactNode, CSSProperties, ElementType } from 'react'

interface GlitchTextProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  as?: ElementType
}

export default function GlitchText({ children, className = '', style, as: Tag = 'span' }: GlitchTextProps) {
  return (
    <Tag className={`glitch-text ${className}`} style={style}>
      {children}
    </Tag>
  )
}
