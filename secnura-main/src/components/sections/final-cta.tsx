import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Reveal as="div">
        <Container className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold text-text sm:text-4xl">
            Your security shouldn&apos;t wait.
          </h2>
          <ButtonLink href="#contact" className="shrink-0">
            Talk to a Security Expert
          </ButtonLink>
        </Container>
      </Reveal>
    </section>
  );
}
