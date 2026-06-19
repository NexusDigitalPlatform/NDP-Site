import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Produk — Konsultan Pajak & Akuntan AI | NDP",
  description:
    "Konsultan Pajak & Akuntan AI dalam satu workspace. Jawaban tersitasi, pemeriksaan dokumen, dan keamanan untuk lingkungan teregulasi.",
};

const Check = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mt-px flex-none">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const steps = [
  { n: "1", title: "Pilih konsultan", body: "Konsultan Pajak atau Akuntan — ganti kapan saja." },
  { n: "2", title: "Tanya atau unggah", body: "Ketik pertanyaan, atau foto/unggah dokumen untuk diperiksa." },
  { n: "3", title: "Jawaban tersitasi", body: "Terima jawaban dengan rujukan regulasi yang bisa Anda buka." },
  { n: "4", title: "Eskalasi bila perlu", body: "Untuk keputusan penting, teruskan ke pakar bersertifikat." },
];

const security = [
  {
    title: "Dokumen ephemeral",
    body: "Dokumen diproses sementara untuk pemeriksaan dan tidak disimpan.",
    icon: (
      <>
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: "Basis regulasi terkurasi",
    body: "Jawaban bersumber dari korpus regulasi resmi yang dikurasi.",
    icon: (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </>
    ),
  },
  {
    title: "Audit log & retensi",
    body: "Jejak aktivitas dan kebijakan retensi sesuai kepatuhan organisasi.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
  },
  {
    title: "SSO/SAML & RBAC",
    body: "Integrasi identitas perusahaan & akses berbasis peran (Enterprise).",
    icon: (
      <>
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <circle cx="12" cy="16" r="1" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </>
    ),
  },
  {
    title: "Data residency Indonesia",
    body: "Opsi pemrosesan data di dalam negeri sesuai ketentuan.",
    icon: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: "Enkripsi end-to-end",
    body: "Data dienkripsi saat transit dan saat disimpan dengan standar industri.",
    icon: (
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    ),
  },
];

export default function ProdukPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SiteNav active="Produk" />

      {/* HERO */}
      <header className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5ee,#ffffff)] px-8 pt-16 pb-14 text-center">
        <div className="pointer-events-none absolute top-[-140px] right-[-100px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.4),rgba(255,80,1,0)_70%)] blur-[40px]" />
        <div className="relative mx-auto max-w-[760px]">
          <div className="mb-3.5 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Produk · Konsultan AI</div>
          <h1 className="text-[46px] leading-[1.1] font-extrabold tracking-[-0.025em] text-balance text-[#5c1c00]">
            Konsultan Pajak &amp; Akuntan AI dalam satu workspace
          </h1>
          <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-[1.6] text-[#6e5d4e]">
            Tanya, unggah dokumen untuk diperiksa, dan terima jawaban tersitasi —
            semuanya dalam alur kerja yang dirancang untuk lingkungan teregulasi.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/kontak" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#ff5001] px-6 text-[15px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(255,80,1,0.5)] transition-colors hover:bg-[#e64600]">
              Minta demo
            </Link>
            <Link href="/harga" className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#e2dcd4] bg-white px-[22px] text-[15px] font-semibold text-[#5c1c00] transition-all hover:bg-[#faf8f5]">
              Lihat harga
            </Link>
          </div>
        </div>
      </header>

      {/* DUA KONSULTAN */}
      <section id="konsultan" className="scroll-mt-[84px] bg-white px-8 py-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Dua konsultan, satu platform</div>
            <h2 className="text-[36px] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance text-[#5c1c00]">
              Pilih ahli yang Anda butuhkan
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
            <div className="rounded-[18px] border border-[#ffe5d3] bg-[linear-gradient(180deg,#fff9f4,#ffffff)] p-[30px]">
              <span className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                <svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              </span>
              <h3 className="text-[21px] font-bold text-[#5c1c00]">Konsultan Pajak AI</h3>
              <p className="mt-[9px] mb-[18px] text-[14px] leading-[1.6] text-[#6e5d4e]">
                Pertanyaan perpajakan dengan rujukan ke UU, PP, dan peraturan
                turunan terkini.
              </p>
              <div className="flex flex-col gap-[11px]">
                {["Tarif, kewajiban & tenggat PPh / PPN", "Pemeriksaan kelengkapan faktur pajak", "Kepatuhan & interpretasi regulasi"].map((t) => (
                  <span key={t} className="flex gap-[9px] text-[13.5px] text-[#4a3a2c]">
                    <Check color="#ff5001" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[18px] border border-[#dbe6fb] bg-[linear-gradient(180deg,#f6f9ff,#ffffff)] p-[30px]">
              <span className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[rgba(37,99,235,0.10)] text-[#2563eb]">
                <svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                </svg>
              </span>
              <h3 className="text-[21px] font-bold text-[#5c1c00]">Konsultan Akuntan AI</h3>
              <p className="mt-[9px] mb-[18px] text-[14px] leading-[1.6] text-[#6e5d4e]">
                Pertanyaan akuntansi dengan rujukan ke standar PSAK dan praktik
                pelaporan.
              </p>
              <div className="flex flex-col gap-[11px]">
                {["Perlakuan akuntansi sesuai PSAK", "Jurnal, pengakuan & penyajian", "Rekonsiliasi fiskal & laporan keuangan"].map((t) => (
                  <span key={t} className="flex gap-[9px] text-[13.5px] text-[#4a3a2c]">
                    <Check color="#2563eb" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDITABILITY */}
      <section id="audit" className="scroll-mt-[84px] bg-[linear-gradient(180deg,#ffffff,#faf8f5)] px-8 py-20">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Auditability</div>
            <h2 className="text-[36px] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance text-[#5c1c00]">
              Jawaban yang bisa diaudit
            </h2>
            <p className="mt-[18px] mb-[26px] text-[16px] leading-[1.65] text-[#6e5d4e]">
              Di lingkungan teregulasi, &ldquo;AI bilang begitu&rdquo; tidak
              cukup. Setiap jawaban NDP tertaut ke pasal sumbernya.
            </p>
            <div className="flex flex-col gap-[18px]">
              {[
                { t: "Sitasi ke pasal spesifik", b: "Setiap klaim dirujuk ke UU / PP yang relevan, lengkap dengan cuplikan.", icon: (<><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M16 13H8" /><path d="M16 17H8" /></>) },
                { t: "Buka teks asli regulasi", b: "Baca naskah lengkap pasal yang dirujuk tanpa keluar dari percakapan.", icon: (<><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>) },
                { t: "Disclaimer yang jujur", b: "Jawaban ditandai informasional — tidak menggantikan pakar bersertifikat.", icon: (<><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>) },
              ].map((row) => (
                <div key={row.t} className="flex gap-3.5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[11px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{row.icon}</svg>
                  </span>
                  <span className="flex flex-col gap-[3px]">
                    <span className="text-[15px] font-bold text-[#5c1c00]">{row.t}</span>
                    <span className="text-[13.5px] leading-[1.5] text-[#6e5d4e]">{row.b}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* citation card */}
          <div className="rounded-[18px] border border-[#eadfd5] bg-white p-6 shadow-[0_24px_60px_-28px_rgba(92,28,0,0.28)]">
            <div className="flex items-start gap-[11px]">
              <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                </svg>
              </span>
              <span className="flex-1 text-[14px] leading-[1.6] text-[#3f2a1c]">
                Tarif PPh Badan saat ini <b className="text-[#5c1c00]">22%</b>,
                ditetapkan via UU HPP yang mengubah Pasal 17 UU PPh
                <span className="mx-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-[5px] bg-[rgba(255,80,1,0.12)] px-1 align-[1px] text-[10px] font-bold text-[#ff5001]">1</span>.
              </span>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-[#e7e9ee]">
              <div className="flex items-center gap-[9px] border-b border-[#f2e7dc] bg-[#fffaf6] px-3.5 py-3">
                <span className="inline-flex h-5 min-w-[28px] items-center justify-center rounded-[5px] border border-[#ffe5d3] bg-[#fff5ee] px-[7px] text-[10px] font-extrabold text-[#b83800]">UU</span>
                <span className="flex-1 text-[13px] font-bold text-[#5c1c00]">UU No. 7 Tahun 2021 (HPP)</span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#ff5001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </div>
              <div className="p-3.5">
                <div className="mb-1.5 text-[11px] font-bold text-[#ff5001]">Pasal 17 ayat (1) huruf b</div>
                <p className="text-justify text-[12.5px] leading-[1.65] text-[#6e5d4e]">
                  &ldquo;Wajib Pajak badan dalam negeri dan bentuk usaha tetap
                  dikenai tarif sebesar 22% (dua puluh dua persen) yang mulai
                  berlaku pada Tahun Pajak 2022.&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-3.5 flex items-center gap-2 rounded-[9px] border border-[#eceae6] bg-[#f9f8f6] px-3 py-[9px]">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#a89a8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span className="text-[11px] text-[#8a7d70]">Informasional · verifikasi terhadap naskah resmi terbaru</span>
            </div>
          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-12 max-w-[600px] text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Cara kerja</div>
            <h2 className="text-[36px] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#5c1c00]">
              Dari pertanyaan ke jawaban tepercaya
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-[#eceae6] p-6">
                <span className="mb-4 inline-flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#fff5ee] text-[16px] font-extrabold text-[#ff5001]">{s.n}</span>
                <h3 className="mb-1.5 text-[16px] font-bold text-[#5c1c00]">{s.title}</h3>
                <p className="text-[13px] leading-[1.55] text-[#6e5d4e]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEAMANAN */}
      <section id="keamanan" className="scroll-mt-[84px] bg-[#faf8f5] px-8 py-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Keamanan &amp; kepatuhan</div>
            <h2 className="text-[36px] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance text-[#5c1c00]">
              Dibangun untuk lingkungan teregulasi
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {security.map((c) => (
              <div key={c.title} className="rounded-2xl border border-[#eceae6] bg-white p-6">
                <span className="mb-[15px] flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </span>
                <h3 className="mb-1.5 text-[15.5px] font-bold text-[#5c1c00]">{c.title}</h3>
                <p className="text-[13px] leading-[1.55] text-[#6e5d4e]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HITL */}
      <section className="bg-white px-8 py-[60px]">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center gap-7 rounded-[20px] border border-[#ffe5d3] bg-[linear-gradient(135deg,#fff5ee,#fff9f4)] px-10 py-[38px]">
          <span className="flex h-[60px] w-[60px] flex-none items-center justify-center rounded-2xl bg-[#ff5001] text-white shadow-[0_6px_18px_-6px_rgba(255,80,1,0.6)]">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="16 11 18 13 22 9" />
            </svg>
          </span>
          <div className="min-w-[260px] flex-1">
            <h2 className="text-[25px] font-extrabold tracking-[-0.01em] text-[#5c1c00]">AI untuk kecepatan, pakar untuk kepastian</h2>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#6e5d4e]">
              Saat keputusan berisiko tinggi, eskalasikan percakapan ke pakar
              bersertifikat hanya dengan satu klik — konteks lengkap ikut
              terbawa.
            </p>
          </div>
          <Link href="/kontak" className="inline-flex h-[46px] items-center gap-2 rounded-[11px] bg-[#ff5001] px-[22px] text-[14px] font-semibold text-white transition-colors hover:bg-[#e64600]">
            Minta demo
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-8 pt-10 pb-20">
        <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#5c1c00,#b83800_55%,#ff5001)] px-12 py-14 text-center">
          <div className="absolute top-[-100px] right-[-60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.5),rgba(255,255,255,0)_70%)] blur-[30px]" />
          <div className="relative">
            <h2 className="text-[36px] leading-[1.12] font-extrabold tracking-[-0.02em] text-balance text-white">
              Siap mencoba Konsultan AI?
            </h2>
            <div className="mt-[26px] flex flex-wrap justify-center gap-3">
              <Link href="/kontak" className="inline-flex h-[50px] items-center gap-2 rounded-xl bg-white px-[26px] text-[15px] font-bold text-[#b83800] transition-transform hover:-translate-y-px">
                Minta demo enterprise
              </Link>
              <Link href="/harga" className="inline-flex h-[50px] items-center gap-2 rounded-xl border border-white/40 bg-white/[0.12] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/20">
                Lihat harga
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
