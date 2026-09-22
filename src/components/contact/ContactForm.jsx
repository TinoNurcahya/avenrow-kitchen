import { useEffect, useRef, useState } from 'react'

const emptyValues = { fullName: '', email: '', phone: '', subject: '', message: '' }
const fields = [
  { name: 'fullName', label: 'Full Name', type: 'text', autoComplete: 'name', error: 'Please enter your full name.' },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', error: 'Please enter a valid email address.' },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel', optional: true },
  { name: 'subject', label: 'Subject', type: 'text', error: 'Please enter a subject.' },
  { name: 'message', label: 'Message', error: 'Please enter a message.' },
]

function fieldError(field, value, control) {
  if (field.optional) return ''
  return !value.trim() || (field.type === 'email' && control.validity.typeMismatch) ? field.error : ''
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const timer = useRef(null)
  const busy = useRef(false)
  const form = useRef(null)
  const submitting = status === 'submitting'

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function handleChange(event, field) {
    if (busy.current) return
    const control = event.currentTarget
    const value = control.value
    setValues(previous => ({ ...previous, [field.name]: value }))
    if (errors[field.name]) {
      const error = fieldError(field, value, control)
      setErrors(previous => {
        const next = { ...previous }
        if (error) next[field.name] = error
        else delete next[field.name]
        return next
      })
    }
    if (status === 'success') setStatus('idle')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (busy.current) return
    // Validation is immediate; there is no artificial validation delay.
    const nextErrors = {}
    for (const field of fields) {
      const error = fieldError(field, values[field.name], form.current.elements.namedItem(field.name))
      if (error) nextErrors[field.name] = error
    }
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      setStatus('idle')
      // Commit associated error text before focusing; safely ignore an unmounted form.
      window.requestAnimationFrame(() => form.current?.elements.namedItem(firstInvalid)?.focus())
      return
    }
    busy.current = true
    setStatus('submitting')
    timer.current = window.setTimeout(() => {
      setValues({ ...emptyValues })
      busy.current = false
      timer.current = null
      setStatus('success')
    }, 700)
  }

  return (
    <section aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading">Send a message</h2>
      <p id="contact-required" className="contact-required">Fields marked required must be completed.</p>
      <form ref={form} noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-heading" aria-describedby="contact-notice contact-required">
        {Object.keys(errors).length > 0 && <p className="contact-error-summary">Please review the highlighted fields.</p>}
        {fields.map(field => {
          const id = `contact-${field.name}`
          const Control = field.name === 'message' ? 'textarea' : 'input'
          return (
            <div className="contact-field" key={field.name}>
              <label htmlFor={id}>{field.label} ({field.optional ? 'optional' : 'required'})</label>
              <Control id={id} name={field.name} type={field.type}
                rows={field.name === 'message' ? 5 : undefined}
                autoComplete={field.autoComplete} required={!field.optional} readOnly={submitting}
                value={values[field.name]} onChange={event => handleChange(event, field)}
                aria-invalid={errors[field.name] ? true : undefined}
                aria-describedby={errors[field.name] ? `${id}-error` : undefined}
              />
              {errors[field.name] && <p className="contact-field-error" id={`${id}-error`}>{errors[field.name]}</p>}
            </div>
          )
        })}
        <button type="submit" className="button-link contact-submit" aria-disabled={submitting || undefined}>
          {submitting ? 'Simulating submission…' : 'Send Message'}
        </button>
        <p className="contact-status" role="status" aria-live="polite" aria-atomic="true">
          {submitting ? 'Simulating submission…' : status === 'success' ? 'Demo complete. Your message was not sent or stored.' : ''}
        </p>
      </form>
    </section>
  )
}
