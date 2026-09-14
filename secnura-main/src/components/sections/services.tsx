import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/features/services/data";

export function Services() {
  return (
    <section id="services" className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal as="div">
          <SectionHeading
            title="What we do"
            lede="Eight areas of security work, each sized to fit the business asking for it."
          />
        </Reveal>

        <div className="mt-14 border border-border bg-border">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                as="article"
                delay={Math.min(index * 60, 300)}
                extraTransitionProperties="background-color"
                className="group relative flex flex-col gap-4 bg-bg p-7 hover:bg-bg-elevated"
              >
                <span
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <service.Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="text-base font-semibold text-text">{service.name}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
