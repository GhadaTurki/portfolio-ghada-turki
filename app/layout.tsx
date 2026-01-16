import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ghada Turki | Ingénieure Électromécanique | Mécatronique',
  description: 'Portfolio de Ghada Turki - Ingénieure en Électromécanique spécialisée en Mécatronique, Automatisation, Robotique, IoT et Intelligence Artificielle',
  keywords: 'Ingénieur, Électromécanique, Mécatronique, Robotique, IoT, IA, Automatisation',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
