import Section from '../ui/Section'
import SectionLabel from '../ui/SectionLabel'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const featured = projects.filter((p) => p.size === 'wide')
  const rest = projects.filter((p) => p.size === 'compact')

  return (
    <Section id="work">
      <SectionLabel>SELECTED WORK</SectionLabel>

      <div className="mt-10 flex flex-col gap-4 tablet:flex-row tablet:items-end tablet:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-title-page font-bold tracking-tighter-2 text-text-primary">
            Projects
          </h2>
          <p className="mt-3 text-body text-text-secondary">
            A collection of UX/UI work spanning AI platforms, e-learning, IoT, and consumer mobile apps.
          </p>
        </div>
        <span className="shrink-0 text-body-sm font-medium uppercase tracking-[0.08em] text-text-tertiary">
          {String(projects.length).padStart(2, '0')} projects
        </span>
      </div>

      {/* Featured (2-col) */}
      <div className="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} featured />
        ))}
      </div>

      {/* Rest (3-col) */}
      <div className="mt-6 grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  )
}
