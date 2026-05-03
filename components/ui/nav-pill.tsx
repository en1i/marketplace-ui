import type { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  label: string
  count?: number
  variant?: 'outline' | 'filled'
}

export function NavPill({ icon, label, count, variant = 'outline' }: Props) {
  const base =
    'inline-flex items-center gap-2 rounded-pill px-3 py-1.5 text-label cursor-default select-none'
  const styles =
    variant === 'filled'
      ? 'bg-dark text-inverse'
      : 'bg-surface text-ink border border-[var(--color-border-warm)]'

  return (
    <div data-test-id="ui_nav-pill" className={`${base} ${styles}`}>
      <span className="inline-flex items-center text-[18px]">{icon}</span>
      {count != null && count > 0 && (
        <span className="text-[11px] font-semibold lg:hidden">({count})</span>
      )}
      <span className="hidden lg:inline whitespace-nowrap">
        {label}
        {count != null ? ` (${count})` : ''}
      </span>
    </div>
  )
}
