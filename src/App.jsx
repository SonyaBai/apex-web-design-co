import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-purple-800 via-black to-pink-600">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
          Apex Web Design Co
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
          High-End Websites Built to Bring You Clients
        </h1>

        <p className="mt-6 text-xl text-white/80 max-w-2xl">
          Premium, SEO-ready websites for service businesses that want more
          calls, more leads, and a stronger online presence.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-pink-100 transition"
          >
            Get My Free Website Quote
          </a>

          <a
            href="tel:7204670527"
            className="px-7 py-3 border border-white/30 rounded-full hover:bg-white/10 transition"
          >
            Call Now
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Fast turnaround • Mobile-first • SEO-ready • Built to convert
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
          Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Everything your business needs to look credible and get leads.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-3">Custom Web Design</h3>
            <p className="text-white/70">
              Modern, polished websites designed around your offer, your brand,
              and your ideal customer.
            </p>
          </div>

          <div className="p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-3">Local SEO</h3>
            <p className="text-white/70">
              SEO-ready structure, local keywords, and pages built to help your
              business get found online.
            </p>
          </div>

          <div className="p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-3">Website Redesign</h3>
            <p className="text-white/70">
              Upgrade an outdated website into a premium, high-converting sales
              tool.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-6 bg-white/[0.03] border-y border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Built for small businesses that need results fast.
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-white/70">
          <div>7–10 Day Builds</div>
          <div>Clean Mobile Design</div>
          <div>Lead-Focused Layouts</div>
          <div>Direct Communication</div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
              Why Apex
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              No confusing agency process. Just a clean website built to help
              you grow.
            </h2>
          </div>

          <div className="space-y-4 text-white/75">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              ✓ Designed to generate calls and form submissions
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              ✓ Mobile-first experience for customers on the go
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              ✓ SEO-ready structure from day one
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              ✓ Premium visuals that make your business look established
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 text-center bg-gradient-to-b from-black via-purple-950/40 to-black"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
          Start Today
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready for a website that works harder for your business?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Send a quick message and I’ll follow up with next steps.
        </p>

        <form
          action="https://formspree.io/f/YOUR-NEW-FORM-ID"
          method="POST"
          className="max-w-xl mx-auto space-y-4 text-left"
        >
          <input type="hidden" name="_subject" value="New Lead - Apex Web Design Co" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-pink-400 placeholder:text-white/40"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-pink-400 placeholder:text-white/40"
          />

          <input
            name="phone"
            placeholder="Your Phone (optional)"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-pink-400 placeholder:text-white/40"
          />

          <textarea
            name="message"
            placeholder="Tell me what kind of website you need"
            required
            rows="5"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-pink-400 placeholder:text-white/40"
          />

          <button
            type="submit"
            className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-pink-100 transition"
          >
            Get My Free Website Quote
          </button>

          <p className="text-sm text-white/50 text-center">
            I usually respond within 1–2 hours.
          </p>
        </form>

        <p className="mt-8 text-white/50 text-sm">
          Prefer to text?{" "}
          <a href="tel:7204670527" className="text-white underline">
            720-467-0527
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Apex Web Design Co. All rights reserved.
      </footer>
    </main>
  );
}
