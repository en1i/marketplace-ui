import {
  GlobeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@phosphor-icons/react/dist/ssr'
import { Container } from '@/components/layout/container'
import { CategoriesDropdown } from '@/components/ui/categories-dropdown'
import { NavPill } from '@/components/ui/nav-pill'

const subNavLinks = [
  'Gifts',
  'Top Picks',
  'Home & Garden',
  'Fashion',
  'Vintage',
  'Electronics',
  'Handmade',
]

export function MainHeader() {
  return (
    <header
      data-test-id="layout_site-header"
      className="bg-page border-b border-[var(--color-border-warm)]"
    >
      <Container>
        <div className="flex items-center gap-3 py-3">
          <CategoriesDropdown />

          {/* Desktop search — desktop only */}
          <div className="hidden md:flex flex-1 min-w-0">
            <input
              type="text"
              readOnly
              placeholder="Search for anything…"
              className="flex-1 min-w-0 bg-surface text-ink text-body-md border border-[var(--color-border-warm)] border-r-0 rounded-l-pill px-4 h-10 outline-none placeholder:text-faded"
            />
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center bg-brand hover:bg-brand-hover text-inverse rounded-r-pill px-4 h-10 shrink-0 cursor-pointer"
            >
              <MagnifyingGlassIcon size={18} weight="bold" />
            </button>
          </div>

          {/* Nav pills */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <NavPill
              icon={<GlobeIcon size={16} weight="regular" />}
              label="EN ▾"
              variant="filled"
            />
            <NavPill
              icon={<HeartIcon size={16} weight="regular" />}
              label="Saved"
              count={5}
              variant="filled"
            />
            <NavPill
              icon={<ShoppingCartIcon size={16} weight="regular" />}
              label="Cart"
              count={2}
              variant="filled"
            />
            <NavPill
              icon={<UserIcon size={16} weight="regular" />}
              label="Sign in"
              variant="filled"
            />
          </div>
        </div>

        {/* Mobile search row — mobile only */}
        <div className="flex md:hidden gap-2 pb-3">
          <input
            type="text"
            readOnly
            placeholder="Search for anything…"
            className="flex-1 bg-surface text-ink text-body-md rounded-l-pill px-4 h-10 outline-none placeholder:text-faded"
          />
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center bg-brand hover:bg-brand-hover text-inverse rounded-r-pill px-4 h-10 shrink-0 cursor-pointer"
          >
            <MagnifyingGlassIcon size={18} weight="bold" />
          </button>
        </div>

        {/* Sub-nav — desktop only */}
        <nav className="hidden md:flex items-center gap-6 py-2 text-body-md text-ink">
          {subNavLinks.map((link) => (
            <a
              key={link}
              href="/"
              className="hover:text-[var(--color-brand-primary)]"
            >
              {link}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
