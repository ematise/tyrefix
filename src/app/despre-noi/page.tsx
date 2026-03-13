import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Zap, Target } from "lucide-react";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Despre Noi | Tyrefix – Service Auto Huedin",
  description:
    "Tyrefix este service-ul auto de încredere din Huedin. Oferim vulcanizare, ITP, reglaj direcție, freon AC și vulcanizare mobilă pentru clienții din Huedin și zona Cluj Vest.",
};

const values = [
  { icon: <Shield className="w-8 h-8" />, title: "Onestitate", text: "Comunicăm prețul și soluția înainte de a începe orice lucrare. Fără surprize." },
  { icon: <Zap className="w-8 h-8" />, title: "Viteză", text: "Respectăm timpul tău. Intervențiile rapide se rezolvă pe loc, fără programare." },
  { icon: <Target className="w-8 h-8" />, title: "Precizie", text: "Folosim echipamente calibrate și proceduri corecte pentru fiecare tip de intervenție." },
];

export default function DespreNoiPage() {
  return (
    <>
      <section className="bg-dark text-fg-on-dark py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black mb-4">Despre Tyrefix Huedin</h1>
          <p className="text-xl text-fg-faint max-w-2xl leading-relaxed">
            Service auto de încredere în Huedinu. Servim clienți din Huedin,
            Florești, Gilău, Ciucea, Poieni, Negreni și întreaga zonă Cluj Vest.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-4">Cine suntem?</h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            Tyrefix este un service auto profesional din <strong>Huedin, județul Cluj</strong>,
            dedicat șoferilor din zona Cluj Vest. Am construit o echipă de tehnicieni
            cu experiență, dotată cu echipamente moderne, care poate rezolva rapid și corect
            orice problemă legată de anvelope, direcție, frânare, climatizare sau inspecție tehnică.
          </p>
          <p className="text-fg-secondary leading-relaxed mb-4">
            Știm că pentru locuitorii din Huedin și din localitățile din jur — <strong>Florești,
            Gilău, Aghireș, Ciucea, Negreni, Poieni, Bologa și Sâncraiu</strong> — accesul rapid
            la un service auto de calitate face diferența. De aceea oferim și un serviciu de
            <strong> vulcanizare mobilă</strong> care vine direct la mașina ta, oriunde te-ai afla
            pe ruta Huedin–Cluj.
          </p>
          <p className="text-fg-secondary leading-relaxed">
            Misiunea noastră este simplă: să rezolvăm problemele auto ale clienților noștri
            <strong> rapid, corect și la un preț corect</strong> — fără surprize neplăcute.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-8">Valorile noastre</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 bg-canvas rounded-2xl border border-base">
                <span className="flex justify-center mb-3 text-brand">{v.icon}</span>
                <h3 className="font-bold text-fg mb-2">{v.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-fg mb-4">Zona pe care o servim</h2>
          <p className="text-fg-secondary leading-relaxed mb-6">
            Sediul nostru se află în <strong>Huedin, Cluj</strong>, dar prin serviciul de vulcanizare
            mobilă acoperim întreaga zonă de vest a județului Cluj: de la <strong>Florești și Gilău</strong>
            {" "}la est, până la <strong>Ciucea și Negreni</strong> la vest, incluzând localitățile
            <strong> Bologa, Sâncraiu, Aghireș și Poieni</strong>.
          </p>
          <Link href="/vulcanizare-mobila-huedin" className="link-brand font-semibold underline underline-offset-2 transition-colors">
            Detalii despre vulcanizarea mobilă →
          </Link>
        </div>
      </section>

      <CTASection heading="Vino la noi sau sună-ne acum!" />
    </>
  );
}
