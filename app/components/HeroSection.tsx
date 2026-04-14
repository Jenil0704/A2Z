"use client";

import { motion, Variants } from "framer-motion";

/* ── Shared animation helpers ── */
const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0, y: 40 },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "var(--color-bg-dark)" }}
      initial="hidden"
      animate="visible"
    >
      {/* ── Full-bleed background image with scale-in ── */}
      <motion.div className="absolute inset-0" variants={scaleIn}>
        <img
          src="/hero.jpg"
          alt="Premium bridal wear"
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </motion.div>

      {/* Top overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-black/30"
        variants={overlayFade}
      />

      {/* ── Main content ── */}
      <div
        className="relative z-10 w-full h-full"
        style={{ padding: "0 clamp(1.5rem, 4vw, 4rem)" }}
      >
        {/* Label + Heading — left side */}
        <div className="flex flex-col absolute top-60 gap-10">
          {/* Label */}
          <motion.p
            variants={clipReveal}
            custom={0.3}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
              overflow: "hidden",
            }}
          >
            Exclusive Brand
          </motion.p>

          {/* Heading — each word with staggered clip reveal */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: "clamp(3rem, 9vw, 8rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#ffffff",
              margin: 0,
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "block" }}
                variants={clipReveal}
                custom={0.5}
              >
                Woven
              </motion.span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "block" }}
                variants={clipReveal}
                custom={0.65}
              >
                For
              </motion.span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                style={{
                  display: "block",
                  color: "var(--color-gold-light)",
                  fontStyle: "italic",
                }}
                variants={clipReveal}
                custom={0.8}
              >
                Legacy.
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Tagline — right side */}
        <div className="absolute top-40 right-10 w-md">
          <motion.p
            className="text-xl"
            variants={fadeUp}
            custom={0.9}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.01em",
              margin: "0 0 1.5rem 0",
            }}
          >
            Clothing is more than just a way to cover the body — it&apos;s a
            form of self-expression, culture, and identity.
          </motion.p>

          {/* CTA button */}
          <motion.a
            href="#collections"
            className="inline-flex items-center gap-2 no-underline"
            variants={fadeUp}
            custom={1.1}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: "#ffffff",
              color: "#111",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: "0.65rem 1.3rem",
              borderRadius: "9999px",
              whiteSpace: "nowrap",
              transition: "background-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--color-gold)";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#ffffff";
              el.style.color = "#111";
            }}
          >
            Shop Now
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#111",
                color: "#ffffff",
                flexShrink: 0,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
