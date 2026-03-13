import Link from "next/link";
import { Wrench, Car, Crosshair, Snowflake, Zap, ClipboardCheck, LifeBuoy, ChevronRight, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Car,
  Crosshair,
  Snowflake,
  Zap,
  ClipboardCheck,
  LifeBuoy,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function ServiceCard({ icon, title, description, href, featured }: ServiceCardProps) {
  const IconComponent = iconMap[icon] ?? Wrench;
  return (
    <Link
      href={href}
      className={`group flex flex-col p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5 ${
        featured ? "card-featured" : "card-interactive"
      }`}
    >
      <span className="block mb-3">
        <IconComponent className={`w-8 h-8 ${featured ? "text-white" : "text-brand"}`} />
      </span>
      <h3 className="card-title font-bold text-lg mb-1.5 transition-colors">
        {title}
      </h3>
      <p className="card-desc text-sm leading-relaxed flex-1">
        {description}
      </p>
      <span className="card-cta mt-4 text-sm font-semibold flex items-center gap-1">
        Află mai mult <ChevronRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
