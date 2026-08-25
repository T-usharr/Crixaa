import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { label: "The Gap", href: "#problem", testid: "nav-link-the-gap" },
  { label: "What lenders say", href: "#lenders", testid: "nav-link-what-lenders-say" },
  { label: "How It Works", href: "#how-it-works", testid: "nav-link-how-it-works" },
  { label: "Pilot with us", href: "#pilot", testid: "nav-link-pilot-with-us" },
];

export const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          data-testid="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#top");
          }}
          className="flex items-center gap-2"
        >
          <Logo animated />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          data-testid="nav-cta-start-conversation"
          onClick={() => scrollTo("#contact")}
          className="group relative overflow-hidden bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
        >
          <span className="relative z-10">Start a conversation</span>
          <span className="absolute inset-0 -translate-x-full bg-emerald-800 transition-transform duration-300 ease-out group-hover:translate-x-0" />
        </button>
      </div>
    </header>
  );
}
