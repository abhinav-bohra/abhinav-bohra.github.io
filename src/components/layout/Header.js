import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const isActive = (href) => location.pathname === href;
    return (_jsxs("header", { className: "sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800", children: [_jsxs("nav", { className: "max-w-7xl mx-auto px-6 py-5 flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-xl font-bold text-gray-900 dark:text-white tracking-tight", children: "AB" }), _jsx("div", { className: "hidden md:flex items-center gap-10", children: navLinks.map((link) => link.external ? (_jsx("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-normal", children: link.label }, link.href)) : (_jsx(Link, { to: link.href, className: `text-sm font-normal transition-colors ${isActive(link.href)
                                ? "text-gray-900 dark:text-white font-semibold"
                                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`, children: link.label }, link.href))) }), _jsxs("div", { className: "flex items-center gap-6", children: [_jsx(ThemeToggle, {}), _jsx("button", { onClick: () => setMenuOpen(!menuOpen), className: "md:hidden p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors", children: menuOpen ? (_jsx(X, { className: "w-5 h-5" })) : (_jsx(Menu, { className: "w-5 h-5" })) })] })] }), menuOpen && (_jsx("div", { className: "md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900", children: _jsx("div", { className: "max-w-7xl mx-auto px-6 py-4 space-y-1", children: navLinks.map((link) => link.external ? (_jsx("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: "block px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-normal", onClick: () => setMenuOpen(false), children: link.label }, link.href)) : (_jsx(Link, { to: link.href, className: `block px-4 py-2.5 rounded-lg text-sm font-normal transition-colors ${isActive(link.href)
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`, onClick: () => setMenuOpen(false), children: link.label }, link.href))) }) }))] }));
}
