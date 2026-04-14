"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Shared animation variants ── */
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
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const lineExpand = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function FeaturedCollection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const section1InView = useInView(section1Ref, { once: true, margin: "-80px" });
  const section2InView = useInView(section2Ref, { once: true, margin: "-80px" });

  return (
    <section
      className="flex flex-col gap-20"
      style={{
        backgroundColor: "var(--color-bg-section)",
        padding: "clamp(2rem, 4vh, 3.5rem) clamp(1.5rem, 4vw, 4rem)",
      }}
    >
      {/* ── Header ── */}
      <div
        ref={headerRef}
        style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}
      >
        <div>
          <div style={{ overflow: "hidden" }}>
            <motion.p
              variants={clipReveal}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              custom={0}
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "clamp(0.6rem, 0.78vw, 0.7rem)",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--color-text-secondary)",
                marginBottom: "0.4rem",
              }}
            >
              Our Curated Edit
            </motion.p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              variants={clipReveal}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              custom={0.15}
              style={{
                fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Featured Collection
            </motion.h2>
          </div>

          {/* Animated divider */}
          <motion.div
            variants={lineExpand}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            style={{
              height: "1.5px",
              backgroundColor: "var(--color-text-secondary)",
              marginTop: "0.6rem",
              opacity: 0.15,
            }}
          />
        </div>

        <motion.a
          href="#collections"
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          custom={0.3}
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "clamp(0.6rem, 0.75vw, 0.68rem)",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            borderBottom: "1.5px solid var(--color-text-primary)",
            paddingBottom: "2px",
            marginBottom: "0.3rem",
          }}
        >
          View All
        </motion.a>
      </div>

      {/* ══════════════════════════════════════════
          FIRST SECTION — big image left, 2 cards right
      ══════════════════════════════════════════ */}
      <div
        ref={section1Ref}
        className="w-full"
        style={{
          margin: "0 auto",
          display: "flex",
          gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
          alignItems: "stretch",
        }}
      >
        {/* ══ LEFT — 50% wide, tall image ══ */}
        <motion.div
          className="group"
          style={{ width: "50%", flexShrink: 0, cursor: "pointer" }}
          variants={imageReveal}
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          custom={0}
        >
          {/* Image with title overlaid */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "85vh",
              overflow: "hidden",
            }}
          >
            <motion.img
              src="/suits_formal_wear.jpg"
              alt="Suits & Formal Wear"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.6, ease: "easeOut" } }}
            />

            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 40%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* Title overlaid — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: "clamp(1.25rem, 3vh, 2rem)",
                left: "clamp(1rem, 2.5vw, 1.75rem)",
                right: "clamp(1rem, 2.5vw, 1.75rem)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  variants={clipReveal}
                  initial="hidden"
                  animate={section1InView ? "visible" : "hidden"}
                  custom={0.4}
                  style={{
                    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.08,
                    margin: 0,
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  Suits &amp;
                  <br />
                  Formal Wear
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Links BELOW the image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
            custom={0.6}
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              paddingTop: "clamp(0.6rem, 1.2vh, 0.875rem)",
            }}
          >
            {["Suits (business & casual)", "Tuxedos", "Waistcoats"].map((s, i) => (
              <span
                key={s}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                {i > 0 && (
                  <span
                    style={{
                      color: "rgba(0,0,0,0.3)",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "clamp(0.58rem, 0.72vw, 0.68rem)",
                    }}
                  >
                    |
                  </span>
                )}
                <a
                  href="#collections"
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "clamp(0.58rem, 0.72vw, 0.68rem)",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {s}
                </a>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ══ RIGHT — 50% wide, cards at top, description at bottom ══ */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Cards row */}
          <div
            style={{
              display: "flex",
              gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
              alignItems: "flex-start",
            }}
          >
            {[
              {
                image: "/formal_top.jpg",
                label: "Tops",
                sub: ["Shirts (formal & casual)", "Polo Shirts", "Knitted Sweaters"],
              },
              {
                image: "/formal_bottoms.jpeg",
                label: "Bottoms",
                sub: ["Trousers (formal & casual)", "Chinos", "Shorts"],
              },
            ].map((card, idx) => (
              <motion.div
                key={card.label}
                className="group"
                style={{ flex: 1, cursor: "pointer" }}
                variants={cardReveal}
                initial="hidden"
                animate={section1InView ? "visible" : "hidden"}
                custom={0.2 + idx * 0.15}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Image with label overlaid at bottom */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "3 / 4",
                    overflow: "hidden",
                    backgroundColor: "var(--color-bg-section)",
                  }}
                >
                  <motion.img
                    src={card.image}
                    alt={card.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
                  />

                  {/* Gradient + label */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "clamp(0.75rem, 1.5vw, 1.25rem)",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 80%)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                        fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {card.label}
                    </h3>
                  </div>
                </div>

                {/* Links BELOW image */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                    paddingTop: "clamp(0.6rem, 1.2vh, 0.875rem)",
                  }}
                >
                  {card.sub.map((s, i) => (
                    <span
                      key={s}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                    >
                      {i > 0 && (
                        <span
                          style={{
                            color: "rgba(0,0,0,0.3)",
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "clamp(0.58rem, 0.72vw, 0.66rem)",
                          }}
                        >
                          |
                        </span>
                      )}
                      <a
                        href="#collections"
                        style={{
                          fontFamily: "var(--font-inter), Inter, sans-serif",
                          fontSize: "clamp(0.58rem, 0.72vw, 0.66rem)",
                          fontWeight: 500,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "rgba(0,0,0,0.55)",
                          textDecoration: "none",
                        }}
                      >
                        {s}
                      </a>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description text — bottom */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
            custom={0.55}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(0.7rem, 0.88vw, 0.8rem)",
              lineHeight: 1.85,
              color: "rgba(0,0,0,0.55)",
              margin: 0,
            }}
          >
            Each piece in our collection reflects the perfect balance of modern
            elegance and timeless style. Our carefully crafted suits, shirts, and
            trousers are designed to enhance your natural confidence, while
            providing the ultimate in comfort and fit. Explore our full range of
            clothing — where every item is a step towards elevating your everyday
            style.
          </motion.p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECOND SECTION — 2 cards left, big image right
      ══════════════════════════════════════════ */}
      <div
        ref={section2Ref}
        className="w-full"
        style={{
          margin: "clamp(2rem, 4vh, 3.5rem) auto 0",
          display: "flex",
          gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
          alignItems: "stretch",
        }}
      >
        {/* ══ LEFT — 50% wide, 2 cards + description ══ */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Cards row */}
          <div
            style={{
              display: "flex",
              gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
              alignItems: "flex-start",
            }}
          >
            {[
              {
                image: "/cat-saree.png",
                label: "Sarees",
                sub: ["Cotton Sarees", "Silk Sarees", "Designer Sarees"],
              },
              {
                image: "/cat-gown.png",
                label: "Gowns",
                sub: ["Evening Gowns", "Cocktail Dresses", "Ball Gowns"],
              },
            ].map((card, idx) => (
              <motion.div
                key={card.label}
                className="group"
                style={{ flex: 1, cursor: "pointer" }}
                variants={cardReveal}
                initial="hidden"
                animate={section2InView ? "visible" : "hidden"}
                custom={0.1 + idx * 0.15}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "3 / 4",
                    overflow: "hidden",
                    backgroundColor: "var(--color-bg-section)",
                  }}
                >
                  <motion.img
                    src={card.image}
                    alt={card.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "clamp(0.75rem, 1.5vw, 1.25rem)",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 80%)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                        fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {card.label}
                    </h3>
                  </div>
                </div>

                {/* Links below */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                    paddingTop: "clamp(0.6rem, 1.2vh, 0.875rem)",
                  }}
                >
                  {card.sub.map((s, i) => (
                    <span
                      key={s}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                    >
                      {i > 0 && (
                        <span
                          style={{
                            color: "rgba(0,0,0,0.3)",
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "clamp(0.58rem, 0.72vw, 0.66rem)",
                          }}
                        >
                          |
                        </span>
                      )}
                      <a
                        href="#collections"
                        style={{
                          fontFamily: "var(--font-inter), Inter, sans-serif",
                          fontSize: "clamp(0.58rem, 0.72vw, 0.66rem)",
                          fontWeight: 500,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "rgba(0,0,0,0.55)",
                          textDecoration: "none",
                        }}
                      >
                        {s}
                      </a>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description — bottom */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={section2InView ? "visible" : "hidden"}
            custom={0.45}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(0.7rem, 0.88vw, 0.8rem)",
              lineHeight: 1.85,
              color: "rgba(0,0,0,0.55)",
              margin: 0,
            }}
          >
            From hand-woven cotton sarees to stunning evening gowns, every piece
            in our collection is crafted to celebrate femininity and grace. Discover
            timeless silhouettes designed for every woman and every occasion.
          </motion.p>
        </div>

        {/* ══ RIGHT — 50% wide, big image ══ */}
        <motion.div
          className="group"
          style={{ width: "50%", flexShrink: 0, cursor: "pointer" }}
          variants={imageReveal}
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          custom={0.1}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "85vh",
              overflow: "hidden",
            }}
          >
            <motion.img
              src="/wedding_lehenga.jpg"
              alt="Bridal Collection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
              whileHover={{ scale: 1.04, transition: { duration: 0.6, ease: "easeOut" } }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 40%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* Title overlaid — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: "clamp(1.25rem, 3vh, 2rem)",
                left: "clamp(1rem, 2.5vw, 1.75rem)",
                right: "clamp(1rem, 2.5vw, 1.75rem)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  variants={clipReveal}
                  initial="hidden"
                  animate={section2InView ? "visible" : "hidden"}
                  custom={0.5}
                  style={{
                    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.08,
                    margin: 0,
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  Bridal &amp;
                  <br />
                  Collection
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Links below image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={section2InView ? "visible" : "hidden"}
            custom={0.65}
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              paddingTop: "clamp(0.6rem, 1.2vh, 0.875rem)",
            }}
          >
            {["Lehengas", "Bridal Sarees", "Designer Wear"].map((s, i) => (
              <span
                key={s}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                {i > 0 && (
                  <span
                    style={{
                      color: "rgba(0,0,0,0.3)",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "clamp(0.58rem, 0.72vw, 0.68rem)",
                    }}
                  >
                    |
                  </span>
                )}
                <a
                  href="#collections"
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "clamp(0.58rem, 0.72vw, 0.68rem)",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.6)",
                    textDecoration: "none",
                  }}
                >
                  {s}
                </a>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
