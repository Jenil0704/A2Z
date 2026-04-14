"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Pune, Maharashtra",
    rating: 5,
    initials: "PS",
    content:
      "The fabric quality from AtoZ Exclusive is absolutely stunning. I got my wedding lehenga stitched using their Banarasi silk and every guest at the ceremony couldn't stop complimenting it. Truly premium quality!",
  },
  {
    name: "Rekha Desai",
    role: "Mumbai, Maharashtra",
    rating: 5,
    initials: "RD",
    content:
      "As a boutique owner, I've tried many fabric suppliers but AtoZ stands apart. Their cotton collection is unmatched — perfect weave, rich colors, and the staff is incredibly helpful.",
  },
  {
    name: "Anita Joshi",
    role: "Nashik, Maharashtra",
    rating: 5,
    initials: "AJ",
    content:
      "I purchased fabric for my daughter's engagement and it was everything I dreamed of. The golden zari work on the silk was breathtaking. Will definitely be back for the wedding collection!",
  },
  {
    name: "Sunita Patil",
    role: "Nagpur, Maharashtra",
    rating: 4,
    initials: "SP",
    content:
      "Excellent variety of traditional fabrics. Found the perfect Lenin fabric for summer outfits. The pricing is very reasonable for the quality you receive.",
  },
  {
    name: "Meera Kulkarni",
    role: "Aurangabad, Maharashtra",
    rating: 5,
    initials: "MK",
    content:
      "The wedding lehenga fabric I ordered exceeded all expectations. Rich maroon with intricate gold embroidery thread. AtoZ Exclusive truly lives up to its name.",
  },
];

/* ── Animation variants ── */
const clipReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0, y: 40 },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cardReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const lineExpand = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={i < count ? "var(--color-gold)" : "none"}
          stroke={i < count ? "var(--color-gold)" : "var(--color-text-secondary)"}
          strokeWidth="1.6"
          opacity={i < count ? 1 : 0.3}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="w-full py-16 bg-[var(--color-bg-section)]">
      <div className="w-full px-10">

        {/* Section heading */}
        <div className="mb-10">
          <div style={{ overflow: "hidden" }}>
            <motion.p
              className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--color-gold)] mb-1"
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
            >
              What Our Customers Say
            </motion.p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              className="text-2xl font-semibold text-[var(--color-primary)] tracking-tight"
              style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }}
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.12}
            >
              Customer Testimonials
            </motion.h2>
          </div>

          {/* Animated divider */}
          <motion.div
            variants={lineExpand}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              height: "1px",
              backgroundColor: "var(--color-text-secondary)",
              marginTop: "0.75rem",
              opacity: 0.15,
            }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[var(--color-bg-base)] border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
              variants={cardReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2 + i * 0.1}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Stars */}
              <Stars count={t.rating} />

              {/* Review text */}
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] flex-1">
                {t.content}
              </p>

              {/* Author row */}
              <div className="flex items-center gap-2">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-[var(--color-text-white)] bg-[var(--color-primary)] border border-black/10 shadow-sm"
                  style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }}
                >
                  {t.initials}
                </div>

                {/* Name */}
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {t.name}
                </span>

                {/* Dot separator */}
                <span aria-hidden className="w-1 h-1 rounded-full bg-black/25 shrink-0" />

                {/* Role */}
                <span className="text-xs text-[var(--color-text-secondary)] truncate">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
