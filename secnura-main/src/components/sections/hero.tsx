import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { HeroGraphic } from "@/components/sections/hero-graphic";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #23477a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 70% 30%, black, transparent)",
        }}
      />

      <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div className="max-w-xl">
          <p className="text-sm font-medium tracking-wide text-cyan">A safer digital world</p>
          <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Security for everyone.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Enterprise-grade cybersecurity protection made accessible for businesses of every
            size.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact">Talk to a Security Expert</ButtonLink>
            <ButtonLink
              href="#services"
              variant="secondary"
              className="border-white/25 text-white hover:border-cyan hover:text-cyan"
            >
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 rounded-md border border-white/10 bg-white/5" />
          <div className="relative h-full w-full p-6">
            <HeroGraphic />
          </div>
        </div>
      </Container>
    </section>
  );
}
