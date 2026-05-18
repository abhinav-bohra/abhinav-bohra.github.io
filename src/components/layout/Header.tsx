import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/ml-projects", label: "ML Projects" },
  { href: "/sde-projects", label: "SDE Projects" },
  { href: "/other-projects", label: "Other Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/skills", label: "Skills" },
  { href: "./files/Abhinav_Bohra_Resume.pdf", label: "Resume", external: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
          AB
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-normal"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-normal transition-colors ${
                  isActive(link.href)
                    ? "text-gray-900 dark:text-white font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Theme toggle + mobile menu */}
        <div className="flex items-center gap-6">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-normal"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-normal transition-colors ${
                    isActive(link.href)
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
