"use client"
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
const atelierImg =  "/atelier-craft.png";

export default function EditorialSection(){
    return(
        <section className="py-16 text-white overflow-hidden relative"
        style={{
        backgroundColor: "var(--color-bg-section)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply",
      }}
        >
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 100 100">
                <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50" fill="currentColor"/>
            </svg>
            </div>
            
            <div className="mx-auto w-full px-10 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-secondary text-[var(--color-primary)] text-xs font-bold tracking-[0.3em] uppercase block mb-6">The Atelier</span>
                <h2 className="text-5xl text-[var(--color-primary)] md:text-6xl font-serif mb-8 leading-tight">
                Weaving dreams into <br/>
                <span className="italic text-secondary">reality.</span>
                </h2>
                <p className="text-[var(--color-primary)] font-light leading-relaxed mb-8 max-w-md">
                Each piece in our collection is a testament to the master craftsmen of India. 
                With over 40 years of heritage, Maharani brings you the finest silks, 
                intricate zardosi, and timeless silhouettes designed for the modern royal.
                </p>
                <button variant="outline" className="border-secondary text-secondary text-[var(--color-primary)] hover:bg-secondary hover:text-primary rounded-none uppercase tracking-widest px-8">
                Read Our Story
                </button>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="aspect-[3/4] bg-white/5 p-4">
                <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: `url(${atelierImg})`}}></div>
                </div>
            </motion.div>
            </div>
        </section>
    )
}