"use client";

"use client";

import NextImage from "next/image";

const testimonials = [
  {
    img: "/person.webp",
    text:
      "Before I came across Exiscale I lived in a constant state of fear and anxiety while I ran ads. I was always afraid and on edge waiting for the infamous ‘your Facebook account is restricted’ email again. It really held me back from scaling hard! Since working with Exiscale, I haven’t felt more free to run ads because I know that no matter what goes wrong, they provide me with a new account and business manager ready to run ads again in less than 24 hours. Running ads has never been an easier game!",
  },
  {
    img: "/person2.webp",
    text:
      "I always use ExiScale accounts for my campaigns. These accounts are legit and work great for scaling my fb ads. You should order the unlimited account, and you'll quickly see how good it is.",
  },
  {
    img: "/person3.webp",
    text:
      "Though initially skeptical, Exiscale has proved to be a solid service for my company. Their setup was seamless, and I can now run my ads despite my previous ban. Their customer service team is quick and knowledgeable and overall I'm pleased with their service.",
  },
  {
    img: "/person4.webp",
    text:
      "We got the one that was not verified, but it was pretty strong. Served its purpose, allowed us to advertise, allowed us to make revenue, to make sales, to make profit. So if you want to check these guys out, give them a shot, try it out.",
  },
  {
    img: "/person5.webp",
    text:
      "Whenever I need Meta accounts I can trust to scale I use ExiScale. The team is great and responds 24/7. I am currently using them on multiple offers both externally as an affiliate and internally for my own offers. If you need solid accounts you can trust, use ExiScale!",
  },
  {
    img: "/person6.webp",
    text:
      "Been working with ExiScale for years without FB account or profile bans. Everything works smoothly, providing trust to invest in heavy inventory for advertising on FB. Had opposite experiences with other services, feeling terrible. ExiScale is a trusted partner, extremely responsive, often answering in less than 5 minutes. Not the cheapest, but the service and peace of mind justify the price. Highly recommend.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section py-16 sm:py-20">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">Our Client Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#0f172a]">Some good <span className="text-[#ff7a2f]">words</span> from satisfied clients.</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, idx) => (
            <article key={idx} className="testimonial-card rounded-2xl bg-white/90 dark:bg-black/20 border border-black/5 shadow-sm p-6 flex flex-col">
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <NextImage src={t.img} alt="Client" fill className="object-cover" />
              </div>
              <div className="mt-4 flex items-start gap-3">
                <NextImage src="/phay.webp" alt="quote" width={28} height={28} className="shrink-0" />
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
