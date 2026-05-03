import { ProductCard } from '@/components/ui/product-card'
import { SectionHeader } from '@/components/ui/section-header'
import type { Product } from '@/lib/placeholder-data'

type Props = {
  title: string
  products: Product[]
}

export function ProductGridSection({ title, products }: Props) {
  return (
    <section data-test-id="sections_product-grid-section">
      <SectionHeader title={title} variant="link" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
