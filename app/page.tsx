import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { Hero } from '@/components/sections/hero'
import { PopularCategories } from '@/components/sections/popular-categories'
import { ProductGridSection } from '@/components/sections/product-grid-section'
import { PromoBand } from '@/components/sections/promo-band'
import { TopSellers } from '@/components/sections/top-sellers'
import { recentListings, trending } from '@/lib/placeholder-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Container>
          <div className="flex flex-col gap-8 py-8">
            <PopularCategories />
            <TopSellers />
            <ProductGridSection
              title="Recent listings"
              products={recentListings}
            />
          </div>
        </Container>
        <PromoBand />
        <Container>
          <div className="flex flex-col gap-8 py-8">
            <ProductGridSection title="Trending near you" products={trending} />
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}
