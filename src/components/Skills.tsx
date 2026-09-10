import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-[72px] border-t border-border py-15">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-11">
        <div className="mb-[30px] flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold">Skills</h2>
          <span className="font-mono text-[12.5px] text-text-faint">05</span>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="border border-border bg-panel p-[18px] @container">
              <div className="mb-2.5 text-[13px] text-text-faint">{group.category}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`border border-border px-2.5 py-1 font-mono text-[12.5px] text-text-dim ${
                      group.accent === "ml" ? "border-l-2 border-l-amber" : "border-l-2 border-l-teal"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
