import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { howItWorksSteps } from "@/constants/journey";

export function HowItWorks() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal as="div">
          <SectionHeading
            title="How Secnura works"
            lede="A consistent process, repeated as your business and its risks change."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-border-strong sm:block"
            aria-hidden="true"
          />
          <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
            {howItWorksSteps.map((step, index) => (
              <Reveal key={step.label} as="li" delay={index * 80} className="flex flex-col gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-mono text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-text">{step.label}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
