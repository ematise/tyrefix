import type { Metadata } from "next";
import { Phone, MapPin, Mail, Map } from "lucide-react";
import business from "@/data/business.json";

export const metadata: Metadata = {
  title: "Contact | Tyrefix Huedin – Adresă, Program, Telefon",
  description:
    "Contactează Tyrefix Huedin. Adresă, număr de telefon, program și localizare pe hartă. Service auto în Huedin, vulcanizare mobilă în zona Cluj.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark text-fg-on-dark py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">Contact Tyrefix Huedin</h1>
          <p className="text-xl text-fg-faint">
            Suntem disponibili telefonic sau poți veni direct la sediul nostru din Huedin.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-canvas">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-fg mb-4">Date de contact</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-fg">Adresă</p>
                    <p className="text-fg-muted">{business.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-fg">Telefon</p>
                    <a href={business.phoneHref} className="link-brand font-semibold text-base transition-colors">
                      {business.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-fg">Email</p>
                    <a href={`mailto:${business.email}`} className="link-brand transition-colors">
                      {business.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-fg mb-4">Program de lucru</h2>
              <ul className="space-y-2">
                {business.schedule.map((item) => (
                  <li key={item.days} className="flex justify-between text-sm border-b border-base pb-2">
                    <span className="font-medium text-fg">{item.days}</span>
                    <span>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={business.phoneHref}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Sună acum – {business.phone}
            </a>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-black text-fg">Localizare</h2>
            <div className="rounded-2xl overflow-hidden border border-base bg-canvas-subtle flex-1 min-h-64 flex items-center justify-center">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link flex flex-col items-center gap-3 p-8 text-center transition-colors"
              >
                <Map className="w-12 h-12 text-brand" />
                <span className="font-semibold">Deschide harta Google Maps</span>
                <span className="text-sm">{business.address}</span>
              </a>
            </div>
            <p className="text-sm text-fg-muted">
              Suntem situați în <strong className="text-fg">Huedin, Cluj</strong>.
              Servim clienți din Huedin și din localitățile din zona Cluj Vest:
              Florești, Gilău, Ciucea, Negreni, Poieni, Bologa, Aghireș și Sâncraiu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
