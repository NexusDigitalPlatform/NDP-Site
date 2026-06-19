import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Produk",
    links: [
      { label: "Konsultan AI", href: "/produk" },
      { label: "Auditability", href: "/produk" },
      { label: "Keamanan", href: "/produk" },
      { label: "Harga", href: "/harga" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang", href: "/perusahaan" },
      { label: "Karier", href: "/perusahaan" },
      { label: "Kontak", href: "/kontak" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privasi", href: "/perusahaan" },
      { label: "Ketentuan", href: "/perusahaan" },
      { label: "Keamanan", href: "/produk" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#f0ebe4] bg-[#faf8f5] px-8 pt-[54px] pb-[30px]">
      <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3.5 flex items-center gap-2.5">
            <Image src="/assets/nqr-icon.png" alt="NDP" width={30} height={30} className="h-[30px] w-[30px] object-contain" />
            <span className="flex flex-col leading-[1.05]">
              <span className="text-[16px] font-extrabold text-[#5c1c00]">NDP</span>
              <span className="text-[9.5px] text-[#9a8d82]">Nexus Digital Platform</span>
            </span>
          </div>
          <p className="max-w-[280px] text-[12.5px] leading-[1.6] text-[#9a8d82]">
            Konsultan Pajak &amp; Akuntan AI dengan jawaban yang dapat
            ditelusuri, untuk enterprise &amp; BUMN di Indonesia.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-[11px]">
            <span className="mb-0.5 text-[11px] font-bold tracking-[0.08em] text-[#bcae9f] uppercase">
              {col.title}
            </span>
            {col.links.map((l, i) => (
              <Link key={`${l.label}-${i}`} href={l.href} className="text-[13px] text-[#6e5d4e] transition-colors hover:text-[#ff5001]">
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-9 flex max-w-[1080px] flex-wrap items-center justify-between gap-3 border-t border-[#eceae6] pt-[22px]">
        <span className="text-[12px] text-[#9a8d82]">
          © 2026 Nexus Quantum · NDP — Nexus Digital Platform
        </span>
        <span className="max-w-[560px] text-right text-[11.5px] text-[#bcae9f]">
          Jawaban NDP bersifat informasional dan tidak menggantikan nasihat
          pakar pajak/akuntan bersertifikat.
        </span>
      </div>
    </footer>
  );
}
