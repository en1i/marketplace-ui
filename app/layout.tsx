import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Marketplace for all your needs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
