"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-base rounded-xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-canvas transition-colors"
              style={{ backgroundColor: isOpen ? "var(--ds-canvas-subtle)" : undefined }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-fg pr-4">{item.question}</span>
              <ChevronDown className={`w-5 h-5 text-fg-muted flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="px-5 py-4 bg-canvas-subtle border-t border-base text-fg-muted leading-relaxed text-sm">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
