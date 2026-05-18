import { Github, Linkedin, Twitter, BookMarked } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abhinav-bohra",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/abhinavbohra01",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhinav-bohra",
    icon: Linkedin,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=F51Ct9oAAAAJ&hl=en",
    icon: BookMarked,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-600">
            © 2026 Abhinav Bohra
          </p>
        </div>
      </div>
    </footer>
  );
}
