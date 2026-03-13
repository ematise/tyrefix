import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 – Pagina nu a fost găsită | Tyrefix Huedin",
};

export default function NotFound() {
  return (
    <section className="py-24 px-4 bg-canvas-subtle text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-6xl font-black text-brand mb-4">404</p>
        <h1 className="text-2xl font-black text-fg mb-3">
          Pagina nu a fost găsită
        </h1>
        <p className="text-fg-muted mb-8">
          Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          ← Înapoi la pagina principală
        </Link>
      </div>
    </section>
  );
}
