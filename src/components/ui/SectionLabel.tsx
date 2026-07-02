import { cn } from '../../lib/cn'

interface SectionLabelProps {
  children: string
  dark?: boolean
  className?: string
}

/**
 * Small uppercase section eyebrow with a divider rule on the right
 * e.g. ABOUT ─────────────
 */
export default function SectionLabel({ children, dark, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-5', className)}>
      <span
        className={cn(
          'text-body-sm font-semibold uppercase tracking-[0.08em] whitespace-nowrap',
          dark ? 'text-text-tertiary' : 'text-text-secondary',
        )}
      >
        {children}
      </span>

      <span className={cn('h-px flex-1', dark ? 'bg-border-dark' : 'bg-border')} />
    </div>
  )
}