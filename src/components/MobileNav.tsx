"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const mobileLinks = [
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const activeId = useActiveSection(mobileLinks.map((l) => l.href.slice(1)));

  return (
    <nav
      className="sticky top-0 z-20 border-b border-border pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] backdrop-blur-md lg:hidden"
      style={{ backgroundColor: "color-mix(in srgb, var(--color-bg) 86%, transparent)" }}
    >
      <div className="mx-auto flex h-14 max-w-[740px] items-center justify-between gap-3.5 px-5 sm:px-7">
        <div className="font-display text-[15px] font-semibold">
          M<span className="text-teal">.</span>M
        </div>
        <ul className="flex gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {mobileLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`inline-block whitespace-nowrap py-2.5 text-[14px] transition-colors ${
                  activeId === link.href.slice(1) ? "text-teal" : "text-text-dim hover:text-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
