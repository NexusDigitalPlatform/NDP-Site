import type { Metadata } from "next";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Kontak — Minta Demo NDP | Konsultan Pajak & Akuntan AI",
  description:
    "Ceritakan kebutuhan tim Anda. Kami akan menghubungi Anda dalam 1 hari kerja untuk demo Konsultan Pajak & Akuntan AI.",
};

const inputClass =
  "h-11 rounded-[10px] border border-[#e2dcd4] bg-white px-[13px] text-[14px] text-[#3f2a1c] outline-none focus:border-[#ffa770]";
const labelClass = "text-[12.5px] font-semibold text-[#5c1c00]";

const contacts = [
  {
    label: "Email sales",
    value: "sales@ndp.id",
    icon: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: "Telepon",
    value: "+62 21 5000 1234",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Kantor",
    value: "Jakarta Pusat, Indonesia",
    icon: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

const steps = [
  "Tim kami menghubungi Anda dalam 1 hari kerja.",
  "Demo langsung sesuai kasus pajak tim Anda.",
  "Uji coba terpandu untuk tim Anda.",
];

export default function KontakPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <SiteNav active="Kontak" />

      <section className="relative flex-1 overflow-hidden bg-[linear-gradient(180deg,#fff5ee,#ffffff_60%)] px-8 pt-16 pb-[72px]">
        <div className="pointer-events-none absolute top-[-140px] right-[-100px] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,167,112,0.35),rgba(255,80,1,0)_70%)] blur-[40px]" />
        <div className="relative mx-auto max-w-[1020px]">
          <div className="mx-auto mb-11 max-w-[640px] text-center">
            <div className="mb-3 text-[12px] font-bold tracking-[0.1em] text-[#ff5001] uppercase">Kontak</div>
            <h1 className="text-[44px] leading-[1.1] font-extrabold tracking-[-0.025em] text-balance text-[#5c1c00]">
              Minta demo atau bicara dengan tim kami
            </h1>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.6] text-[#6e5d4e]">
              Ceritakan kebutuhan tim Anda. Kami akan menghubungi Anda dalam 1
              hari kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[1.3fr_1fr]">
            {/* form */}
            <form className="rounded-[20px] border border-[#eadfd5] bg-white p-[30px] shadow-[0_24px_60px_-32px_rgba(92,28,0,0.26)]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-[7px]">
                  <label className={labelClass} htmlFor="nama">Nama lengkap</label>
                  <input id="nama" name="nama" placeholder="Nama Anda" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className={labelClass} htmlFor="email">Email kerja</label>
                  <input id="email" name="email" type="email" placeholder="nama@perusahaan.co.id" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className={labelClass} htmlFor="perusahaan">Perusahaan</label>
                  <input id="perusahaan" name="perusahaan" placeholder="Nama organisasi" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className={labelClass} htmlFor="ukuran">Ukuran tim</label>
                  <select id="ukuran" name="ukuran" className={`${inputClass} cursor-pointer text-[#6e5d4e]`} defaultValue="1-10">
                    <option value="1-10">1–10 pengguna</option>
                    <option value="11-50">11–50 pengguna</option>
                    <option value="51-200">51–200 pengguna</option>
                    <option value="200+">200+ pengguna</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-[7px]">
                <label className={labelClass} htmlFor="kebutuhan">Kebutuhan Anda</label>
                <textarea
                  id="kebutuhan"
                  name="kebutuhan"
                  rows={4}
                  placeholder="Mis. kami butuh percepatan riset PPh & pemeriksaan faktur untuk tim 30 orang, dengan SSO."
                  className="resize-y rounded-[10px] border border-[#e2dcd4] bg-white px-[13px] py-3 text-[14px] leading-[1.5] text-[#3f2a1c] outline-none focus:border-[#ffa770]"
                />
              </div>
              <label className="mt-3.5 flex items-center gap-2.5">
                <input type="checkbox" className="h-[18px] w-[18px] flex-none rounded-[5px] border border-[#d8cfc6] accent-[#ff5001]" />
                <span className="text-[12px] leading-[1.4] text-[#9a8d82]">
                  Saya setuju dihubungi tim NDP dan menerima informasi produk.
                </span>
              </label>
              <button
                type="submit"
                className="mt-[18px] h-12 w-full cursor-pointer rounded-[11px] border-none bg-[#ff5001] text-[15px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(255,80,1,0.5)] transition-colors hover:bg-[#e64600]"
              >
                Kirim permintaan
              </button>
            </form>

            {/* info */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#eceae6] bg-white p-[22px]">
                <h3 className="mb-3.5 text-[14px] font-bold text-[#5c1c00]">Hubungi langsung</h3>
                <div className="flex flex-col gap-[13px]">
                  {contacts.map((c) => (
                    <div key={c.label} className="flex items-center gap-[11px]">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-[rgba(255,80,1,0.10)] text-[#ff5001]">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                      </span>
                      <span className="flex flex-col gap-px">
                        <span className="text-[12px] text-[#9a8d82]">{c.label}</span>
                        <span className="text-[13.5px] font-semibold text-[#5c1c00]">{c.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-[#ffe5d3] bg-[linear-gradient(135deg,#fff9f4,#fff5ee)] p-[22px]">
                <h3 className="mb-3.5 text-[14px] font-bold text-[#5c1c00]">Setelah Anda kirim</h3>
                <div className="flex flex-col gap-[13px]">
                  {steps.map((s, i) => (
                    <div key={s} className="flex gap-[11px]">
                      <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#ff5001] text-[11px] font-bold text-white">{i + 1}</span>
                      <span className="text-[13px] leading-[1.5] text-[#6e5d4e]">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
