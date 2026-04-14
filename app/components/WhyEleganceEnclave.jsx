"use client"
import { motion } from "framer-motion";

const stats = [
  {
    number: "30",
    suffix: "+",
    label: "Dress Categories"
  },
  {
    number: "120",
    suffix: "",
    label: "Dress Designers"
  },
  {
    number: "200k",
    suffix: "+",
    label: "Satisfied Customers"
  }
];

export default function WhyEleganceEnclave() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-primary)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/assets/paper-texture.png')",
          backgroundSize: "cover",
          mixBlendMode: "multiply"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-gold)] italic font-normal tracking-wide"
            style={{
              fontFamily: "var(--font-playfair), 'Times New Roman', serif",
            }}
          >
            Why Elegance Enclave
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              {/* Stat Item */}
              <div className="text-center px-8 md:px-16">
                <div className="mb-2">
                  <span
                    className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-gold)] font-normal"
                    style={{
                      fontFamily: "var(--font-playfair), 'Times New Roman', serif",
                    }}
                  >
                    {stat.number}
                  </span>
                  {stat.suffix && (
                    <span
                      className="text-2xl md:text-3xl lg:text-4xl text-[var(--color-gold)] align-top font-normal"
                      style={{
                        fontFamily: "var(--font-playfair), 'Times New Roman', serif",
                      }}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-[var(--color-gold)] tracking-wide font-normal">
                  {stat.label}
                </p>
              </div>

              {/* Divider - show between items, not after last */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-[rgba(201, 168, 76, 0.35)]" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
