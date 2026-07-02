import { useParams, Link } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ContactCTA from '../../components/sections/ContactCTA'
import BackLink from '../../components/ui/BackLink'
import CaseStudyBody from '../../components/casestudy/CaseStudyBody'
import { ArrowLeft, ArrowRight } from '../../components/ui/icons'
import { getCaseStudy } from '../../data/caseStudies'
import { caseStudyContent } from '../../data/caseStudyContent'
import { projects } from '../../data/projects'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) {
    return (
      <div className="flex min-h-screen flex-col bg-bg">
        <Header />
        <main className="grid flex-1 place-items-center px-6 py-24 text-center">
          <div>
            <p className="text-title-page font-bold tracking-tighter-2 text-text-primary">
              Case study coming soon
            </p>
            <p className="mt-3 text-body text-text-secondary">
              This project's full write-up isn't published yet.
            </p>
            <Link
              to="/#work"
              className="mt-6 inline-flex items-center gap-2 text-body font-medium text-text-primary hover:underline"
            >
              <ArrowLeft className="size-4" /> Back to all work
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // prev / next within the projects order
  const idx = projects.findIndex((p) => p.slug === study.slug)
  const prev = idx > 0 ? projects[idx - 1] : undefined
  const next = idx < projects.length - 1 ? projects[idx + 1] : undefined

  const blocks = caseStudyContent[study.slug]

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-content px-6 py-10 tablet:px-16 tablet:py-12">
          <BackLink to="/#work" label="Back to Projects" className="mb-8" />

          {/* Eyebrow + number */}
          {/* eyebrow + big number, vertically centred in a row sized like the Figma frame */}
          <div className="flex h-10 items-center gap-4 tablet:h-[68px]">
            <span className="text-body-sm font-semibold uppercase tracking-[0.08em] text-text-secondary">
              {study.category}
            </span>
            <span className="h-px flex-1 bg-border" />
            {/* decorative number — Poppins SemiBold, ~34px mobile / ~54px desktop */}
            <span
              className="font-poppins text-[34px] font-semibold leading-none tablet:text-[54px]"
              style={{ color: study.accent }}
            >
              {study.number}
            </span>
          </div>

          {/* title sizes match Figma case-study frames: 24 / 32 / 48 px */}
          <h1 className="mt-5 text-[24px] font-bold leading-[1.2] tracking-tighter-2 text-text-primary tablet:text-[32px] desktop:text-[48px]">
            {study.title}
          </h1>

          {/* Hero device mockup — tablet & mobile only (on desktop it lives inside the body) */}
          <picture className="block desktop:hidden">
            <source media="(min-width: 768px)" srcSet={study.hero.tablet} />
            <img src={study.hero.mobile} alt="" className="mt-8 h-auto w-full" />
          </picture>

          {/* Body — structured content: real text + full-width per-breakpoint images */}
          {blocks && (
            <div className="mt-8 desktop:mt-10">
              <CaseStudyBody slug={study.slug} accent={study.accent} blocks={blocks} />
            </div>
          )}

          {/* Prev / next */}
          <nav className="mt-16 flex items-center justify-between border-t border-border pt-8">
            {prev ? (
              <Link
                to={prev.route}
                className="group inline-flex items-center gap-3 text-left transition-colors hover:text-text-primary"
              >
                <ArrowLeft className="size-5 text-text-secondary group-hover:text-text-primary" />
                <span>
                  <span className="block text-body-sm text-text-tertiary">Previous</span>
                  <span className="block text-body font-medium text-text-primary">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={next.route}
                className="group inline-flex items-center gap-3 text-right transition-colors hover:text-text-primary"
              >
                <span>
                  <span className="block text-body-sm text-text-tertiary">Next</span>
                  <span className="block text-body font-medium text-text-primary">{next.title}</span>
                </span>
                <ArrowRight className="size-5 text-text-secondary group-hover:text-text-primary" />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
