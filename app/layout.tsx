import React from "react"
import type { Metadata, Viewport } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _sora = Sora({ subsets: ["latin"], variable: '--font-sora' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Bold Afrika | Building Bold Brands & Empowering Creative Youth',
  description: 'Bold Afrika is a Kenyan creative agency specializing in social media management, digital marketing, and youth empowerment through the Bold Youths program.',
  generator: 'v0.app',
  keywords: ['creative agency', 'Kenya', 'social media management', 'digital marketing', 'youth empowerment', 'Bold Youths'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#490839',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
