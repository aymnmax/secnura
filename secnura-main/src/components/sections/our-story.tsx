import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const paragraphs = [
  "It started with a community.",
  "As active members and connectors within the cybersecurity community, we spent countless hours talking to people, businesses, and founders about the threats they faced online. Time and again, we noticed the same pattern: people knew they needed security, but had no idea where to start — and when they did reach out for help, they were hit with bills that felt more like a punishment than a solution.",
  "Cybersecurity had become a privilege, not a right. Small businesses, startups, and individuals were left exposed simply because they couldn't afford the enterprise-level pricing that big firms demanded — while the threats they faced were just as real as those targeting large corporations.",
  "We knew this had to change.",
  "That's why we built Secnura — to make cybersecurity accessible to everyone, not just the ones who can pay premium prices. Every business, no matter its size, deserves protection from the digital threats of today. Every individual deserves to connect and transact online without fear of exploitation.",
  "Our vision is simple: security is a right, not a luxury.",
];

export function OurStory() {
  return (
    <section id="our-story" className="border-b border-border py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
        <Reveal as="div">
          <h2 className="text-3xl font-semibold text-text sm:text-4xl">Our Story</h2>
        </Reveal>
        <Reveal as="div" delay={100} className="max-w-2xl space-y-6 text-base leading-relaxed text-text-muted">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index === paragraphs.length - 1 ? "text-text" : undefined}>
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
