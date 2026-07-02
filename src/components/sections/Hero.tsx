import Button from '../ui/Button'
import GridBackground from '../ui/GridBackground'
import { Download, ArrowDown } from '../ui/icons'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-80px)] w-full items-center justify-center overflow-hidden bg-bg">
      <GridBackground fade />

      {/* DESIGN watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[35%] select-none font-bold leading-none tracking-tighter-3 text-black/[0.035] text-[22vw] desktop:text-[200px]"
      >
        DESIGN
      </span>

      <div className="relative z-10 mx-auto flex max-w-content flex-col items-center px-6 text-center">
        <p className="text-body-sm font-semibold uppercase tracking-[0.18em] text-text-secondary tablet:text-body">
          UX/UI Designer
        </p>

        <h1 className="mt-4 font-bold uppercase leading-[1.05] tracking-tighter-3 text-text-primary text-[clamp(2.5rem,9vw,5.5rem)]">
          Khanittha Hemsamak
        </h1>

        <p className="mt-5 max-w-[640px] text-body text-text-secondary tablet:text-subheading">
          Crafting intuitive digital experiences. I specialize in creating visually consistent
          and user-friendly interfaces for web and mobile applications.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 tablet:flex-row">
          <Button
            label="Download Resume"
            variant="neutral"
            iconStart={Download}
            href="/assets/resume.pdf"
          />
        </div>

        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="mt-14 inline-flex items-center gap-2 text-body-sm font-semibold text-text-primary"
        >
          Scroll to explore
          <ArrowDown className="size-4 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
