interface PriceItem {
  service: string;
  price: string;
}

interface PriceTableProps {
  prices: PriceItem[];
  note?: string;
}

export default function PriceTable({ prices, note }: PriceTableProps) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-base">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-dark text-fg-on-dark">
              <th className="text-left px-5 py-3 font-semibold">Serviciu</th>
              <th className="text-right px-5 py-3 font-semibold">Preț orientativ</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr
                key={index}
                className={`border-t border-base ${index % 2 === 0 ? "bg-canvas" : "bg-canvas-subtle"}`}
              >
                <td className="px-5 py-3.5 text-fg">{item.service}</td>
                <td className="px-5 py-3.5 text-right font-semibold text-brand whitespace-nowrap">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-3 text-sm text-fg-muted">* {note}</p>
      )}
    </div>
  );
}
