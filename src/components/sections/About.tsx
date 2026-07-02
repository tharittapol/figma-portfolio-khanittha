import Section from '../ui/Section'
import SectionLabel from '../ui/SectionLabel'
import StatusBadge from '../ui/Badge'
import Tag from '../ui/Tag'
import Avatar from '../ui/Avatar'
import GridBackground from '../ui/GridBackground'


const CARD_TAGS = [
  'UI Design',
  'UX Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Figma',
  'AI Tools',
]

export default function About() {
  return (
    <Section id="about" className="pb-4 tablet:pb-6 desktop:pb-8">
      <SectionLabel>ABOUT</SectionLabel>

      <div className="mt-12 grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:gap-10 desktop:gap-16">
        {/* Left: bio + stats */}
        <div>
          <h2 className="text-title-page font-bold tracking-tighter-2 text-text-primary">Hello,</h2>
          <div className="mt-6 flex max-w-[560px] flex-col gap-5 text-body text-text-secondary">
            <p>
              I'm a UX/UI Designer with 1+ years of professional experience, specialising in
              translating complex problems into clean, intuitive interfaces. From AI-powered
              platforms and e-learning systems to industrial dashboards and consumer mobile apps —
              I design systems that scale and details that delight.
            </p>
            <p>
              Currently working full-time as a UX/UI Designer since October 2024, I bring a
              meticulous eye for visual consistency and a deep commitment to craft at every stage
              of the design process.
            </p>
          </div>
        </div>

        {/* Right: dark profile card */}
        <div className="relative flex flex-col overflow-hidden rounded-[24px] bg-dark p-7 text-text-on-brand tablet:p-6 desktop:self-start">
          <GridBackground dark fade className="opacity-30" />
          <div className="relative z-10 flex items-start justify-between">
            <Avatar
              src="/assets/home/avatar.png"
              alt="Khanittha Hemsamak"
              ring
              className="size-20"
            />
            <StatusBadge dark>Available for work</StatusBadge>
          </div>

          <div className="relative z-10 mt-4">
            <h3 className="font-poppins text-[28px] font-bold leading-tight">Khanittha Hemsamak</h3>
            <p className="mt-1 text-body text-text-tertiary">UX/UI Designer · Oct 2024 – Present</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {CARD_TAGS.map((t) => (
                <Tag key={t} variant="on-dark">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
