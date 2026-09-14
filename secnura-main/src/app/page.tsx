"use client";

import { FormEvent, useState } from "react";

const solutions = [
  {
    number: "01",
    title: "Vulnerability Assessment & Penetration Testing",
    copy: "Find exploitable weaknesses before attackers do — across applications, infrastructure, APIs, cloud, and networks.",
    tags: ["Web & API", "Network", "Cloud", "Mobile"],
  },
  {
    number: "02",
    title: "Managed Security",
    copy: "Extend your security team with continuous monitoring, practical hardening, and clear, business-focused reporting.",
    tags: ["Monitoring", "Hardening", "Alerts", "Reporting"],
  },
  {
    number: "03",
    title: "Incident Response",
    copy: "When an incident happens, move fast. Contain, investigate, recover, and strengthen the environment for what comes next.",
    tags: ["Containment", "Forensics", "Recovery", "Lessons learned"],
  },
];

const principles = [
  ["01", "Attack-minded", "We think like an adversary so your defenders can see the same path an attacker would take."],
  ["02", "Business-aware", "Every finding is prioritised by impact, exploitability, and what it means for your organisation."],
  ["03", "Built to improve", "Security is a programme, not a report. We help you close gaps and measure progress over time."],
];

function ShieldMark() {
  return (
    <img
      src="/brand/secnura-shield.png"
      alt="Secnura shield"
      className="h-9 w-9 object-contain"
    />
  );
}

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const body = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      phone: String(form.get("phone") ?? ""),
      companySize: String(form.get("companySize") ?? "1-10"),
      serviceInterest: String(form.get("serviceInterest") ?? "vapt"),
      message: String(form.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a href="#top" className="brand" aria-label="Secnura home">
            <img src="/brand/secnura-wordmark.png" alt="Secnura" className="brand-wordmark" />
          </a>
          <div className="nav-links">
            <a href="#solutions">Solutions</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">Talk to Secnura <span>↗</span></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> CYBERSECURITY, WITHOUT THE NOISE</div>
            <h1>Secure what matters.<br /><span>Stay ready.</span></h1>
            <p className="hero-lead">
              Practical cybersecurity for organisations that need clear answers, measurable risk reduction, and a partner who understands the real-world attack surface.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Start a security conversation <span>→</span></a>
              <a href="#solutions" className="text-link">Explore capabilities <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div><strong>Security-first</strong><span>Assessment to remediation</span></div>
              <div><strong>Executive-ready</strong><span>Findings your team can act on</span></div>
              <div><strong>Built for change</strong><span>Continuous improvement</span></div>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-glow" />
            <div className="shield-frame">
              <ShieldMark />
              <div className="scan-line scan-one" />
              <div className="scan-line scan-two" />
              <div className="shield-caption">PROTECTED BY DESIGN</div>
            </div>
            <div className="metric-card metric-top"><span>THREAT SURFACE</span><b>VISIBLE</b><i>↗</i></div>
            <div className="metric-card metric-bottom"><span>RISK SIGNAL</span><b>PRIORITISED</b><i>●</i></div>
          </div>
        </section>

        <section className="band">
          <div className="container band-inner">
            <span>SECURITY IS A BUSINESS DECISION.</span>
            <span className="band-dot" />
            <span>WE MAKE IT EASIER TO MAKE THE RIGHT ONE.</span>
          </div>
        </section>

        <section id="solutions" className="section container">
          <div className="section-intro">
            <div>
              <div className="section-kicker">WHAT WE DO</div>
              <h2>Security capabilities that<br /><span>move with your business.</span></h2>
            </div>
            <p>From discovering weaknesses to responding under pressure, Secnura connects the technical detail to the decisions that protect your business.</p>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <article className="solution-card" key={item.number}>
                <div className="card-top"><span>{item.number}</span><span className="card-arrow">↗</span></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="dark-section">
          <div className="container approach-grid">
            <div className="approach-visual">
              <div className="visual-ring ring-a" />
              <div className="visual-ring ring-b" />
              <div className="visual-core"><ShieldMark /><span>SECNURA</span></div>
              <div className="orbit-label label-a">DETECT</div>
              <div className="orbit-label label-b">DEFEND</div>
              <div className="orbit-label label-c">IMPROVE</div>
            </div>
            <div className="approach-copy">
              <div className="section-kicker light">HOW WE WORK</div>
              <h2>Clarity first.<br /><span>Security always.</span></h2>
              <p>Good cybersecurity should reduce uncertainty, not create more of it. We bring structured assessment, sharp technical thinking, and straightforward communication to every engagement.</p>
              <div className="principles">
                {principles.map(([num, title, copy]) => (
                  <div className="principle" key={num}>
                    <span className="principle-num">{num}</span>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section container about-section">
          <div className="quote-card">
            <div className="quote-mark">“</div>
            <blockquote>Cybersecurity works best when the technical team and the business are looking at the same picture.</blockquote>
            <p>That is the Secnura standard: make risk visible, make priorities obvious, and make the next step practical.</p>
          </div>
          <div className="about-stats">
            <div><strong>01</strong><span>Understand</span><p>Map critical assets, exposures, and business impact.</p></div>
            <div><strong>02</strong><span>Act</span><p>Fix the issues that materially change your risk.</p></div>
            <div><strong>03</strong><span>Improve</span><p>Turn lessons into stronger security habits and controls.</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="section-kicker light">LET'S TALK</div>
              <h2>Bring us the<br /><span>hard problem.</span></h2>
              <p>Tell us what you are trying to protect, where the uncertainty is, or what keeps your team up at night. We will start there.</p>
              <div className="contact-points"><span>Assessment & testing</span><span>Managed security</span><span>Incident response</span><span>Security strategy</span></div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
              <label><span>Work email</span><input name="email" type="email" required placeholder="you@company.com" /></label>
              <label><span>Company</span><input name="company" required placeholder="Company name" /></label>
              <label><span>Phone (optional)</span><input name="phone" placeholder="+91 …" /></label>
              <label><span>Company size</span><select name="companySize" defaultValue="1-10"><option value="1-10">1–10 employees</option><option value="11-50">11–50 employees</option><option value="51-200">51–200 employees</option><option value="201-500">201–500 employees</option><option value="500+">500+ employees</option></select></label>
              <label><span>What do you need?</span><select name="serviceInterest" defaultValue="vapt"><option value="vapt">VAPT / security testing</option><option value="managed-security">Managed security</option><option value="incident-response">Incident response</option><option value="application-security">Application security</option><option value="security-awareness-training">Security awareness training</option><option value="red-team-purple-team">Red / purple team</option><option value="dark-web-monitoring">Dark web monitoring</option><option value="vendor-risk-management">Vendor risk management</option></select></label>
              <label className="full"><span>Message</span><textarea name="message" rows={4} required placeholder="Give us a little context…" /></label>
              <div className="form-bottom">
                <button type="submit" className="button button-light" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry →"}</button>
                {status === "success" && <p className="form-status ok">Thanks — your enquiry was received.</p>}
                {status === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <a href="#top" className="brand footer-brand"><img src="/brand/secnura-wordmark.png" alt="Secnura" className="brand-wordmark" /></a>
          <p>Enterprise-grade cybersecurity, made practical.</p>
          <a href="#contact" className="footer-link">Start a conversation ↗</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Secnura. All rights reserved.</span><span>Security for everyone.</span></div>
      </footer>
    </div>
  );
}
