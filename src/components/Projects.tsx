import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-[72px] border-t border-border py-15">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-11">
        <div className="mb-[30px] flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold">Projects</h2>
          <span className="font-mono text-[12.5px] text-text-faint">03</span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="bbox-frame flex flex-col border border-border bg-panel p-7">
              <div className="c2" />
              <h3 className="text-[18px] font-semibold">{p.title}</h3>
              <div className="mt-1.5 font-mono text-xs text-text-faint">{p.stack}</div>
              <ul className="mt-4 grid gap-1.5 pl-[18px] text-[14.5px] text-text-dim [&>li]:marker:text-teal">
                {p.points.map((point) => (
                  <li key={point} className="list-disc">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
