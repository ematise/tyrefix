import Link from "next/link";
import Image from "next/image";
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
            width={128}
            height={38}
            className="h-10 w-auto object-contain"
            fetchPriority="low"
            quality={65}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigare principală">
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
            <Phone className="w-4 h-4" aria-hidden="true" />
            Sună acum
          </a>

          <details className="mobile-menu lg:hidden relative">
            <summary className="icon-btn p-2 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <Menu className="mobile-menu-icon-open w-6 h-6" aria-hidden="true" />
              <X className="mobile-menu-icon-close w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Meniu</span>
            </summary>

            <div className="absolute right-0 top-full mt-1 w-64 border border-base bg-canvas rounded-xl shadow-lg px-4 py-3">
              <nav className="flex flex-col gap-1" aria-label="Navigare mobilă">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link py-2.5 px-3 rounded font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={business.phoneHref}
                  className="btn-primary mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {business.phone}
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
