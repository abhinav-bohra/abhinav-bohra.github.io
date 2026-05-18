import { experiences } from "../data/experience";
import { Tag } from "../components/ui/Tag";

export function Experience() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16 tracking-tight">
            Experience
          </h1>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="border-l border-gray-200 dark:border-gray-800 pl-8 pb-8"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:items-start mb-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {exp.team} • {exp.location}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                      {exp.startDate} — {exp.endDate}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    {exp.project}
                  </h3>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
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

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
