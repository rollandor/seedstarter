import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

declare global {
  interface Window {
    // ethereum: import('ethers').providers.ExternalProvider;
    ethereum: any;
  }
}

export const metadata: Metadata = {
  title: 'Seedstarter',
  description: 'Decentralized private investors venture fund',
  icons: '/favicon_io/favicon-32x32.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
