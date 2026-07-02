import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  dark?: boolean
  /** apply the sds Drop Shadow/400 */
  shadow?: boolean
}

/** Base surface card (white or dark), radius 24px. */
export default function Card({ children, className, dark, shadow }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[24px] overflow-hidden',
        dark ? 'bg-dark text-text-on-brand' : 'bg-white text-text-primary border border-border',
        shadow && 'shadow-card',
        className,
      )}
    >
      {children}
    </div>
  )
}
