import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Background from '@/components/Background'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Karthik Panyala - Portfolio',
  description: 'AI & ML Graduate Student Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Background />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
} 