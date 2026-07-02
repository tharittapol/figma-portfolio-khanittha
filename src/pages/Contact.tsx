import { useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import BackLink from '../components/ui/BackLink'
import { Field, Input, Textarea } from '../components/ui/Input'
import { Mail, MapPin, Phone, Linkedin, Send } from '../components/ui/icons'
import { profile } from '../data/profile'

interface InfoRowProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  href?: string
  underline?: boolean
}

function InfoRow({ icon: Icon, label, value, href, underline }: InfoRowProps) {
  const valueEl = underline ? <span className="underline">{value}</span> : value
  return (
    <div className="flex items-center gap-4 rounded-sds-lg bg-surface px-4 py-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-sds bg-[#5A5A5A] text-text-on-brand">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-body-sm text-text-tertiary">{label}</p>
        {href ? (
          <a href={href} className="block truncate text-body font-medium text-text-primary hover:underline">
            {valueEl}
          </a>
        ) : (
          <p className="truncate text-body font-medium text-text-primary">{valueEl}</p>
        )}
      </div>
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(String(data.get('subject') || 'Hello from your portfolio'))
    const body = encodeURIComponent(
      `${data.get('message') || ''}\n\n— ${data.get('name') || ''} (${data.get('email') || ''})`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-content px-6 py-10 tablet:px-16 tablet:py-12">
          <BackLink to="/" label="Back to Home" />

          {/* Heading */}
          <div className="mx-auto mt-8 max-w-[640px] text-center">
            <p className="text-body-sm font-semibold uppercase tracking-[0.12em] text-text-tertiary">
              Say Hello
            </p>
            <h1 className="mt-3 text-title-page font-bold tracking-tighter-2 text-text-primary">
              Let's Work Together
            </h1>
            <p className="mt-4 text-body text-text-secondary">
              Have a project in mind or just want to chat about design? I'd love to hear from you!
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-12 grid max-w-[940px] grid-cols-1 gap-6 desktop:grid-cols-2">
            {/* Left: profile + info */}
            <div className="rounded-[24px] bg-white p-6 shadow-card tablet:p-8">
              <div className="flex items-center gap-4">
                <Avatar src={profile.avatar} alt={profile.name} className="size-16" />
                <div>
                  <h2 className="text-subheading font-semibold text-text-primary">{profile.name}</h2>
                  <p className="text-body-sm text-text-secondary">{profile.role}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <InfoRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <InfoRow icon={MapPin} label="Location" value={profile.location} />
                <InfoRow icon={Phone} label="Tel." value={profile.phone} href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} />
                <InfoRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value={profile.linkedinLabel}
                  href={profile.linkedinUrl}
                  underline
                />
              </div>
            </div>

            {/* Right: message form */}
            <div className="rounded-[24px] bg-white p-6 shadow-card tablet:p-8">
              <h2 className="text-subheading font-semibold text-text-primary">Send a Message</h2>
              <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <Input id="name" name="name" placeholder="Your name" required />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </Field>
                </div>
                <Field label="Subject" htmlFor="subject">
                  <Input id="subject" name="subject" placeholder="What is this about?" />
                </Field>
                <Field label="Message" htmlFor="message">
                  <Textarea id="message" name="message" placeholder="Tell me about your project...." rows={3} required />
                </Field>
                <Button label={sent ? 'Opening email…' : 'Send Message'} type="submit" iconStart={Send} fullWidth size="large" />
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
