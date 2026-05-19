import { caseStudies } from '@/data/caseStudies'
import { ArrowUpRight, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'Case Studies - Abhinav Bohra',
  description: 'Business strategy and case competition decks',
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

export default function CaseStudiesPage() {
  return (
    <section id="case-studies" className="section-frame px-5 py-16 md:py-20">
      <div className="section-frame-inner mx-auto max-w-6xl [--frame-pb:4rem] [--frame-pt:4rem] md:[--frame-pb:5rem] md:[--frame-pt:5rem]">
        <SectionHeading eyebrow="Case studies" title="Business and strategy decks">
          <p>Case competitions and market research thesis </p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href={study.pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-neutral-300 dark:border-sonic-border/70 dark:bg-sonic-canvas dark:hover:border-sonic-border"
            >
              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between text-neutral-500">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-xs">{study.date}</span>
                </div>
                <h3 className="text-sm font-semibold leading-6">{study.title}</h3>
                {study.award && <p className="mt-2 text-xs text-neutral-500">{study.award}</p>}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium">
                View Deck <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
