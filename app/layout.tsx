import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhinav Bohra',
  description: 'Full-stack engineer, ML researcher, and builder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var t = localStorage.getItem('theme');
            var dark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (dark) document.documentElement.classList.add('dark');
          })();
        ` }} />
      </head>
      <body className="min-h-screen bg-white text-neutral-950 antialiased dark:bg-sonic-canvas dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
