import type { Metadata } from "next";
import { Check, AlertTriangle } from "lucide-react";
import ServiceHero from "@/components/ui/ServiceHero";
import PriceTable from "@/components/ui/PriceTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import data from "@/data/reglaj-directie.json";
import business from "@/data/business.json";

export const metadata: Metadata = { title: data.metaTitle, description: data.metaDescription };
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Reglaj Direcție Huedin", provider: { "@type": "AutoRepair", name: business.name, telephone: business.phone }, areaServed: business.city };

export default function ReglajDirectiePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <ServiceHero heading={data.hero.heading} subheading={data.hero.subheading} secondaryCtaLabel="Service Auto Rapid" secondaryCtaHref="/service-auto-rapid-huedin" backgroundImage="/images/tyrefix/vulcanizare-huedin-2.png" />

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-4">Ce este reglajul de direcție și de ce contează?</h2>
          <p className="text-fg-secondary leading-relaxed">{data.description}</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Semne că ai nevoie de reglaj direcție</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.signs.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 rounded-xl border border-base bg-canvas">
                <AlertTriangle className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-fg text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Ce servicii oferim</h2>
          <ul className="space-y-2">
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
          <h2 className="text-2xl font-black text-fg mb-6">Tarife reglaj direcție Huedin</h2>
          <PriceTable prices={data.prices} note="Prețurile sunt orientative și pot varia în funcție de vehicul." />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Întrebări frecvente</h2>
          <FAQAccordion items={data.faq} />
        </div>
      </section>

      <CTASection heading="Programează reglajul de direcție acum!" internalLinks={data.internalLinks} />
    </>
  );
}
