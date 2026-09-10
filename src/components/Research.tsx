import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="scroll-mt-[72px] border-t border-border py-15">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-11">
        <div className="mb-[30px] flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold">Research</h2>
          <span className="font-mono text-[12.5px] text-text-faint">02</span>
        </div>

        <div className="bbox-frame border border-border bg-panel p-7">
          <div className="c2" />
          <div className="mb-3.5 flex flex-wrap gap-x-4 gap-y-2.5 font-mono text-[12.5px] text-teal">
            <span>{research.venue}</span>
            <span>{research.role}</span>
            <span>{research.date}</span>
          </div>
          <h3 className="mb-3 text-[19px] leading-[1.4] font-semibold">{research.title}</h3>
          <p className="mb-4 max-w-[74ch] text-text-dim">{research.abstract}</p>
          <ul className="grid gap-2">
            {research.findings.map((f) => (
              <li key={f} className="relative pl-4 text-[14.5px]">
                <span className="absolute top-[9px] left-0 h-1.5 w-1.5 bg-amber" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-4.5 text-[12.5px] text-text-faint">
            DOI: {research.doi}{" "}
            <a
              href={research.doiHref}
              target="_blank"
              rel="noopener"
              className="text-text-dim underline decoration-1 underline-offset-3"
            >
              Read on IEEE Xplore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
