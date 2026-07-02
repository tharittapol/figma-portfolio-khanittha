import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Section from '../../components/ui/Section'
import ProjectCard from '../../components/ui/ProjectCard'
import { projects } from '../../data/projects'

export default function WorkIndex() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Section className="pt-12">
          <p className="text-body-sm font-semibold uppercase tracking-[0.08em] text-text-secondary">
            Selected Work
          </p>
          <h1 className="mt-3 text-title-page font-bold tracking-tighter-2 text-text-primary">
            All Projects
          </h1>
          <p className="mt-3 max-w-[640px] text-body text-text-secondary">
            A collection of UX/UI work spanning AI platforms, e-learning, IoT, and consumer mobile
            apps.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
