import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutClient from '@/components/layout/Layout'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seedstarter',
  description: 'ICO 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
