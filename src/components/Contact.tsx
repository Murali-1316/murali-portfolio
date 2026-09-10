import { profile } from "@/lib/data";

export function Contact() {
  return (
    <footer
      id="contact"
      className="scroll-mt-[72px] border-t border-border py-14"
      style={{ paddingBottom: "calc(80px + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-[740px] px-5 sm:px-7 lg:px-11">
        <h2 className="max-w-[20ch] font-display text-[26px] font-semibold">
          Let&apos;s build something that has to work in the real world.
        </h2>
        <p className="mt-3.5 max-w-[62ch] text-text-dim">
          Open to full-time roles in computer vision, ML engineering, or full-stack development.
          Available to join immediately.
        </p>

        <div className="mt-7 grid gap-2.5">
          <a href={`mailto:${profile.email}`} className="inline-flex items-baseline gap-2.5 border-b border-transparent py-1.5 text-[15px] hover:border-teal">
            <span className="w-16 font-mono text-xs text-text-faint">Email</span>
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="inline-flex items-baseline gap-2.5 border-b border-transparent py-1.5 text-[15px] hover:border-teal">
            <span className="w-16 font-mono text-xs text-text-faint">Phone</span>
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noopener" className="inline-flex items-baseline gap-2.5 border-b border-transparent py-1.5 text-[15px] hover:border-teal">
            <span className="w-16 font-mono text-xs text-text-faint">GitHub</span>
            github.com/Murali-1316
          </a>
          <a href="#top" className="inline-flex items-baseline gap-2.5 border-b border-transparent py-1.5 text-[15px] hover:border-teal">
            <span className="w-16 font-mono text-xs text-text-faint">Based</span>
            {profile.location}
          </a>
        </div>

        <div className="mt-11 text-[12.5px] text-text-faint">
          © 2026 {profile.name}. Built with Next.js, TypeScript, and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
