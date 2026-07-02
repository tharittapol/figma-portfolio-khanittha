import { Link } from 'react-router-dom'
import { ArrowLeft } from './icons'
import { cn } from '../../lib/cn'

interface BackLinkProps {
  to: string
  label: string
  className?: string
}

/**
 * "← Back …" link shown at the top of a sub-page's content (below the header).
 * Contact → Home, case study → Projects (Figma "Pagination Previous").
 */
export default function BackLink({ to, label, className }: BackLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center gap-2 text-body font-medium text-text-secondary transition-colors hover:text-text-primary',
        className,
      )}
    >
      <ArrowLeft className="size-5" />
      {label}
    </Link>
  )
}
