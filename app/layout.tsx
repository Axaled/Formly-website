import type { Metadata } from 'next'
import { Instrument_Sans, Geist_Mono, Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { profile } from '@/lib/portfolio'
import './globals.css'

const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans-var', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })
const display = Newsreader({ subsets: ['latin'], variable: '--font-display', axes: ['opsz'], display: 'swap' })

const title = `${profile.firstName} ${profile.lastName} — Automatisation IA et outils web pour les PME`
const description =
  "J'aide les PME à gagner du temps : je repère les tâches répétitives, je les automatise avec l'IA et je construis les outils qui vont avec."

export const metadata: Metadata = {
  title: { default: title, template: `%s · ${profile.firstName} ${profile.lastName}` },
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: { type: 'website', locale: 'fr_FR', title, description },
  twitter: { card: 'summary_large_image', title, description },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${geistMono.variable} ${display.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
