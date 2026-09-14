import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { maturityStages } from "@/constants/journey";

const segmentOpacity = [0.25, 0.5, 0.75, 1];

export function SecurityMaturity() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal as="div">
          <SectionHeading
            title="Wherever you're starting from"
            lede="Security isn't one-size-fits-all. Here's how we think about where a business stands today."
          />
        </Reveal>

        <div className="mt-16">
          <Reveal as="div">
            <div className="grid grid-cols-4 gap-2" aria-hidden="true">
              {segmentOpacity.map((opacity, index) => (
                <div key={index} className="h-1.5 rounded-full bg-accent" style={{ opacity }} />
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {maturityStages.map((stage, index) => (
              <Reveal key={stage.label} as="div" delay={index * 80}>
                <h3 className="text-base font-semibold text-text">{stage.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{stage.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
