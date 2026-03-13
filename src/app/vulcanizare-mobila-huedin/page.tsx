import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import ServiceHero from "@/components/ui/ServiceHero";
import PriceTable from "@/components/ui/PriceTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CoverageArea from "@/components/ui/CoverageArea";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import data from "@/data/vulcanizare-mobila.json";
import business from "@/data/business.json";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vulcanizare Mobilă Huedin",
  provider: { "@type": "AutoRepair", name: business.name, telephone: business.phone },
  areaServed: data.locations.map((l) => l.name),
};

export default function VulcanizareMobilaPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <ServiceHero
        heading={data.hero.heading}
        subheading={data.hero.subheading}
        ctaLabel="Sună – Venim la tine"
        secondaryCtaLabel="Vulcanizare la atelier"
        secondaryCtaHref="/vulcanizare-huedin"
        backgroundImage="/images/tyrefix/vulcanizare-huedin-2.png"
      />

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-4">Ce este vulcanizarea mobilă și când ai nevoie de ea?</h2>
          <p className="text-fg-secondary leading-relaxed">{data.whatIsIt}</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-2">Zona de acoperire – Huedin și localitățile din jur</h2>
          <h3 className="text-lg font-semibold text-fg-muted mb-6">Unde intervenim?</h3>
          <CoverageArea locations={data.locations} description={data.coverageDescription} />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Ce include intervenția Tyrefix la fața locului?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.includes.map((item) => (
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
          <h2 className="text-2xl font-black text-fg mb-2">Tarife orientative – vulcanizare mobilă</h2>
          <p className="text-fg-muted mb-6 text-sm">Costul deplasării este inclus în tariful de intervenție.</p>
          <PriceTable prices={data.prices} note="Tariful de deplasare poate varia în funcție de distanță. Prețul final este comunicat telefonic înainte de intervenție." />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">De ce să alegi Tyrefix pentru vulcanizare mobilă în zona Huedin?</h2>
          <ul className="space-y-3">
            {data.whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3 text-fg-secondary">
                <ArrowRight className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Întrebări frecvente</h2>
          <FAQAccordion items={data.faq} />
        </div>
      </section>

      <CTASection heading="Ai o pană acum? Sună-ne imediat!" internalLinks={data.internalLinks} />
    </>
  );
}
