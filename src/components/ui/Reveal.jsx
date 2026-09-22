import { m, useReducedMotion } from 'framer-motion'

// Content is readable from the first frame; movement never gates visibility.
export default function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return (
    <m.div className={`reveal ${className}`}
      initial={reduceMotion ? false : { y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : delay, ease: 'easeOut' }}>
      {children}
    </m.div>
  )
}
