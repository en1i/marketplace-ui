import { SectionHeader } from '@/components/ui/section-header'
import { SellerCard } from '@/components/ui/seller-card'
import { sellers } from '@/lib/placeholder-data'

export function TopSellers() {
  return (
    <section data-test-id="sections_top-sellers">
      <SectionHeader title="Top sellers" variant="arrows" />
      <div className="grid grid-flow-col auto-cols-[calc(50%-6px)] gap-3 overflow-x-auto pb-1 md:grid-flow-row md:auto-cols-auto md:grid-cols-4 md:gap-4 md:overflow-visible md:pb-0">
        {sellers.map((s) => (
          <SellerCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  )
}
