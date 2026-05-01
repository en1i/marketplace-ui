import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  active?: boolean
}

export function Chip({ children, active = false }: Props) {
  const base =
    'inline-flex items-center gap-1.5 rounded-pill px-3 h-7 text-body-sm cursor-default select-none'
  const styles = active
    ? 'bg-dark text-inverse border border-transparent'
    : 'bg-surface text-ink border border-[var(--color-border-warm)]'

  return (
    <span data-test-id="ui_chip" className={`${base} ${styles}`}>
      {children}
    </span>
  )
}
