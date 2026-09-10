"use client";

import { navLinks, profile, stats } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { TrackerCanvas } from "./TrackerCanvas";
import { GithubIcon, MailIcon } from "./icons";

export function Sidebar() {
  const activeId = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  return (
    <aside
      aria-label="Primary"
      className="sticky top-0 hidden h-dvh flex-col overflow-y-auto border-r border-border py-[26px] pr-[22px] pl-[calc(26px+env(safe-area-inset-left))] lg:flex"
    >
      <div className="flex items-center justify-between">
        <a href="#top" className="font-display text-[16px] font-semibold">
          {profile.shortName.split(".")[0]}
          <span className="text-teal">.</span>
          {profile.shortName.split(".")[1]}
        </a>
        <ThemeToggle />
      </div>

      <nav aria-label="Section" className="mt-[30px]">
        <ul className="grid gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`-ml-[10px] block border-l-2 px-[10px] py-2 text-[14.5px] transition-colors ${
                    isActive
                      ? "border-teal text-teal"
                      : "border-transparent text-text-dim hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <TrackerCanvas />

      <div className="mt-[22px] grid gap-3">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-border pl-3">
            <span className="block font-mono text-[18px] text-teal">{s.value}</span>
            <span className="text-[11.5px] text-text-faint">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto grid gap-3.5 pt-[26px]">
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-11 items-center justify-center gap-2 border border-amber bg-amber px-[18px] py-3 text-[14.5px] font-semibold text-[#17110a] transition-transform hover:-translate-y-px hover:bg-amber-hover"
        >
          Resume
        </a>
        <div className="flex gap-2.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="flex min-h-11 min-w-11 items-center justify-center border border-border px-[14px] py-3 text-text-dim transition-colors hover:border-teal hover:text-teal"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex min-h-11 min-w-11 items-center justify-center border border-border px-[14px] py-3 text-text-dim transition-colors hover:border-teal hover:text-teal"
          >
            <MailIcon size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}
