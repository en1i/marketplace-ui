import { StarIcon, UserIcon } from '@phosphor-icons/react/dist/ssr'
import type { Seller } from '@/lib/placeholder-data'
import { ImagePlaceholder } from './image-placeholder'

export function SellerCard({ name, rating, sales }: Seller) {
  return (
    <div data-test-id="ui_seller-card" className="flex flex-col">
      <div className="grid grid-cols-2 gap-1">
        <ImagePlaceholder />
        <ImagePlaceholder />
        <ImagePlaceholder />
        <ImagePlaceholder />
      </div>
      <div className="flex items-center gap-3 mt-3">
        <div className="flex items-center justify-center w-9 h-9 bg-soft border border-[var(--color-border-warm)] rounded-full text-ink">
          <UserIcon size={18} weight="regular" />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="text-body-md font-semibold text-ink">{name}</div>
          <div className="flex items-center gap-1 text-body-sm text-faded">
            <StarIcon
              size={12}
              weight="fill"
              color="var(--color-brand-primary)"
            />
            <span>
              {rating.toFixed(1)} · {sales} sales
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
