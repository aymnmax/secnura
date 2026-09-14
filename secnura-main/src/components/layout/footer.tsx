import { navLinks } from "@/constants/nav";
import { services } from "@/features/services/data";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-display text-lg font-bold tracking-tight text-text">secnura</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-text">Services</p>
          <ul className="mt-4 flex flex-col gap-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <a
                  href="#services"
                  className="text-sm text-text-muted transition-colors hover:text-text"
                >
                  {service.shortName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-text">Company</p>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Secnura. All rights reserved.</p>
        <p>Security for Everyone.</p>
      </Container>
    </footer>
  );
}
