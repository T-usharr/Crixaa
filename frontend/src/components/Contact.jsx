import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Reveal, Chapter } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = { name: "", email: "", organization: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/leads`, form);
      toast.success("Received. We'll reply from founders@crixaa.com within two working days.");
      setForm(INITIAL);
    } catch (err) {
      toast.error("Something didn't go through. Please email founders@crixaa.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors duration-200";

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="blueprint-grid-dark bg-[#09131F] py-20 text-slate-100 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <Chapter index="11" label="The next application in your queue" dark />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              If your credit team is already stitching together a GST parser, a bureau
              pull, and a field visit to make one call — talk to us before your next
              new-to-credit application sits in the queue.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 border-l-2 border-emerald-500 pl-5 text-sm leading-relaxed text-slate-400">
              We're onboarding a small number of founding pilot partners. Early
              conversations are covered under NDA on request — and we'll tell you
              plainly if we're not ready for you yet.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 font-mono text-sm text-slate-400">
              Prefer email?{" "}
              <a
                data-testid="footer-founder-email"
                href="mailto:founders@crixaa.com"
                className="text-emerald-400 underline decoration-dotted underline-offset-4 transition-colors hover:text-emerald-300"
              >
                founders@crixaa.com
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            data-testid="contact-form"
            onSubmit={submit}
            className="border border-[#1E293B] bg-[#0C1826] p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Full name
                </label>
                <input
                  id="contact-name"
                  data-testid="contact-form-name-input"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Ananya Rao"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Work email
                </label>
                <input
                  id="contact-email"
                  data-testid="contact-form-email-input"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="ananya@your-nbfc.in"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="contact-org" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Organization
                </label>
                <input
                  id="contact-org"
                  data-testid="contact-form-org-input"
                  required
                  value={form.organization}
                  onChange={set("organization")}
                  placeholder="NBFC / Small Finance Bank"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  What are you underwriting today?
                </label>
                <textarea
                  id="contact-message"
                  data-testid="contact-form-message-input"
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Ticket sizes, geographies, monthly application volume, current NTC approval rate — anything that helps us be specific."
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                data-testid="contact-form-submit-button"
                type="submit"
                disabled={submitting}
                className="group relative w-full overflow-hidden bg-emerald-600 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0C1826] disabled:opacity-60"
              >
                <span className="relative z-10">
                  {submitting ? "Sending…" : "Start a conversation"}
                </span>
              </button>
              <p className="text-center font-mono text-[11px] text-slate-500">
                Read by the founders. No sequences, no newsletters.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
