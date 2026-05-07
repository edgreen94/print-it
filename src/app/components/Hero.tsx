import { Link } from "react-router";
import Logo from "./Logo";

export default function Hero() {
  const trustPoints = [
    "iPhone beta live now",
    "Works with common ESC/POS Wi-Fi printers",
    "No account or cloud required",
    "Tasks stay on your device",
  ];
  const trustPointDelays = ["0.16s", "0.24s", "0.32s", "0.4s"];

  return (
    <section className="min-h-[92vh] flex flex-col desk-wash">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex justify-between items-center gap-3">
          <Link to="/" className="min-w-0" aria-label="Print-It home">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium lg:gap-7">
            <a href="#screens" className="text-muted-foreground hover:text-foreground transition-colors duration-200">The app</a>
            <a href="#workflow" className="text-muted-foreground hover:text-foreground transition-colors duration-200">The workflow</a>
            <a href="#founder" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Why Print-It</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Setup</a>
            <a href="#availability" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Availability</a>
            <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Help</Link>
          </nav>
          <a
            href="#availability"
            className="bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:bg-primary/95 transition-all duration-200 text-sm sm:text-base whitespace-nowrap flex-shrink-0"
          >
            <span className="sm:hidden">Early access</span>
            <span className="hidden sm:inline">Get early access</span>
          </a>
        </div>
      </header>

      <div className="flex-1 flex items-center px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto grid gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)] 2xl:grid-cols-[minmax(22rem,30rem)_minmax(0,1fr)]">
          <div className="text-center lg:text-left space-y-6 md:space-y-7 order-2 lg:order-1 lg:max-w-xl 2xl:max-w-[28rem] lg:justify-self-start">
            <div className="paper-chip animate-drift-in inline-flex items-center rounded-full px-4 py-2 ring-1 ring-black/[0.03]">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">Built for people who focus better with paper</span>
            </div>

            <h1 className="animate-drift-in stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-bold leading-[1.06] tracking-tight">
              Print your next task.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500">
                Keep your phone out of it
              </span>
            </h1>

            <p className="animate-drift-in stagger-2 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Print-It turns your next to-do into a physical ticket on a receipt printer, so the work stays visible on your desk instead of getting buried under apps, tabs, and notifications.
            </p>

            <div className="grid gap-2 pt-1 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <div
                  key={point}
                  className="paper-chip animate-drift-in rounded-2xl px-4 py-3 text-sm text-foreground ring-1 ring-black/[0.02]"
                  style={{ animationDelay: trustPointDelays[index] }}
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="animate-drift-in stagger-5 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center pt-1 md:pt-2">
              <a
                href="#availability"
                className="bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-sm hover:shadow-md hover:bg-primary/95 transition-all duration-200 text-base sm:text-lg text-center font-medium"
              >
                Get early access
              </a>
              <a
                href="#compatibility"
                className="paper-chip px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-accent/80 transition-all duration-200 text-base sm:text-lg text-center font-medium text-foreground"
              >
                See printer compatibility
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full min-w-0 lg:justify-self-stretch">
            <div className="relative mx-auto w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none lg:mx-0">
              <div aria-hidden="true" className="animate-glow-pulse absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-br from-emerald-200/35 via-amber-100/30 to-transparent blur-3xl rounded-[3rem]" />
              <picture>
                <source media="(max-width: 640px)" srcSet="/hero-workflow-sm.webp" />
                <img
                  src="/hero-workflow.webp"
                  alt="Print-It workflow: phone showing Sharpen pencils ticket and Print ticket button, thermal printer outputting a ticket, and a spike stacked with printed tasks including Wash car and Call Mum."
                  className="paper-panel animate-paper-float relative w-full rounded-2xl md:rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06]"
                  width={1024}
                  height={546}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
