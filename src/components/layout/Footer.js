import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("footer", { className: "border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 mt-24", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 py-12", children: _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-8", children: [_jsx("div", { className: "flex items-center gap-5", children: socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (_jsx("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors", "aria-label": link.label, children: _jsx(Icon, { className: "w-4 h-4" }) }, link.href));
                        }) }), _jsx("p", { className: "text-xs text-gray-500 dark:text-gray-600", children: "\u00A9 2026 Abhinav Bohra" })] }) }) }));
}
