import {
  GlobeIcon,
  HeartIcon,
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@phosphor-icons/react/dist/ssr'
import { Container } from '@/components/layout/container'
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

export function SiteHeader() {
  return (
    <header
      data-test-id="layout_site-header"
      className="bg-page border-b border-[var(--color-border-warm)]"
    >
      <Container>
        <div className="flex items-center gap-4 py-3">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span
              className="text-[20px] font-extrabold tracking-tight"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              AlphaGranny
            </span>
          </a>

          <button
            type="button"
            className="flex items-center gap-1.5 text-body-md text-muted cursor-pointer"
          >
            <ListIcon size={20} weight="bold" />
            Categories
          </button>

          <div className="flex flex-1 max-w-[680px]">
            <input
              type="text"
              readOnly
              placeholder="Search for anything…"
              className="flex-1 bg-surface text-ink text-body-md border border-[var(--color-border-warm)] border-r-0 rounded-l-pill px-4 h-10 outline-none placeholder:text-faded"
            />
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center bg-brand hover:bg-brand-hover text-inverse rounded-r-pill px-4 h-10 cursor-pointer"
            >
              <MagnifyingGlassIcon size={18} weight="bold" />
            </button>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <NavPill
              icon={<GlobeIcon size={16} weight="regular" />}
              label="EN ▾"
            />
            <NavPill
              icon={<HeartIcon size={16} weight="regular" />}
              label="Saved"
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
            />
          </div>
        </div>

        <nav className="flex items-center gap-6 py-2 text-body-md text-ink">
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
