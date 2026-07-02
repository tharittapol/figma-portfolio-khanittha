import Button from '../ui/Button'
import GridBackground from '../ui/GridBackground'
import { Mail, Linkedin, Phone, MapPin, Sparkle } from '../ui/icons'
import { profile } from '../../data/profile'

const EMAIL = profile.email
const PHONE = profile.phone
const LOCATION = profile.location
const LINKEDIN_URL = profile.linkedinUrl

export default function ContactCTA() {
  return (
    <section id="contact" className="w-full bg-bg px-6 py-14 tablet:px-16 tablet:py-20 desktop:py-24">
      <div className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-[24px] bg-dark px-6 py-14 text-center text-text-on-brand tablet:px-12 tablet:py-20">
          <GridBackground dark fade className="opacity-30" />

          <div className="relative z-10 mx-auto flex max-w-[960px] flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-body-sm font-medium text-text-on-brand">
              <Sparkle className="size-4" />
              Open to opportunities
            </span>

            <h2 className="mt-6 text-title-page font-bold tracking-tighter-2 text-text-on-brand desktop:whitespace-nowrap">
              Let's create something amazing together
            </h2>
            <p className="mt-4 text-body text-text-tertiary tablet:text-subheading desktop:whitespace-nowrap">
              Open to full-time roles, freelance projects, and creative collaborations. Let's talk.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 tablet:flex-row">
              <Button label="Get in touch" variant="on-dark" iconStart={Mail} to="/contact" />
              <Button
                label="LinkedIn"
                variant="inverse"
                iconStart={Linkedin}
                href={LINKEDIN_URL}
                target="_blank"
              />
            </div>

            <div className="mt-12 h-px w-full max-w-[640px] bg-white/10" />

            <div className="mt-8 flex flex-col items-center gap-4 text-body-sm text-text-tertiary tablet:flex-row tablet:gap-10">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-text-on-brand">
                <Mail className="size-4" />
                {EMAIL}
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="size-4" />
                {PHONE}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {LOCATION}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
