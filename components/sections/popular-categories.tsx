import { categories } from '@/lib/categories'

export function PopularCategories() {
  return (
    <section data-test-id="sections_popular-categories">
      <h2 className="text-heading-lg text-ink mb-2.5">Popular categories</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
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
