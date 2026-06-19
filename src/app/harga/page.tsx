import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import FaqAccordion, { type Faq } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Harga — Paket NDP | Konsultan Pajak & Akuntan AI",
  description:
    "Paket Profesional, Tim, dan Enterprise. Mulai gratis, lalu pilih paket sesuai skala tim. Semua paket menyertakan jawaban tersitasi.",
};

const Check = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-px flex-none">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

type Plan = {
  name: string;
  tagline: string;
  price: React.ReactNode;
  features: string[];
  cta: string;
  featured?: boolean;
  checkColor: string;
};

const plans: Plan[] = [
  {
    name: "Profesional",
    tagline: "Untuk praktisi individu",
    price: (
      <>
        Rp 750rb<span className="text-[13px] font-medium text-[#9a8d82]"> /pengguna/bln</span>
      </>
    ),
    features: ["1 konsultan AI", "Tanya-jawab tak terbatas", "Pemeriksaan dokumen 50/bln", "Riwayat 30 hari"],
    cta: "Mulai",
    checkColor: "#047857",
  },
  {
    name: "Tim",
    tagline: "Untuk tim pajak & keuangan",
    price: (
      <>
        Rp 1,5jt<span className="text-[13px] font-medium text-[#9a8d82]"> /pengguna/bln</span>
      </>
    ),
    features: ["Kedua konsultan AI", "Pemeriksaan dokumen tanpa batas", "Eskalasi pakar 5/bln", "Kolaborasi & riwayat tim"],
    cta: "Coba gratis 14 hari",
    featured: true,
    checkColor: "#ff5001",
  },
  {
    name: "Enterprise",
    tagline: "Untuk BUMN & korporasi",
    price: "Khusus",
    features: ["Semua fitur Tim", "SSO/SAML, audit log & RBAC", "Eskalasi pakar tanpa batas", "SLA, retensi khusus & deploy on-prem"],
    cta: "Hubungi sales",
    checkColor: "#047857",
  },
];

const included = [
  "Jawaban tersitasi",
  "Teks asli regulasi",
  "Disclaimer & dokumen ephemeral",
  "Enkripsi end-to-end",
];

const faqs: Faq[] = [
  { q: "Apakah ada uji coba gratis?", a: "Ya. Paket Tim tersedia dengan uji coba gratis 14 hari tanpa kartu kredit. Anda bisa mengundang anggota tim dan mencoba kedua konsultan AI selama masa uji coba." },
  { q: "Bagaimana penagihan dihitung?", a: "Penagihan dihitung per pengguna aktif per bulan. Anda dapat menambah atau mengurangi kursi kapan saja; perubahan akan diprorata pada tagihan berikutnya. Faktur pajak terbit otomatis." },
  { q: "Bisakah berpindah paket?", a: "Bisa, kapan saja. Peningkatan berlaku langsung; penurunan berlaku pada periode penagihan berikutnya. Riwayat dan data tim Anda tetap tersimpan sesuai kebijakan paket." },
  { q: "Apa yang membedakan paket Enterprise?", a: "Enterprise menambahkan SSO/SAML, kontrol akses berbasis peran, audit log, retensi khusus, eskalasi pakar tanpa batas, SLA, serta opsi deployment on-premise. Hubungi sales untuk penawaran." },
  { q: "Metode pembayaran apa yang diterima?", a: "Kartu kredit/debit dan transfer bank (virtual account) untuk pelanggan Indonesia. Pelanggan Enterprise dapat menggunakan invoice tahunan dengan termin pembayaran." },
];

export default function HargaPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SiteNav active="Harga" />

      {/* HERO */}
      <header className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5ee,#ffffff)] px-8 pt-16 pb-12 text-center">
        <div className="pointer-events-none absolute top-[-140px] right-[-100px] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.4),rgba(255,80,1,0)_70%)] blur-[40px]" />
        <div className="relative mx-auto max-w-[680px]">
          <div className="mb-3.5 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Harga</div>
          <h1 className="text-[46px] leading-[1.1] font-extrabold tracking-[-0.025em] text-balance text-[#5c1c00]">
            Paket yang tumbuh bersama tim Anda
          </h1>
          <p className="mx-auto mt-[18px] max-w-[540px] text-[17px] leading-[1.6] text-[#6e5d4e]">
            Mulai gratis, lalu pilih paket sesuai skala tim. Semua paket
            menyertakan jawaban tersitasi.
          </p>
        </div>
      </header>

      {/* PLANS */}
      <section className="bg-white px-8 pt-8 pb-[72px]">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col gap-[18px] rounded-[18px] bg-white p-[30px] ${
                plan.featured
                  ? "border-2 border-[#ff5001] shadow-[0_24px_50px_-24px_rgba(255,80,1,0.4)]"
                  : "border border-[#eceae6]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-[30px] rounded-full bg-[#ff5001] px-[11px] py-1 text-[10px] font-bold tracking-[0.05em] text-white uppercase">
                  Paling populer
                </span>
              )}
              <div className="flex flex-col gap-1.5">
                <span className="text-[17px] font-bold text-[#5c1c00]">{plan.name}</span>
                <span className="text-[13px] text-[#9a8d82]">{plan.tagline}</span>
                <span className="mt-2 text-[32px] font-extrabold text-[#5c1c00]">{plan.price}</span>
              </div>
              <div className="flex flex-col gap-[11px]">
                {plan.features.map((f) => (
                  <span key={f} className="flex gap-[9px] text-[13.5px] text-[#4a3a2c]">
                    <Check color={plan.checkColor} />
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex-1" />
              <Link
                href="/kontak"
                className={`flex h-[46px] items-center justify-center rounded-[11px] text-[14px] font-semibold transition-colors ${
                  plan.featured
                    ? "bg-[#ff5001] text-white hover:bg-[#e64600]"
                    : "border border-[#e2dcd4] bg-white text-[#5c1c00] hover:bg-[#faf8f5]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SEMUA PAKET TERMASUK */}
      <section className="border-t border-[#f0ebe4] bg-[#faf8f5] px-8 py-14">
        <div className="mx-auto max-w-[1080px] text-center">
          <h2 className="mb-7 text-[22px] font-extrabold tracking-[-0.01em] text-[#5c1c00]">Semua paket sudah termasuk</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {included.map((item) => (
              <span key={item} className="inline-flex h-10 items-center gap-2 rounded-full border border-[#eceae6] bg-white px-4 text-[13px] font-semibold text-[#4a3a2c]">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#ff5001" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-8 py-[72px]">
        <div className="mx-auto max-w-[760px]">
          <div className="mx-auto mb-10 text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">FAQ</div>
            <h2 className="text-[34px] leading-[1.15] font-extrabold tracking-[-0.02em] text-[#5c1c00]">
              Pertanyaan tentang harga
            </h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-8 pt-5 pb-20">
        <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#5c1c00,#b83800_55%,#ff5001)] px-12 py-14 text-center">
          <div className="absolute top-[-100px] right-[-60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.5),rgba(255,255,255,0)_70%)] blur-[30px]" />
          <div className="relative">
            <h2 className="text-[36px] leading-[1.12] font-extrabold tracking-[-0.02em] text-balance text-white">
              Butuh penawaran untuk tim besar?
            </h2>
            <p className="mx-auto mt-3.5 max-w-[520px] text-[16px] leading-[1.6] text-[#ffe5d3]">
              Tim sales kami siap menyusun paket Enterprise sesuai kebutuhan
              organisasi Anda.
            </p>
            <div className="mt-[26px] flex flex-wrap justify-center gap-3">
              <Link href="/kontak" className="inline-flex h-[50px] items-center gap-2 rounded-xl bg-white px-[26px] text-[15px] font-bold text-[#b83800] transition-transform hover:-translate-y-px">
                Hubungi sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
