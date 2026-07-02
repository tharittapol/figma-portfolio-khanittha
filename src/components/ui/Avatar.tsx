import { cn } from '../../lib/cn'

interface AvatarProps {
  src: string
  alt: string
  className?: string
  ring?: boolean
}

/** Circular profile image. */
export default function Avatar({ src, alt, className, ring }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(
        'rounded-full object-cover bg-surface',
        ring && 'ring-2 ring-white/20',
        className,
      )}
    />
  )
}
