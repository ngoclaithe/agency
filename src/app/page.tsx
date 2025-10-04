import Image from "next/image";

import NextImage from "next/image";
import VideoShowcaseSection from "../components/VideoShowcaseSection";

export default function Home() {
  const partners = [
    "/partner1.webp",
    "/partner2.webp",
    "/partner3.webp",
    "/partner4.webp",
    "/partner5.webp",
  ];

  const advertisingHighlights = [
    {
      title: "Trusted Facebook Defense",
      description:
        "Our system shields your campaigns from unexpected shutdowns, keeping your ads running effortlessly.",
      icon: "🛡️",
    },
    {
      title: "24-Hour Recovery",
      description:
        "Rapid reinstatement capabilities minimize downtime so you can focus on what matters most—growth.",
      icon: "⏱️",
    },
    {
      title: "Global Access, Local Credibility",
      description:
        "Operate with residential US IP addresses for trusted delivery across regions without losing flexibility.",
      icon: "🌎",
    },
    {
      title: "Scalability",
      description:
        "Expand confidently with infrastructure designed to handle aggressive scaling without platform friction.",
      icon: "📈",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative hero-section">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://img.funnelish.com/10843/79553/1681836756-main-sec.png?auto=webp&clip=bounds")'}} />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative container mx-auto px-2 sm:px-4 flex items-center h-[500px] sm:h-[560px] justify-start">
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

              <div id="450636" className="headline el-450636 light-text h-btn" style={{color: 'white', paddingTop: '10px', textShadow: 'transparent 0px 0px 0px', marginTop: '28px'}}>
                <div className="headline-inner">
                  <h3><strong>$100M+</strong></h3>
                  <p><span style={{color: 'rgb(230,230,230)', backgroundColor: 'transparent', fontSize: '18px'}}>Ad Spend Via Our Accounts</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Banner image overlapping */}
          <div className="hero-image hidden sm:block absolute right-10 bottom-0 z-30">
            <NextImage
              src="/anhbanner.webp"
              alt="Banner person"
              width={580}
              height={580}
              priority
              className="object-contain scale-100"
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide opacity-70 trusted-text">Trusted by top affiliates, offer owners and established brands.</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Advertisers from the <span className="accent">best</span>.</h2>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="marquee">
              <div className="marquee-track">
                {[...partners, ...partners].map((src, idx) => (
                  <div key={`${src}-${idx}`} className="marquee-item logo-item">
                    <NextImage
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

      {/* Results / Stats section */}
      <section className="results-section py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-10 text-center">
          <p className="text-sm text-[#ff7a2f] font-medium">Results Speak for Themselves</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Don't take our <span className="text-[#ff7a2f]">word</span> for it.</h2>
          <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">Whether you're facing an account ban, disabled ad account or restricted business manager, we can get you back advertising within 24 hours guaranteed.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white/80 dark:bg-black/20 p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0f172a]">10+</div>
              <div className="mt-2 text-sm text-gray-500">Years Aged Accounts</div>
            </div>

            <div className="rounded-lg bg-white/80 dark:bg-black/20 p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0f172a]">$100M+</div>
              <div className="mt-2 text-sm text-gray-500">adspend via our accounts</div>
            </div>

            <div className="rounded-lg bg-white/80 dark:bg-black/20 p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0f172a]">100%</div>
              <div className="mt-2 text-sm text-gray-500">US registered IPs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Solutions Section */}
      <section className="advertising-overview-section py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="advertising-copy max-w-xl">
              <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">Unlock Your Advertising Potential</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#0f172a]">Seamless Facebook Advertising</h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Unleash the power of our full-service Facebook advertising set up. From robust protections to
                strategic scaling, we pave the way for unstoppable growth with tailored packages and resilient
                infrastructure.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {advertisingHighlights.map((item) => (
                  <div key={item.title} className="advertising-highlight-card">
                    <span className="highlight-icon" aria-hidden="true">{item.icon}</span>
                    <h3 className="mt-4 text-lg font-semibold text-[#0f172a]">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="advertising-visual">
              <div className="advertising-visual-frame">
                <NextImage
                  src="/banner2.webp"
                  alt="Specialized advertising dashboard"
                  width={520}
                  height={380}
                  className="advertising-visual-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoShowcaseSection />
    </div>
  );
}
