import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceHero from "@/components/ui/ServiceHero";
import PriceTable from "@/components/ui/PriceTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import data from "@/data/service-rapid.json";
import business from "@/data/business.json";

export const metadata: Metadata = { title: data.metaTitle, description: data.metaDescription };
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Service Auto Rapid Huedin", provider: { "@type": "AutoRepair", name: business.name, telephone: business.phone }, areaServed: business.city };

export default function ServiceRapidPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <ServiceHero heading={data.hero.heading} subheading={data.hero.subheading} secondaryCtaLabel="ITP Huedin" secondaryCtaHref="/itp-huedin" backgroundImage="/images/tyrefix/vulcanizare-huedin-3.png" />

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-4">Service auto fără complicații</h2>
          <p className="text-fg-secondary leading-relaxed">{data.description}</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Ce poți rezolva la Tyrefix fără programare?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.services.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 rounded-xl border border-base bg-canvas">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-fg text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Tarife orientative service rapid</h2>
          <PriceTable prices={data.prices} note="Manopera este indicată fără prețul pieselor. Piesa de schimb se adaugă separat." />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Întrebări frecvente</h2>
          <FAQAccordion items={data.faq} />
        </div>
      </section>

      <CTASection heading="Vino fără programare – te așteptăm!" internalLinks={data.internalLinks} />
    </>
  );
}
