import Link from "next/link";
import { Phone } from "lucide-react";
import business from "@/data/business.json";

interface InternalLink {
  label: string;
  href: string;
}

interface CTASectionProps {
  heading?: string;
  internalLinks?: InternalLink[];
}

export default function CTASection({
  heading = "Ai nevoie de ajutor? Contactează-ne acum!",
  internalLinks = [],
}: CTASectionProps) {
  return (
    <section className="bg-dark text-fg-on-dark py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-fg-on-dark-muted mb-7">
          Suntem disponibili Luni–Sâmbătă. Sună-ne și îți răspundem imediat.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={business.phoneHref}
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            {business.phone}
          </a>
          <Link
            href="/contact"
            className="btn-outline-dark inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors"
          >
            Trimite un mesaj
          </Link>
        </div>
      </div>
    </section>
  );
}
