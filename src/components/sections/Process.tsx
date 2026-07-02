import Section from '../ui/Section'
import SectionLabel from '../ui/SectionLabel'

const STEPS = [
  {
    number: '01',
    title: 'Research',
    desc: 'Understanding user needs, business goals, and market context through comprehensive research.',
  },
  {
    number: '02',
    title: 'Wireframing',
    desc: 'Creating low-fidelity blueprints that map out the structure and flow of the interface.',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Crafting pixel-perfect, visually consistent interfaces that delight users.',
  },
  {
    number: '04',
    title: 'Prototype & Test',
    desc: 'Building interactive prototypes and validating designs through user testing.',
  },
]

export default function Process() {
  return (
    <Section id="process" className="pb-4 tablet:pb-6 desktop:pb-8">
      <SectionLabel>MY PROCESS</SectionLabel>

      <h2 className="mt-12 max-w-none text-title-page font-bold leading-[1.1] tracking-tighter-2 text-text-primary">
        My approach to creating exceptional digital experiences
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 tablet:grid-cols-2 desktop:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.number}>
            <span className="text-[40px] font-bold leading-none tracking-tighter-2 text-text-tertiary">
              {step.number}
            </span>
            <h3 className="mt-4 text-subheading font-semibold text-text-primary">{step.title}</h3>
            <p className="mt-2 text-body-sm text-text-secondary">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
