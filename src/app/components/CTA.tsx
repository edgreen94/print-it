import { FormEvent, useState } from "react";
import { Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./Section";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("Tell us where to reach you and what setup you have in mind.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setMessage("Sending your note...");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: formData,
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("success");
      setMessage(payload?.message ?? "You’re on the list. We’ll be in touch.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t send that just now. Email support@print-it-app.com and we’ll still get you sorted.",
      );
    }
  }

  return (
    <SectionShell id="availability" className="bg-gradient-to-b from-muted/20 to-background">
      <SectionHeading
        title="Get Print-It"
        subtitle={
          <>
            It&rsquo;s early. Drop us a line and we&rsquo;ll bring you in when the queue&rsquo;s your size &mdash; no spam, just the emails that actually matter.
          </>
        }
      />

      <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-[1.35fr_0.95fr] mb-10 md:mb-12">
        <form
          method="post"
          action="/api/waitlist"
          onSubmit={handleSubmit}
          className="paper-panel animate-drift-in rounded-[2rem] p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-sm ring-1 ring-white/20">
              <Send className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">Join the waitlist</h3>
              <p className="text-sm text-muted-foreground">A short note is enough. If you already have a printer, tell us which one.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-foreground">Email address</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              className="w-full rounded-xl border border-border/90 bg-background/90 px-4 py-3 text-foreground shadow-sm transition-colors outline-none placeholder:text-muted-foreground/80 focus:border-emerald-500"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">Platform</span>
              <select
                name="platform"
                defaultValue="iPhone"
                className="w-full rounded-xl border border-border/90 bg-background/90 px-4 py-3 text-foreground shadow-sm transition-colors outline-none focus:border-emerald-500"
              >
                <option value="iPhone">iPhone beta</option>
                <option value="Android">Android updates</option>
                <option value="Both">Both</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">Printer model</span>
              <input
                type="text"
                name="printerModel"
                autoComplete="off"
                placeholder="Optional, if you already have one"
                className="w-full rounded-xl border border-border/90 bg-background/90 px-4 py-3 text-foreground shadow-sm transition-colors outline-none placeholder:text-muted-foreground/80 focus:border-emerald-500"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-foreground">What kind of setup are you hoping for?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Desk setup, home workflow, ADHD support, family planning, tiny receipt-printer joy..."
                className="w-full resize-y rounded-xl border border-border/90 bg-background/90 px-4 py-3 text-foreground shadow-sm transition-colors outline-none placeholder:text-muted-foreground/80 focus:border-emerald-500"
              />
            </label>

            <label className="hidden" aria-hidden="true">
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-sm transition-all hover:translate-y-[-1px] hover:bg-foreground/92 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Request access"}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <p
              className={`text-sm leading-relaxed ${
                status === "error"
                  ? "text-destructive"
                  : status === "success"
                    ? "text-emerald-700"
                    : "text-muted-foreground"
              }`}
              role="status"
            >
              {status === "success" && <CheckCircle2 className="mr-1 inline h-4 w-4 align-[-2px]" aria-hidden="true" />}
              {message}
            </p>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Prefer email? You can still write to{" "}
            <a
              href="mailto:support@print-it-app.com"
              className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-emerald-600/60 transition-colors"
            >
              support@print-it-app.com
            </a>
            .
          </p>
        </form>

        <div className="grid gap-4">
          <div className="paper-panel animate-drift-in stagger-1 rounded-2xl p-5 sm:p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-sm ring-1 ring-white/20">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="font-semibold text-foreground tracking-tight mb-1">What happens next</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We read every submission, sort by platform and printer fit, and reply when there is a sensible next step rather than blasting everyone at once.
            </p>
          </div>

          <div className="paper-chip animate-drift-in stagger-2 rounded-2xl p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">Right now</p>
            <p className="font-semibold text-foreground tracking-tight">iPhone beta, actively testing</p>
          </div>
          <div className="paper-chip animate-drift-in stagger-3 rounded-2xl p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">Next up</p>
            <p className="font-semibold text-foreground tracking-tight">Android build, planning underway</p>
          </div>
          <div className="paper-chip animate-drift-in stagger-4 rounded-2xl p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">Best setup</p>
            <p className="font-semibold text-foreground tracking-tight">Home Wi-Fi, iPhone, and an ESC/POS printer</p>
          </div>
        </div>
      </div>

      <div id="compatibility" className="max-w-5xl mx-auto bg-muted/60 border border-border/80 p-6 sm:p-9 rounded-3xl scroll-mt-24 md:scroll-mt-28 shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-3">Printer compatibility</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
          Built for ESC/POS thermal receipt printers on your local network &mdash; 58mm and 80mm rolls. These are the ones we&rsquo;d reach for first:
        </p>
        <div className="flex flex-wrap gap-2.5 sm:gap-3 text-sm">
          {["Epson TM-M30", "Star TSP143", "MUNBYN IMP001", "Phomemo M02"].map((name) => (
            <span
              key={name}
              className="bg-background px-3 sm:px-4 py-2 rounded-lg border border-border/90 font-medium text-foreground/90 shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Not sure? Email your printer model and we&rsquo;ll check fit before you buy one.
        </p>
      </div>
    </SectionShell>
  );
}
