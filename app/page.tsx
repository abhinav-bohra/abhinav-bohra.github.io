import { profile } from '@/data/profile'

export const metadata = {
  title: 'About - Abhinav Bohra',
  description: profile.bio[0] || 'About Abhinav Bohra',
}

export default function AboutPage() {
  return (
    <section id="about" className="section-frame px-5 py-16 pt-28 md:py-24 md:pt-32">
      <div className="section-frame-inner mx-auto grid max-w-6xl gap-10 [--frame-pb:4rem] [--frame-pt:7rem] md:[--frame-pb:6rem] md:[--frame-pt:8rem] lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              About
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-4xl">
              Hello World
            </h1>
            <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="inline-flex rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 dark:border-sonic-border/70 dark:bg-sonic-panel dark:text-neutral-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <aside className="flex h-full min-h-80 flex-col items-center justify-center">
          <img src={profile.avatar} alt={profile.name} className="h-36 w-36 rounded-lg object-cover" />
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {profile.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-white hover:text-neutral-950 dark:border-sonic-border/70 dark:bg-sonic-canvas dark:text-neutral-300 dark:hover:border-sonic-border dark:hover:bg-sonic-panel dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
