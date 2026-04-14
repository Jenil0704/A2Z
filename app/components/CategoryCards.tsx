"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Category data ── */
const categories = [
    {
        title: "Bespoke Suits",
        description:
            "Experience tailoring at its finest. Our bespoke suits are precisely cut to your individual measurements, featuring structured shoulders, classic lapels, and timeless silhouettes. Crafted for power and engineered to leave a lasting impression.",
        image: "/suits_formal_wear.jpg",
        link: "#collections",
        color: "#1C1410",
    },
    {
        title: "Luxury Fabrics",
        description:
            "The foundation of every great suit is exceptional cloth. Discover our curated selection of fine Italian wools, blended silks, and breathable linens—sourced directly from heritage mills across the globe to offer you unparalleled quality.",
        image: "/luxury_fabric.jpg",
        link: "#collections",
        color: "#2E2318",
    },
    {
        title: "Jodhpuri & Ethnic Wear",
        description:
            "Step into royalty with our classic Jodhpuri suits and traditional ethnic ensembles. Merging regal Indian heritage with sharp modern cuts, these pieces are the ultimate choice for destination weddings and high-profile celebrations.",
        image: "/jodhpuri_2.jpg",
        link: "#collections",
        color: "#3A2A1E",
    },
    {
        title: "Premium Formal Wear",
        description:
            "Transform your workwear rotation with impeccably drafted dress shirts and slim-fit trousers. Focusing on flawless execution and breathable comfort, our formal wear ensures you look sharp from the early morning meeting to the evening gala.",
        image: "/formal.jpg",
        link: "#collections",
        color: "#2A1F14",
    },
    {
        title: "Elevated Casuals",
        description:
            "Relaxed luxury redefined. Our casual collection bridges the gap between downtime comfort and dressed-up sophistication. Featuring tailored chinos and structured blazers that can effortlessly transition from a weekend brunch to a dinner date.",
        image: "/formal_bottoms.jpeg",
        link: "#collections",
        color: "#33281C",
    },
];

export default function CategoryCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={containerRef}
            style={{
                position: "relative",
                backgroundColor: "var(--color-bg-section)",
            }}
        >
            {/* Heading area */}
            <div
                style={{
                    height: "45vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0 clamp(1.5rem, 4vw, 4rem)",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)",
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "var(--color-gold)",
                        marginBottom: "0.6rem",
                    }}
                >
                    Explore Our World
                </p>
                <h2
                    style={{
                        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 800,
                        color: "var(--color-text-primary)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        margin: 0,
                        textTransform: "uppercase",
                    }}
                >
                    Shop by Category
                </h2>
            </div>

            {/* Stacking cards */}
            {categories.map((cat, i) => {
                const targetScale = 1 - (categories.length - i) * 0.05;
                return (
                    <CategoryCard
                        key={`cat_${i}`}
                        i={i}
                        {...cat}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}

/* ── Individual stacking card ── */
function CategoryCard({
    i,
    title,
    description,
    image,
    link,
    color,
    progress,
    range,
    targetScale,
}: {
    i: number;
    title: string;
    description: string;
    image: string;
    link: string;
    color: string;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    range: [number, number];
    targetScale: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={containerRef}
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "sticky",
                top: 0,
            }}
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    display: "flex",
                    position: "relative",
                    height: "70vh",
                    minHeight: "700px",
                    width: "1500px",
                    maxWidth: "95vw",
                    borderRadius: "25px",
                    padding: "clamp(1.5rem, 3vw, 3rem)",
                    transformOrigin: "top",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
                    overflow: "hidden",
                    gap: "clamp(1.5rem, 3vw, 3rem)",
                }}
            >
                {/* Left — heading + description */}
                <div
                    style={{
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "clamp(1rem, 2vh, 1.5rem)",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                            fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                            fontWeight: 700,
                            color: "var(--color-text-white)",
                            margin: 0,
                            letterSpacing: "0.02em",
                            lineHeight: 1.15,
                        }}
                    >
                        {title}
                    </h2>
                    <p
                        style={{
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "clamp(0.78rem, 0.95vw, 0.9rem)",
                            lineHeight: 1.8,
                            color: "var(--color-text-light)",
                            margin: 0,
                        }}
                    >
                        {description}
                    </p>
                    <a
                        href={link}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "clamp(0.65rem, 0.78vw, 0.72rem)",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--color-gold-light)",
                            textDecoration: "none",
                            borderBottom: "1px solid var(--color-gold-light)",
                            paddingBottom: "2px",
                            transition: "color 0.2s, border-color 0.2s",
                            width: "fit-content",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--color-gold)";
                            e.currentTarget.style.borderColor = "var(--color-gold)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "var(--color-gold-light)";
                            e.currentTarget.style.borderColor = "var(--color-gold-light)";
                        }}
                    >
                        See more
                        <svg
                            width="22"
                            height="12"
                            viewBox="0 0 22 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>

                {/* Right — image */}
                <div
                    style={{
                        width: "60%",
                        height: "100%",
                        borderRadius: "20px",
                        overflow: "hidden",
                        flexShrink: 0,
                    }}
                >
                    <motion.div
                        style={{
                            width: "100%",
                            height: "100%",
                            scale: imageScale,
                        }}
                    >
                        <img
                            src={image}
                            alt={title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center top",
                                display: "block",
                            }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
