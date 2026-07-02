// Reusable building blocks for data-driven case-study bodies.
//
// These render REAL TEXT (headings, paragraphs, lists) and the design-system
// Font/Colors panel as selectable HTML. Diagrams and hand-drawn visuals (design
// process, IA tree, device mockups, review grids, user-flow charts, wireframes,
// component sheets, screen galleries) stay as per-breakpoint exported images via
// <BlockImage> — each one full-width, the viewport loads only its variant.

import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

const ACCENT = '#c41230'

/* ----------------------------------------------------------------- text ---- */

/** 24px Figma "Heading" — optional coloured trailing word. */
export function SectionHeading({
  children,
  accent,
  accentColor = ACCENT,
}: {
  children: ReactNode
  accent?: string
  accentColor?: string
}) {
  return (
    <h2 className="text-[20px] font-semibold leading-[1.2] tracking-tighter-2 text-text-primary tablet:text-[24px]">
      {children}
      {accent ? <span style={{ color: accentColor }}>{accent}</span> : null}
    </h2>
  )
}

/** 16px Figma "Body Strong" sub-label (Font Used / Colors / Component). */
export function SubLabel({ children }: { children: ReactNode }) {
  return <p className="text-body-sm font-semibold text-text-primary tablet:text-body">{children}</p>
}

export function BodyText({ children }: { children: ReactNode }) {
  return (
    <p className="text-[15px] leading-[1.4] text-[#75767a] tablet:text-body">{children}</p>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-6 text-[15px] leading-[1.4] text-[#75767a] tablet:text-body">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  )
}

/** Vertical section wrapper: heading + content with the Figma 16px gap. */
export function Block({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn('flex flex-col gap-4', className)}>{children}</section>
}

/* --------------------------------------------------------------- images ---- */

export interface ResponsiveSrc {
  /** mobile (base) */
  base: string
  tablet: string
  desktop: string
}

/** Per-breakpoint exported image — each viewport downloads only its variant. */
export function BlockImage({
  src,
  alt,
  className,
}: {
  src: ResponsiveSrc
  alt: string
  className?: string
}) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={src.desktop} />
      <source media="(min-width: 768px)" srcSet={src.tablet} />
      <img src={src.base} alt={alt} loading="lazy" className={cn('h-auto w-full', className)} />
    </picture>
  )
}

/* --------------------------------------------------- font & colour panel --- */

export interface ColorSwatch {
  hex: string
  /** lighten border for near-white swatches */
  bordered?: boolean
}

export function FontAndColors({
  fontName,
  samples,
  colors,
  accentColor = ACCENT,
}: {
  fontName: string
  samples: string[]
  colors: ColorSwatch[]
  accentColor?: string
}) {
  return (
    <div className="flex flex-col gap-10 tablet:flex-row tablet:gap-16">
      <div className="space-y-2">
        <SubLabel>Font Used</SubLabel>
        <p className="text-[28px] font-bold leading-none tablet:text-[36px]" style={{ color: accentColor }}>
          {fontName}
        </p>
        <div className="space-y-1 text-body text-text-primary">
          {samples.map((s, i) => (
            <p key={s} className={i === 0 ? 'uppercase' : undefined}>
              {s}
            </p>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <SubLabel>Colors</SubLabel>
        <div className="flex gap-6">
          {colors.map((c) => (
            <span
              key={c.hex}
              className={cn('block size-16 rounded-full', c.bordered && 'border border-border')}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------- prototype --- */

export function PrototypeLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="block text-center font-poppins text-[26px] font-semibold uppercase tracking-tight text-text-primary underline decoration-from-font underline-offset-4 transition-colors hover:text-[#c41230] tablet:text-[36px]"
    >
      Prototype
    </a>
  )
}
