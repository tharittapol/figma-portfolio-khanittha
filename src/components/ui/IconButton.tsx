import type { ComponentType, SVGProps } from 'react'
import { cn } from '../../lib/cn'

interface IconButtonProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  className?: string
  /** visual only (e.g. inside a card that is itself a link) */
  decorative?: boolean
  onClick?: () => void
}

/** Circular icon button (sds "Icon Button"). */
export default function IconButton({
  icon: Icon,
  label,
  className,
  decorative,
  onClick,
}: IconButtonProps) {
  const classes = cn(
    'flex size-12 shrink-0 items-center justify-center rounded-full border border-border-neutral',
    'text-text-primary transition-colors',
    'group-hover:bg-dark group-hover:text-text-on-brand hover:bg-dark hover:text-text-on-brand',
    className,
  )
  if (decorative) {
    return (
      <span aria-hidden className={classes}>
        <Icon className="size-5" />
      </span>
    )
  }
  return (
    <button type="button" aria-label={label} onClick={onClick} className={cn(classes, 'cursor-pointer')}>
      <Icon className="size-5" />
    </button>
  )
}
