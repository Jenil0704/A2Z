"use client";

import { motion } from "framer-motion";

const atelierImg = "/atelier-craft.png";

const cards = [
    {
        titlePart1: "Handcrafted",
        titlePart2: "Precision",
        subtitle: "EACH PIECE EMBODIES CHARACTER AND ELEGANCE.",
        image: "/fabric.jpg",
    },
    {
        titlePart1: "Timeless",
        titlePart2: "Techniques",
        subtitle: "MASTERFUL TAILORING AND CRAFTSMANSHIP.",
        image: "/tailor.jpg",
    },
    {
        titlePart1: "Elevated",
        titlePart2: "Materials",
        subtitle: "THE FINEST FABRICS SOURCED GLOBALLY.",
        image: "/fabric_2.jpg",
    },
    {
        titlePart1: "Designed To",
        titlePart2: "Endure",
        subtitle: "CLASSIC STYLES THAT TRANSCEND SEASONS.",
        image: "/suits_formal_wear.jpg",
    },
];

export default function EditorialSection() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image covering the entire section */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${atelierImg}')`,
                }}
            />
            {/* Dark overlay for text legibility and mood over the whole section */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Main Content Wrapper */}
            <div className="relative z-10 w-full mx-auto px-10 pt-24 lg:pt-32 pb-24 lg:pb-32">

                {/* Inner Content for Heading */}
                <div className="w-full mx-auto mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl text-[var(--color-text-white)] text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.15]"
                    >
                        <span
                            className="font-serif italic font-light mr-3"
                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                            Where
                        </span>
                        <span
                            className="uppercase tracking-tight"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700 }}
                        >
                            Hands, Time,
                        </span>
                        <br />
                        <span
                            className="uppercase tracking-tight mr-4"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700 }}
                        >
                            and Devotion
                        </span>
                        <span
                            className="font-serif italic font-light"
                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                            Shape
                        </span>
                        <br />
                        <span
                            className="font-serif italic font-light mr-3"
                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                            Every
                        </span>
                        <span
                            className="uppercase tracking-tight"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 700 }}
                        >
                            Detail
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md mt-6 lg:mt-8 text-[0.65rem] sm:text-xs text-white/90 font-bold tracking-[0.15em] uppercase leading-relaxed"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                        A CELEBRATION OF METICULOUS ARTISTRY—STITCHED, SCULPTED, AND REFINED TO ECHO THE SOUL OF ATOZ EXCLUSIVE.
                    </motion.p>
                </div>

                {/* Embedded Cards Container */}
                <div className="bg-[var(--color-bg-base)] max-w-[1400px] mx-auto p-3 md:p-5 lg:p-6 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative aspect-[3/4] lg:aspect-[2/3] xl:aspect-[3/4] w-full overflow-hidden group"
                            >
                                <img
                                    src={card.image}
                                    alt={card.titlePart2}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Gradient overlays for contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410]/95 via-[#1C1410]/20 to-transparent opacity-90" />
                                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#1C1410]/60 to-transparent opacity-80" />

                                {/* Number Top Right */}
                                <div
                                    className="absolute top-4 right-5 text-[var(--color-text-white)] text-3xl font-light"
                                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                                >
                                    0{i + 1}
                                </div>

                                {/* Text Bottom Center */}
                                <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center px-4">
                                    <h3 className="text-[var(--color-text-white)] text-2xl lg:text-3xl leading-[1.1] mb-3">
                                        <span
                                            className="font-serif italic tracking-wide"
                                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                                        >
                                            {card.titlePart1}
                                        </span>
                                        <br />
                                        <span
                                            className="uppercase tracking-widest font-bold"
                                            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.85em" }}
                                        >
                                            {card.titlePart2}
                                        </span>
                                    </h3>
                                    <p
                                        className="text-white/80 text-[0.6rem] uppercase tracking-widest font-bold mx-auto max-w-[85%]"
                                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                    >
                                        {card.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}