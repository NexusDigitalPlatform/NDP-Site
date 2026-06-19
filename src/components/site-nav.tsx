import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Perusahaan", href: "/perusahaan" },
  { label: "Harga", href: "/harga" },
  { label: "Kontak", href: "/kontak" },
];

export default function SiteNav({ active }: { active?: string }) {
  return (
    <nav className="sticky top-0 z-50 flex h-[68px] items-center gap-6 border-b border-[#f0ebe4] bg-white/80 px-8 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2.5">
        <Image src="/assets/nqr-icon.png" alt="NDP" width={32} height={32} className="h-8 w-8 object-contain" />
        <span className="flex flex-col leading-[1.05]">
          <span className="text-[17px] font-extrabold tracking-[-0.01em] text-[#5c1c00]">NDP</span>
          <span className="text-[9.5px] font-medium tracking-[0.04em] text-[#9a8d82]">Nexus Digital Platform</span>
        </span>
      </Link>
      <div className="flex flex-1 items-center justify-center gap-[30px]">
        {links.map((l) => {
          const isActive = active === l.label;
          return (
            <Link
              key={l.label}
              href={l.href}
              className={`text-[13.5px] transition-colors ${
                isActive
                  ? "font-bold text-[#ff5001]"
                  : "font-semibold text-[#6e5d4e] hover:text-[#ff5001]"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
      <Link href="/kontak" className="px-1.5 py-2 text-[13.5px] font-semibold text-[#5c1c00]">
        Masuk
      </Link>
      <Link
        href="/kontak"
        className="inline-flex h-10 items-center gap-[7px] rounded-[10px] bg-[#ff5001] px-[18px] text-[13.5px] font-semibold text-white shadow-[0_1px_2px_rgba(255,80,1,0.3)] transition-colors hover:bg-[#e64600]"
      >
        Minta demo
      </Link>
    </nav>
  );
}
