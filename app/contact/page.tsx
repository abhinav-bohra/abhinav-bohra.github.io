import { Heart } from 'lucide-react'
import { profile } from '@/data/profile'

export const metadata = {
  title: 'Contact - Abhinav Bohra',
  description: 'Get in touch with Abhinav',
}

export default function ContactPage() {
  return (
    <section id="contact" className="section-frame px-5 py-16 md:py-24">
      <div className="section-frame-inner mx-auto max-w-6xl rounded-lg border border-neutral-200 bg-white p-6 [--frame-pb:4rem] [--frame-pt:4rem] dark:border-sonic-border/70 dark:bg-sonic-panel md:p-8 md:[--frame-pb:6rem] md:[--frame-pt:6rem] md:mx-8">

        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Heart className="mb-4 h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Thanks for visiting.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              I am always happy to discuss projects, research ideas, or opportunities to build impactful products.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-300 dark:border-sonic-border/70 dark:bg-sonic-canvas dark:text-neutral-200 dark:hover:bg-sonic-elevated"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="flex flex-col gap-2 py-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>{profile.copyright.replace("Â", "")}</p>
      </footer>
    </section>
  )
}
