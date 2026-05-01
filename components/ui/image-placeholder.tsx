import type { CSSProperties, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export function ImagePlaceholder({ children, className = '', style }: Props) {
  return (
    <div
      data-test-id="ui_image-placeholder"
      className={`image-placeholder rounded-md ${className}`}
      style={{ aspectRatio: '1 / 1', ...style }}
    >
      {children}
    </div>
  )
}
