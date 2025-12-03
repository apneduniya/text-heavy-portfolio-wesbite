import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'
import { Metadata, Viewport } from 'next'

import basicInfo from '@/data/basic.json'

import { PostHogProvider } from '@/components/PostHogProvider'
import { ThemeProvider } from '@/components/ThemeProvider'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: basicInfo.name,
  description: basicInfo.shortDescription,
  metadataBase: new URL(basicInfo.website),
  icons: {
    icon: '/favicon.ico?v=1',
    apple: '/apple-touch-icon.png?v=1',
    shortcut: '/favicon-16x16.png?v=1',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: basicInfo.website,
    title: basicInfo.name,
    description: basicInfo.shortDescription,
    siteName: basicInfo.name,
    images: [`${basicInfo.website}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: basicInfo.name,
    description: basicInfo.shortDescription,
    images: [`${basicInfo.website}/og-image.png`],
    creator: `@${basicInfo.username}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans antialiased`}
    >
      <body className="text-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <PostHogProvider>
            <Header />
            <main>{children}</main>
          </PostHogProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
