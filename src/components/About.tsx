import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-[72px] border-t border-border py-15">
      <div className="mx-auto max-w-[740px] px-5 sm:px-7 lg:px-11">
        <div className="mb-[30px] flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold">About</h2>
          <span className="font-mono text-[12.5px] text-text-faint">01</span>
        </div>
        <p className="max-w-[62ch] text-text-dim">{about}</p>
      </div>
    </section>
  );
}
