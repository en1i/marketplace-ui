import { MagnifyingGlassIcon, MapPinIcon } from '@phosphor-icons/react/dist/ssr'
import { Container } from '@/components/layout/container'
import { Chip } from '@/components/ui/chip'

type Mascot = 'none' | 'right' | 'peek'

const cities = ['New York', 'Los Angeles', 'Chicago', 'Miami']

export function Hero({ mascot = 'none' }: { mascot?: Mascot }) {
  void mascot

  return (
    <section data-test-id="sections_hero" className="bg-warm">
      <Container>
        <div className="relative flex flex-col items-center text-center py-4 px-5 min-h-[60px] gap-4 md:py-9 md:min-h-[210px]">
          <h1 className="hidden md:block text-display-lg text-ink">
            Find anything, sell anything
          </h1>
          <p className="text-body-lg text-muted">
            Local marketplace — buy &amp; sell near you
          </p>
          <div className="hidden md:flex w-full max-w-[600px] mt-2">
            <input
              type="text"
              readOnly
              placeholder="What are you looking for?"
              className="flex-1 bg-surface text-ink text-body-md border border-[var(--color-border-warm)] border-r-0 rounded-l-pill px-5 h-11 outline-none placeholder:text-faded"
            />
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center bg-brand hover:bg-brand-hover text-inverse rounded-r-pill px-5 h-11 cursor-pointer"
            >
              <MagnifyingGlassIcon size={20} weight="bold" />
            </button>
          </div>
          <div className="hidden md:flex flex-wrap items-center justify-center gap-2 mt-1">
            <Chip active>
              <MapPinIcon size={14} weight="fill" />
              All cities
            </Chip>
            {cities.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
