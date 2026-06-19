import Link from "next/link";
import ChatWidget from "@/components/chat-widget";
import KonsultanDemo from "@/components/konsultan-demo";
import ScrollReveal from "@/components/scroll-reveal";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const ArrowRight = ({ size = 17 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const industries = [
  "BUMN",
  "Perbankan",
  "Energi & Sumber Daya",
  "Manufaktur",
  "Logistik",
  "Kantor Konsultan Pajak",
];

const stats = [
  { value: "2", label: "Konsultan AI khusus" },
  { value: "100%", label: "Jawaban tersitasi" },
  { value: "HITL", label: "Eskalasi ke pakar" },
  { value: "ID", label: "Fokus regulasi Indonesia" },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <ScrollReveal />

      <SiteNav active="Beranda" />

      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5ee_0%,#fffaf6_60%,#ffffff_100%)] px-8 pt-[72px] pb-16">
        <div className="ndp-float-b pointer-events-none absolute top-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.45),rgba(255,80,1,0)_70%)] blur-[40px]" />
        <div className="ndp-float-a pointer-events-none absolute top-10 left-[-140px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(254,243,199,0.7),rgba(254,243,199,0)_70%)] blur-[40px]" />

        <div className="relative mx-auto flex max-w-[880px] flex-col items-center text-center">
          <span data-reveal data-reveal-delay="0" className="inline-flex h-8 items-center gap-2 rounded-full border border-[#ffe5d3] bg-white px-3.5 text-[12px] font-semibold text-[#b83800] shadow-[0_1px_2px_rgba(92,28,0,0.05)]">
            <span className="ndp-pulse h-[7px] w-[7px] rounded-full bg-[#ff5001]" />
            Platform AI untuk pajak &amp; akuntansi · Indonesia
          </span>
          <h1 data-reveal data-reveal-delay="80" className="mt-[22px] max-w-[820px] text-[54px] leading-[1.08] font-extrabold tracking-[-0.025em] text-balance text-[#5c1c00]">
            Keputusan pajak yang cepat, dengan jawaban yang bisa{" "}
            <span className="text-[#ff5001]">Anda audit.</span>
          </h1>
          <p data-reveal data-reveal-delay="160" className="mt-[22px] max-w-[660px] text-[18px] leading-[1.6] text-pretty text-[#6e5d4e]">
            NDP adalah platform AI Nexus untuk tim pajak &amp; keuangan
            enterprise di Indonesia. Produk utama kami — Konsultan Pajak &amp;
            Akuntan AI — memberi jawaban instan yang selalu tertaut ke regulasi
            resmi.
          </p>
          <div data-reveal data-reveal-delay="240" className="mt-[30px] flex flex-wrap justify-center gap-3">
            <Link
              href="/kontak"
              className="inline-flex h-[50px] items-center gap-2 rounded-xl bg-[#ff5001] px-[26px] text-[15px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(255,80,1,0.5)] transition-colors hover:bg-[#e64600]"
            >
              Minta demo enterprise
              <ArrowRight />
            </Link>
            <Link
              href="/produk"
              className="inline-flex h-[50px] items-center gap-2 rounded-xl border border-[#e2dcd4] bg-white px-6 text-[15px] font-semibold text-[#5c1c00] transition-all hover:border-[#d8cfc6] hover:bg-[#faf8f5]"
            >
              Lihat produk
            </Link>
          </div>
          <div data-reveal data-reveal-delay="320" className="mt-5 flex items-center gap-2 text-[12.5px] font-medium text-[#9a8d82]">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#bcae9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Untuk enterprise &amp; BUMN · Dokumen diproses sesuai regulasi
          </div>
        </div>

        {/* product mockup */}
        <div data-reveal data-reveal-delay="420" className="relative mx-auto mt-[52px] max-w-[1020px]">
          <KonsultanDemo />
        </div>
      </header>

      {/* ============ PRODUK UTAMA ============ */}
      <section className="bg-white px-8 py-[84px]">
        <div className="mx-auto max-w-[1080px]">
          <div data-reveal className="mx-auto mb-11 max-w-[640px] text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Produk utama</div>
            <h2 className="text-[38px] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance text-[#5c1c00]">
              Konsultan AI untuk pajak &amp; akuntansi
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#6e5d4e]">
              Dua konsultan dalam satu workspace. Ganti kapan saja — keduanya
              menjawab dari basis regulasi terkurasi.
            </p>
          </div>
          <div data-reveal data-reveal-stagger className="mb-[30px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
            <div className="rounded-[18px] border border-[#ffe5d3] bg-[linear-gradient(180deg,#fff9f4,#ffffff)] p-7">
              <span className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              </span>
              <h3 className="mb-2 text-[20px] font-bold text-[#5c1c00]">Konsultan Pajak AI</h3>
              <p className="text-[14px] leading-[1.6] text-[#6e5d4e]">
                Tarif, kewajiban, faktur, dan kepatuhan PPh/PPN — dengan rujukan
                ke UU dan peraturan turunan.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#dbe6fb] bg-[linear-gradient(180deg,#f6f9ff,#ffffff)] p-7">
              <span className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[rgba(37,99,235,0.10)] text-[#2563eb]">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                </svg>
              </span>
              <h3 className="mb-2 text-[20px] font-bold text-[#5c1c00]">Konsultan Akuntan AI</h3>
              <p className="text-[14px] leading-[1.6] text-[#6e5d4e]">
                Perlakuan akuntansi, jurnal, dan pelaporan — dengan rujukan ke
                standar PSAK.
              </p>
            </div>
          </div>
          <div data-reveal className="text-center">
            <Link
              href="/produk"
              className="inline-flex h-[46px] items-center gap-2 rounded-[11px] bg-[#ff5001] px-[22px] text-[14px] font-semibold text-white transition-colors hover:bg-[#e64600]"
            >
              Jelajahi Konsultan AI
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ AUDITABILITY TEASER ============ */}
      <section className="bg-[linear-gradient(180deg,#ffffff,#faf8f5)] px-8 py-16">
        <div className="mx-auto max-w-[1080px] text-center">
          <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Kenapa NDP</div>
          <h2 data-reveal className="mx-auto max-w-[620px] text-[34px] leading-[1.18] font-extrabold tracking-[-0.02em] text-balance text-[#5c1c00]">
            Jawaban yang bisa diaudit, bukan kotak hitam
          </h2>
          <div data-reveal data-reveal-stagger className="my-10 grid grid-cols-1 gap-[18px] text-left md:grid-cols-3">
            {[
              {
                title: "Sitasi ke pasal",
                body: "Setiap klaim dirujuk ke regulasi resmi yang relevan.",
                icon: (
                  <>
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </>
                ),
              },
              {
                title: "Teks asli terbuka",
                body: "Baca naskah lengkap pasal tanpa keluar percakapan.",
                icon: (
                  <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                ),
              },
              {
                title: "Eskalasi ke pakar",
                body: "Teruskan ke pakar bersertifikat untuk keputusan penting.",
                icon: (
                  <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-[#eceae6] bg-white p-6">
                <span className="mb-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {card.icon}
                  </svg>
                </span>
                <h3 className="mb-1.5 text-[16px] font-bold text-[#5c1c00]">{card.title}</h3>
                <p className="text-[13px] leading-[1.55] text-[#6e5d4e]">{card.body}</p>
              </div>
            ))}
          </div>
          <Link href="/produk" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#ff5001] transition-colors hover:text-[#b83800]">
            Pelajari auditability
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ============ TENTANG TEASER ============ */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div data-reveal>
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Tentang NDP</div>
            <h2 className="text-[34px] leading-[1.18] font-extrabold tracking-[-0.02em] text-balance text-[#5c1c00]">
              Dibangun Nexus untuk pekerjaan teregulasi
            </h2>
            <p className="mt-[18px] mb-6 text-[15.5px] leading-[1.65] text-[#6e5d4e]">
              Kami percaya AI bisa mempercepat pekerjaan pajak &amp; akuntansi
              tanpa mengorbankan kepercayaan. Karena itu setiap jawaban NDP
              dapat ditelusuri, ditandai dengan jujur, dan selalu menyediakan
              jalur ke pakar manusia.
            </p>
            <Link
              href="/perusahaan"
              className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-[#e2dcd4] bg-white px-5 text-[14px] font-semibold text-[#5c1c00] transition-all hover:border-[#d8cfc6] hover:bg-[#faf8f5]"
            >
              Tentang perusahaan
            </Link>
          </div>
          <div data-reveal data-reveal-stagger className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-[#eceae6] bg-[#faf8f5] p-[22px]">
                <div className="text-[30px] font-extrabold tracking-[-0.01em] text-[#ff5001]">{s.value}</div>
                <div className="mt-1 text-[13px] font-semibold text-[#6e5d4e]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRI BAND ============ */}
      <section className="border-y border-[#f0ebe4] bg-[#faf8f5] px-8 py-[54px]">
        <div className="mx-auto max-w-[1080px] text-center">
          <div data-reveal className="mb-[22px] text-[12px] font-bold tracking-[0.1em] text-[#bcae9f] uppercase">
            Dirancang untuk tim pajak &amp; keuangan di berbagai industri
          </div>
          <div data-reveal data-reveal-stagger className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((name) => (
              <span key={name} className="inline-flex h-[38px] items-center rounded-full border border-[#eceae6] bg-white px-[18px] text-[13px] font-semibold text-[#8a7d70]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-white px-8 py-20">
        <div data-reveal className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#5c1c00,#b83800_55%,#ff5001)] px-12 py-[60px] text-center">
          <div className="absolute top-[-100px] right-[-60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.5),rgba(255,255,255,0)_70%)] blur-[30px]" />
          <div className="relative">
            <h2 className="text-[38px] leading-[1.12] font-extrabold tracking-[-0.02em] text-balance text-white">
              Lihat NDP bekerja untuk tim Anda
            </h2>
            <p className="mx-auto mt-4 max-w-[540px] text-[17px] leading-[1.6] text-[#ffe5d3]">
              Jadwalkan demo, atau mulai coba gratis hari ini.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontak"
                className="inline-flex h-[50px] items-center gap-2 rounded-xl bg-white px-[26px] text-[15px] font-bold text-[#b83800] transition-transform hover:-translate-y-px"
              >
                Minta demo enterprise
              </Link>
              <Link
                href="/harga"
                className="inline-flex h-[50px] items-center gap-2 rounded-xl border border-white/40 bg-white/[0.12] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/20"
              >
                Lihat harga
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* ============ CS CHAT WIDGET ============ */}
      <ChatWidget />
    </div>
  );
}
