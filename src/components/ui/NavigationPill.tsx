import { cn } from '../../lib/cn'

interface NavigationPillProps {
  label: string
  onClick?: () => void
  active?: boolean
  dark?: boolean
  className?: string
}

/** Header nav item — plain text with a subtle hover/active pill background. */
export default function NavigationPill({
  label,
  onClick,
  active,
  dark,
  className,
}: NavigationPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full px-3 py-1.5 text-body transition-colors cursor-pointer',
        dark
          ? cn('text-text-on-brand/80 hover:bg-white/10', active && 'bg-white/10 text-text-on-brand')
          : cn('text-text-primary hover:bg-black/[0.06]', active && 'bg-black/[0.06]'),
        className,
      )}
    >
      {label}
    </button>
  )
}
