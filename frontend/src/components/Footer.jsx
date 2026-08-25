import { scrollTo } from "./Nav";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#060D16] py-12 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-md">
          <div className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 bg-emerald-500" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Crixaa
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            The underwriting decisioning layer for new-to-credit MSME loans in India.
            Pre-launch; specimen outputs on this page are illustrative, not real
            applicants or customers. Every market figure is third-party published
            data, attributed inline where it appears.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <button
            data-testid="footer-cta-start-conversation"
            onClick={() => scrollTo("#contact")}
            className="bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#060D16]"
          >
            Start a conversation
          </button>
          <p className="font-mono text-[11px] tracking-wide text-slate-500">
            © 2026 Crixaa · founders@crixaa.com
          </p>
        </div>
      </div>
    </footer>
  );
}
