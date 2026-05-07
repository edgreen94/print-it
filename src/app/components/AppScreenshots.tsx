import screenshotQueue from "../../imports/screenshot-queue.webp";
import screenshotPrint from "../../imports/screenshot-print.webp";
import screenshotSettings from "../../imports/screenshot-settings.webp";
import { SectionShell, SectionHeading } from "./Section";

type Shot = {
  src: string;
  alt: string;
  heading: string;
  body: string;
  blur: string;
};

const shots: Shot[] = [
  {
    src: screenshotPrint,
    alt: "Print-It compose screen with a task being written",
    heading: "Write the ticket",
    body: "A single calm canvas. Type, preview, print.",
    blur: "from-green-500/20 to-emerald-500/20",
  },
  {
    src: screenshotQueue,
    alt: "Print-It print queue listing pending and completed tickets",
    heading: "Nothing goes missing",
    body: "Prints wait in a local queue. Turn the printer on \u2014 they finish themselves.",
    blur: "from-emerald-500/20 to-teal-500/20",
  },
  {
    src: screenshotSettings,
    alt: "Print-It printer settings and pairing screen",
    heading: "Set it once",
    body: "Pair your printer over local Wi-Fi. No accounts, no cloud.",
    blur: "from-lime-500/20 to-green-500/20",
  },
];

export default function AppScreenshots() {
  const shotDelays = ["0.08s", "0.16s", "0.24s"];

  return (
    <SectionShell id="screens" className="bg-gradient-to-b from-background via-muted/15 to-muted/30 desk-wash">
      <SectionHeading
        title="Three screens, on purpose"
        subtitle={
          <>
            We kept it small. Write the task, watch the queue, point it at your printer. That&rsquo;s the whole app.
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
        {shots.map(({ src, alt, heading, body, blur }, index) => (
          <div
            key={heading}
            className="animate-drift-in flex flex-col items-center"
            style={{ animationDelay: shotDelays[index] }}
          >
            <div className="relative w-full max-w-[260px]">
              <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${blur} blur-3xl scale-110 opacity-90`} />
              <div className="relative bg-gray-900 rounded-[2.25rem] md:rounded-[3rem] p-2 md:p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] border-[6px] md:border-[7px] border-gray-800/95 ring-1 ring-white/5">
                <img
                  src={src}
                  alt={alt}
                  className="rounded-[1.5rem] md:rounded-[2.2rem] w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="mt-6 sm:mt-7 text-center max-w-[260px] px-1">
              <h3 className="font-semibold mb-2 tracking-tight text-foreground">{heading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
