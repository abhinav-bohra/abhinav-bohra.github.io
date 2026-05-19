'use client'

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navLinks = [
  { hash: "about", label: "About" },
  { hash: "experience", label: "Experience" },
  { hash: "work", label: "Work" },
  { hash: "skills", label: "Skills" },
  { hash: "case-studies", label: "Case Studies" },
  { hash: "contact", label: "Contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("about")

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash.slice(1) || "about")
      setMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isActive = (hash: string) => activeHash === hash

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur dark:border-sonic-border/70 dark:bg-sonic-canvas/90 px-5">
      <nav className="section-frame-inner mx-auto flex max-w-6xl items-center justify-between py-3 border-x border-neutral-200/80 dark:border-sonic-border/70">
        <div className="hidden items-center gap-1 rounded-md border border-neutral-200 bg-white p-1 dark:border-sonic-border/70 dark:bg-sonic-panel md:flex">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={`#${link.hash}`}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive(link.hash)
                  ? "bg-neutral-100 text-neutral-950 dark:bg-sonic-elevated dark:text-white"
                  : "text-neutral-500 hover:text-neutral-950 dark:text-white/70 dark:hover:text-white"
              }`}
            >
              {link.label}
            </a>
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
              <a
                key={link.hash}
                href={`#${link.hash}`}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  isActive(link.hash)
                    ? "bg-white text-neutral-950 dark:bg-sonic-panel dark:text-white"
                    : "text-neutral-500 hover:text-neutral-950 dark:text-white/70 dark:hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
