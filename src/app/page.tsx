import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Zap, Shield, Banknote, MapPin, Check } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import services from "@/data/services.json";
import business from "@/data/business.json";

export const metadata: Metadata = {
  title: "Tyrefix Huedin – Vulcanizare, ITP, Reglaj Direcție, Freon AC",
  description:
    "Service auto profesional în Huedin, Cluj. Vulcanizare, vulcanizare mobilă, ITP, reglaj direcție, freon AC și anvelope. Suntem la un telefon distanță.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: business.name,
  description: business.tagline,
  url: business.website,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.county,
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coordinates.lat,
    longitude: business.coordinates.lng,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
  areaServed: ["Huedin", "Florești", "Gilău", "Ciucea", "Poieni", "Negreni", "Aghireș", "Bologa", "Sâncraiu"],
};

const whyUsItems = [
  { icon: <Zap className="w-8 h-8" />, title: "Rapiditate", text: "Intervenții fără așteptări lungi. Respectăm timpul tău." },
  { icon: <Shield className="w-8 h-8" />, title: "Calitate", text: "Echipamente profesionale și personal cu experiență." },
  { icon: <Banknote className="w-8 h-8" />, title: "Prețuri corecte", text: "Tarife transparente, comunicate înainte de intervenție." },
  { icon: <MapPin className="w-8 h-8" />, title: "Zonă largă", text: "Acoperim Huedinul și localitățile din zona Cluj Vest." },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* Hero */}
      <section
        className="relative text-fg-on-dark py-20 px-4 overflow-hidden"
        style={{ backgroundImage: "url(/images/tyrefix/vulcanizare-huedin-1.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
            Service Auto Profesional<br className="hidden sm:block" /> în Huedin
          </h1>
          <p className="text-xl text-fg-faint mb-8 max-w-2xl mx-auto leading-relaxed">
            Vulcanizare, ITP, reglaj direcție, freon AC și vulcanizare mobilă.
            Rezolvăm orice problemă auto rapid și la prețuri corecte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={business.phoneHref}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
            <Link
              href="/vulcanizare-mobila-huedin"
              className="btn-outline-dark inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Vulcanizare Mobilă →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-900 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-fg-on-dark text-sm font-semibold">
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Fără programare pentru vulcanizare</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Intervenție mobilă în 30–60 min</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Prețuri transparente</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Personal autorizat ITP</span>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-canvas-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-fg mb-2">Serviciile noastre</h2>
            <p className="text-fg-muted">Tot ce ai nevoie pentru mașina ta, într-un singur loc</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                featured={service.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 bg-canvas">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-fg mb-2">De ce Tyrefix?</h2>
            <p className="text-fg-muted">Avem grijă de mașina ta ca de a noastră</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl border border-base bg-canvas">
                <span className="flex justify-center mb-3 text-brand">{item.icon}</span>
                <h3 className="font-bold text-fg mb-1.5">{item.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule strip */}
      <section className="py-10 px-4 bg-canvas-subtle border-y border-base">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <p className="font-bold text-fg mb-1">Program de lucru</p>
            {business.schedule.map((item) => (
              <p key={item.days} className="text-fg-muted">
                <span className="font-medium text-fg">{item.days}:</span> {item.hours}
              </p>
            ))}
          </div>
          <div className="text-center sm:text-right">
            <p className="text-fg-muted mb-2">Localizare:</p>
            <p className="font-semibold text-fg">{business.address}</p>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-brand text-sm underline underline-offset-2 transition-colors"
            >
              Vezi pe hartă →
            </a>
          </div>
        </div>
      </section>

      <CTASection heading="Ai o urgență? Sună-ne acum!" />
    </>
  );
}
