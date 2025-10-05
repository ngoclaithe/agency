"use client";

"use client";

import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    img: "/person.webp",
    name: "Stanley Hugh",
    role: "CEO | Brand Owner",
    rating: 5,
    verified: true,
    text:
      "Before I came across Exiscale I lived in a constant state of fear and anxiety while I ran ads. I was always afraid and on edge waiting for the infamous ‘your Facebook account is restricted’ email again. It really held me back from scaling hard! Since working with Exiscale, I haven’t felt more free to run ads because I know that no matter what goes wrong, they provide me with a new account and business manager ready to run ads again in less than 24 hours. Running ads has never been an easier game!",
  },
  {
    img: "/person2.webp",
    name: "Avery Collins",
    role: "Growth Marketer",
    rating: 5,
    verified: true,
    text:
      "I always use ExiScale accounts for my campaigns. These accounts are legit and work great for scaling my fb ads. You should order the unlimited account, and you'll quickly see how good it is.",
  },
  {
    img: "/person3.webp",
    name: "Jordan Patel",
    role: "Ecom Founder",
    rating: 5,
    verified: true,
    text:
      "Though initially skeptical, Exiscale has proved to be a solid service for my company. Their setup was seamless, and I can now run my ads despite my previous ban. Their customer service team is quick and knowledgeable and overall I'm pleased with their service.",
  },
  {
    img: "/person4.webp",
    name: "Maria Lopez",
    role: "Media Buyer",
    rating: 5,
    verified: true,
    text:
      "We got the one that was not verified, but it was pretty strong. Served its purpose, allowed us to advertise, allowed us to make revenue, to make sales, to make profit. So if you want to check these guys out, give them a shot, try it out.",
  },
  {
    img: "/person5.webp",
    name: "Chris Nguyen",
    role: "Affiliate Marketer",
    rating: 5,
    verified: true,
    text:
      "Whenever I need Meta accounts I can trust to scale I use ExiScale. The team is great and responds 24/7. I am currently using them on multiple offers both externally as an affiliate and internally for my own offers. If you need solid accounts you can trust, use ExiScale!",
  },
  {
    img: "/person6.webp",
    name: "Sofia Rossi",
    role: "Agency Owner",
    rating: 5,
    verified: true,
    text:
      "Been working with ExiScale for years without FB account or profile bans. Everything works smoothly, providing trust to invest in heavy inventory for advertising on FB. Had opposite experiences with other services, feeling terrible. ExiScale is a trusted partner, extremely responsive, often answering in less than 5 minutes. Not the cheapest, but the service and peace of mind justify the price. Highly recommend.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // rotate every 15 seconds
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="testimonials-section py-16 sm:py-20">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">Our Client Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#0f172a]">Some good <span className="text-[#ff7a2f]">words</span> from satisfied clients.</h2>
        </div>

        <div className="mt-10 testimonial-carousel">
          <article className="testimonial-card-single rounded-2xl p-6">
            <div key={`img-${active}`} className="testimonial-image-frame relative animate-in-left">
              <NextImage key={`image-${active}`} src={testimonials[active].img} alt={`${testimonials[active].name}`} fill className="object-cover" />
            </div>

            <div key={`content-${active}`} className="testimonial-content mt-4 md:mt-0 animate-in-right">
              <div className="testimonial-quote-row">
                <NextImage src="/phay.webp" alt="quote" width={28} height={28} className="shrink-0" />
                <p className="testimonial-message text-sm leading-relaxed text-gray-700 dark:text-gray-300">{testimonials[active].text}</p>
              </div>

              <div className="testimonial-footer mt-4 flex items-center justify-between gap-4">
                <div className="reviewer-meta">
                  <div className="reviewer-name">{testimonials[active].name}</div>
                  <div className="reviewer-role">{testimonials[active].role}</div>
                  {testimonials[active].verified ? (
                    <span className="verified-badge"><span aria-hidden="true">✔</span> Verified Review</span>
                  ) : null}
                </div>

                <div className="footer-right flex items-center gap-4">
                  <div className="rating-stars" aria-label={`${testimonials[active].rating} out of 5 stars`}>
                    {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                      <span key={i} className="star-icon">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="testimonial-avatar-list mt-6">
            {testimonials.map((t, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className="testimonial-avatar-button"
                aria-current={active === i}
              >
                <NextImage
                  src={t.img}
                  alt={`Person ${i + 1}`}
                  width={56}
                  height={56}
                  className={`testimonial-avatar ${active === i ? "active" : ""}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
