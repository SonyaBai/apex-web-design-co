import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">
            Apex<span className="text-fuchsia-400">.</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#why" className="hover:text-white">Why Apex</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-fuchsia-100 transition"
          >
            Free Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,0,204,.38),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(106,0,255,.45),transparent_35%),linear-gradient(135deg,#030303_0%,#090015_45%,#230047_75%,#ff00cc_145%)]" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.35em] text-xs mb-5">
              Apex Web Design Co
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Premium Websites That Bring You Clients
            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/70 max-w-xl">
              High-end, SEO-ready websites for service businesses that want more
              calls, more leads, and a stronger online presence.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white text-black px-8 py-4 font-semibold hover:scale-105 transition"
              >
                Get My Free Website Quote
              </a>

              <a
                href="tel:7204670527"
                className="rounded-full border border-white/30 px-8 py-4 font-semibold backdrop-blur hover:bg-white/10 transition"
              >
                Call Now
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Fast turnaround • Mobile-first • SEO-ready • Built to convert
            </p>
          </div>

          {/* HERO GRAPHIC */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-fuchsia-500/25 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-2xl rotate-1">
              <div className="rounded-[1.5rem] bg-black border border-white/10 overflow-hidden">
                <div className="h-10 border-b border-white/10 flex items-center gap-2 px-4">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>

                <div className="p-7">
                  <div className="h-52 rounded-2xl bg-gradient-to-br from-fuchsia-500/50 via-purple-700/40 to-black border border-white/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 blur-sm" />
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-xl bg-white/10 border border-white/10" />
                    <div className="h-24 rounded-xl bg-white/10 border border-white/10" />
                    <div className="h-24 rounded-xl bg-white/10 border border-white/10" />
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-8 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-5 shadow-xl">
              <p className="text-3xl font-bold">7–10</p>
              <p className="text-white/50 text-sm">day builds</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-4 gap-6 text-center">
          {["Lead-Focused", "SEO-Ready", "Mobile-First", "Premium Design"].map((item) => (
            <div key={item} className="text-white/65 text-sm uppercase tracking-widest">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-fuchsia-300 uppercase tracking-[0.35em] text-xs mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Everything your business needs to look credible and get more leads.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              ["Custom Web Design", "Modern websites designed around your offer, your brand, and your ideal customer."],
              ["Local SEO", "SEO-ready structure, local keywords, and pages built to help your business get found."],
              ["Website Redesign", "Turn an outdated site into a premium, high-converting sales tool."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08] transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-purple-700/30 border border-white/10 mb-8 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / PORTFOLIO */}
      <section id="work" className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />

        <div className="relative max-w-7xl mx-auto">
          <p className="text-fuchsia-300 uppercase tracking-[0.35em] text-xs mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Websites designed to make small businesses look established.
          </h2>

          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-zinc-950 via-purple-900/70 to-fuchsia-700/70 p-8">
                <div className="h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur flex items-center justify-center">
                  <p className="text-2xl font-bold">Elevated Auto & Diesel</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold">Automotive Repair Website</h3>
                <p className="mt-3 text-white/60">
                  Luxury-style website built for calls, service visibility, and local credibility.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-black via-zinc-900 to-white/20 p-8">
                <div className="h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur flex items-center justify-center">
                  <p className="text-2xl font-bold">Demo Service Brand</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold">Lead-Generation Demo Site</h3>
                <p className="mt-3 text-white/60">
                  Premium layout for contractors, med spas, repair shops, and local service brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.35em] text-xs mb-4">
              Why Apex
            </p>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              No generic templates. No confusing agency process.
            </h2>

            <p className="mt-6 text-white/60 text-lg">
              Just a polished website built to help your business look better,
              rank better, and convert better.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Designed to generate calls and form submissions",
              "Clean mobile experience for customers on the go",
              "SEO-ready structure from day one",
              "Direct communication from start to finish",
              "Premium visuals that make your business look established",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-white/75"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,204,.22),transparent_35%),linear-gradient(180deg,#000,#12001f)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-fuchsia-300 uppercase tracking-[0.35em] text-xs mb-4">
            Start Today
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready for a website that works harder for your business?
          </h2>

          <p className="mt-6 text-white/65 text-lg">
            Send a quick message and I’ll follow up with next steps.
          </p>

          <form
            action="https://formspree.io/f/xojrvwwb"
            method="POST"
            className="mt-12 grid gap-4 text-left"
          >
            <input type="hidden" name="_subject" value="New Lead - Apex Web Design Co" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <input
              name="name"
              required
              placeholder="Your Name"
              className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-300 text-white placeholder:text-white/40"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-300 text-white placeholder:text-white/40"
            />

            <input
              name="phone"
              placeholder="Phone Number (optional)"
              className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-300 text-white placeholder:text-white/40"
            />

            <textarea
              name="message"
              required
              placeholder="Tell me what kind of website you need"
              rows="5"
              className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-300 text-white placeholder:text-white/40"
            />

            <button
              type="submit"
              className="rounded-full bg-white text-black px-8 py-4 font-semibold hover:bg-fuchsia-100 hover:scale-[1.02] transition"
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
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Apex Web Design Co. All rights reserved.
      </footer>
    </main>
  );
}
