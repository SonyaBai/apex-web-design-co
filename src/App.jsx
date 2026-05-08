import React from "react";

const services = [
  {
    title: "Custom Website Design",
    text: "A polished site built around your offer, your market, and the actions you want visitors to take.",
  },
  {
    title: "SEO Foundations",
    text: "Clean structure, fast pages, strong headings, and local search basics so customers can find you.",
  },
  {
    title: "Lead-Focused Pages",
    text: "Clear calls to action, trust-building sections, and layouts that make it easy to request a quote.",
  },
];

const processSteps = [
  "Discovery call",
  "Homepage direction",
  "Full site build",
  "Launch support",
];

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Most starter sites can launch in one to three weeks once content, photos, and direction are ready.",
  },
  {
    question: "Can you improve an existing site?",
    answer: "Yes. Apex can refresh the design, tighten the message, improve speed, and make the site easier to update.",
  },
  {
    question: "Do you help with mobile design?",
    answer: "Every layout is built for phones first, then refined for tablets and desktop screens.",
  },
];

export default function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-label="Apex Web Design">
        <video className="hero-video" autoPlay muted loop playsInline poster="/services-preview.png">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="container hero-content">
          <p className="eyebrow">Premium websites for service businesses</p>
          <h1>
            Websites Built to Grow
            <span>Your Business</span>
          </h1>
          <p className="hero-copy">
            High-end, SEO-ready websites designed to turn visitors into real leads, calls, and revenue.
          </p>
          <a className="button" href="#contact">
            Get My Free Website Quote
          </a>
        </div>
      </section>

      <section className="stats band">
        <div className="container stats-grid">
          <div>
            <strong>24/7</strong>
            <span>Your best salesperson online</span>
          </div>
          <div>
            <strong>Fast</strong>
            <span>Pages designed for quick loading</span>
          </div>
          <div>
            <strong>Mobile</strong>
            <span>Layouts made for phone-first buyers</span>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2>
            Premium Design. <span>Built to Convert.</span>
          </h2>

          <div className="service-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="preview-frame">
            <img src="/services-preview.png" alt="Apex Web Design services preview" />
          </div>
        </div>
      </section>

      <section className="section recent-work">
        <div className="container work-panel">
          <div>
            <p className="eyebrow">Recent Work</p>
            <h2>
              Elevate Auto & Diesel Repair.
            </h2>
            <p>
              A service-business website built to make the shop look credible, help local drivers understand
              the offer quickly, and move visitors toward contacting the team.
            </p>
          </div>
          <a
            className="button"
            href="https://www.elevateautoanddieselrepair.com"
            target="_blank"
            rel="noreferrer"
          >
            View Live Site
          </a>
        </div>
      </section>

      <section className="section split">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Process</p>
            <h2>
              A clear path from idea to launch.
            </h2>
          </div>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-row" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing">
        <div className="container pricing-panel">
          <div>
            <p className="eyebrow">Starter Package</p>
            <h2>Launch-ready website essentials.</h2>
            <p>
              Perfect for a local service business that needs a credible, modern site with a sharp homepage,
              service section, mobile layout, and quote-focused contact flow.
            </p>
          </div>
          <a className="button button-dark" href="#contact">
            Ask About Pricing
          </a>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <p className="eyebrow">Questions</p>
          <h2>
            Simple answers before we start.
          </h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <p className="eyebrow">Start here</p>
          <h2>Let's build your next website</h2>
          <p>Tell me about your business and I will show you what is possible.</p>
          <a className="button" href="mailto:hello@apexwebdesignco.com">
            Email Apex Web Design
          </a>
        </div>
      </section>
    </main>
  );
}
