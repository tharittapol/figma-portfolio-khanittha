import { cn } from '../../lib/cn'

interface StatusBadgeProps {
  children: string
  /** color of the leading status dot */
  dotClassName?: string
  dark?: boolean
  className?: string
}

/** Pill with a leading status dot — e.g. "Available for work", "Open to opportunities". */
export default function StatusBadge({
  children,
  dotClassName = 'bg-positive',
  dark,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-body-sm font-medium',
        dark
          ? 'bg-white/[0.08] text-text-on-brand border border-white/10'
          : 'bg-surface text-text-primary border border-border',
        className,
      )}
    >
      <span className={cn('size-2 rounded-full', dotClassName)} />
      {children}
    </span>
  )
}
