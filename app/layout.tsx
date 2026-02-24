import type { Metadata, Viewport } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ 
  subsets: ["latin"], 
  variable: '--font-sora' 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: 'Bold Afrika | Building Bold Brands & Empowering Creative Youth',
  description: 'Bold Afrika is a Kenyan creative agency specializing in social media management, digital marketing, and youth empowerment through the Bold Youths program.',
  keywords: ['creative agency', 'Kenya', 'social media management', 'digital marketing', 'youth empowerment', 'Bold Youths'],
  
  // Favicon configuration using your ACTUAL files
  icons: {
    icon: [
      {
        url: '/favicon.ico', // This exists
        sizes: 'any',
      },
      {
        url: '/icon0.svg', // SVG for modern browsers
        type: 'image/svg+xml',
      },
      {
        url: '/icon1.png', // PNG fallback
        type: 'image/png',
      },
      {
        url: '/logo.png', // Your original logo
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png', // Make sure to RENAME this file first!
    shortcut: '/favicon.ico',
  },
  
  // Add manifest file
  manifest: '/manifest.json',
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
      <body className={`${sora.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}