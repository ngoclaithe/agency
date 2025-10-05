import NextImage from "next/image";
import VideoShowcaseSection from "../components/VideoShowcaseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AvatarCommentsGrid from "../components/AvatarCommentsGrid";
import FAQsSection from "../components/FAQsSection";

export default function Home() {
  const partners = ["/partner1.webp", "/partner2.webp", "/partner3.webp", "/partner4.webp", "/partner5.webp"]; 
  const advertisingHighlights = [
    { title: "Trusted Facebook Defense", description: "Our system shields your campaigns from unexpected shutdowns, keeping your ads running effortlessly.", icon: "🛡️" },
    { title: "24-Hour Recovery", description: "Rapid reinstatement capabilities minimize downtime so you can focus on what matters most—growth.", icon: "⏱️" },
    { title: "Global Access, Local Credibility", description: "Operate with residential US IP addresses for trusted delivery across regions without losing flexibility.", icon: "🌎" },
    { title: "Scalability", description: "Expand confidently with infrastructure designed to handle aggressive scaling without platform friction.", icon: "📈" },
  ];

  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section id="hero" className="relative hero-section hero-split">
        <div className="absolute inset-0 bg-cover bg-center hero-background" />
        <div className="absolute inset-0 bg-black/28" />

        <div className="hero-content z-20 rounded-2xl p-6 sm:p-10 text-white">
          <div className="hero-logo mt-2"><NextImage src="/logo.png" alt="Exiscale logo" width={64} height={64} className="hero-logo-img" /><span className="ml-2 font-extrabold text-2xl bg-gradient-to-r from-[#ff7a2f] to-[#ff9a60] bg-clip-text text-transparent tracking-wide">Wolves</span></div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            <span className="block">Banned on Facebook?</span>
            <span className="block">Get Advertising Now!</span>
          </h1>

          <div className="paragraph-inner mt-4">
            <ul>
              <li><strong>24/7 Live Chat Support</strong></li>
              <li><strong>Lifetime Replacement Guaranteed</strong></li>
              <li><strong>Hassle-Free Service</strong></li>
              <li><strong>Ready to Advertise from Day One</strong></li>
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-6">
            <a href="https://t.me/wolves29" className="inline-flex items-center justify-center rounded-full bg-[#ff7a2f] text-white px-8 py-4 text-base sm:text-lg font-semibold hover:opacity-95 transition">Click Here To Get Set Up Today! 👉</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 font-semibold hover:opacity-95 transition">See Plans</a>
          </div>

          <div className="rating mt-4 flex items-center gap-3">
            <div className="stars flex items-center gap-1">
              <span className="star text-yellow-400">★</span>
              <span className="star text-yellow-400">★</span>
              <span className="star text-yellow-400">★</span>
              <span className="star text-yellow-400">★</span>
              <span className="star text-yellow-400">★</span>
            </div>
            <div className="rating-text text-sm opacity-90">4.8/5 star reviews</div>
          </div>

          <div id="450636" className="headline el-450636 light-text h-btn mt-6">
            <div className="headline-accent" aria-hidden="true">
              <svg viewBox="0 0 300 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="headline-accent-svg">
                <defs>
                  <linearGradient id="grad-450636" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ff7a2f" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff7a2f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect className="accent-rect" x="3" y="3" width="294" height="74" rx="10" fill="none" stroke="url(#grad-450636)" strokeLinecap="round" />
              </svg>
            </div>
            <div className="headline-inner">
              <h3><strong>$100M+</strong></h3>
              <p><span className="metric-subtext">Ad Spend Via Our Accounts</span></p>
            </div>
          </div>
        </div>

        <div className="hero-image zig-media relative z-30 flex items-center justify-center">
          <NextImage src="/anhbanner.webp" alt="Banner person" width={900} height={900} priority className="object-contain w-full max-w-[640px] rounded-[20px] shadow-2xl" />
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="partners-section section-surface py-12 sm:py-16">
        <div className="zig-row zig-left">
          <div className="zig-copy text-left">
            <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">Trusted by top affiliates, offer owners and established brands.</p>
            <h2 className="mt-4 text-3xl font-bold">Advertisers from the <span className="accent">best</span>.</h2>
            <p className="mt-3 text-sm text-gray-600">We work with high-performing affiliates and established brands across multiple verticals. Our partners trust us to keep campaigns running and scale safely.</p>
          </div>

          <div className="zig-media">
            <div className="marquee">
              <div className="marquee-track">
                {[...partners, ...partners].map((src, idx) => (
                  <div key={`${src}-${idx}`} className="marquee-item logo-item">
                    <NextImage src={src} alt="Partner logo" width={160} height={64} className="logo-img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Stats section */}
      <section id="results" className="results-section section-muted py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-10 text-center">
          <p className="text-sm text-[#ff7a2f] font-medium">Results Speak for Themselves</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Don&apos;t take our <span className="text-[#ff7a2f]">word</span> for it.</h2>
          <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">Whether you&apos;re facing an account ban, disabled ad account or restricted business manager, we can get you back advertising within 24 hours guaranteed.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white/80 dark:bg.black/20 p-6 shadow-sm">
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
      <section id="advertising" className="advertising-overview-section section-muted py-12 sm:py-16">
        <div className="zig-row zig-right">
          <div className="zig-copy">
            <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">Unlock Your Advertising Potential</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#0f172a]">Seamless Facebook Advertising</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">Unleash the power of our full-service Facebook advertising set up. From robust protections to strategic scaling, we pave the way for unstoppable growth with tailored packages and resilient infrastructure.</p>

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

          <div className="zig-media">
            <div className="advertising-visual-frame">
              <NextImage src="/banner2.webp" alt="Specialized advertising dashboard" width={720} height={480} className="advertising-visual-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="video" className="section-brand-bleed">
        <VideoShowcaseSection />
      </section>

      <section id="testimonials" className="section-surface">
        <TestimonialsSection />
      </section>

      <section id="pricing" className="pricing-section section-muted py-12 sm:py-20">
        <div className="container mx-auto px-6 sm:px-10 text-center">
          <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">Our Tailored Packages</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Choose the plan that&apos;s right for you.</h2>
          <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">If you have any questions, feel free to contact us anytime.</p>

          <div className="mt-8 pricing-grid">
            <div className="pricing-card text-left">
              <div className="pricing-card-header flex flex-col items-start">
                <div className="pricing-title">Intermediate Package</div>
                <div className="mt-2 w-full flex items-center justify-between">
                  <div className="pricing-price">$199</div>
                  <NextImage src="/199.webp" alt="199 package badge" width={112} height={112} className="object-contain" />
                </div>
                <div className="pricing-billed mt-2 text-left">
                  <div className="font-semibold">Billed monthly · No Setup Costs</div>
                  <div className="text-xs mt-1">and 0% of Ad Spend</div>
                </div>
              </div>

              <ul className="pricing-features">
                <li><span className="feature-check">✔</span><span>1 x US Profile</span></li>
                <li><span className="feature-check">✔</span><span>1 x Business Managers</span></li>
                <li><span className="feature-check">✔</span><span>Account aged 10+ Years</span></li>
                <li><span className="feature-check"><span className="feature-highlight">✔</span></span><span className="feature-highlight">Lifetime Replacement at No Additional Cost</span></li>
                <li><span className="feature-check">✔</span><span>Risk mitigation PDF created by 8 figure marketers</span></li>
                <li><span className="feature-check">✔</span><span>1 x FREE Trusted FB Pages <small className="text-sm text-gray-500">(Normally Valued at $50)</small></span></li>
                <li><span className="feature-check">✔</span><span>US Domestic Dedicated IP hosted on a Private Server</span></li>
              </ul>

              <a href="#" className="pricing-cta block mx-auto">Choose Plan</a>
            </div>

            <div className="pricing-card text-left">
              <div className="pricing-card-header flex flex-col items-start">
                <div className="pricing-title">Verified Package</div>
                <div className="mt-2 w-full flex items-center justify-between">
                  <div className="pricing-price">$499</div>
                  <NextImage src="/499.webp" alt="499 package badge" width={112} height={112} className="object-contain" />
                </div>
                <div className="pricing-billed mt-2 text-left">
                  <div className="font-semibold">Billed monthly · No Setup Costs</div>
                  <div className="text-xs mt-1">and 0% of Ad Spend</div>
                </div>
              </div>

              <ul className="pricing-features">
                <li><span className="feature-check">✔</span><span>1 x US Profile</span></li>
                <li><span className="feature-check">✔</span><span><strong>1 x Verified Business Manager</strong></span></li>
                <li><span className="feature-check">✔</span><span>Account aged 10+ Years</span></li>
                <li><span className="feature-check"><span className="feature-highlight">✔</span></span><span className="feature-highlight">Lifetime Replacement at No Additional Cost</span></li>
                <li><span className="feature-check">✔</span><span>Stronger Business Manager</span></li>
                <li><span className="feature-check">✔</span><span>Risk mitigation PDF created by 8 figure marketers</span></li>
                <li><span className="feature-check">✔</span><span>5 x FREE Trusted FB Pages <small className="text-sm text-gray-500">(Normally Valued at $200)</small></span></li>
                <li><span className="feature-check">✔</span><span>US Domestic Dedicated IP hosted on a Private Server</span></li>
              </ul>

              <a href="#" className="pricing-cta block mx-auto">Choose Plan</a>
            </div>

            <div className="pricing-card text-left">
              <div className="pricing-card-header flex flex-col items-start">
                <div className="pricing-title">Expert Package</div>
                <div className="mt-2 w-full flex items-center justify-between">
                  <div className="pricing-price">$299</div>
                  <NextImage src="/299.webp" alt="299 package badge" width={112} height={112} className="object-contain" />
                </div>
                <div className="pricing-billed mt-2 text-left">
                  <div className="font-semibold">Billed monthly · No Setup Costs</div>
                  <div className="text-xs mt-1">and 0% of Ad Spend</div>
                </div>
              </div>

              <ul className="pricing-features">
                <li><span className="feature-check">✔</span><span>1 x US Profile</span></li>
                <li><span className="feature-check">✔</span><span><strong>2 x Business Managers</strong></span></li>
                <li><span className="feature-check">✔</span><span>Account aged 10+ Years</span></li>
                <li><span className="feature-check"><span className="feature-highlight">✔</span></span><span className="feature-highlight">Lifetime Replacement at No Additional Cost</span></li>
                <li><span className="feature-check">✔</span><span>Risk mitigation PDF created by 8 figure marketers</span></li>
                <li><span className="feature-check">✔</span><span>3 x FREE Trusted FB Pages <small className="text-sm text-gray-500">(Normally Valued at $100)</small></span></li>
                <li><span className="feature-check">✔</span><span>US Domestic Dedicated IP hosted on a Private Server</span></li>
              </ul>

              <a href="#" className="pricing-cta block mx-auto">Choose Plan</a>
            </div>
          </div>
        </div>
      </section>

      <section className="high-spend-banner section-surface">
        <div className="high-spend-inner">
          <div className="high-spend-title text-lg sm:text-xl font-semibold">Big Campaigns, Need Big Budgets...</div>
          <div className="high-spend-sub text-sm">Check out our exclusive high-spending accounts today!</div>
          <button className="high-spend-btn mt-2">Get My High Spending Account Now!</button>
        </div>
      </section>

      <div className="text-center mt-6">
        <a href="https://t.me/wolves29" className="main-cta-orange">Click Here To Get Set Up Today! 👉</a>
      </div>

      <section id="reviews" className="section-surface">
        <AvatarCommentsGrid />
      </section>

      <div className="map-intro text-center py-8 sm:py-10">
        <p className="text-sm text-[#ff7a2f]">Global reach, Local Touch</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#0f172a]">Worldwide Network, Round The Clock Assistance.</h2>
        <p className="mt-2 text-sm text-gray-500">From the United States to New Zealand, Our 24/7 Live Customer Support spans the globe.</p>
      </div>

      {/* Map Section */}
      <section id="map" className="map-section section-muted py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 text-center">
          <NextImage src="/map.webp" alt="Global reach map" width={1200} height={360} className="map-img mx-auto" />
        </div>
      </section>

      {/* Country contact emails */}
      <section id="contacts" className="country-contacts-section section-surface py-8 sm:py-12">
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/aus.webp", country: "Australia", email: "australia@exiscale.com" },
              { img: "/nz.webp", country: "New Zealand", email: "newzealand@exiscale.com" },
              { img: "/phil.webp", country: "Philippines", email: "philippines@exiscale.com" },
              { img: "/singapo.webp", country: "Singapore", email: "singapore@exiscale.com" },
              { img: "/thailand.webp", country: "Thailand", email: "thailand@exiscale.com" },
              { img: "/uk.webp", country: "United Kingdom", email: "uk@exiscale.com" },
              { img: "/usa.webp", country: "United States", email: "usa@exiscale.com" },
              { img: "/canada.webp", country: "Canada", email: "canada@exiscale.com" },
              { img: "/ireland.webp", country: "Ireland", email: "ireland@exiscale.com" },
            ].map((c) => (
              <div key={c.email} className="country-card flex items-center gap-4 p-4 rounded-lg bg-white hover:shadow-md hover:-translate-y-1 transition-transform">
                <NextImage src={c.img} alt={`${c.country} flag`} width={56} height={56} className="country-flag" />
                <div>
                  <div className="country-name font-semibold text-[#0f172a]">{c.country}</div>
                  <div className="country-email text-sm text-[#ff7a2f]">{c.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section-muted">
        <FAQsSection />
      </section>

      {/* Badge / Contact prompt */}
      <section id="contact" className="badge-contact-section section-surface py-12 sm:py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <NextImage src="/badgee.svg" alt="Badge" width={120} height={120} className="mx-auto" />
          <p className="mt-4 text-sm text-gray-500">Still Got A Question?</p>
          <h3 className="mt-4 text-3xl font-semibold text-[#0f172a]">Contact us to speak to one of our experts!</h3>
          <div className="mt-6">
            <a className="inline-block bg-[#ff7a2f] text-white px-8 py-3 rounded-lg font-semibold">Speak to Live chat. 👉</a>
          </div>

          <p className="mt-6 text-sm text-gray-400">You can also contact us 24/7 on</p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="contact-icon w-12 h-12 rounded-full bg-white/80 flex items-center justify-center"><NextImage src="/mess.svg" alt="Messenger" width={24} height={24} /></div>
            <div className="contact-icon w-12 h-12 rounded-full bg-white/80 flex items-center justify-center"><NextImage src="/mess2.svg" alt="Messenger Alt" width={24} height={24} /></div>
            <div className="contact-icon w-12 h-12 rounded-full bg-white/80 flex items-center justify-center"><NextImage src="/tele.svg" alt="Telegram" width={24} height={24} /></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer bg-[#07201a] text-white py-6">
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 flex items-center justify-between">
          <div className="footer-left flex items-center gap-4">
            <NextImage src="/logo.png" alt="logo" width={56} height={20} className="footer-logo" />
          </div>

          <div className="footer-center text-sm opacity-80">Copyright by 2025 @Woles</div>

          <div className="footer-right text-sm opacity-80 flex items-center gap-6">
            <a href="#">Terms Of Service</a>
            <a href="#">Refund Policy</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
