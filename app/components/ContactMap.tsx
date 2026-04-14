"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactDetails = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Visit Us",
    lines: ["Shop No. 12, Fabric Market, Budhwar Peth", "Pune – 411002, Maharashtra"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.61a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
    label: "Call Us",
    lines: ["+91 98765 43210", "+91 91234 56789"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email Us",
    lines: ["atoz.exclusive@gmail.com"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Hours",
    lines: ["Mon – Sat: 10 AM – 8 PM", "Sunday: 11 AM – 6 PM"],
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
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

const mapReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ContactMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="w-full bg-[var(--color-bg-dark)]">
      <div className="w-full mx-auto px-10 py-16">

        {/* Header */}
        <div className="mb-10">
          <div style={{ overflow: "hidden" }}>
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-gold)] mb-2"
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
            >
              Find Us
            </motion.p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              className="text-3xl font-semibold text-[var(--color-text-white)]"
              style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }}
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.12}
            >
              Contact &amp; Location
            </motion.h2>
          </div>

          {/* Animated divider */}
          <motion.div
            variants={lineExpand}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              height: "1px",
              backgroundColor: "var(--color-gold)",
              marginTop: "0.75rem",
              opacity: 0.25,
            }}
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left — contact details + WhatsApp */}
          <div className="flex flex-col gap-8">

            {/* Contact items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col gap-2"
                  variants={cardReveal}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={0.15 + i * 0.1}
                >
                  <div className="flex items-center gap-2 text-[var(--color-gold)]">
                    {item.icon}
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold)]">
                      {item.label}
                    </span>
                  </div>
                  {item.lines.map((line, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-white/70 pl-6"
                    >
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              className="w-full h-px bg-white/10"
              variants={lineExpand}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-white/90 hover:text-white transition-colors no-underline group w-fit"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.6}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/15 transition-colors text-[#25D366]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </span>
              Chat on WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          {/* Right — map */}
          <motion.div
            className="rounded-xl overflow-hidden border border-white/10 min-h-[340px]"
            variants={mapReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <iframe
              title="AtoZ Exclusive Design — Pune Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5757066624154!2d73.84897!3d18.51957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065ce47697d%3A0x4c7e7cf0fd6d3d03!2sBudhwar%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="block min-h-[340px] border-0"
              style={{ filter: "saturate(0.7) contrast(1.1) brightness(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
