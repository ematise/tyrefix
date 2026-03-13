import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceHero from "@/components/ui/ServiceHero";
import PriceTable from "@/components/ui/PriceTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import data from "@/data/anvelope.json";
import business from "@/data/business.json";

export const metadata: Metadata = { title: data.metaTitle, description: data.metaDescription };
const schema = { "@context": "https://schema.org", "@type": "Service", name: "Vânzare Anvelope Huedin", provider: { "@type": "AutoRepair", name: business.name, telephone: business.phone }, areaServed: business.city };

export default function AnvelopePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <ServiceHero heading={data.hero.heading} subheading={data.hero.subheading} ctaLabel="Cere ofertă" secondaryCtaLabel="Vulcanizare Huedin" secondaryCtaHref="/vulcanizare-huedin" backgroundImage="/images/tyrefix/anvelope-huedin.png" />

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-4">Anvelope noi pentru orice vehicul</h2>
          <p className="text-fg-secondary leading-relaxed">{data.description}</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Tipuri de anvelope disponibile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {data.categories.map((cat) => (
              <div key={cat.name} className="p-6 rounded-2xl border border-base bg-canvas">
                <h3 className="font-bold text-fg mb-2">{cat.name}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Mărci disponibile</h2>
          <div className="flex flex-wrap gap-2">
            {data.brands.map((brand) => (
              <span key={brand} className="px-4 py-2 rounded-xl border border-base bg-canvas-subtle text-sm font-medium text-fg">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Ce include achiziția de anvelope la Tyrefix?</h2>
          <ul className="space-y-2">
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
          <h2 className="text-2xl font-black text-fg mb-6">Prețuri orientative anvelope Huedin</h2>
          <PriceTable prices={data.prices} note="Prețurile variază în funcție de marcă, dimensiune și tip de anvelopă. Contactați-ne pentru o ofertă exactă." />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Întrebări frecvente</h2>
          <FAQAccordion items={data.faq} />
        </div>
      </section>

      <CTASection heading="Cere o ofertă pentru anvelope noi!" internalLinks={data.internalLinks} />
    </>
  );
}
