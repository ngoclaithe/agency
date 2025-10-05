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
      <section id="hero" className="relative hero-section">
        <div className="absolute inset-0 hero-background" />

        <div className="container mx-auto px-6 sm:px-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight hero-heading-shadow">Banned on Facebook? <span className="block text-white">Get Advertising Now!</span></h1>

            <p className="mt-6 text-lg hero-sub max-w-2xl mx-auto">We get your ads running again with trusted US IPs, aged accounts and 24/7 support—fast setup, reliable infrastructure, and guaranteed replacement.</p>

            <div className="mt-8 flex justify-center gap-4">
              <a href="https://t.me/wolves29" className="hero-cta px-10 py-4 text-lg">Click Here To Get Set Up Today! 👉</a>
              <a href="#pricing" className="btn-outline-hero px-8 py-3">Compare Plans</a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$100M+</div>
                <div className="text-xs text-white/80">Ad Spend via our accounts</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-white/80">Years aged accounts</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/80">US registered IPs</div>
              </div>
            </div>

            <div className="mt-12">
              <img src="/anhbanner.webp" alt="Banner person" className="mx-auto w-full max-w-[680px] rounded-2xl shadow-2xl object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="partners-section section-surface py-12 sm:py-16">
        <div className="zig-row zig-left">
          <div className="zig-copy text-left">
            <p className="text-sm uppercase tracking-wide text-accent">Trusted by top affiliates and established brands</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">Advertisers from the <span className="accent">best</span>.</h2>
            <p className="mt-4 text-base text-gray-700 max-w-xl">We partner with high-performing affiliates and brands across multiple verticals. Our clients rely on resilient setups and rapid recovery to keep campaigns live and scaling.</p>
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
          <p className="text-sm text-accent font-medium">Results Speak for Themselves</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Don&apos;t take our <span className="text-accent">word</span> for it.</h2>
          <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">Whether you&apos;re facing an account ban, disabled ad account or restricted business manager, we can get you back advertising within 24 hours guaranteed.</p>

          <div className="mt-8 results-grid">
            <div className="results-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years aged accounts</div>
              <div className="stat-note text-sm text-gray-500">Reliable aged profiles ready to deploy</div>
            </div>

            <div className="results-card">
              <div className="stat-number">$100M+</div>
              <div className="stat-label">Ad spend processed</div>
              <div className="stat-note text-sm text-gray-500">Handled across our managed accounts</div>
            </div>

            <div className="results-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">US registered IPs</div>
              <div className="stat-note text-sm text-gray-500">Domestic IPs to ensure trusted delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Solutions Section */}
      <section id="advertising" className="advertising-overview-section section-muted py-12 sm:py-16">
        <div className="zig-row zig-right">
          <div className="zig-copy">
            <p className="text-sm uppercase tracking-wide text-accent">Unlock Your Advertising Potential</p>
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
          <p className="text-sm uppercase tracking-wide text-accent">Our Tailored Packages</p>
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

            <div className="pricing-card text-left featured">
              <div className="pricing-card-header flex flex-col items-start">
                <div className="pricing-badge inline-flex items-center gap-2 px-3 py-1 btn-primary text-white rounded-full font-semibold">Most popular</div>
                <div className="pricing-title mt-3">Verified Package</div>
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

      <section id="map" className="map-section section-muted py-12 sm:py-16">
        <div className="zig-row zig-left">
          <div className="zig-copy">
            <p className="text-sm text-accent">Global reach, Local Touch</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#0f172a]">Worldwide Network, Round The Clock Assistance.</h2>
            <p className="mt-2 text-sm text-gray-500">From the United States to New Zealand, Our 24/7 Live Customer Support spans the globe.</p>
          </div>

          <div className="zig-media text-center">
            <NextImage src="/map.webp" alt="Global reach map" width={1200} height={360} className="map-img mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Country contact emails */}
      <section id="contacts" className="country-contacts-section section-surface py-8 sm:py-12">
        <div className="zig-row zig-right">
          <div className="zig-copy">
            <p className="text-sm uppercase tracking-wide text-accent">Local Support Worldwide</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0f172a]">Contact our regional teams</h3>
            <p className="mt-2 text-sm text-gray-600">Available 24/7 across multiple countries — reach out to the team in your region to get tailored advice.</p>
          </div>

          <div className="zig-media">
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
                      <div className="country-email text-sm text-accent">{c.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            <a className="inline-block btn-primary text-white px-8 py-3 rounded-lg font-semibold">Speak to Live chat. 👉</a>
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
