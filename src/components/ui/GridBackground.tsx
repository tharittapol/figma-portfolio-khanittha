import { cn } from '../../lib/cn'

interface GridBackgroundProps {
  dark?: boolean
  className?: string
  /** optional radial fade mask so the grid dissolves toward the edges */
  fade?: boolean
}

/** Absolutely-positioned 50px grid overlay (replaces Figma's SVG grid). */
export default function GridBackground({ dark, className, fade }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0',
        dark ? 'grid-bg-dark' : 'grid-bg',
        fade && '[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]',
        className,
      )}
    />
  )
}
