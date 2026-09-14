import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function TrainingCampaign() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal
          as="div"
          className="relative overflow-hidden rounded-md border border-border-strong bg-bg-elevated px-6 py-10 sm:px-12 sm:py-14"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-navy">Free for all of 2026</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold text-text sm:text-4xl">
                Free Security Awareness Training for Companies
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted">
                Because every business deserves a security-aware team, not just the ones with big
                budgets. Human error remains one of the most common contributors to security
                incidents — one careless click can cost a company far more than any training ever
                would.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
                As part of our mission to make cybersecurity accessible to everyone, we&apos;re
                offering free security awareness training to companies throughout 2026. No cost,
                no catch — just practical training to help your team recognize phishing, social
                engineering, and everyday threats before they become expensive problems.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <ButtonLink href="#contact">Book Your Free Training</ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
