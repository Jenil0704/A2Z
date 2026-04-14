"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function TextParallax() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    return (
        <section
            ref={container}
            className="overflow-hidden py-16 lg:py-24"
            style={{ backgroundColor: "var(--color-bg-base)" }}
        >
            <div className="flex flex-col gap-6 lg:gap-10 relative z-10 w-[150vw] xl:w-[120vw]">
                {/* We increase the width well beyond 100vw and use left offsets so there's always runway */}
                <Slide
                    src="/suits_formal_wear.jpg"
                    direction="left"
                    left="-15%"
                    progress={scrollYProgress}
                    text="Bespoke Tailoring"
                />
                <Slide
                    src="/italian_wool.jpg"
                    direction="right"
                    left="-25%"
                    progress={scrollYProgress}
                    text="Heritage Craftsmanship"
                />
                <Slide
                    src="/silk_blend.jpg"
                    direction="left"
                    left="-10%"
                    progress={scrollYProgress}
                    text="Timeless Elegance"
                />
            </div>
        </section>
    );
}

interface SlideProps {
    src: string;
    direction: "left" | "right";
    left: string;
    progress: MotionValue<number>;
    text: string;
}

const Slide = (props: SlideProps) => {
    const direction = props.direction === "left" ? -1 : 1;
    // Tweak to 300 so it moves 300px each way over the scroll cycle
    const translateX = useTransform(props.progress, [0, 1], [350 * direction, -350 * direction]);

    return (
        <motion.div
            style={{ x: translateX, left: props.left }}
            className="relative flex whitespace-nowrap"
        >
            {/* Displaying enough phrases to guarantee the strip covers the screen bounds */}
            <Phrase src={props.src} text={props.text} />
            <Phrase src={props.src} text={props.text} />
            <Phrase src={props.src} text={props.text} />
            <Phrase src={props.src} text={props.text} />
            <Phrase src={props.src} text={props.text} />
            <Phrase src={props.src} text={props.text} />
        </motion.div>
    );
};

const Phrase = ({ src, text }: { src: string; text: string }) => {
    return (
        <div className="px-5 flex gap-8 items-center">
            <p
                className="text-[7.5vw] md:text-[6vw] uppercase"
                style={{
                    fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                    color: "var(--color-primary-dark)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                }}
            >
                {text}
            </p>
            <span
                className="relative h-[7.5vw] md:h-[6vw] aspect-[3/1] rounded-full overflow-hidden shadow-md shrink-0 block"
                style={{
                    backgroundColor: "var(--color-bg-section)"
                }}
            >
                <img
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    src={src}
                    alt="Parallax Accents"
                />
            </span>
        </div>
    );
};
