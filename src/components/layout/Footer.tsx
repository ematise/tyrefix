import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import business from "@/data/business.json";

const serviceLinks = [
  { label: "Vulcanizare Huedin", href: "/vulcanizare-huedin" },
  { label: "Vulcanizare Mobilă Huedin", href: "/vulcanizare-mobila-huedin" },
  { label: "Reglaj Direcție Huedin", href: "/reglaj-directie-huedin" },
  { label: "Încărcare Freon AC Huedin", href: "/incarcare-freon-auto-huedin" },
  { label: "Service Auto Rapid Huedin", href: "/service-auto-rapid-huedin" },
  { label: "ITP Huedin", href: "/itp-huedin" },
  { label: "Anvelope Huedin", href: "/anvelope-huedin" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-fg-faint pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-dark">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/tyrefix_logo_on_dark_bg.webp"
                alt="Tyrefix Huedin – Service Auto"
                width={195}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-fg-on-dark-muted">
              Service auto profesional în Huedin și zona Cluj Vest.
              Vulcanizare, ITP, reglaj direcție, freon AC și altele.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-fg-on-dark font-semibold mb-4 text-sm uppercase tracking-wider">
              Servicii
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-on-dark text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-fg-on-dark font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-fg-on-dark-muted">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="link-on-dark transition-colors">
                  {business.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={business.phoneHref} className="link-on-dark transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${business.email}`} className="link-on-dark transition-colors">
                  {business.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 border border-1 border-gray-800 rounded-xl">
              <h4 className="text-fg-on-dark font-semibold mb-2 text-sm">Program</h4>
              <ul className="space-y-1 text-sm text-fg-on-dark-muted">
                {business.schedule.map((item) => (
                  <li key={item.days} className="flex justify-between gap-4">
                    <span>{item.days}</span>
                    <span>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-fg-muted">
          <p>© {new Date().getFullYear()} Tyrefix Huedin. Toate drepturile rezervate.</p>
          <div className="flex gap-4">
            <Link href="/despre-noi" className="link-footer transition-colors">Despre Noi</Link>
            <Link href="/contact" className="link-footer transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
