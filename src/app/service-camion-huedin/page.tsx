import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import ServiceHero from "@/components/ui/ServiceHero";
import PriceTable from "@/components/ui/PriceTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import data from "@/data/service-camion.json";
import business from "@/data/business.json";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service Camion Huedin",
  provider: { "@type": "AutoRepair", name: business.name, telephone: business.phone },
  areaServed: business.city,
};

export default function ServiceCamionPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <ServiceHero
        heading={data.hero.heading}
        subheading={data.hero.subheading}
        secondaryCtaLabel="Vulcanizare Mobilă"
        secondaryCtaHref="/vulcanizare-mobila-huedin"
        backgroundImage="/images/tyrefix/new-service-auto-utilitare.jpg"
      />

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Ce include serviciul de service camion?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.services.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 rounded-xl border border-base bg-canvas-subtle">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-fg text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-base">
            <Image
              src="/images/tyrefix/new-service-auto-utilitare-2.jpg"
              alt="Service profesional pentru camioane și vehicule grele Huedin"
              width={1536}
              height={2048}
              className="w-full h-auto object-cover max-h-96"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-2">Tarife service camion Huedin</h2>
          <p className="text-fg-muted mb-6 text-sm">Prețuri orientative. Tariful final poate varia în funcție de tipul camioanului, complexitatea reparației și piesele necesare.</p>
          <PriceTable prices={data.prices} note="Prețurile sunt orientative și pot varia în funcție de tipul și dimensiunea camioanului, precum și de complexitatea intervenției." />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Întrebări frecvente despre service camion</h2>
          <FAQAccordion items={data.faq} />
        </div>
      </section>

      <CTASection heading="Camionul tău are nevoie de service? Contactează-ne acum!" internalLinks={data.internalLinks} />
    </>
  );
}
