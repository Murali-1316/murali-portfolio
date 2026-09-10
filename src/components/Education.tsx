import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="scroll-mt-[72px] border-t border-border py-15">
      <div className="mx-auto max-w-[740px] px-5 sm:px-7 lg:px-11">
        <div className="mb-[30px] flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold">Education</h2>
          <span className="font-mono text-[12.5px] text-text-faint">06</span>
        </div>
        <h3 className="text-[17px] font-semibold">{education.degree}</h3>
        <div className="mt-0.5 font-mono text-[12.5px] text-text-faint">{education.school}</div>
        <div className="mt-3.5 text-sm text-text-dim">{education.languages}</div>
      </div>
    </section>
  );
}
