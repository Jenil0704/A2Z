"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="flex flex-col md:flex-row w-full h-auto md:h-[420px] lg:h-[500px]">
            {/* Left side: Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="/suits_formal_wear.jpg"
                    alt="Premium Menswear"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side: Content */}
            <div
                className="w-full md:w-1/2 flex items-center p-8 sm:p-12 lg:p-16 relative overflow-hidden"
                style={{ backgroundColor: "var(--color-primary-dark)" }}
            >
                {/* Subtle noise texture overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundBlendMode: "multiply",
                        opacity: 0.05,
                        pointerEvents: "none",
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl relative z-10 w-full"
                >
                    <h2
                        className="mb-6 leading-[1.05] tracking-tight uppercase"
                        style={{
                            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                            color: "var(--color-text-white)",
                            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                            fontWeight: 800
                        }}
                    >
                        <span className="block mb-2">OWN THE</span>
                        <span className="flex flex-wrap items-end gap-x-3 gap-y-1">
                            <span>ROOM</span>
                            <span
                                style={{
                                    fontFamily: "var(--font-playfair), Georgia, serif",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                    textTransform: "none",
                                    color: "var(--color-text-light)",
                                    opacity: 0.5,
                                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                                    letterSpacing: "0.02em",
                                    lineHeight: 1
                                }}
                            >
                                Effortlessly
                            </span>
                        </span>
                    </h2>

                    <p
                        className="mb-10 leading-relaxed max-w-md"
                        style={{
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            color: "var(--color-text-light)",
                            fontSize: "clamp(0.95rem, 1vw, 1.05rem)"
                        }}
                    >
                        Experience the perfect blend of tradition and innovation in every stitch.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-medium transition-all hover:opacity-90 hover:-translate-y-1"
                        style={{
                            backgroundColor: "var(--color-bg-base)",
                            color: "var(--color-primary)",
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "0.9rem"
                        }}
                    >
                        Contact Us
                        <svg
                            className="ml-3 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
