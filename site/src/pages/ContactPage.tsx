import { useState } from 'react'
import { Github } from 'lucide-react'

const ACCENT = 'var(--color-accent-labrynth)'

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Bug Report',
  'Feature Request',
  'Collaboration',
  'Other',
]

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = '! Name is required'
  if (!form.email.trim()) errors.email = '! Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = '! Enter a valid email address'
  if (!form.subject) errors.subject = '! Please select a subject'
  if (!form.message.trim()) errors.message = '! Message is required'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // TODO: wire to email backend (e.g. Formspree, EmailJS, or custom API endpoint)
    setSubmitted(true)
  }

  const labelStyle = { color: 'var(--color-text-dim)' }
  const inputClass =
    'w-full panel-border px-3 py-2 text-sm bg-transparent outline-none transition-colors duration-150 focus:border-[var(--color-accent-labrynth)]'
  const inputStyle = { color: 'var(--color-text)', backgroundColor: 'var(--color-panel)' }

  return (
    <div className="relative z-10 flex flex-col items-center px-4">
      <section className="w-full max-w-6xl pt-16 sm:pt-24 pb-12">
        <p className="label-caps mb-3" style={{ color: ACCENT }}>
          Get in touch
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-[0.04em] leading-tight mb-4 glow-accent"
          style={{ color: ACCENT }}
        >
          Contact
        </h1>
        <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-text)' }}>
          Questions about REACHER Suite, collaboration proposals, or bug reports — reach out below.
        </p>
      </section>

      <section className="w-full max-w-2xl pb-24">
        {submitted ? (
          <div
            className="panel-border p-8 flex flex-col gap-3"
            style={{ backgroundColor: 'var(--color-panel)' }}
            role="alert"
            aria-live="polite"
          >
            <span
              className="status-pulse inline-block w-2 h-2 rounded-full mb-2"
              style={{ backgroundColor: ACCENT }}
            />
            <p className="label-caps text-[0.65rem]" style={{ color: ACCENT }}>
              Message received
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
              Thanks for reaching out. We'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="panel-border p-7 flex flex-col gap-5"
            style={{ backgroundColor: 'var(--color-panel)' }}
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="label-caps text-[0.6rem]" style={labelStyle}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-xs" style={{ color: '#FF4444' }} role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="label-caps text-[0.6rem]" style={labelStyle}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs" style={{ color: '#FF4444' }} role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="label-caps text-[0.6rem]" style={labelStyle}>
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {SUBJECT_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p id="subject-error" className="text-xs" style={{ color: '#FF4444' }} role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="label-caps text-[0.6rem]" style={labelStyle}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={inputClass}
                style={{ ...inputStyle, resize: 'vertical' }}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-xs" style={{ color: '#FF4444' }} role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {Object.keys(errors).length > 0 && (
              <div role="alert" aria-live="polite">
                <p className="text-xs" style={{ color: '#FF4444' }}>
                  ! Please fix the errors above before submitting.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="mt-2 px-5 py-2 panel-border label-caps text-[0.65rem] transition-colors duration-150 self-start"
              style={{ color: ACCENT, borderColor: 'var(--color-border)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            >
              Send Message
            </button>
          </form>
        )}

        {/* Sidebar / links */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="https://github.com/Otis-Lab-MUSC/REACHER-Suite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 label-caps text-[0.65rem] transition-colors duration-150"
            style={{ color: 'var(--color-text-dim)' }}
            onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-dim)')}
          >
            <Github size={12} /> GitHub — Otis-Lab-MUSC/REACHER-Suite
          </a>
          <p className="label-caps text-[0.6rem]" style={{ color: 'var(--color-text-dim)' }}>
            {/* TODO: add institutional address */}
            Otis Lab — Neuroscience Department
          </p>
        </div>
      </section>
    </div>
  )
}
