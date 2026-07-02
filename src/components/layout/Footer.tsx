import { profile } from '../../data/profile'

const LINKEDIN_URL = profile.linkedinUrl
const RESUME_URL = profile.resumeUrl

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 tablet:flex-row tablet:px-16">
        <p className="text-body-sm text-text-secondary">
          © 2026 Khanittha Hemsamak · UX/UI Designer
        </p>
        <div className="flex items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-body-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            LinkedIn
          </a>
          <a
            href={RESUME_URL}
            className="text-body-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
