import { HeartIcon } from '@phosphor-icons/react/dist/ssr'
import type { Product } from '@/lib/placeholder-data'
import { ImagePlaceholder } from './image-placeholder'

export function ProductCard({ title, shop, price, badge }: Product) {
  return (
    <div data-test-id="ui_product-card" className="flex flex-col gap-1.5">
      <div className="relative">
        <ImagePlaceholder>
          <span className="text-body-xs">📷 product</span>
        </ImagePlaceholder>
        <button
          type="button"
          aria-label="Save"
          className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 bg-surface/90 rounded-full text-ink hover:text-[var(--color-brand-primary)] cursor-pointer"
        >
          <HeartIcon size={16} weight="regular" />
        </button>
        {badge && (
          <span className="absolute bottom-2 left-2 rounded-pill bg-green-accent px-2 py-0.5 text-body-xs font-semibold text-ink">
            {badge}
          </span>
        )}
      </div>
      <div className="text-body-md font-semibold text-ink line-clamp-2">
        {title}
      </div>
      <div className="text-body-sm text-faded">by {shop}</div>
      <div className="text-body-sm font-bold text-ink">{price}</div>
    </div>
  )
}
