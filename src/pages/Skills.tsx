import { CheckCircle2 } from "lucide-react";
import { skills } from "../data/skills";
import { Tag } from "../components/ui/Tag";

export function Skills() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16 tracking-tight">
            Skills & Expertise
          </h1>

          {/* Technical Skills */}
          <div className="mb-20 border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Skills
            </h2>

            <div className="space-y-8">
              {/* Programming Languages */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                  Programming Languages
                </h3>
                <div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-500 mb-3 uppercase tracking-wide">
                    Proficient
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.programming.proficient.map((lang) => (
                      <Tag key={lang}>{lang}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-500 mb-3 uppercase tracking-wide">
                    Familiar
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.familiar.map((lang) => (
                      <Tag key={lang}>{lang}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              {/* ML/Data Libraries */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                  ML & Data Science Libraries
                </h3>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Proficient
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.libraries.proficient.map((lib) => (
                      <Tag key={lib}>{lib}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-500 mb-3 uppercase tracking-wide">
                    Familiar
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.libraries.familiar.map((lib) => (
                      <Tag key={lib}>{lib}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                  Web Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((fw) => (
                    <Tag key={fw}>{fw}</Tag>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-20 border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Achievements
            </h2>
            <ul className="space-y-3">
              {skills.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-700 dark:text-gray-300 flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gray-400 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Experience */}
          <div className="mb-20 border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Teaching Experience
            </h2>
            <div className="space-y-7">
              {skills.teaching.map((teaching, idx) => (
                <div
                  key={idx}
                  className="border-l border-gray-200 dark:border-gray-800 pl-6"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {teaching.role}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {teaching.course}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-600 mt-2 mb-3">
                    {teaching.period}
                  </p>
                  <ul className="space-y-2">
                    {teaching.bullets.map((bullet, bidx) => (
                      <li
                        key={bidx}
                        className="text-sm text-gray-700 dark:text-gray-400 flex gap-3"
                      >
                        <span className="text-gray-400 dark:text-gray-600 flex-shrink-0">
                          ▪
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Coursework */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Relevant Coursework
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Computer Science
                </h3>
                <ul className="space-y-2.5">
                  {skills.coursework.computerScience.map((course) => (
                    <li
                      key={course}
                      className="text-sm text-gray-700 dark:text-gray-400"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Artificial Intelligence
                </h3>
                <ul className="space-y-2.5">
                  {skills.coursework.artificialIntelligence.map((course) => (
                    <li
                      key={course}
                      className="text-sm text-gray-700 dark:text-gray-400"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Other
                </h3>
                <ul className="space-y-2.5">
                  {skills.coursework.outOfDiscipline.map((course) => (
                    <li
                      key={course}
                      className="text-sm text-gray-700 dark:text-gray-400"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
