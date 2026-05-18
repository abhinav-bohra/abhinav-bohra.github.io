import { ArrowUpRight, Briefcase } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

export function CaseStudies() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16 tracking-tight">
            Case Studies
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={study.pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-xl p-6 transition-all hover:border-gray-300 dark:hover:border-gray-700"
              >
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                      <Briefcase className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        {study.title}
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-600">
                        {study.date}
                      </p>
                    </div>
                  </div>

                  {study.award && (
                    <div className="mb-4 inline-block px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-semibold">
                      {study.award}
                    </div>
                  )}

                  {study.bullets.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {study.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 dark:text-gray-400 flex gap-2.5"
                        >
                          <span className="text-gray-400 dark:text-gray-600 flex-shrink-0">
                            ▪
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:gap-3 transition-all">
                  View Deck
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
