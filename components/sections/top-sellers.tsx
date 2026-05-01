import { SectionHeader } from '@/components/ui/section-header'
import { SellerCard } from '@/components/ui/seller-card'
import { sellers } from '@/lib/placeholder-data'

export function TopSellers() {
  return (
    <section data-test-id="sections_top-sellers">
      <SectionHeader title="Top sellers" variant="arrows" />
      <div className="grid grid-cols-4 gap-4">
        {sellers.map((s) => (
          <SellerCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  )
}
