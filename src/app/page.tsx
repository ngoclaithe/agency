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
        <div className="hero-bg absolute inset-0" />
        <div className="hero-overlay absolute inset-0 bg-black/30" />

        <div className="relative container mx-auto px-6 sm:px-10 flex items-center h-[500px] sm:h-[560px] justify-start">
          {/* Left: Text Card */}
          <div className="hero-content z-20 max-w-[680px] rounded-2xl p-6 sm:p-8 text-white">
            <h1 className="text-2xl sm:text-4xl font-semibold leading-tight">
              <span className="block">Banned on Facebook?</span>
              <span className="block">Get Advertising Now!</span>
            </h1>

            <div className="paragraph-inner">
              <ul>
                <li><strong>24/7 Live Chat Support</strong></li>
                <li><strong>Lifetime Replacement Guaranteed</strong></li>
                <li><strong>Hassle-Free Service</strong></li>
                <li><strong>Ready to Advertise from Day One</strong></li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#ff7a2f] text-white px-8 py-4 text-base sm:text-lg font-semibold hover:opacity-95 transition"
              >
                Click Here To Get Set Up Today! 👉
              </a>

              <div className="rating mt-3 flex items-center gap-3">
                <div className="stars flex items-center gap-1">
                  <span className="star text-yellow-400">★</span>
                  <span className="star text-yellow-400">★</span>
                  <span className="star text-yellow-400">★</span>
                  <span className="star text-yellow-400">★</span>
                  <span className="star text-yellow-400">★</span>
                </div>
                <div className="rating-text text-sm opacity-90">4.8/5 star reviews</div>
              </div>

              <div id="450636" className="headline el-450636 light-text h-btn" style={{color: 'white', margin: '0 0 0 20px', paddingTop: '10px', textShadow: 'transparent 0px 0px 0px'}}>
                <div className="headline-inner">
                  <h3><strong>$100M+</strong></h3>
                  <p><span style={{color: 'rgb(230,230,230)', backgroundColor: 'transparent', fontSize: '18px'}}>Ad Spend Via Our Accounts</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Banner image overlapping */}
          <div className="hero-image hidden sm:block absolute right-8 bottom-0 z-30">
            <Image
              src="/anhbanner.webp"
              alt="Banner person"
              width={520}
              height={520}
              priority
              className="object-contain"
            />
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
