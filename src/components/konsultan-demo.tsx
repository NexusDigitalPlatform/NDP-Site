"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Live simulation of the Konsultan Pajak AI consultation as it runs in the
 * ndp-ai product. Self-driving: types the question, "sends" it, shows the AI
 * thinking, streams the grounded answer, then reveals citations, source cards,
 * the disclaimer, and follow-up chips — exactly mirroring the real exchange.
 * Content is kept 1:1 with ndp-ai (app/page.tsx, Exchange 1).
 */

const QUESTION = "Berapa tarif PPh Badan yang berlaku sekarang dan apa dasar hukumnya?";

// Answer broken into typed tokens. Char-level streaming preserves the exact
// spacing/formatting; citation pills are atomic units that pop in when reached.
type Token =
  | { type: "t"; text: string }
  | { type: "b"; text: string }
  | { type: "c"; n: number };

const ANSWER: Token[] = [
  { type: "t", text: "Tarif Pajak Penghasilan (PPh) Badan yang berlaku saat ini adalah " },
  { type: "b", text: "22% dari Penghasilan Kena Pajak" },
  { type: "t", text: ", yang ditetapkan melalui UU HPP yang mengubah ketentuan Pasal 17 UU PPh" },
  { type: "c", n: 1 },
  { type: "t", text: ". Untuk " },
  { type: "b", text: "Perseroan Terbuka (Tbk)" },
  { type: "t", text: " yang memenuhi syarat tertentu, tersedia tarif lebih rendah sebesar " },
  { type: "b", text: "19%" },
  { type: "c", n: 2 },
  { type: "t", text: "." },
];

// Total stream length: every text char is 1 step, every citation pill is 1 step.
const ANSWER_LEN = ANSWER.reduce((n, tok) => n + (tok.type === "c" ? 1 : tok.text.length), 0);

type Phase = "idle" | "typing" | "thinking" | "streaming" | "done";

export default function KonsultanDemo() {
  // Defaults match the server-rendered (idle) markup to avoid hydration drift.
  const [phase, setPhase] = useState<Phase>("idle");
  const [typed, setTyped] = useState("");
  const [sent, setSent] = useState(false);
  const [progress, setProgress] = useState(0); // chars of the answer streamed
  const [showSources, setShowSources] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showChips, setShowChips] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep the conversation pinned to the latest content while it streams.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [progress, sent, phase, showSources, showDisclaimer, showChips]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: render the completed exchange, no animation loop.
    // Deferred so the effect body itself stays free of synchronous setState.
    if (reduce) {
      const id = setTimeout(() => {
        setPhase("done");
        setSent(true);
        setProgress(ANSWER_LEN);
        setShowSources(true);
        setShowDisclaimer(true);
        setShowChips(true);
      }, 0);
      return () => clearTimeout(id);
    }

    let alive = true;
    let started = false;
    const sleep = (ms: number) =>
      new Promise<void>((r) => setTimeout(r, ms));

    async function run() {
      const jitter = (base: number, spread: number) =>
        base + Math.random() * spread;

      while (alive) {
        // reset
        setPhase("idle");
        setTyped("");
        setSent(false);
        setProgress(0);
        setShowSources(false);
        setShowDisclaimer(false);
        setShowChips(false);
        await sleep(900);
        if (!alive) return;

        // type the question into the composer
        setPhase("typing");
        for (let i = 1; i <= QUESTION.length; i++) {
          if (!alive) return;
          setTyped(QUESTION.slice(0, i));
          const ch = QUESTION[i - 1];
          await sleep(ch === " " ? jitter(38, 60) : jitter(20, 45));
        }
        await sleep(420);
        if (!alive) return;

        // send: clear composer, user bubble flies in
        setTyped("");
        setSent(true);
        await sleep(560);
        if (!alive) return;

        // AI thinking
        setPhase("thinking");
        await sleep(1150);
        if (!alive) return;

        // stream the grounded answer, ~2 chars per tick
        setPhase("streaming");
        for (let i = 2; i <= ANSWER_LEN; i += 2) {
          if (!alive) return;
          setProgress(Math.min(i, ANSWER_LEN));
          await sleep(jitter(14, 16));
        }
        setProgress(ANSWER_LEN);
        await sleep(300);
        if (!alive) return;

        // reveal supporting context
        setPhase("done");
        setShowSources(true);
        await sleep(520);
        if (!alive) return;
        setShowDisclaimer(true);
        await sleep(460);
        if (!alive) return;
        setShowChips(true);

        // hold the completed answer, then loop
        await sleep(5200);
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true;
          run();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(root);

    return () => {
      alive = false;
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-t-[18px] border border-b-0 border-[#eadfd5] bg-white shadow-[0_40px_80px_-32px_rgba(92,28,0,0.32)]"
    >
      {/* browser chrome */}
      <div className="flex h-[42px] items-center gap-2 border-b border-[#f0ebe4] bg-[#faf6f1] px-4">
        <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
        <span className="flex flex-1 justify-center">
          <span className="inline-flex h-[25px] items-center gap-[7px] rounded-full border border-[#eadfd5] bg-white px-3.5 text-[11.5px] font-medium text-[#9a8d82]">
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#9a8d82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            app.ndp.id/konsultan-pajak
          </span>
        </span>
      </div>

      <div className="flex h-[440px] bg-white">
        {/* sidebar */}
        <div className="flex w-[62px] flex-none flex-col items-center gap-3.5 border-r border-[#eceae6] bg-[#fafafa] py-3.5">
          <Image src="/assets/nqr-icon.png" alt="NDP" width={28} height={28} className="h-7 w-7 object-contain" />
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border-[1.5px] border-[#ffc8a3] bg-[rgba(255,80,1,0.12)] text-[#ff5001]">
            <ScaleIcon size={19} />
          </div>
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[rgba(37,99,235,0.10)] text-[#2563eb]">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="20" x="4" y="2" rx="2" />
              <line x1="8" x2="16" y1="6" y2="6" />
              <line x1="16" x2="16" y1="14" y2="18" />
              <path d="M8 10h.01" />
              <path d="M12 10h.01" />
              <path d="M8 14h.01" />
            </svg>
          </div>
        </div>

        {/* conversation */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div ref={scrollRef} className="flex flex-1 flex-col gap-3.5 overflow-hidden px-6 py-5">
            {/* user question */}
            {sent && (
              <div className="ndp-chat-in flex justify-end">
                <span className="max-w-[78%] rounded-[14px_14px_4px_14px] border border-[#ffe5d3] bg-[#fff5ee] px-3.5 py-2.5 text-[13px] leading-[1.55] text-[#5c1c00]">
                  {QUESTION}
                </span>
              </div>
            )}

            {/* AI response */}
            {sent && (phase === "thinking" || phase === "streaming" || phase === "done") && (
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                  <ScaleIcon size={15} />
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                  {phase === "thinking" ? (
                    <span className="flex items-center gap-1 py-1.5">
                      <Dot delay="0s" />
                      <Dot delay="0.18s" />
                      <Dot delay="0.36s" />
                    </span>
                  ) : (
                    <span className="text-[13px] leading-[1.6] text-[#3f2a1c]">
                      {renderAnswer(progress)}
                      {phase === "streaming" && <span className="ndp-caret" />}
                    </span>
                  )}

                  {/* sources */}
                  {showSources && (
                    <div className="ndp-chat-in flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.08em] text-[#bcae9f] uppercase">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        Sumber dirujuk · 2
                      </div>
                      <SourceCard badge="UU" title="UU No. 7 Tahun 2021 (HPP)" />
                      <SourceCard badge="Psl" title="Pasal 17 UU PPh" />
                    </div>
                  )}

                  {/* disclaimer */}
                  {showDisclaimer && (
                    <div className="ndp-chat-in flex items-start gap-[7px] rounded-[9px] border border-[#eceae6] bg-[#f9f8f6] px-2.5 py-[7px]">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a89a8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-px flex-none">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <span className="text-[10.5px] leading-[1.45] text-[#8a7d70]">
                        Jawaban bersifat <b className="font-bold text-[#6e5d4e]">informasional</b> dan tidak menggantikan nasihat pakar pajak bersertifikat. Verifikasi terhadap naskah resmi sebelum mengambil keputusan.
                      </span>
                    </div>
                  )}

                  {/* follow-up actions */}
                  {showChips && (
                    <div className="ndp-chat-in flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-[30px] items-center gap-1.5 rounded-full border border-[#ffe5d3] bg-[#fff9f4] px-3 text-[11.5px] font-semibold text-[#b83800]">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ff5001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
                        </svg>
                        Bagaimana untuk UMKM (PP 55/2022)?
                      </span>
                      <span className="inline-flex h-[30px] items-center gap-1.5 rounded-full border border-[#e7e9ee] bg-white px-3 text-[11.5px] font-semibold text-[#6e5d4e]">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="m16 11 2 2 4-4" />
                        </svg>
                        Eskalasi ke pakar
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* composer */}
          <div className="px-6 pt-3 pb-4">
            <div
              className={`flex items-center gap-2 rounded-[13px] border py-[9px] pr-[9px] pl-3.5 shadow-[0_2px_8px_rgba(92,28,0,0.04)] transition-colors ${
                phase === "typing" ? "border-[#ffc8a3]" : "border-[#e2dcd4]"
              }`}
            >
              <span className="flex-1 truncate text-[12.5px] text-[#3f2a1c]">
                {typed ? (
                  <>
                    {typed}
                    <span className="ndp-caret" />
                  </>
                ) : (
                  <span className="text-[#bcae9f]">Tanya soal PPh, PPN, faktur pajak, kepatuhan…</span>
                )}
              </span>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[#ff5001]">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Render the answer up to `progress` characters, with bold runs + citation pills. */
function renderAnswer(progress: number) {
  const out: React.ReactNode[] = [];
  let offset = 0;
  for (let i = 0; i < ANSWER.length; i++) {
    const tok = ANSWER[i];
    if (tok.type === "c") {
      const visible = progress > offset;
      offset += 1;
      if (visible) out.push(<CitationPill key={i} n={tok.n} />);
      continue;
    }
    const start = offset;
    offset += tok.text.length;
    const shown = Math.max(0, Math.min(tok.text.length, progress - start));
    if (shown <= 0) continue;
    const slice = tok.text.slice(0, shown);
    if (tok.type === "b") {
      out.push(
        <b key={i} className="font-bold text-[#5c1c00]">
          {slice}
        </b>,
      );
    } else {
      out.push(<span key={i}>{slice}</span>);
    }
  }
  return out;
}

function CitationPill({ n }: { n: number }) {
  return (
    <span className="ndp-pill-in mx-0.5 inline-flex h-[15px] min-w-[15px] items-center justify-center rounded bg-[rgba(255,80,1,0.12)] px-1 align-[1px] text-[10px] font-bold text-[#ff5001]">
      {n}
    </span>
  );
}

function SourceCard({ badge, title }: { badge: string; title: string }) {
  return (
    <div className="flex items-center gap-[9px] rounded-[10px] border border-[#e7e9ee] px-[11px] py-[9px]">
      <span className="inline-flex h-[19px] min-w-[26px] items-center justify-center rounded-[5px] border border-[#ffe5d3] bg-[#fff5ee] px-1.5 text-[10px] font-extrabold text-[#b83800]">
        {badge}
      </span>
      <span className="flex-1 truncate text-[12px] font-bold text-[#5c1c00]">{title}</span>
      <span className="inline-flex items-center gap-[3px] text-[11px] font-semibold text-[#ff5001]">
        Buka teks
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>
    </div>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="ndp-think-dot h-[7px] w-[7px] rounded-full bg-[#ffb088]"
      style={{ animationDelay: delay }}
    />
  );
}

function ScaleIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
