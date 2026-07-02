import { NAV_ITEMS } from './Header'
import { cn } from '../../lib/cn'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  onNavigate: (id: string) => void
}

/**
 * Tablet & mobile nav dropdown (Figma *_Expand_Menu) — a card anchored below the
 * header's hamburger. Closes on outside click or item select.
 */
export default function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  return (
    <>
      {/* click-away backdrop */}
      {open && (
        <div className="fixed inset-0 z-40 desktop:hidden" aria-hidden onClick={onClose} />
      )}

      {/* dropdown */}
      <div
        className={cn(
          'absolute right-6 top-full z-50 mt-2 w-60 origin-top-right overflow-hidden rounded-sds-lg',
          'border border-border bg-white p-2 shadow-card transition-all duration-150 tablet:right-16 desktop:hidden',
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0',
        )}
      >
        <nav className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="rounded-sds px-4 py-2.5 text-left text-body text-text-primary transition-colors hover:bg-surface"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
