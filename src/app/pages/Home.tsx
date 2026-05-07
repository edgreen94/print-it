import Hero from "../components/Hero";
import WorkflowVisual from "../components/WorkflowVisual";
import FoundersNote from "../components/FoundersNote";
import AppScreenshots from "../components/AppScreenshots";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import RouteMeta from "../components/RouteMeta";

export default function Home() {
  return (
    <>
      <RouteMeta
        title="Print-It — A to-do list you can hold"
        description="Each task prints as a physical ticket on a thermal receipt printer. Local, private, and satisfying to finish."
        path="/"
      />
      <Hero />
      <AppScreenshots />
      <CTA />
      <WorkflowVisual />
      <FoundersNote />
      <HowItWorks />
      <Footer />
    </>
  );
}
