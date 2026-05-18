'use client'

import { ArrowUpRight, BookOpen, Briefcase, Code2, ExternalLink, Github } from 'lucide-react'
import { mlProjects, sdeProjects, otherProjects } from '@/data/projects'
import { skills } from '@/data/skills'

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-4xl">
        {title}
      </h2>
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

export default function WorkPage() {
  return (
    <section id="work" className="section-frame px-5 py-16 md:py-24">
      <div className="section-frame-inner mx-auto max-w-6xl [--frame-pb:4rem] [--frame-pt:4rem] md:[--frame-pb:6rem] md:[--frame-pt:6rem]">
        <SectionHeading eyebrow="Open Source" title="Research and software projects" />

        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-neutral-500" />
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">Research projects</h3>
        </div>
        <p className="mb-4 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">
          Research projects from the pre-ChatGPT era: when NLP actually had 11 distinct tasks and you couldn't just prompt your way to state-of-the-art
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {mlProjects.map((project) => (
            <article key={project.id} className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-sonic-border/70 dark:bg-sonic-canvas">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-md border border-neutral-200 bg-white dark:border-sonic-border/70 dark:bg-sonic-panel">
                  <img src={project.logo} alt="" className="max-h-8 max-w-8 object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold leading-6">{project.title}</h3>
                    {project.projectUrl && (
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                        <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">
                    {project.publication?.venue ?? `${project.startDate} - ${project.endDate}`}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-neutral-500" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">Software builds</h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">
            Software builds before 'vibe-coding' was a thing and Stack Overflow threads were sacred texts you bookmarked
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {sdeProjects.map((project) => (
              <article key={project.id} className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-sonic-border/70 dark:bg-sonic-panel">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-md border border-neutral-200 bg-white p-2 dark:border-sonic-border/70 dark:bg-sonic-panel">
                    <img src={project.logo} alt="" className="max-h-8 max-w-8 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold leading-6">{project.title}</h3>
                        {project.projectName && <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{project.projectName}</p>}
                      </div>
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                        <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                      </a>
                    </div>
                    <p className="mt-2 text-xs text-neutral-500">
                      {project.startDate} - {project.endDate}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-center gap-2">
            <Code2 className="h-4 w-4 text-neutral-500" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">Other projects</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherProjects.slice(0, 16).map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition-colors hover:border-neutral-300 dark:border-sonic-border/70 dark:bg-sonic-canvas dark:hover:border-sonic-border"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-semibold">{project.title}</h4>
                  <Github className="h-4 w-4 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900 dark:group-hover:text-white" />
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-500">{project.subtitle}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-neutral-500" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">Teaching experience</h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">
            Classroom, lab, and peer mentoring roles across machine learning, compilers, and student development.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {skills.teaching.map((item) => (
              <article
                key={item.course}
                className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-sonic-border/70 dark:bg-sonic-panel"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-md border border-neutral-200 bg-white dark:border-sonic-border/70 dark:bg-sonic-panel">
                    <BookOpen className="h-5 w-5 text-neutral-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-base font-semibold leading-6">{item.role}</h3>
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.course}</p>
                      </div>
                      <p className="text-xs font-medium text-neutral-500">{item.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                          <span>•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
