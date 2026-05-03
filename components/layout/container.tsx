import type { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      data-test-id="layout_container"
      className="max-w-[1440px] mx-auto px-5"
    >
      {children}
    </div>
  )
}
