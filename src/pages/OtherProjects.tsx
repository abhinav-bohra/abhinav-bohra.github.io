import { ExternalLink } from "lucide-react";
import { otherProjects } from "../data/projects";
import { Tag } from "../components/ui/Tag";

export function OtherProjects() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16 tracking-tight">
            Other Projects
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <a
                key={project.github}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all hover:border-gray-300 dark:hover:border-gray-700"
              >
                <div className="bg-gray-100 dark:bg-gray-800 aspect-video overflow-hidden">
                  <img
                    src={`./images/other-projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:gap-3 transition-all">
                    Repository
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
