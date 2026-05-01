import Image from 'next/image'
import { Container } from '@/components/layout/container'
import { Chip } from '@/components/ui/chip'

const linkColumns = [
  {
    heading: 'Marketplace',
    links: ['Browse listings', 'Top sellers', 'Recent listings', 'Trending'],
  },
  {
    heading: 'Account',
    links: ['Sign in', 'My cabinet', 'My listings', 'Favourites'],
  },
  {
    heading: 'Help',
    links: ['How it works', 'Safety tips', 'Contact us', 'Report a listing'],
  },
]

const languages = [
  { code: 'EN', active: true },
  { code: 'SQ', active: false },
  { code: 'UK', active: false },
  { code: 'RU', active: false },
]

export function SiteFooter() {
  return (
    <footer data-test-id="layout_site-footer" className="bg-warm">
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src="/images/granny.png" alt="" width={32} height={32} />
                <span
                  className="text-[20px] font-extrabold tracking-tight"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  AlphaGranny
                </span>
              </div>
              <p className="text-body-sm text-muted">
                A warm, human marketplace for buying and selling unique goods —
                near you and beyond.
              </p>
            </div>
            {linkColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h3 className="text-heading-sm text-ink">{col.heading}</h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="text-body-md text-muted hover:text-ink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border-warm)]">
            <span className="text-body-xs text-muted">
              © {new Date().getFullYear()} AlphaGranny
            </span>
            <div className="flex items-center gap-2">
              {languages.map((l) => (
                <Chip key={l.code} active={l.active}>
                  {l.code}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
