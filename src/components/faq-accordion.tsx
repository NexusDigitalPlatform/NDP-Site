"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="overflow-hidden rounded-[14px] border border-[#eceae6] bg-white">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center gap-3.5 px-5 py-[18px] text-left"
            >
              <span className="flex-1 text-[15.5px] font-bold text-[#5c1c00]">{f.q}</span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="#ff5001"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-none transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-[18px] text-[14px] leading-[1.65] text-[#6e5d4e]">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
