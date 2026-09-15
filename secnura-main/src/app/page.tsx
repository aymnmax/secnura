"use client";

import { FormEvent, useEffect, useState, type PointerEvent } from "react";
import { services } from "@/features/services/data";

function Logo({ className = "" }: { className?: string }) {
  return <img src="/brand/secnura-wordmark.png" alt="Secnura" className={className} />;
}

function Shield({ className = "" }: { className?: string }) {
  return <img src="/brand/secnura-shield.png" alt="Secnura shield" className={className} />;
}

function SecurityShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.Icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  function changeService(nextIndex: number) {
    setActiveIndex((nextIndex + services.length) % services.length);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("a, button")) return;
    setDragStart(event.clientX);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (dragStart === null || (event.target as HTMLElement).closest("a, button")) return;
    const delta = event.clientX - dragStart;
    if (Math.abs(delta) > 45) changeService(activeIndex + (delta < 0 ? 1 : -1));
    setDragStart(null);
  }

  const serviceNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <div
      className="security-showcase compact"
      aria-label="Secnura cybersecurity services showcase"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => setDragStart(null)}
    >
      <div className="showcase-glow" aria-hidden="true" />

      <div className="showcase-main">
        <div className="showcase-copy">
          <span className="showcase-eyebrow">CYBERSECURITY SERVICES</span>
          <h2>Practical protection, <span>without the complexity.</span></h2>
          <p>
            From testing and monitoring to incident response and awareness, we help your team know what matters and what to do next.
          </p>
          <div className="showcase-copy-actions">
            <a href="#services">Explore all services <b>→</b></a>
            <span>Swipe or wait for the next service</span>
          </div>
        </div>

        <div className="showcase-person" aria-hidden="true">
          <div className="person-orbit orbit-a" />
          <div className="person-orbit orbit-b" />
          <div className="advisor-card">
            <div className="advisor-head" />
            <div className="advisor-body" />
            <div className="advisor-screen"><span /></div>
          </div>
          <div className="advisor-bubble">
            <span>NEED A STARTING POINT?</span>
            <strong>We’ll show you<br />where to begin.</strong>
          </div>
        </div>
      </div>

      <div className="showcase-service-panel" aria-live="polite">
        <div className="showcase-service-meta">
          <span>SERVICE {serviceNumber} / {String(services.length).padStart(2, "0")}</span>
          <span><i /> LIVE SERVICE SPOTLIGHT</span>
        </div>

        <article className="showcase-feature-card compact-card" key={activeService.slug}>
          <div className="showcase-feature-icon"><ActiveIcon /></div>
          <div className="showcase-feature-copy">
            <span>{activeService.shortName.toUpperCase()}</span>
            <h3>{activeService.name}</h3>
            <p>{activeService.description}</p>
          </div>
          <a className="showcase-feature-link" href="#contact">Discuss this service <b>→</b></a>
        </article>

        <div className="showcase-progress" role="tablist" aria-label="Select a cybersecurity service">
          {services.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${service.name}`}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => changeService(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


const approach = [
  ["01", "See exposure", "Map what is visible, vulnerable and most important to the business."],
  ["02", "Reduce risk", "Fix the weaknesses that create the clearest path to business impact."],
  ["03", "Stay alert", "Improve monitoring, detection and security awareness before issues grow."],
  ["04", "Act fast", "Contain incidents, investigate evidence and communicate clearly."],
  ["05", "Build resilience", "Turn lessons into stronger controls, habits and long-term confidence."],
];


export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") || ""),
          email: String(form.get("email") || ""),
          company: String(form.get("company") || ""),
          phone: String(form.get("phone") || ""),
          companySize: String(form.get("companySize") || "1-10"),
          serviceInterest: String(form.get("serviceInterest") || "vapt"),
          message: String(form.get("message") || ""),
        }),
      });
      setStatus(response.ok ? "success" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="site-shell">
      <header className="site-nav">
        <div className="nav-inner container">
          <a href="#top" className="nav-brand"><Logo className="nav-logo" /></a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#training">Training</a>
            <a href="#contact" className="nav-button">Talk to us <span>↗</span></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="kicker"><span /> CYBERSECURITY FOR THE REAL WORLD</div>
              <h1>Protect what matters.<br /><span>Move forward</span> with confidence.</h1>
              <p className="hero-text">Secnura helps organisations understand their exposure, reduce meaningful risk, and build security that works for their people, systems and business — not just their audit report.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#contact">Talk to a security expert <span>→</span></a>
                <a className="button-ghost" href="#services">See our services</a>
              </div>
              <div className="hero-trust">
                <div><strong>SEE THE RISK</strong><span>Know where your exposure starts.</span></div>
                <div><strong>PRIORITISE</strong><span>Focus effort where it matters.</span></div>
                <div><strong>STAY READY</strong><span>Build resilience that lasts.</span></div>
              </div>
            </div>
            <SecurityShowcase />
          </div>
        </section>

        <section className="signal-strip">
          <div className="container signal-inner">
            <span>SECURITY SHOULD BE A RIGHT, NOT A LUXURY.</span>
            <i />
            <span>PEOPLE • PROCESS • TECHNOLOGY</span>
          </div>
        </section>

        <section id="about" className="story-section">
          <div className="container story-grid">
            <div className="story-label">
              <div className="kicker"><span /> OUR STORY</div>
              <div className="story-mark"><Shield className="story-shield" /><span>SECNURA</span></div>
            </div>
            <div className="story-copy">
              <h2>It started with a <span>community.</span></h2>
              <p>As active members and connectors within the cybersecurity community, we spent countless hours talking to people, businesses, and founders about the threats they faced online. Time and again, we saw the same pattern: people knew they needed security but had no idea where to start, and when they did reach out for help, they were met with bills that felt more like a penalty than a solution.</p>
              <p>Cybersecurity had become a privilege, not a right. Small businesses, startups, and individuals were left exposed simply because they couldn't afford the enterprise-level pricing that large firms demanded, while the threats they faced were just as real as those aimed at big corporations.</p>
              <div className="story-callout"><span>We knew this had to change.</span><strong>Security is a right, not a luxury.</strong></div>
              <p>That's why we built Secnura: to make cybersecurity accessible to everyone, not just those who can pay premium prices. Every business, regardless of size, deserves protection from today's digital threats. Every individual deserves to connect and transact online without fear of exploitation.</p>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker"><span /> OUR SERVICES</div>
                <h2>Comprehensive security for a <span>stronger tomorrow.</span></h2>
              </div>
              <p>One security partner across assessment, prevention, monitoring, response, resilience and awareness — scaled to fit your organisation.</p>
            </div>

            <div className="service-matrix">
              {services.map((service, index) => (
                <article className="service-card" key={service.slug}>
                  <div className="service-index">0{index + 1}</div>
                  <div className="service-icon"><service.Icon /></div>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <a href="#contact" className="service-arrow" aria-label={`Discuss ${service.name}`}>↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="container">
            <div className="outcomes-head">
              <div>
                <div className="kicker light"><span /> THE SECNURA DIFFERENCE</div>
                <h2>From uncertainty to <span>security you can act on.</span></h2>
              </div>
              <p>Our work is designed around the outcomes that matter most: clearer visibility, smarter priorities, stronger controls and a team that knows what to do next.</p>
            </div>

            <div className="outcomes-layout">
              <div className="outcomes-visual">
                <div className="outcomes-visual-kicker">SECURITY, MADE PRACTICAL</div>
                <div className="outcomes-visual-title">
                  <span>SEE</span>
                  <i>→</i>
                  <span>PRIORITISE</span>
                  <i>→</i>
                  <span>STRENGTHEN</span>
                </div>
                <div className="outcomes-visual-copy">
                  <strong>One connected security journey.</strong>
                  <p>Assessment, protection, monitoring, response and recovery work together instead of living in separate silos.</p>
                </div>
                <div className="outcomes-visual-line"><span>SECNURA</span><i /><span>YOUR BUSINESS</span></div>
              </div>

              <div className="outcomes-list">
                {approach.map(([num, title, copy], index) => (
                  <article className="outcome-item" key={num}>
                    <div className="outcome-num">{num}</div>
                    <div className="outcome-icon">{index === 0 ? "⌕" : index === 1 ? "↗" : index === 2 ? "◎" : index === 3 ? "↯" : "↻"}</div>
                    <div className="outcome-copy">
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                    <span className="outcome-arrow">↗</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="training" className="training-section">
          <div className="container training-card">
            <div className="training-badge">2026 CAMPAIGN</div>
            <div className="training-grid">
              <div>
                <div className="kicker"><span /> FREE SECURITY AWARENESS TRAINING</div>
                <h2>Give your people the skills to become your <span>first line of defence.</span></h2>
                <p>For this year, Secnura is offering free cybersecurity awareness training for companies of every size — from small teams and startups to larger enterprises. Practical sessions cover phishing, social engineering, password hygiene, safe remote work, incident reporting and the everyday behaviours that stop avoidable incidents.</p>
                <div className="training-pills"><span>SMALL BUSINESS</span><span>STARTUPS</span><span>MIDSIZE</span><span>ENTERPRISE</span></div>
                <a href="#contact" className="button-primary">Book the free 2026 session <span>→</span></a>
              </div>
              <div className="training-visual">
                <div className="training-shield"><Shield /></div>
                <div className="training-orbit orbit-1" />
                <div className="training-orbit orbit-2" />
                <div className="training-stat stat-1"><b>01</b><span>SPOT</span></div>
                <div className="training-stat stat-2"><b>02</b><span>REPORT</span></div>
                <div className="training-stat stat-3"><b>03</b><span>RESPOND</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="positioning-section">
          <div className="container positioning-grid">
            <div>
              <div className="kicker"><span /> WHY SECNURA</div>
              <h2>Premium thinking.<br /><span>Practical delivery.</span></h2>
            </div>
            <div className="positioning-cards">
              <div><b>01</b><h3>Clear by design</h3><p>No mystery reports. We explain the risk, why it matters, and what to do next.</p></div>
              <div><b>02</b><h3>Built for your scale</h3><p>Security services that work for a 10-person company and a 10,000-person organisation.</p></div>
              <div><b>03</b><h3>Community-led</h3><p>We stay close to the threat landscape and the people solving real security problems every day.</p></div>
              <div><b>04</b><h3>Outcome focused</h3><p>Better visibility, fewer blind spots, stronger controls, and faster decisions.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="kicker light"><span /> START A CONVERSATION</div>
              <h2>Let's make the next <span>security decision</span> a clear one.</h2>
              <p>Tell us what you are trying to protect, where the uncertainty is, or what you want your team to improve. We will start there.</p>
              <div className="contact-tags"><span>VAPT</span><span>Managed Security</span><span>Incident Response</span><span>Awareness Training</span><span>Security Strategy</span></div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
              <label><span>Work email</span><input name="email" type="email" required placeholder="you@company.com" /></label>
              <label><span>Company</span><input name="company" required placeholder="Company name" /></label>
              <label><span>Phone</span><input name="phone" placeholder="+91 …" /></label>
              <label><span>Company size</span><select name="companySize" defaultValue="1-10"><option value="1-10">1–10</option><option value="11-50">11–50</option><option value="51-200">51–200</option><option value="201-500">201–500</option><option value="500+">500+</option></select></label>
              <label><span>Service interest</span><select name="serviceInterest" defaultValue="vapt">{services.map((service) => <option key={service.slug} value={service.slug}>{service.shortName}</option>)}</select></label>
              <label className="full"><span>What can we help with?</span><textarea name="message" rows={5} placeholder="Tell us a little about the challenge…" /></label>
              <div className="form-bottom">
                <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry →"}</button>
                {status === "success" && <p className="form-success">Thanks — your enquiry has been received.</p>}
                {status === "error" && <p className="form-error">Something went wrong. Please try again.</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div><Logo className="footer-logo" /><p>Security for everyone.</p></div>
          <div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#training">Training</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Secnura. All rights reserved.</span><span>PEOPLE • PROCESS • TECHNOLOGY</span></div>
      </footer>
    </div>
  );
}
