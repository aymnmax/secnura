import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/features/contact/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal as="div" className="max-w-md">
          <h2 className="text-3xl font-semibold text-text sm:text-4xl">Talk to a security expert</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Tell us a little about your business and what you&apos;re looking for. We&apos;ll get
            back to you to talk through next steps.
          </p>
        </Reveal>

        <Reveal as="div" delay={100}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
