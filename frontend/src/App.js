import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Paradox from "@/components/Paradox";
import Population from "@/components/Population";
import Personas from "@/components/Personas";
import Proof from "@/components/Proof";
import Counterfactual from "@/components/Counterfactual";
import HowItWorks from "@/components/HowItWorks";
import TwoRoles from "@/components/TwoRoles";
import Compliance from "@/components/Compliance";
import Pilot from "@/components/Pilot";
import WhyCrixaa from "@/components/WhyCrixaa";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App font-sans">
      <Toaster position="bottom-right" richColors />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Paradox />
        <Population />
        <Personas />
        <Proof />
        <Counterfactual />
        <HowItWorks />
        <TwoRoles />
        <Compliance />
        <Pilot />
        <WhyCrixaa />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
