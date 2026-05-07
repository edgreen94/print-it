import { Mail, Cable, CheckSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell, SectionHeading } from "./Section";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
};

const steps: Step[] = [
  {
    number: "01",
    icon: Mail,
    title: "Request an invite",
    description: "iPhone beta today, Android list behind it. Leave an email and a little context, and we will reach out when your setup is a good fit.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    number: "02",
    icon: Cable,
    title: "Point it at your printer",
    description: "Any ESC/POS receipt printer on your Wi-Fi will do. Pair it once, test a ticket, and the rest of the workflow stays delightfully small.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Print and finish",
    description: "Type the task, hit print, carry the ticket. Tear it off when it\u2019s done, and let the stack on your desk become the progress bar.",
    gradient: "from-lime-400 to-green-500",
  },
];

export default function HowItWorks() {
  return (
    <SectionShell id="how-it-works" className="bg-background">
      <SectionHeading
        title="Setup in three steps"
        subtitle={<>From invite to first printed ticket, it&rsquo;s a short setup with very little to learn.</>}
      />

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-green-400/50 via-emerald-500/60 to-lime-400/50"
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="relative z-10 flex flex-row items-start gap-5 text-left md:flex-col md:items-center md:text-center md:gap-0">
                <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br ${step.gradient} text-white rounded-2xl shadow-lg shadow-emerald-900/10 ring-1 ring-white/25 md:mb-6`}>
                  <Icon className="w-7 h-7 md:w-10 md:h-10" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0 md:w-full">
                  <div className="text-xs font-semibold tracking-[0.2em] text-muted-foreground mb-1 md:hidden">STEP {step.number}</div>
                  <div aria-hidden="true" className="hidden md:block text-6xl font-bold text-muted/15 mb-2 tabular-nums">{step.number}</div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
