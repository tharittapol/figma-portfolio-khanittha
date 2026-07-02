import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import NavigationPill from '../ui/NavigationPill'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'
import { Menu } from '../ui/icons'
import { cn } from '../../lib/cn'

export const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  function goToSection(id: string) {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 max-w-content items-center justify-between px-6 tablet:px-16">
        {/* Logo */}
        <Link
          to="/"
          className="font-poppins text-heading font-bold tracking-tighter-2 text-text-primary"
        >
          KHANITTHA H.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 desktop:flex">
          {NAV_ITEMS.map((item) => (
            <NavigationPill key={item.id} label={item.label} onClick={() => goToSection(item.id)} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden desktop:block">
          <Button label="Say Hello" to="/contact" size="medium" />
        </div>

        {/* Mobile / tablet hamburger — bordered box */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            'flex items-center justify-center rounded-sds border border-border bg-surface p-1.5 text-text-primary transition-colors hover:bg-neutral-tertiary desktop:hidden',
            menuOpen && 'bg-neutral-tertiary',
          )}
        >
          <Menu className="size-7" />
        </button>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={goToSection} />
      </div>
    </header>
  )
}
