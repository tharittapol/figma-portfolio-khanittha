import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** inner container className (max-width wrapper) */
  innerClassName?: string
  dark?: boolean
  /** remove the centered max-width container (full-bleed inner) */
  bleed?: boolean
}

/**
 * Page section wrapper. Provides the responsive horizontal gutters that yield the
 * Figma 160px desktop margin (max-w 1120 centered) and the vertical rhythm.
 */
export default function Section({
  id,
  children,
  className,
  innerClassName,
  dark,
  bleed,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full px-6 tablet:px-16 py-14 tablet:py-20 desktop:py-24',
        dark ? 'bg-dark text-text-on-brand' : 'bg-bg text-text-primary',
        className,
      )}
    >
      {bleed ? (
        children
      ) : (
        <div className={cn('mx-auto w-full max-w-content', innerClassName)}>{children}</div>
      )}
    </section>
  )
}
