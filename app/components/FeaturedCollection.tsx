"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

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

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const smallImageReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

/* ── Data for the two collection blocks ── */
const collections = [
  {
    tag: "Our Curated Edit",
    heading: "MEN'S LUXURY SUIT COLLECTION",
    description:
      "Discover our latest collection of men's luxury suits, featuring premium fabrics, impeccable tailoring, and timeless designs. From classic formal wear to contemporary styles, each piece is crafted to elevate your wardrobe.",
    cta: "Discover Collection",
    bigImage: "/suits_formal_wear.jpg",
    bigImageAlt: "Men's Formal Suits",
    hoverBigImage: "/formal_top.jpg",
    smallImage: "/suits_formal_wear.jpg",
    smallImageAlt: "Suit Detail",
    hoverSmallImage: "/formal_bottoms.jpeg",
    layout: "image-left" as const,
  },
  // {
  //   tag: "Premium Menswear",
  //   heading: "SUITS,\nFORMAL &\nETHNIC WEAR",
  //   description:
  //     "From impeccably tailored suits to classic jodhpuri sets, our menswear collection blends modern sophistication with timeless Indian craftsmanship. Every garment is designed to enhance your natural confidence and elevate your style.",
  //   cta: "Explore Range",
  //   bigImage: "/suits_formal_wear.jpg",
  //   bigImageAlt: "Suits & Formal Wear",
  //   smallImage: "/formal_top.jpg",
  //   smallImageAlt: "Formal Shirt Detail",
  //   layout: "image-right" as const,
  // },
];

export default function FeaturedCollection() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-bg-section)",
        padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 4vw, 4rem)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(4rem, 8vh, 7rem)",
      }}
    >
      {collections.map((col, index) => (
        <CollectionBlock key={index} {...col} />
      ))}
    </section>
  );
}

function CollectionBlock({
  tag,
  heading,
  description,
  cta,
  bigImage,
  bigImageAlt,
  hoverBigImage,
  smallImage,
  smallImageAlt,
  hoverSmallImage,
  layout,
}: (typeof collections)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const imageLeft = layout === "image-left";

  /* Big image block */
  const bigImageBlock = (
    <motion.div
      style={{
        width: "42%",
        flexShrink: 0,
        overflow: "hidden",
        position: "relative",
      }}
      variants={imageReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={0}
      whileHover="hover"
    // initial="hidden"
    >
      {/* Background Hover Image */}
      {hoverBigImage && (
        <motion.img
          src={hoverBigImage}
          alt={`Hover ${bigImageAlt}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            zIndex: 0,
          }}
          variants={{
            hover: { scale: 1.05, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        />
      )}

      {/* Foreground Main Image */}
      <motion.img
        src={bigImage}
        alt={bigImageAlt}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "60vh",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
          zIndex: 1,
        }}
        variants={{
          hover: { opacity: hoverBigImage ? 0 : 1, transition: { duration: 0.6, ease: "easeIn" } }
        }}
      />
    </motion.div>
  );

  /* Text + small image block */
  const contentBlock = (
    <div
      style={{
        width: "58%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "clamp(1rem, 2vh, 2rem)",
        paddingBottom: "clamp(1rem, 2vh, 2rem)",
        gap: "clamp(2rem, 4vh, 3rem)",
      }}
    >
      {/* Top — heading area */}
      <div
        style={{
          paddingLeft: imageLeft ? "clamp(1.5rem, 3vw, 3rem)" : 0,
          paddingRight: imageLeft ? 0 : "clamp(1.5rem, 3vw, 3rem)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Tag */}
        <div style={{ overflow: "hidden" }}>
          <motion.p
            variants={clipReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.15}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "clamp(0.75rem, 1.5vh, 1rem)",
            }}
          >
            {tag}
          </motion.p>
        </div>

        {/* Big heading */}
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            variants={clipReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.25}
            style={{
              fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              margin: 0,
              textTransform: "uppercase",
              whiteSpace: "pre-line",
            }}
          >
            {heading}
          </motion.h2>
        </div>
      </div>

      {/* Middle — description + CTA */}
      <div
        style={{
          paddingLeft: imageLeft ? "clamp(1.5rem, 3vw, 3rem)" : 0,
          paddingRight: imageLeft ? 0 : "clamp(1.5rem, 3vw, 3rem)",
        }}
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.4}
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "clamp(0.72rem, 0.88vw, 0.82rem)",
            lineHeight: 1.85,
            color: "var(--color-text-secondary)",
            margin: "0 0 clamp(1.25rem, 2.5vh, 2rem) 0",
            maxWidth: "420px",
          }}
        >
          {description}
        </motion.p>

        <motion.a
          href="#collections"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.55}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            border: "1.5px solid var(--color-text-primary)",
            padding: "0.7rem 1.5rem",
            borderRadius: "2px",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "var(--color-primary)";
            el.style.color = "var(--color-text-white)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--color-text-primary)";
          }}
        >
          {cta}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </motion.a>
      </div>

      {/* Bottom — small detail image */}
      <div
        style={{
          paddingLeft: imageLeft ? "clamp(1.5rem, 3vw, 3rem)" : 0,
          paddingRight: imageLeft ? 0 : "clamp(1.5rem, 3vw, 3rem)",
          display: "flex",
          justifyContent: imageLeft ? "flex-end" : "flex-start",
        }}
      >
        <motion.div
          variants={smallImageReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          style={{
            width: "clamp(140px, 14vw, 200px)",
            aspectRatio: "4 / 5",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Background Hover Image */}
          {hoverSmallImage && (
            <motion.img
              src={hoverSmallImage}
              alt={`Hover ${smallImageAlt}`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                zIndex: 0,
              }}
              variants={{
                hover: { scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />
          )}

          {/* Foreground Main Image */}
          <motion.img
            src={smallImage}
            alt={smallImageAlt}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              zIndex: 1,
            }}
            variants={{
              hover: { opacity: hoverSmallImage ? 0 : 1, transition: { duration: 0.6, ease: "easeIn" } }
            }}
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: 0,
        alignItems: "stretch",
        width: "100%",
      }}
    >
      <>
        {bigImageBlock}
        {contentBlock}
      </>
    </div>
  );
}
