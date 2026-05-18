import { Check } from 'lucide-react'
import { experiences } from '@/data/experience'

export const metadata = {
  title: 'Experience - Abhinav Bohra',
  description: 'Work experience and internships',
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-4xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{children}</div>}
    </div>
  )
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 dark:border-sonic-border/70 dark:bg-sonic-panel dark:text-neutral-300">
      {children}
    </span>
  )
}

export default function ExperiencePage() {
  return (
    <section id="experience" className="section-frame px-5 py-16 md:py-24">
      <div className="section-frame-inner mx-auto max-w-6xl [--frame-pb:4rem] [--frame-pt:4rem] md:[--frame-pb:6rem] md:[--frame-pt:6rem]">
        <SectionHeading eyebrow="Experience" title="Places I have worked and learned">
          <p>
            A few internships and research roles where I contributed to applied ML, process mining, video understanding, and software
            tools.
          </p>
        </SectionHeading>

        <div className="relative">
          <div className="absolute bottom-0 left-9 top-0 hidden w-px bg-neutral-200 dark:bg-sonic-border/70 sm:block" />
          <div className="space-y-6">
            {experiences.map((exp) => (
              <article key={exp.id} className="relative sm:pl-24">
                <div className="absolute left-0 top-5 hidden h-[72px] w-[72px] place-items-center rounded-full border border-neutral-200 bg-neutral-50 p-0.5 shadow-sm dark:border-sonic-border/70 dark:bg-sonic-canvas sm:grid">
                  <img src={exp.logo} alt={exp.company} className="max-h-14 max-w-14 rounded-md object-contain" />
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-sonic-border/70 dark:bg-sonic-panel">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full border border-neutral-200 bg-neutral-50 p-0 dark:border-sonic-border/70 dark:bg-sonic-elevated sm:hidden">
                      <img src={exp.logo} alt={exp.company} className="max-h-12 max-w-12 rounded-md object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                            {exp.company} · {exp.team}
                          </p>
                          <p className="mt-1 text-xs text-neutral-500">{exp.location}</p>
                        </div>
                        <p className="text-xs font-medium text-neutral-500">
                          {exp.startDate} - {exp.endDate}
                        </p>
                      </div>

                      <p className="mt-5 text-sm font-medium">{exp.project}</p>
                      <ul className="mt-3 space-y-2">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-neutral-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
