"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  { name: "Bridal Lehenga", price: "₹12,999", image: "/wedding_lehenga.jpg" },
  { name: "Cotton Saree", price: "₹3,499", image: "/cotton_saree.jpg" },
  { name: "Indian Bridal", price: "₹18,499", image: "/indian_bride.jpg" },
  { name: "Lenin Saree", price: "₹4,299", image: "/lenin_saree.jpg" },
  { name: "Cat Saree", price: "₹5,999", image: "/cat-saree.png" },
  { name: "Cat Gown", price: "₹7,799", image: "/cat-gown.png" },
];

const SCROLL_AMOUNT = 300;

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
  hidden: { opacity: 0, y: 60, scale: 0.95 },
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

export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        backgroundColor: "var(--color-bg-base)",
        paddingTop: "clamp(2.5rem, 5vh, 4rem)",
        paddingBottom: "clamp(2.5rem, 5vh, 4rem)",
      }}
    >
      {/* ── Featured Products Header ── */}
      <div
        style={{
          paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
          paddingRight: "clamp(1.5rem, 4vw, 4rem)",
          marginBottom: "clamp(1rem, 2vh, 1.5rem)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            variants={clipReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Featured Products
          </motion.h2>
        </div>

        {/* Animated divider line */}
        <motion.div
          variants={lineExpand}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            height: "1px",
            backgroundColor: "var(--color-text-secondary)",
            marginTop: "0.75rem",
            opacity: 0.2,
          }}
        />
      </div>

      {/* ── Header row ── */}
      <div
        className="flex items-center justify-between"
        style={{
          paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
          paddingRight: "clamp(1.5rem, 4vw, 4rem)",
          marginBottom: "clamp(1.5rem, 3vh, 2.5rem)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            variants={clipReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.15}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(0.65rem, 0.85vw, 0.78rem)",
              fontWeight: 400,
              color: "var(--color-text-secondary)",
              letterSpacing: "0.02em",
              margin: 0,
              maxWidth: "420px",
            }}
          >
            Meet our premium fabrics — heritage weaves. Technical craft protection.
          </motion.h2>
        </div>

        {/* Shop Now + Arrow buttons */}
        <motion.div
          className="flex items-center"
          style={{ gap: "0.75rem", flexShrink: 0 }}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.3}
        >
          <a
            href="#collections"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(0.6rem, 0.75vw, 0.68rem)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-text-primary)",
              paddingBottom: "1px",
              whiteSpace: "nowrap",
            }}
          >
            Shop Now
          </a>

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid var(--color-text-primary)",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--color-text-primary)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-bg-base)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-primary)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="7.5,1.5 3,6 7.5,10.5" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid var(--color-text-primary)",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--color-text-primary)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-bg-base)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-primary)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4.5,1.5 9,6 4.5,10.5" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* ── Cards row ── */}
      <div
        ref={scrollRef}
        className="flex gap-0 overflow-x-auto"
        style={{
          paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
          paddingRight: "clamp(1.5rem, 4vw, 4rem)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="group flex-shrink-0 cursor-pointer"
            variants={cardReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.35 + i * 0.1}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            style={{
              width: "clamp(160px, 18vw, 240px)",
              marginRight: i < categories.length - 1 ? "clamp(0.75rem, 1.5vw, 1.25rem)" : 0,
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "2 / 3",
                overflow: "hidden",
                backgroundColor: "var(--color-bg-section)",
              }}
            >
              <motion.img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
                whileHover={{ scale: 1.06, transition: { duration: 0.5, ease: "easeOut" } }}
              />
            </div>

            <div style={{ paddingTop: "0.65rem" }}>
              <div className="flex gap-1" style={{ marginBottom: "0.45rem" }}>
                {["var(--color-primary)", "var(--color-gold)", "var(--color-jewel)"].map((c, j) => (
                  <span
                    key={j}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: c,
                      display: "inline-block",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "clamp(0.7rem, 0.9vw, 0.82rem)",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  margin: "0 0 0.2rem 0",
                  letterSpacing: "0.01em",
                }}
              >
                {cat.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "clamp(0.65rem, 0.8vw, 0.74rem)",
                  fontWeight: 400,
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                {cat.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
