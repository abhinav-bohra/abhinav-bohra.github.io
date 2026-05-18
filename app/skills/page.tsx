'use client'

import { skills } from '@/data/skills'

const toolIcons = [
  { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Dart", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Scala", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PySpark", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "scikit-learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "OpenCV", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]

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

export default function SkillsPage() {
  return (
    <section id="skills" className="section-frame px-5 py-16 md:py-24">
      <div className="section-frame-inner mx-auto max-w-6xl [--frame-pb:4rem] [--frame-pt:4rem] md:[--frame-pb:6rem] md:[--frame-pt:6rem]">
        <SectionHeading eyebrow="Skills" title="Tools I have worked with">
          <p>
            Programming languages, libraries, and frameworks I have dabbled with.
          </p>
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-stretch">
          <div className="relative bg-white dark:bg-sonic-panel">
            <div className="grid grid-cols-3">
              {toolIcons.map((tool) => (
                <div
                  key={tool.name}
                  className="group relative grid aspect-square place-items-center border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50 dark:border-sonic-border/70 dark:bg-sonic-panel dark:hover:bg-sonic-canvas [&:not(:nth-child(3n))]:border-r [&:nth-child(-n+18)]:border-b"
                  title={tool.name}
                  aria-label={tool.name}
                >
                  <img
                    src={tool.src}
                    alt=""
                    loading="lazy"
                    className="h-9 w-9 object-contain transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10 md:h-11 md:w-11"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:h-full lg:grid-rows-[auto_1fr]">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-sonic-border/70 dark:bg-sonic-panel">
              <h3 className="text-sm font-semibold">Achievements</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5">
                {skills.achievements.map((achievement) => (
                  <li key={achievement} className="pl-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-5 dark:border-sonic-border/70 dark:bg-sonic-panel">
              <h3 className="text-sm font-semibold">Coursework</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Selected coursework across systems, AI, and broader leadership and communication tracks.
              </p>
              <div className="mt-4 grid flex-1 gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Computer Science",
                    courses: skills.coursework.computerScience,
                  },
                  {
                    title: "Artificial Intelligence",
                    courses: skills.coursework.artificialIntelligence,
                  },
                  {
                    title: "Leadership & Breadth",
                    courses: skills.coursework.outOfDiscipline,
                  },
                ].map((group) => (
                  <div
                    key={group.title}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-sonic-border/70 dark:bg-sonic-canvas"
                  >
                    <h4 className="text-sm font-semibold leading-6">{group.title}</h4>
                    <ul className="mt-3 space-y-1.5">
                      {group.courses.map((course) => (
                        <li key={course} className="text-xs leading-5 text-neutral-600 dark:text-neutral-400">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
