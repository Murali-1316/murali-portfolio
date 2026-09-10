import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-[72px] border-t border-border py-15">
      <div className="mx-auto max-w-[740px] px-5 sm:px-7 lg:px-11">
        <div className="mb-[30px] flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold">Experience</h2>
          <span className="font-mono text-[12.5px] text-text-faint">04</span>
        </div>

        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3.5 gap-y-1.5">
              <h3 className="text-[17px] font-semibold">{job.company}</h3>
              <span className="font-mono text-[12.5px] text-text-faint">{job.dates}</span>
            </div>
            <div className="mt-1 text-sm text-teal">{job.role}</div>
            <ul className="mt-4 grid gap-1.5 pl-[18px] text-[14.5px] text-text-dim [&>li]:marker:text-amber">
              {job.points.map((point) => (
                <li key={point} className="list-disc">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
