import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Using a custom font for Clash Display since it's not available in next/font
const clashDisplay = {
  variable: '--font-clash-display',
}

export const metadata: Metadata = {
  title: 'BlueBeetle.live - Agentic Intelligence for the Markets That Never Sleep',
  description: 'BlueBeetle.live — the living co-pilot for traders and funds. Agentic Intelligence for the Markets That Never Sleep.',
  keywords: ['trading', 'AI', 'financial markets', 'agentic intelligence', 'trading co-pilot'],
  authors: [{ name: 'BlueBeetle Team' }],
  creator: 'BlueBeetle',
  publisher: 'BlueBeetle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bluebeetle.live'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BlueBeetle.live - Agentic Intelligence for the Markets That Never Sleep',
    description: 'BlueBeetle.live — the living co-pilot for traders and funds. Agentic Intelligence for the Markets That Never Sleep.',
    url: 'https://bluebeetle.live',
    siteName: 'BlueBeetle.live',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'BlueBeetle.live - Agentic Intelligence for Trading',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueBeetle.live - Agentic Intelligence for the Markets That Never Sleep',
    description: 'BlueBeetle.live — the living co-pilot for traders and funds.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`}>
      <body className="min-h-screen bg-slate-950 text-white dark">
        {children}
      </body>
    </html>
  )
}
