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
                <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">Banned on Facebook? Get Advertising Now!</h1>
                <p className="mt-4 text-base sm:text-lg">24/7 Live Chat Support · Lifetime Replacement Guaranteed · Hassle-Free Service · Ready to Advertise from Day One.</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm sm:text-base font-medium hover:opacity-90 transition"
                  >
                    Click Here To Get Set Up Today! 👉
                  </a>
                  <span className="text-sm opacity-80">4.8/5 star reviews</span>
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
            <p className="text-sm uppercase tracking-wide opacity-70">Trusted by top affiliates, offer owners and established brands.</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Advertisers from the best.</h2>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="marquee">
              <div className="marquee-track">
                {[...partners, ...partners].map((src, idx) => (
                  <div key={`${src}-${idx}`} className="marquee-item logo-item">
                    <Image
                      src={src}
                      alt="Partner logo"
                      width={160}
                      height={64}
                      className="logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
