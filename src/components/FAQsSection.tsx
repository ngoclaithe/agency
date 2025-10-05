"use client";

import { useState } from "react";

const faqs = [
  { q: "How quickly can I start advertising again?", a: "In most cases we can have you back up and running within 24 hours using replacement accounts and business managers." },
  { q: "What if my account gets banned?", a: "We provide lifetime replacement guarantees and fast reinstatement so your campaigns remain uninterrupted." },
  { q: "Is it secure to use, even when traveling?", a: "Yes — our setups work across locations and we provide guidance to keep your accounts secure while traveling." },
  { q: "How Do You Ensure Account Quality?", a: "All accounts are aged and vetted, registered with trusted IPs and tested for scaling performance." },
  { q: "Where can I get more information?", a: "Check our documentation or contact support via live chat for detailed guidance tailored to your use case." },
  { q: "Can I use your service for high-risk marketing?", a: "We support a wide range of advertisers; reach out to our team to discuss suitability for specific verticals." },
];

export default function FAQsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faqs-section py-12 sm:py-16">
      <div className="container mx-auto px-6 sm:px-10 text-center">
        <p className="text-sm uppercase tracking-wide text-[#ff7a2f]">FAQs</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#0f172a]">Commonly Asked <span className="text-[#ff7a2f]">Questions</span></h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className={`faq-item text-left p-4 rounded-lg transition flex items-center justify-between ${open === i ? 'open' : ''}`}
              aria-expanded={open === i}
            >
              <span className="faq-question text-[#ff7a2f]">{f.q}</span>
              <span className="faq-toggle text-[#0f172a]">{open === i ? '−' : '+'}</span>
              <div className={`faq-answer mt-2 w-full ${open === i ? 'block' : 'hidden'}`}>
                <p className="text-sm text-gray-600 mt-2">{f.a}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
