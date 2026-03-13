import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceHero from "@/components/ui/ServiceHero";
import PriceTable from "@/components/ui/PriceTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import data from "@/data/vulcanizare.json";
import business from "@/data/business.json";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vulcanizare Huedin",
  provider: { "@type": "AutoRepair", name: business.name, telephone: business.phone },
  areaServed: business.city,
};

export default function VulcanizarePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <ServiceHero
        heading={data.hero.heading}
        subheading={data.hero.subheading}
        secondaryCtaLabel="Vulcanizare mobilă"
        secondaryCtaHref="/vulcanizare-mobila-huedin"
        backgroundImage="/images/tyrefix/vulcanizare-huedin-1.png"
      />

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Ce include serviciul de vulcanizare?</h2>
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
          <h2 className="text-2xl font-black text-fg mb-2">Tarife vulcanizare Huedin</h2>
          <p className="text-fg-muted mb-6 text-sm">Prețuri orientative. Tariful final poate varia în funcție de tipul anvelopei și complexitatea intervenției.</p>
          <PriceTable prices={data.prices} note="Prețurile sunt orientative și pot varia în funcție de dimensiunea anvelopei și tipul vehiculului." />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Întrebări frecvente</h2>
          <FAQAccordion items={data.faq} />
        </div>
      </section>

      <CTASection heading="Ai o pană? Vino direct sau sună-ne!" internalLinks={data.internalLinks} />
    </>
  );
}
