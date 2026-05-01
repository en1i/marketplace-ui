import { Container } from '@/components/layout/container'

export function PromoBand() {
  return (
    <section data-test-id="sections_promo-band" className="bg-warm py-8">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <div className="text-heading-md text-ink">
              Sell your stuff on AlphaGranny
            </div>
            <div className="text-body-md text-muted">
              Post a free ad in minutes
            </div>
          </div>
          <button
            type="button"
            className="bg-brand hover:bg-brand-hover text-inverse rounded-pill px-5 py-2.5 text-label cursor-pointer"
          >
            Post an ad
          </button>
        </div>
      </Container>
    </section>
  )
}
