import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Check,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { caseStudies } from "./data/caseStudies";
import { experiences } from "./data/experience";
import { profile } from "./data/profile";
import { mlProjects, otherProjects, sdeProjects } from "./data/projects";
import { skills } from "./data/skills";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "case-studies", label: "Case Studies" },
  { id: "contact", label: "Contact" },
];

const socialIcons = {
  Mail,
  Linkedin,
  Github,
};

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
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
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
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 dark:border-sonic-border/70 dark:bg-sonic-panel dark:text-neutral-300">
      {children}
    </span>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const Icon = socialIcons[icon as keyof typeof socialIcons] ?? ExternalLink;
  return <Icon className="h-4 w-4" />;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      for (const section of navLinks.map((link) => link.id)) {
        const element = document.getElementById(section);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 antialiased dark:bg-sonic-canvas dark:text-white relative">
      <div className="fixed left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-sonic-border/70 z-30" />
      <div className="fixed right-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-sonic-border/70 z-30" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur dark:border-sonic-border/70 dark:bg-sonic-canvas/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-0 py-3">
          <div className="hidden items-center gap-1 rounded-md border border-neutral-200 bg-white p-1 dark:border-sonic-border/70 dark:bg-sonic-panel md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cx(
                  "rounded px-3 py-1.5 text-xs font-medium transition-colors",
                  activeSection === link.id
                    ? "bg-neutral-100 text-neutral-950 dark:bg-sonic-elevated dark:text-white"
                    : "text-neutral-500 hover:text-neutral-950 dark:hover:text-white"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-700 dark:border-sonic-border/70 dark:bg-sonic-panel dark:text-neutral-300 md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-neutral-200 bg-neutral-50 px-5 py-3 dark:border-sonic-border/70 dark:bg-sonic-canvas md:hidden">
            <div className="mx-auto grid max-w-6xl gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={cx(
                    "rounded-md px-3 py-2 text-left text-sm font-medium",
                    activeSection === link.id
                      ? "bg-white text-neutral-950 dark:bg-sonic-panel dark:text-white"
                      : "text-neutral-500"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="about" className="section-frame px-5 py-16 pt-28 md:py-24 md:pt-32">
          <div className="section-frame-inner mx-auto grid max-w-6xl gap-10 [--frame-pb:4rem] [--frame-pt:7rem] md:[--frame-pb:6rem] md:[--frame-pt:8rem] lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <SectionHeading eyebrow="About" title="Hello World">
                <div className="space-y-4">
                  {profile.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </SectionHeading>

              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <Tag key={interest}>{interest}</Tag>
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
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-9 items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-white hover:text-neutral-950 dark:border-sonic-border/70 dark:bg-sonic-canvas dark:text-neutral-300 dark:hover:border-sonic-border dark:hover:bg-sonic-panel dark:hover:text-white"
                  >
                    <SocialIcon icon={link.icon} />
                    {link.label}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

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
                    <div className="absolute left-0 top-5 hidden h-[72px] w-[72px] place-items-center rounded-full border border-neutral-200 bg-neutral-50 p-3 shadow-sm dark:border-sonic-border/70 dark:bg-sonic-canvas sm:grid">
                      <img src={exp.logo} alt={exp.company} className="max-h-12 max-w-12 rounded-md object-contain" />
                    </div>
                    <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-sonic-border/70 dark:bg-sonic-panel">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full border border-neutral-200 bg-neutral-50 p-2 dark:border-sonic-border/70 dark:bg-sonic-elevated sm:hidden">
                          <img src={exp.logo} alt={exp.company} className="max-h-10 max-w-10 rounded-md object-contain" />
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
                              <Check className="mt-1 h-4 w-4 flex-shrink-0 text-neutral-400" />
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

        <section id="case-studies" className="section-frame px-5 py-16 md:py-20">
          <div className="section-frame-inner mx-auto max-w-6xl [--frame-pb:4rem] [--frame-pt:4rem] md:[--frame-pb:5rem] md:[--frame-pt:5rem]">
            <SectionHeading eyebrow="Case studies" title="Business and strategy decks">
              <p>Selected case competitions and market research thesis </p>
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

        <section id="contact" className="section-frame px-5 py-16 md:py-24">
          <div className="section-frame-inner mx-auto max-w-6xl rounded-lg border border-neutral-200 bg-white p-6 [--frame-pb:4rem] [--frame-pt:4rem] dark:border-sonic-border/70 dark:bg-sonic-panel md:p-8 md:[--frame-pb:6rem] md:[--frame-pt:6rem] md:mx-8">

            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <BookOpen className="mb-4 h-5 w-5 text-neutral-500" />
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
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-10 items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-300 dark:border-sonic-border/70 dark:bg-sonic-canvas dark:text-neutral-200 dark:hover:bg-sonic-elevated"
                  >
                    <SocialIcon icon={link.icon} />
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
      </main>
    </div>
  );
}
