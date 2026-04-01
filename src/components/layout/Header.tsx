"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import business from "@/data/business.json";

const navLinks = [
  { label: "Vulcanizare", href: "/vulcanizare-huedin" },
  { label: "Vulcanizare Mobilă", href: "/vulcanizare-mobila-huedin" },
  { label: "Reglaj Direcție", href: "/reglaj-directie-huedin" },
  { label: "Freon AC", href: "/incarcare-freon-auto-huedin" },
  { label: "Service Rapid", href: "/service-auto-rapid-huedin" },
  { label: "Service Camion", href: "/service-camion-huedin" },
  { label: "ITP", href: "/itp-huedin" },
  { label: "Anvelope", href: "/anvelope-huedin" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-canvas sticky top-0 z-50 shadow-sm border-b border-base">
      {/* Top bar */}
      <div className="bg-canvas-muted py-1.5 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-fg-muted">
          <span>{business.address}</span>
          <a href={business.phoneHref} className="topbar-phone font-semibold transition-colors">
            {business.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/tyrefix_logo.webp"
            alt="Tyrefix Huedin – Service Auto"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link px-3 py-1.5 text-sm rounded font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="btn-primary hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Sună acum
          </a>

          <button
            className="icon-btn lg:hidden p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-base bg-canvas px-4 py-3">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link py-2.5 px-3 rounded font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="btn-primary mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
