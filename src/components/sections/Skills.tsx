import Section from '../ui/Section'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import { cn } from '../../lib/cn'
import GridBackground from '../ui/GridBackground'

const DESIGN_SKILLS = [
  'UI Design',
  'UX Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Responsive Design',
  'Visual Design',
  'Information Architecture',
  'User Flows',
]

const AI_TOOLS = ['Claude', 'Gemini', 'Stich', 'v0 by Vercel', 'Loveable']

const TOOLS = [
  { id: 'figma', name: 'Figma', desc: 'Design & Prototyping', primary: true },
  { id: 'illustrator', name: 'Adobe Illustrator', desc: 'Vector & Illustration' },
  { id: 'photoshop', name: 'Adobe Photoshop', desc: 'Image Editing' },
  { id: 'canva', name: 'Canva', desc: 'Quick Design & Collaboration' },
]

function GroupLabel({ children }: { children: string }) {
  return (
    <h3 className="text-body-sm font-semibold uppercase tracking-[0.08em] text-text-tertiary">
      {children}
    </h3>
  )
}

export default function Skills() {
  return (
    <Section id="skills" dark className="relative overflow-hidden">
      <GridBackground dark fade className="opacity-30" />
      <div className="relative">
        <SectionLabel dark>SKILLS &amp; TOOLS</SectionLabel>

        <h2 className="mt-12 text-title-page font-bold tracking-tighter-2 text-text-on-brand">
          Craft rooted in a strong toolkit
        </h2>
        <p className="mt-4 max-w-none text-body text-text-tertiary">
          Combining design thinking with hands-on execution across industry-standard tools.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 desktop:grid-cols-2 desktop:gap-16">
          {/* Left: skills */}
          <div className="flex flex-col gap-10">
            <div>
              <GroupLabel>DESIGN SKILLS</GroupLabel>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {DESIGN_SKILLS.map((s) => (
                  <Tag key={s} variant="on-dark">
                    {s}
                  </Tag>
                ))}
              </div>
            </div>
            <div>
              <GroupLabel>AI TOOLS</GroupLabel>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {AI_TOOLS.map((s) => (
                  <Tag key={s} variant="on-dark">
                    {s}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Right: tools */}
          <div>
            <GroupLabel>TOOLS</GroupLabel>
            <div className="mt-4 grid grid-cols-1 gap-3 tablet:grid-cols-2 desktop:grid-cols-1">
              {TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className={cn(
                    'flex items-center gap-4 rounded-sds-lg border border-white/10 p-4',
                    tool.primary ? 'bg-white/[0.07]' : 'bg-white/[0.03]',
                  )}
                >
                  <img
                    src={`/assets/tools/${tool.id}.png`}
                    alt={tool.name}
                    className="size-14 shrink-0 rounded-xl"
                  />
                  <div className="flex flex-1 items-center justify-between gap-3">
                    <div>
                      <h4 className="text-body font-semibold text-text-on-brand">{tool.name}</h4>
                      <p className="text-body-sm text-text-tertiary">{tool.desc}</p>
                    </div>
                    {tool.primary && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-body-sm font-medium text-text-on-brand">
                        Primary
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
