// Generic, data-driven case-study body renderer.
//
// Every project's body is described as an ordered list of blocks in
// src/data/caseStudyContent.ts. Headings / paragraphs / lists / the Font+Colors
// panel render as REAL TEXT; every diagram / mockup / screen is its own full-width
// per-breakpoint image (desktop/tablet/mobile variants, the viewport loads only
// its own). The accent word in a heading uses the project's brand accent colour.

import {
  BlockImage,
  BodyText,
  BulletList,
  FontAndColors,
  PrototypeLink,
  SectionHeading,
  SubLabel,
  type ColorSwatch,
  type ResponsiveSrc,
} from './blocks'

export interface Heading {
  /** leading (un-coloured) part of the heading */
  pre: string
  /** trailing word rendered in the project accent colour */
  accent?: string
}

export interface TextBlock {
  heading: Heading
  body?: string
  bullets?: string[]
}

export type CaseBlock =
  /** Overview (+ optional Problems/Goals) on the left, device mockup on the right at desktop. */
  | { kind: 'mockupGroup'; mockup: string; items: TextBlock[] }
  | { kind: 'text'; heading: Heading; body?: string; bullets?: string[] }
  /** "Design system & component": heading (+ optional desc) + Font/Colors panel (+ optional component image). */
  | {
      kind: 'designSystem'
      heading: Heading
      description?: string
      fontName: string
      colors: ColorSwatch[]
      component?: string[]
    }
  /** One or more stacked full-width images, with an optional 24px heading or 16px label. */
  | { kind: 'image'; heading?: Heading; label?: string; names: string[] }
  | { kind: 'prototype'; href: string }

const FONT_SAMPLES = [
  'abcedfghijklmnopqrstuvwxyz',
  'abcedfghijklmnopqrstuvwxyz',
  '1234567890',
  '!@#$%^&*()_-+.',
]

export default function CaseStudyBody({
  slug,
  accent,
  blocks,
}: {
  slug: string
  accent: string
  blocks: CaseBlock[]
}) {
  const dir = `/assets/casestudy/${slug}`
  const src = (name: string): ResponsiveSrc => ({
    base: `${dir}/${name}-mobile.png`,
    tablet: `${dir}/${name}-tablet.png`,
    desktop: `${dir}/${name}-desktop.png`,
  })

  const renderHeading = (h: Heading) => (
    <SectionHeading accent={h.accent} accentColor={accent}>
      {h.accent ? `${h.pre} ` : h.pre}
    </SectionHeading>
  )

  const renderText = (b: TextBlock, key?: number) => (
    <div key={key} className="flex flex-col gap-4">
      {renderHeading(b.heading)}
      {b.body && <BodyText>{b.body}</BodyText>}
      {b.bullets && <BulletList items={b.bullets} />}
    </div>
  )

  return (
    <div className="flex flex-col gap-12">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'mockupGroup':
            return (
              <div
                key={i}
                className="desktop:grid desktop:grid-cols-2 desktop:items-center desktop:gap-12"
              >
                <div className="flex flex-col gap-10 tablet:gap-12">
                  {block.items.map((it, j) => renderText(it, j))}
                </div>
                <img
                  src={`${dir}/${block.mockup}-desktop.png`}
                  alt=""
                  loading="lazy"
                  className="mt-10 hidden h-auto w-full desktop:mt-0 desktop:block"
                />
              </div>
            )

          case 'text':
            return renderText(block, i)

          case 'designSystem':
            return (
              <section key={i} className="flex flex-col gap-6">
                {renderHeading(block.heading)}
                {block.description && <BodyText>{block.description}</BodyText>}
                <FontAndColors
                  fontName={block.fontName}
                  samples={FONT_SAMPLES}
                  colors={block.colors}
                  accentColor={accent}
                />
                {block.component && (
                  <div className="mt-2 flex flex-col gap-4">
                    <SubLabel>Component</SubLabel>
                    {block.component.map((name) => (
                      <BlockImage key={name} src={src(name)} alt="Design-system components" />
                    ))}
                  </div>
                )}
              </section>
            )

          case 'image':
            return (
              <section key={i} className="flex flex-col gap-4">
                {block.heading && renderHeading(block.heading)}
                {block.label && <SubLabel>{block.label}</SubLabel>}
                {block.names.map((name) => (
                  <BlockImage key={name} src={src(name)} alt="" />
                ))}
              </section>
            )

          case 'prototype':
            return <PrototypeLink key={i} href={block.href} />

          default:
            return null
        }
      })}
    </div>
  )
}
