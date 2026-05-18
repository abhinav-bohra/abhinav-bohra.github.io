import { ExternalLink } from "lucide-react";
import { mlProjects } from "../data/projects";
import { Tag } from "../components/ui/Tag";

export function MLProjects() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            ML Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-16">
            Research projects from the pre-ChatGPT era: when NLP actually had 11 distinct tasks and you couldn't just prompt your way to state-of-the-art
          </p>

          <div className="space-y-12">
            {mlProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-start gap-4 mb-5">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-10 h-10 object-contain flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                          {project.title}
                        </h2>
                        {project.association && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                            {project.association}
                          </p>
                        )}
                        {project.advisor && (
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            {project.advisor}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
                          {project.startDate} — {project.endDate}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {project.publication && (
                      <div className="mb-5">
                        <a
                          href={project.publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-semibold"
                        >
                          {project.publication.venue}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200 dark:border-gray-800">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          Repository
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          Paper
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  {project.thumbnail && (
                    <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center min-h-[350px] p-8">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
