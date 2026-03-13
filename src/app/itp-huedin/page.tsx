import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceHero from "@/components/ui/ServiceHero";
import PriceTable from "@/components/ui/PriceTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import data from "@/data/itp.json";
import business from "@/data/business.json";

export const metadata: Metadata = { title: data.metaTitle, description: data.metaDescription };
const schema = { "@context": "https://schema.org", "@type": "Service", name: "ITP Huedin", provider: { "@type": "AutoRepair", name: business.name, telephone: business.phone }, areaServed: business.city };

export default function ITPPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <ServiceHero heading={data.hero.heading} subheading={data.hero.subheading} ctaLabel="Programează ITP" secondaryCtaLabel="Service Rapid" secondaryCtaHref="/service-auto-rapid-huedin" backgroundImage="/images/tyrefix/vulcanizare-itp-huedin.png" />

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-4">Ce este ITP-ul și de ce este obligatoriu?</h2>
          <p className="text-fg-secondary leading-relaxed">{data.description}</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Ce se verifică la ITP?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.whatIsChecked.map((item) => (
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
          <h2 className="text-2xl font-black text-fg mb-6">Cum te pregătești pentru ITP?</h2>
          <ul className="space-y-3">
            {data.howToPrepare.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-fg-secondary">
                <span className="badge-brand text-xs font-bold rounded-xl w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Tarife ITP Huedin</h2>
          <PriceTable prices={data.prices} note="Tarifele pot varia în funcție de categoria vehiculului. Confirmați prețul la programare." />
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-6">Întrebări frecvente despre ITP</h2>
          <FAQAccordion items={data.faq} />
        </div>
      </section>

      <CTASection heading="Programează ITP-ul acum – rapid și fără stres!" internalLinks={data.internalLinks} />
    </>
  );
}
