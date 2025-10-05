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
    { title: "Scalability", description: "Expand confidently with infrastructure designed to handle aggressive scaling without platform friction.", icon: "����" },
  ];

  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section id="hero" className="relative hero-section">
        <div className="absolute inset-0 hero-background" />

        <div className="container mx-auto px-6 sm:px-10 py-20">
          <div className="hero-card">
            <div className="hero-left">
              <h1 className="hero-title font-extrabold leading-tight">Banned on Facebook? <span className="block text-accent">Get Advertising Now!</span></h1>

              <p className="hero-sub mt-4 max-w-xl">We get your ads running again with trusted US IPs, aged accounts and 24/7 support—fast setup, reliable infrastructure, and guaranteed replacement.</p>

              <div className="hero-ctas">
                <a href="https://t.me/wolves29" className="hero-primary-cta">Get Started — Instant Setup</a>
                <a href="#pricing" className="hero-secondary-cta">Compare Plans</a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="num">10+</div>
                  <div className="label">Years aged accounts</div>
                </div>

                <div className="hero-stat">
                  <div className="num">$100M+</div>
                  <div className="label">Ad spend via our accounts</div>
                </div>

                <div className="hero-stat">
                  <div className="num">100%</div>
                  <div className="label">US registered IPs</div>
                </div>
              </div>
            </div>

            <div className="hero-image-frame">
              <img src="/anhbanner.webp" alt="Banner person" />
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
          <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto mb-12">If you have any questions, feel free to contact us anytime.</p>

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

              <a href="#" className="pricing-cta block mx-auto">Start This Plan</a>
            </div>

            <div className="pricing-card text-left featured">
              <div className="pricing-card-header flex flex-col items-start">
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

              <a href="#" className="pricing-cta block mx-auto">Start This Plan</a>
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

              <a href="#" className="pricing-cta block mx-auto">Start This Plan</a>
            </div>
          </div>
        </div>
      </section>

      <section className="high-spend-banner section-surface">
        <div className="high-spend-inner">
          <div>
            <div className="high-spend-title text-lg sm:text-xl">Big Campaigns, Need Big Budgets...</div>
            <div className="high-spend-sub text-sm mt-1">Check out our exclusive high-spending accounts today!</div>
          </div>

          <div>
            <button className="high-spend-cta">Get My High Spending Account Now!</button>
          </div>
        </div>
      </section>

      <div className="text-center mt-6">
        <a href="https://t.me/wolves29" className="main-cta-prominent">Get Started — Instant Setup</a>
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
        <div className="country-contacts-inner">
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
                  <div key={c.email} className="country-card country-card-bg transition-transform hover:shadow-lg">
                    <NextImage src={c.img} alt={`${c.country} flag`} width={88} height={88} className="country-flag" />

                    <div className="mt-3 country-name font-semibold text-[#0f172a]">{c.country}</div>
                    <div className="mt-1 country-email text-sm text-accent">{c.email}</div>

                    <div className="mt-3">
                      <a href={`mailto:${c.email}`} className="country-cta">Contact</a>
                    </div>
                  </div>
                ))}
              </div>
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
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <NextImage src="/logo.png" alt="logo" width={56} height={36} className="footer-logo" />
            <div>
              <div className="brand-name font-bold">Wolves</div>
              <div className="footer-desc">Premium Facebook account recovery and trusted advertising infrastructure.</div>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <a href="#results">Results</a><br />
              <a href="#pricing">Pricing</a><br />
              <a href="#testimonials">Testimonials</a><br />
              <a href="#faqs">FAQs</a>
            </div>

            <div>
              <a href="#">Terms Of Service</a><br />
              <a href="#">Privacy Policy</a><br />
              <a href="#">Refund Policy</a>
            </div>
          </div>

          <div className="footer-contact">
            <div className="mb-2">Questions? <strong>hello@wolves.com</strong></div>
            <a href="https://t.me/wolves29" className="contact-cta">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">© 2025 Wolves · All rights reserved</div>
      </footer>
    </div>
  );
}
