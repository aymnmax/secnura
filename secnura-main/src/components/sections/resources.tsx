import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { resourceTopics } from "@/features/resources/data";

export function Resources() {
  return (
    <section id="resources" className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal as="div">
          <SectionHeading
            title="Security insights"
            lede="We're building out practical guides and education here. Topics we'll be covering first:"
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {resourceTopics.map((topic, index) => (
            <Reveal
              key={topic.title}
              as="div"
              delay={index * 80}
              className="flex flex-col justify-between gap-8 bg-bg p-7"
            >
              <div>
                <h3 className="text-base font-semibold text-text">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{topic.description}</p>
              </div>
              <span className="text-xs font-medium text-text-faint">Coming soon</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
