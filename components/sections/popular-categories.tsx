import { categories } from '@/lib/categories'

export function PopularCategories() {
  return (
    <section data-test-id="sections_popular-categories">
      <h2 className="text-heading-lg text-ink mb-2.5">Categories</h2>
      <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-3 overflow-x-auto pb-2 md:grid-rows-1 md:gap-y-0">
        {categories.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 w-20 shrink-0"
          >
            <div className="image-placeholder rounded-md w-[70px] h-[70px]">
              <Icon
                size={28}
                weight="regular"
                color="var(--color-text-primary)"
              />
            </div>
            <div className="text-body-sm text-ink text-center">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
