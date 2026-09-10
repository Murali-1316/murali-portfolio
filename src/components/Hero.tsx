import { profile, stats } from "@/lib/data";
import { GithubIcon, MailIcon } from "./icons";

export function Hero() {
  return (
    <header className="mx-auto max-w-[740px] px-5 pt-14 pb-12 sm:px-7 lg:px-11 lg:pt-[68px] lg:pb-14">
      <div className="mb-[22px] inline-flex items-center gap-2 border border-teal/40 bg-teal/10 px-2.5 py-1 font-mono text-[12.5px] text-teal">
        <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_0_3px_rgba(31,122,117,0.18)]" />
        {profile.tagline}
      </div>

      <h1 className="font-display text-[clamp(34px,6vw,50px)] leading-[1.08] font-semibold tracking-tight">
        {profile.name}
      </h1>

      <p className="mt-3.5 max-w-[58ch] text-[18px] text-text-dim">
        I build systems that <strong className="font-semibold text-text">see, decide, and act</strong> —
        from multi-object tracking research published at IEEE CVMI, to reinforcement-learning pipelines
        and the full-stack apps that put them in front of people.
      </p>

      <div className="mt-[22px] flex flex-wrap gap-x-4.5 gap-y-2 font-mono text-[13px] text-text-faint">
        {profile.meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-11 items-center gap-2 border border-amber bg-amber px-[18px] py-3 text-[14.5px] font-semibold text-[#17110a] transition-transform hover:-translate-y-px hover:bg-amber-hover"
        >
          Resume
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="flex min-h-11 min-w-11 items-center justify-center border border-border px-[14px] py-3 text-text-dim transition-colors hover:border-teal hover:text-teal"
        >
          <GithubIcon size={19} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="flex min-h-11 min-w-11 items-center justify-center border border-border px-[14px] py-3 text-text-dim transition-colors hover:border-teal hover:text-teal"
        >
          <MailIcon size={19} />
        </a>
      </div>

      <div className="mt-11 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
        {stats.map((s) => (
          <div key={s.label} className="border border-border px-3.5 py-4">
            <div className="font-mono text-[22px] font-medium text-teal">{s.value}</div>
            <div className="mt-1 text-[12px] text-text-faint">{s.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
