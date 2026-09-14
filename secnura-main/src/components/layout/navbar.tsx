"use client";

import { useState } from "react";
import { navLinks } from "@/constants/nav";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-text">
          secnura
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#contact" className="px-4 py-2.5 text-sm">
            Talk to a Security Expert
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-text md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition-transform",
                isOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity",
                isOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-full bg-current transition-transform",
                isOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-border bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-2 py-3 text-base text-text-muted hover:bg-bg-elevated hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#contact" className="mt-2 justify-center">
              Talk to a Security Expert
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
