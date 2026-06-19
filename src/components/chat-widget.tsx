"use client";

import { useState } from "react";

const quickReplies = [
  "Bagaimana cara kerjanya?",
  "Berapa harganya?",
  "Minta demo",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed right-6 bottom-6 z-[90] flex flex-col items-end gap-3.5">
      {/* panel */}
      {open && (
        <div className="ndp-chat-in pointer-events-auto flex h-[520px] max-h-[calc(100vh-120px)] w-[376px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-[20px] border border-[#eadfd5] bg-white shadow-[0_28px_70px_-22px_rgba(92,28,0,0.42)]">
          {/* header */}
          <div className="flex flex-none items-center gap-3 bg-[linear-gradient(135deg,#5c1c00,#b83800_60%,#ff5001)] px-[18px] py-4 text-white">
            <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/15">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span className="absolute right-[-2px] bottom-[-2px] h-3 w-3 rounded-full border-2 border-[#b83800] bg-[#34d399]" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col leading-[1.25]">
              <span className="text-[14.5px] font-bold">Bantuan NDP</span>
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-[#ffe5d3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
                Biasanya membalas dalam beberapa menit
              </span>
            </span>
            <button
              onClick={() => setOpen(false)}
              title="Tutup"
              className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[9px] border-none bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* messages */}
          <div className="flex min-h-0 flex-1 flex-col gap-3.5 overflow-y-auto bg-[#fdfbf9] px-[18px] py-5">
            <div className="flex items-start gap-[9px]">
              <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </span>
              <div className="max-w-[78%] rounded-[4px_14px_14px_14px] border border-[#eceae6] bg-white px-3.5 py-[11px] text-[13.5px] leading-[1.55] text-[#3f2a1c]">
                Halo! 👋 Saya asisten NDP. Ada yang bisa saya bantu seputar
                Konsultan Pajak &amp; Akuntan AI, harga, atau demo?
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pl-[39px]">
              {quickReplies.map((q) => (
                <span
                  key={q}
                  className="inline-flex h-8 cursor-pointer items-center rounded-full border border-[#ffe5d3] bg-[#fff5ee] px-[13px] text-[12.5px] font-semibold text-[#b83800] transition-colors hover:bg-[#fff0e3]"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* input */}
          <div className="flex-none border-t border-[#eceae6] bg-white px-3.5 py-3">
            <div className="flex items-center gap-2 rounded-[13px] border border-[#e2dcd4] py-1.5 pr-1.5 pl-3.5 transition-colors focus-within:border-[#ffa770]">
              <input
                placeholder="Tulis pesan…"
                className="flex-1 border-none bg-transparent py-[7px] font-[inherit] text-[13.5px] text-[#3f2a1c] outline-none"
              />
              <button
                title="Kirim"
                className="flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-[9px] border-none bg-[#ff5001] text-white transition-colors hover:bg-[#e64600]"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </button>
            </div>
            <div className="pt-2 text-center text-[10.5px] text-[#bcae9f]">
              Didukung NDP AI · jawaban dapat memuat ketidakakuratan
            </div>
          </div>
        </div>
      )}

      {/* launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        title="Bantuan"
        className="pointer-events-auto flex h-15 w-15 flex-none cursor-pointer items-center justify-center rounded-full border-none bg-[#ff5001] text-white shadow-[0_12px_28px_-8px_rgba(255,80,1,0.6)] transition-[background,transform] duration-150 hover:-translate-y-0.5 hover:bg-[#e64600]"
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
