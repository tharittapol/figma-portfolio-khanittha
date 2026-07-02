import type { ComponentType, SVGProps } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'neutral' | 'subtle' | 'inverse' | 'on-dark'
export type ButtonSize = 'small' | 'medium' | 'large'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

interface BaseProps {
  label: string
  variant?: ButtonVariant
  size?: ButtonSize
  iconStart?: IconType
  iconEnd?: IconType
  className?: string
  fullWidth?: boolean
}

interface ButtonAsButton extends BaseProps {
  to?: undefined
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}
interface ButtonAsLink extends BaseProps {
  to: string
  href?: undefined
}
interface ButtonAsAnchor extends BaseProps {
  href: string
  to?: undefined
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-dark text-text-on-brand border border-dark hover:bg-dark/90',
  neutral: 'bg-surface text-text-primary border border-border-neutral hover:bg-neutral-tertiary',
  subtle: 'bg-transparent text-text-primary border border-transparent hover:bg-black/5',
  // for use on dark sections
  inverse: 'bg-white text-text-primary border border-white hover:bg-white/90',
  'on-dark': 'bg-white/10 text-text-on-brand border border-white/20 hover:bg-white/20',
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'h-8 px-2.5 text-body-sm gap-1.5 [&_svg]:size-4',
  medium: 'h-10 px-3 text-body gap-2 [&_svg]:size-5',
  large: 'h-12 px-4 text-body gap-2 [&_svg]:size-5',
}

export default function Button(props: ButtonProps) {
  const {
    label,
    variant = 'primary',
    size = 'medium',
    iconStart: IconStart,
    iconEnd: IconEnd,
    className,
    fullWidth,
  } = props

  const classes = cn(
    'inline-flex items-center justify-center rounded-sds font-medium whitespace-nowrap',
    'transition-colors cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark/40 focus-visible:ring-offset-1',
    sizeStyles[size],
    variantStyles[variant],
    fullWidth && 'w-full',
    className,
  )

  const inner = (
    <>
      {IconStart && <IconStart aria-hidden />}
      <span>{label}</span>
      {IconEnd && <IconEnd aria-hidden />}
    </>
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {inner}
      </Link>
    )
  }
  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel ?? (props.target === '_blank' ? 'noreferrer noopener' : undefined)}
        className={classes}
      >
        {inner}
      </a>
    )
  }
  const { type = 'button', onClick, disabled } = props as ButtonAsButton
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && 'opacity-50 pointer-events-none')}
    >
      {inner}
    </button>
  )
}
