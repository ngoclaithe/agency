import NextImage from "next/image";

"use client";
import NextImage from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const reviews = [
  {
    avatar: "/nguoi1.webp",
    name: "Jasper Brown",
    text:
      "A business mentor of mine recommended Exiscale after I had major issues with my personal ad account getting shut down. I was a little hesitant to commit at first, because of the lack of face to face contact and the website seemed like it could easily be a scam. However ever since jumping in I was very impressed with the service. Their telegram support is virtually instantaneous and super on point! After using it for multiple months now, I can wholeheartedly recommend using exiscale if your in need of a third party ad account. These guys are legit 🙏",
  },
  {
    avatar: "/nguoi2.webp",
    name: "Max",
    text:
      "I've found their service to be a game-changer for my Facebook advertising. The fact that there's a backup account ready whenever anything goes down allows me to scale without worrying. It's a reliable solution that minimizes downtime and keeps my ad campaigns running smoothly. Highly recommended for anyone facing similar challenges with Facebook restrictions!",
  },
  {
    avatar: "/nguoi3.webp",
    name: "Alex Portillo",
    text:
      "If your advertising on facebook these guys are a must-have. Using their service allowed me to scale my affiliate offers to over 40k a day. If anything goes down it gets replaced for free. So there's no worrying about getting banned or anything, 100% have to check these guys out - Highly Recommend!",
  },
  {
    avatar: "/nguoi4.webp",
    name: "Izabela Balcerzak",
    text:
      "I really appreciate what Exiscale has done for me. I was able to keep my business running smoothly because of their excellent assistance.",
  },
  {
    avatar: "/nguoi5.webp",
    name: "Megan Buckhanon",
    text:
      "I don't normally write reviews but I needed some help with my ads. And Exiscale gave me some great advice. I will be signing up for the monthly package asap!!",
  },
  {
    avatar: "/nguoi6.webp",
    name: "Adrian Triplett",
    text: "Great Service!",
  },
  {
    avatar: "/nguoi7.webp",
    name: "The ENTREHUB",
    text:
      "Honestly, I have PTSD from Facebook banning my profile and other accounts. It scared the crap out of me and has held me back from really pushing ads out. Exiscale has literally taken all that stress and worry away. I feel like things are about to skyrocket for me because I can run ads without worrying about not having a way to get things back up if Facebook decides to shut me down. Also the team and customer service is top tier, they reply to me in seconds!!! If you run Facebook ads, you’d be silly not to have Exiscale on your side!",
  },
  {
    avatar: "/nguoi8.webp",
    name: "Aleksandrs Borsevskis",
    text:
      "Amazing service. I have been using ExiScale for 2 years already and haven't encountered any issues. All of my business managers got restricted, and this is the perfect solution for accessing profiles, business managers, and more...I recommend.",
  },
];

export default function AvatarCommentsGrid() {
  const VISIBLE = 2; // number of cards visible at once
  const [startIndex, setStartIndex] = useState(0);

  const total = reviews.length;

  // compute currently visible items (wrap-around)
  const visible = useMemo(() => {
    const out = [];
    for (let i = 0; i < VISIBLE; i++) {
      out.push(reviews[(startIndex + i) % total]);
    }
    return out;
  }, [startIndex, total]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((s) => (s + VISIBLE) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  function goPrev() {
    setStartIndex((s) => (s - VISIBLE + total) % total);
  }
  function goNext() {
    setStartIndex((s) => (s + VISIBLE) % total);
  }

  return (
    <section className="py-12 sm:py-16 avatar-comments" aria-label="Customer testimonials">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">What Clients Say</h3>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous testimonials" onClick={goPrev} className="carousel-button">◀</button>
            <button type="button" aria-label="Next testimonials" onClick={goNext} className="carousel-button">▶</button>
          </div>
        </div>

        <div className="testimonial-list grid grid-cols-1 sm:grid-cols-2 gap-4" role="region" aria-live="polite">
          {visible.map((r, idx) => (
            <article key={`${r.name}-${idx}`} className="testimonial-card p-4 bg-white rounded-lg shadow-sm border">
              <div className="testimonial-header flex items-start gap-3">
                <NextImage src={r.avatar} alt={`${r.name} avatar`} width={56} height={56} className="testimonial-avatar rounded-full object-cover" />
                <div>
                  <div className="testimonial-name font-semibold">{r.name}</div>
                  <div className="testimonial-stars text-yellow-500" aria-hidden>
                    ★★★★★
                  </div>
                </div>
              </div>

              <p className="testimonial-text mt-3 text-sm text-gray-700">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
