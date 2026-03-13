interface Location {
  name: string;
  note: string;
}

interface CoverageAreaProps {
  locations: Location[];
  description: string;
}

export default function CoverageArea({ locations, description }: CoverageAreaProps) {
  return (
    <div className="space-y-6">
      <p className="text-fg-secondary leading-relaxed">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {locations.map((loc) => {
          const isPrimary = loc.note === "sediu principal";
          return (
            <div
              key={loc.name}
              className={`flex flex-col px-4 py-3 rounded-xl border ${isPrimary ? "location-primary" : "location-default"}`}
            >
              <span className="font-semibold">{loc.name}</span>
              <span className={`location-note text-xs mt-0.5`}>{loc.note}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
