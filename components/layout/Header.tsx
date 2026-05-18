'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navLinks = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname() || "/"

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur dark:border-sonic-border/70 dark:bg-sonic-canvas/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-0 py-3">
        <div className="hidden items-center gap-1 rounded-md border border-neutral-200 bg-white p-1 dark:border-sonic-border/70 dark:bg-sonic-panel md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-neutral-100 text-neutral-950 dark:bg-sonic-elevated dark:text-white"
                  : "text-neutral-500 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
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
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-white text-neutral-950 dark:bg-sonic-panel dark:text-white"
                    : "text-neutral-500 hover:text-neutral-950 dark:hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
