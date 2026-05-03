import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react/dist/ssr'

type Props = {
  title: string
  variant?: 'arrows' | 'link' | 'none'
  linkLabel?: string
}

export function SectionHeader({
  title,
  variant = 'none',
  linkLabel = 'View all',
}: Props) {
  return (
    <div
      data-test-id="ui_section-header"
      className="flex items-center justify-between mb-2.5"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-heading-lg text-ink">{title}</h2>
        {variant === 'arrows' && (
          <div className="flex items-center gap-2">
            <ArrowButton aria-label="Previous">
              <CaretLeftIcon size={18} weight="bold" />
            </ArrowButton>
            <ArrowButton aria-label="Next">
              <CaretRightIcon size={18} weight="bold" />
            </ArrowButton>
          </div>
        )}
      </div>
      {variant === 'link' && (
        <a
          href="/"
          className="text-body-md text-muted hover:text-ink hover:underline"
        >
          {linkLabel}
        </a>
      )}
    </div>
  )
}

function ArrowButton({
  children,
  ...rest
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-[38px] h-[38px] bg-dark text-inverse rounded-full shadow-md cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  )
}
