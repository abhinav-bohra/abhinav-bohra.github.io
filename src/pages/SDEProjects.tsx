import { ExternalLink } from "lucide-react";
import { sdeProjects } from "../data/projects";
import { Tag } from "../components/ui/Tag";
import { ImageSlider } from "../components/ui/ImageSlider";

export function SDEProjects() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            SDE Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-16">
            Software builds before "vibe-coding" was a thing and Stack Overflow threads were sacred texts you bookmarked
          </p>

          <div className="space-y-12">
            {sdeProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-10 h-10 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    {project.projectName && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {project.projectName}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      {project.advisor}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                      {project.startDate} — {project.endDate}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-7 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8 rounded-lg overflow-hidden">
                  <ImageSlider
                    images={project.images}
                    basePath="./images/sde-projects/"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-7 pb-7 border-b border-gray-200 dark:border-gray-800">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  View Repository
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
