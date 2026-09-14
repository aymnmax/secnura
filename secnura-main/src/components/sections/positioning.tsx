import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Positioning() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <Reveal
          as="p"
          className="max-w-3xl font-display text-2xl font-semibold leading-snug text-text sm:text-3xl"
        >
          Cybersecurity shouldn&apos;t be a luxury. Every business faces real threats, regardless
          of its size or budget — so protection shouldn&apos;t be reserved for the businesses that
          can afford enterprise pricing.
        </Reveal>
      </Container>
    </section>
  );
}
