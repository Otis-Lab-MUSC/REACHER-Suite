import { NavLink } from 'react-router-dom'
import GlitchText from '../shared/GlitchText'

const links = [
  { to: '/', label: 'Home' },
  { to: '/labrynth', label: 'Labrynth' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header
      className="relative z-20 border-b"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(0,0,0,0.85)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <NavLink
          to="/"
          className="label-caps tracking-widest text-[0.65rem] hover:text-accent transition-colors duration-150"
          style={{ color: 'var(--color-text-dim)' }}
        >
          <GlitchText>
            <span style={{ color: 'var(--color-accent-labrynth)' }}>REACHER</span>
            {' '}Suite
          </GlitchText>
        </NavLink>

        {/* Nav links */}
        <nav className="flex items-center gap-4 overflow-x-auto">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `label-caps text-[0.65rem] transition-colors duration-150 ${
                  isActive
                    ? 'text-accent'
                    : 'hover:text-text'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-accent-labrynth)' : 'var(--color-text-dim)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
