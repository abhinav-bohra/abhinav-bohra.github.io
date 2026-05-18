import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "../data/profile";
import { Tag } from "../components/ui/Tag";

export function Home() {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center mb-16">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight tracking-tight">
                {profile.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-semibold"
                  >
                    {link.icon === "Mail" && <Mail className="w-4 h-4" />}
                    {link.icon === "Linkedin" && <Linkedin className="w-4 h-4" />}
                    {link.icon === "Github" && <Github className="w-4 h-4" />}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About */}
          <section className="space-y-8 mb-20 border-t border-gray-200 dark:border-gray-800 pt-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                {profile.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <Tag key={interest}>{interest}</Tag>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
