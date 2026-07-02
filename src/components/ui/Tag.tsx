import { cn } from '../../lib/cn'

export type TagVariant = 'light' | 'outline' | 'dark' | 'on-dark'

interface TagProps {
  children: string
  variant?: TagVariant
  className?: string
}

const styles: Record<TagVariant, string> = {
  // light chip on light bg (project card tags)
  light: 'bg-surface text-text-secondary border border-border',
  // outline chip
  outline: 'bg-transparent text-text-secondary border border-border',
  // dark chip on light bg
  dark: 'bg-dark text-text-on-brand border border-dark',
  // chip on a dark section (skills tags)
  'on-dark': 'bg-white/[0.08] text-text-on-brand border border-white/10',
}

/** Pill chip used for skills, tools, and project tags. */
export default function Tag({ children, variant = 'light', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1.5 text-body-sm font-medium whitespace-nowrap',
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
