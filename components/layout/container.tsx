import type { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      data-test-id="layout_container"
      className="mx-auto max-w-[1440px] px-5"
    >
      {children}
    </div>
  )
}
