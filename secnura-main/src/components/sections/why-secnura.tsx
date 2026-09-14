import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whySecnuraPoints } from "@/constants/why-secnura";

export function WhySecnura() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal as="div">
          <SectionHeading title="Why Secnura" />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {whySecnuraPoints.map((point, index) => (
            <Reveal
              key={point.title}
              as="div"
              delay={index * 80}
              className="border-l border-border-strong pl-6"
            >
              <h3 className="text-lg font-semibold text-text">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
