import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const fieldBase =
  'w-full rounded-sds border border-border bg-white text-body text-text-primary ' +
  'placeholder:text-text-tertiary px-3 py-2.5 transition-colors ' +
  'focus:outline-none focus:border-border-neutral focus:ring-2 focus:ring-dark/10'

interface FieldWrapProps {
  label?: string
  htmlFor?: string
  className?: string
  children: React.ReactNode
}

export function Field({ label, htmlFor, className, children }: FieldWrapProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={htmlFor} className="text-body-sm font-semibold text-text-primary">
          {label}
        </label>
      )}
      {children}
    </div>
  )
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...props} />
}

export function Textarea({
  className,
  rows = 5,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={rows} className={cn(fieldBase, 'resize-y', className)} {...props} />
}
