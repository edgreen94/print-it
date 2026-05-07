export default function FoundersNote() {
  return (
    <section id="founder" className="py-20 md:py-28 px-4 sm:px-6 bg-muted/25 desk-wash scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-3xl mx-auto">
        <div className="paper-panel animate-drift-in rounded-3xl px-6 sm:px-10 py-9 sm:py-12 ring-1 ring-black/[0.02]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-800/90 mb-4 sm:mb-5">
            Why I built Print-It
          </p>
          <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              I built Print-It because my to-do list kept getting buried in the same device that was supposed to help me stay on track. Every notification pulled me away from the one thing I actually needed to focus on.
            </p>
            <p>
              The solution ended up being simple: print the next task, put the phone aside, and keep the work right in front of me. One small ticket on the desk. One clear next step. One satisfying tear when it&rsquo;s done.
            </p>
            <p>
              Print-It is still early&mdash;iPhone beta is live, and Android is on the way. If this sounds like a better way to work, I&rsquo;d love to hear what you think.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 flex items-center gap-4">
            <div className="receipt-rule h-px flex-1" aria-hidden="true" />
            <p className="font-mono text-sm text-stone-600 whitespace-nowrap">&mdash; Alex, founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
