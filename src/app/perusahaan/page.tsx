import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Perusahaan — Tentang NDP | Nexus Digital Platform",
  description:
    "NDP dibangun oleh Nexus: AI boleh mempercepat pekerjaan teregulasi, tapi tidak boleh mengorbankan kepercayaan. Setiap jawaban dapat ditelusuri ke sumbernya.",
};

const mvv = [
  {
    title: "Misi",
    body: "Membuat keahlian pajak & akuntansi yang akurat dan dapat diaudit tersedia secara instan bagi setiap tim.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    title: "Visi",
    body: "Menjadi lapisan AI tepercaya untuk pekerjaan teregulasi di Indonesia — di mana kecepatan dan kepercayaan tidak lagi bertentangan.",
    icon: (
      <>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Nilai",
    body: "Dapat diaudit, jujur soal keterbatasan, dan selalu menyediakan jalur ke pakar manusia.",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

const principles = [
  { n: "01", title: "Auditable-first", body: "Jawaban tanpa rujukan tidak layak ditampilkan. Sitasi adalah fitur inti, bukan tambahan." },
  { n: "02", title: "Jujur soal batas", body: "Kami menandai jawaban sebagai informasional dan tidak pernah mengklaim sebagai validasi resmi." },
  { n: "03", title: "Manusia di lingkaran", body: "Pakar bersertifikat selalu dapat dijangkau untuk keputusan yang berisiko tinggi." },
];

const team = [
  { initials: "AW", name: "Arif Wibowo", role: "CEO & Co-founder" },
  { initials: "SP", name: "Sari Pratiwi", role: "Kepala Pajak & Riset" },
  { initials: "RH", name: "Reza Hidayat", role: "CTO & Co-founder" },
  { initials: "DK", name: "Dewi Kusuma", role: "Kepala Keamanan & Kepatuhan" },
];

export default function PerusahaanPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SiteNav active="Perusahaan" />

      {/* HERO */}
      <header className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5ee,#ffffff)] px-8 pt-[72px] pb-[60px] text-center">
        <div className="pointer-events-none absolute top-[-140px] left-[-100px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(254,243,199,0.7),rgba(254,243,199,0)_70%)] blur-[40px]" />
        <div className="relative mx-auto max-w-[780px]">
          <div className="mb-3.5 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Tentang NDP</div>
          <h1 className="text-[48px] leading-[1.1] font-extrabold tracking-[-0.025em] text-balance text-[#5c1c00]">
            AI tepercaya untuk pekerjaan pajak &amp; akuntansi di Indonesia
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-[1.65] text-[#6e5d4e]">
            NDP (Nexus Digital Platform) dibangun oleh Nexus untuk satu keyakinan
            sederhana: AI boleh mempercepat pekerjaan teregulasi, tapi tidak
            boleh mengorbankan kepercayaan. Karena itu setiap jawaban kami dapat
            ditelusuri ke sumbernya.
          </p>
        </div>
      </header>

      {/* STORY */}
      <section className="bg-white px-8 py-[72px]">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-3.5 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Cerita kami</div>
          <h2 className="mb-[18px] text-[30px] leading-[1.2] font-extrabold tracking-[-0.02em] text-balance text-[#5c1c00]">
            Lahir dari kebutuhan tim pajak yang nyata
          </h2>
          <p className="mb-4 text-[16px] leading-[1.7] text-[#6e5d4e]">
            Tim pajak dan keuangan di Indonesia menghadapi regulasi yang luas dan
            terus berubah. Pertanyaan datang setiap hari — tarif, kewajiban,
            perlakuan akuntansi — dan jawabannya tersebar di banyak peraturan.
            Mencari, membaca, dan memverifikasi memakan waktu berharga.
          </p>
          <p className="mb-4 text-[16px] leading-[1.7] text-[#6e5d4e]">
            Kami membangun NDP agar jawaban itu hadir dalam hitungan detik — namun
            tetap bisa dipertanggungjawabkan. Setiap respons Konsultan AI kami
            menautkan klaimnya ke pasal yang relevan, menampilkan teks aslinya,
            dan menandai dengan jujur bahwa jawaban bersifat informasional.
          </p>
          <p className="text-[16px] leading-[1.7] text-[#6e5d4e]">
            Hasilnya: tim bekerja lebih cepat, sambil tetap memegang kendali dan
            jejak audit. Saat keputusan berisiko tinggi, pakar manusia selalu satu
            klik di belakang AI.
          </p>
        </div>
      </section>

      {/* MISI VISI NILAI */}
      <section className="bg-[#faf8f5] px-8 py-[72px]">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-3">
          {mvv.map((c) => (
            <div key={c.title} className="rounded-[18px] border border-[#eceae6] bg-white p-7">
              <span className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
              </span>
              <h3 className="mb-2 text-[18px] font-bold text-[#5c1c00]">{c.title}</h3>
              <p className="text-[14px] leading-[1.6] text-[#6e5d4e]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PENDEKATAN */}
      <section className="bg-white px-8 py-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-11 max-w-[600px] text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Pendekatan kami</div>
            <h2 className="text-[32px] leading-[1.18] font-extrabold tracking-[-0.02em] text-[#5c1c00]">
              Tiga prinsip yang memandu setiap fitur
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.n} className="flex items-start gap-3.5">
                <span className="flex-none text-[30px] leading-none font-extrabold text-[#ffc8a3]">{p.n}</span>
                <div>
                  <h3 className="mb-1.5 text-[16.5px] font-bold text-[#5c1c00]">{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-[#6e5d4e]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEPEMIMPINAN */}
      <section className="bg-[#faf8f5] px-8 py-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-11 max-w-[600px] text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Tim kami</div>
            <h2 className="text-[32px] leading-[1.18] font-extrabold tracking-[-0.02em] text-[#5c1c00]">
              Dipimpin praktisi pajak &amp; teknologi
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.initials} className="rounded-2xl border border-[#eceae6] bg-white p-[22px] text-center">
                <span className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff7d3a,#b83800)] text-[22px] font-extrabold text-white">
                  {m.initials}
                </span>
                <div className="text-[15px] font-bold text-[#5c1c00]">{m.name}</div>
                <div className="mt-0.5 text-[12.5px] text-[#9a8d82]">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KARIER */}
      <section id="karier" className="scroll-mt-[84px] bg-white px-8 py-[60px]">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center gap-7 rounded-[20px] border border-[#ffe5d3] bg-[linear-gradient(135deg,#fff5ee,#fff9f4)] px-10 py-[38px]">
          <div className="min-w-[260px] flex-1">
            <h2 className="text-[25px] font-extrabold tracking-[-0.01em] text-[#5c1c00]">Bangun masa depan AI teregulasi bersama kami</h2>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#6e5d4e]">
              Kami mencari engineer, peneliti pajak, dan desainer yang peduli pada
              kepercayaan. Mari bicara.
            </p>
          </div>
          <Link href="/kontak" className="inline-flex h-[46px] items-center gap-2 rounded-[11px] bg-[#ff5001] px-[22px] text-[14px] font-semibold text-white transition-colors hover:bg-[#e64600]">
            Hubungi kami
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-8 pt-10 pb-20">
        <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#5c1c00,#b83800_55%,#ff5001)] px-12 py-14 text-center">
          <div className="absolute top-[-100px] right-[-60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.5),rgba(255,255,255,0)_70%)] blur-[30px]" />
          <div className="relative">
            <h2 className="text-[36px] leading-[1.12] font-extrabold tracking-[-0.02em] text-balance text-white">
              Mari berkenalan dengan NDP
            </h2>
            <div className="mt-[26px] flex flex-wrap justify-center gap-3">
              <Link href="/kontak" className="inline-flex h-[50px] items-center gap-2 rounded-xl bg-white px-[26px] text-[15px] font-bold text-[#b83800] transition-transform hover:-translate-y-px">
                Minta demo
              </Link>
              <Link href="/produk" className="inline-flex h-[50px] items-center gap-2 rounded-xl border border-white/40 bg-white/[0.12] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/20">
                Lihat produk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
