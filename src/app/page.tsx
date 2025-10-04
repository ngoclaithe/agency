import Image from "next/image";

export default function Home() {
  const partners = [
    "/partner1.webp",
    "/partner2.webp",
    "/partner3.webp",
    "/partner4.webp",
    "/partner5.webp",
  ];

  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative hero-section">
        <div className="relative h-[520px] sm:h-[600px] w-full overflow-hidden">
          <Image
            src="/anhbanner.webp"
            alt="Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 sm:px-10">
              <div className="max-w-[680px] bg-white/90 dark:bg-black/60 backdrop-blur rounded-2xl p-6 sm:p-8">
                <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">Quảng cáo hiệu quả ngay hôm nay</h1>
                <p className="mt-4 text-base sm:text-lg">Dịch vụ nhanh chóng, hỗ trợ 24/7 và sẵn sàng triển khai từ ngày đầu tiên.</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#lien-he"
                    className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm sm:text-base font-medium hover:opacity-90 transition"
                  >
                    Bắt đầu ngay
                  </a>
                  <span className="text-sm opacity-80">4.8/5 từ đánh giá của khách hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide opacity-70">Được tin tưởng bởi</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Các đối tác hàng đầu</h2>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center">
            {partners.map((src) => (
              <div key={src} className="logo-item flex items-center justify-center p-4 rounded-xl border border-black/[.08] dark:border-white/[.145] bg-white/70 dark:bg-black/30">
                <Image
                  src={src}
                  alt="Logo đối tác"
                  width={160}
                  height={64}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
