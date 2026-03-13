import Link from "next/link";
import { Phone } from "lucide-react";
import business from "@/data/business.json";

interface ServiceHeroProps {
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
}

export default function ServiceHero({
  heading,
  subheading,
  ctaLabel = "Sună acum",
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  backgroundImage,
}: ServiceHeroProps) {
  return (
    <section
      className="relative text-fg-on-dark py-16 px-4 overflow-hidden"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : {}
      }
    >
      {backgroundImage
        ? <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        : <div className="absolute inset-0 bg-dark" aria-hidden="true" />
      }
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
          {heading}
        </h1>
        <p className="text-lg sm:text-xl text-fg-faint mb-8 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={ctaHref ?? business.phoneHref}
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            {ctaLabel}
          </a>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="btn-outline-dark inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
