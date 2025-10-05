"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";

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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((s) => (s + 1) % testimonials.length);
    }, 20000); // rotate every 20s

    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <div className="py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">Our Client Testimonials</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#0f172a]">Some good <span className="text-[#ff7a2f]">words</span> from satisfied clients.</h2>
      </div>

      <div className="testimonial-carousel-wrapper max-w-4xl mx-auto">
        <div className="testimonial-card-large">
          <div className="testimonial-left">
            <div className="testimonial-avatar-circle">
              <NextImage src={t.img} alt={t.name} width={180} height={180} className="testimonial-avatar-img" />
            </div>
            <div className="testimonial-meta text-center mt-3">
              <div className="reviewer-name font-semibold text-[#0f172a]">{t.name}</div>
              <div className="reviewer-role text-sm text-gray-500">{t.role}</div>
              <div className="rating-stars mt-2" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="star-icon">★</span>
                ))}
              </div>
            </div>
          </div>

          <div className="testimonial-right">
            <p className="testimonial-message text-base text-gray-700 leading-relaxed">{t.text}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              className={`testimonial-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
