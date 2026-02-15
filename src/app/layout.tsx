import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arna Ltd | Professional Builders',
  description: 'High-quality construction and renovations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
