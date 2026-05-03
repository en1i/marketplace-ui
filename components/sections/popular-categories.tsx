import { categories } from '@/lib/categories'

export function PopularCategories() {
  return (
    <section data-test-id="sections_popular-categories">
      <h2 className="text-heading-lg text-ink mb-2.5">Categories</h2>
      <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-3 overflow-x-auto pb-2 md:grid-rows-1 md:gap-y-0">
        {categories.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex w-20 shrink-0 flex-col items-center gap-2"
          >
            <div className="h-[70px] w-[70px] image-placeholder rounded-md">
              <Icon
                size={28}
                weight="regular"
                color="var(--color-text-primary)"
              />
            </div>
            <div className="text-center text-body-sm text-ink">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
