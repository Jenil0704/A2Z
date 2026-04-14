"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";

/* ── Product data ── */
const products = [
  { name: "Bespoke Navy Three-Piece Suit", price: "₹45,999", image: "/suits_formal_wear.jpg", category: "Bespoke Suits" },
  { name: "Premium Cotton Check Shirt", price: "₹4,999", image: "/formal_top.jpg", category: "Formal Wear" },
  { name: "Classic Italian Wool Fabric", price: "₹12,499", image: "/italian_wool.jpg", category: "Luxury Fabrics" },
  { name: "Royal Jodhpuri Set", price: "₹38,999", image: "/jodhpuri.jpg", category: "Jodhpuri Suits" },
  { name: "Tailored Blend Chinos", price: "₹3,499", image: "/formal_bottoms.jpeg", category: "Casual Wear" },
  { name: "Silk Blend Blazer Fabric", price: "₹8,999", image: "/silk_blend.jpg", category: "Luxury Fabrics" },
  { name: "Slim Fit Formal Trousers", price: "₹4,499", image: "/formal_bottoms.jpeg", category: "Formal Wear" },
  { name: "Double Breasted Tuxedo", price: "₹52,999", image: "/breasted_tuxedo.jpg", category: "Bespoke Suits" },
];

const tabs = ["All", "Bespoke Suits", "Formal Wear", "Luxury Fabrics", "Jodhpuri Suits", "Casual Wear"];

/* ── Animation variants ── */
const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0, y: 40 },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function ShopByCategory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "var(--color-bg-dark)",
        padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 4vw, 4rem)",
      }}
    >
      {/* ── Heading ── */}
      <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 3vh, 2.5rem)" }}>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            variants={clipReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--color-text-white)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Our Finest
          </motion.h2>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.p
            variants={clipReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-gold)",
              margin: "0.15rem 0 0 0",
              letterSpacing: "0.02em",
            }}
          >
            Craftsmanship
          </motion.p>
        </div>
      </div>

      {/* ── Filter tabs ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.2}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(0.25rem, 0.5vw, 0.5rem)",
          flexWrap: "wrap",
          marginBottom: "clamp(2rem, 4vh, 3rem)",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(0.65rem, 0.78vw, 0.75rem)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              padding: "0.5rem 1.2rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
              backgroundColor: activeTab === tab ? "var(--color-gold)" : "transparent",
              color: activeTab === tab ? "var(--color-bg-dark)" : "var(--color-text-light)",
            }}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* ── Product grid ── */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(1rem, 2vw, 1.5rem)",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              layout
              variants={cardReveal}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
              custom={0.05 * i}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{
                backgroundColor: "var(--color-primary-light)",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  borderRadius: "12px",
                  margin: "0",
                  padding: "10px 10px 0 10px",
                  boxSizing: "border-box",
                }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    borderRadius: "10px",
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "clamp(0.6rem, 1.2vw, 1rem) clamp(0.75rem, 1.5vw, 1.25rem) clamp(0.5rem, 1vw, 0.75rem)" }}>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                    fontSize: "clamp(0.75rem, 0.95vw, 0.88rem)",
                    fontWeight: 600,
                    color: "var(--color-text-white)",
                    margin: "0 0 0.2rem 0",
                    letterSpacing: "0.01em",
                  }}
                >
                  {product.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "clamp(0.68rem, 0.82vw, 0.78rem)",
                    fontWeight: 400,
                    color: "var(--color-text-light)",
                    margin: 0,
                    opacity: 0.7,
                  }}
                >
                  {product.price}
                </p>
              </div>

              {/* Action buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  padding: "0 clamp(0.75rem, 1.5vw, 1.25rem) clamp(0.75rem, 1.2vw, 1rem)",
                  flexWrap: "wrap",
                }}
              >
                <ActionBtn icon={heartIcon} label="Save" />
                <ActionBtn icon={cartIcon} label="Cart" />
                <ActionBtn icon={arrowIcon} label="View Detail" filled />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

/* ── Action button sub-component ── */
function ActionBtn({ icon, label, filled }: { icon: React.ReactNode; label: string; filled?: boolean }) {
  return (
    <button
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        fontSize: "clamp(0.55rem, 0.68vw, 0.65rem)",
        fontWeight: 500,
        letterSpacing: "0.03em",
        padding: "0.35rem 0.7rem",
        borderRadius: "9999px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s, color 0.2s, opacity 0.2s",
        backgroundColor: filled ? "var(--color-gold)" : "rgba(255,255,255,0.08)",
        color: filled ? "var(--color-bg-dark)" : "var(--color-text-light)",
      }}
      onMouseEnter={(e) => {
        if (!filled) {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
        } else {
          e.currentTarget.style.opacity = "0.85";
        }
      }}
      onMouseLeave={(e) => {
        if (!filled) {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
        } else {
          e.currentTarget.style.opacity = "1";
        }
      }}
    >
      {icon}
      {label}
    </button>
  );
}

/* ── Icons ── */
const heartIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const cartIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const arrowIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
