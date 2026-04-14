"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fabricTypes = [
  "Cotton", "Nylon", "Lenin", "Banarasi Silk", "Kanjeevaram Silk",
  "Wedding Lehnga Fabric", "Zari / Brocade", "Other",
];

const purposes = [
  "Wedding Outfit", "Bridal Lehnga", "Casual Wear",
  "Festival Wear", "Designer Boutique", "Bulk Order", "Other",
];

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

const formReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const lineExpand = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const overlayFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    fabric: "", purpose: "", message: "", date: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-[640px] flex items-stretch">

      {/* Background image — full section */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fabric.jpg')" }}
        variants={overlayFade}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--color-primary-dark)]/60" />

      {/* Content — left text + right form */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between px-10 py-16 gap-12 w-full mx-auto">

        {/* Left — headline text */}
        <div className="flex-1 flex flex-col justify-center text-[var(--color-text-white)] max-w-md">
          <div style={{ overflow: "hidden" }}>
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-gold)] mb-3"
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
            >
              Get In Touch
            </motion.p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              className="text-4xl lg:text-5xl font-semibold leading-tight mb-5"
              style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }}
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
            >
              Book a Visit or<br />Send an Inquiry
            </motion.h2>
          </div>
          <motion.p
            className="text-sm leading-relaxed text-white/70 max-w-xs"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.35}
          >
            Share your fabric requirements and we&apos;ll get back to you within 24 hours. Walk-ins welcome at our store.
          </motion.p>

          {/* Subtle divider line */}
          <motion.div
            className="w-12 h-px bg-[var(--color-gold)] mt-8"
            variants={lineExpand}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ opacity: 0.6 }}
          />
        </div>

        {/* Right — form panel */}
        <motion.div
          className="w-full lg:w-[420px] shrink-0"
          variants={formReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {submitted ? (
            <div className="bg-[var(--color-bg-base)] rounded-2xl p-8 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-lg font-semibold text-[var(--color-primary)]"
                style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }}
              >
                Inquiry Sent
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Thank you, <strong>{form.name}</strong>. We&apos;ll reach out shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", fabric: "", purpose: "", message: "", date: "" }); }}
                className="text-xs tracking-widest uppercase text-[var(--color-primary)] underline underline-offset-4 cursor-pointer bg-transparent border-0 mt-2"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--color-bg-base)] rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
              </div>

              {/* Email */}
              <Field label="Email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />

              {/* Fabric + Purpose */}
              <div className="grid grid-cols-2 gap-4">
                <SelectField label="Fabric" name="fabric" value={form.fabric} onChange={handleChange} options={fabricTypes} placeholder="Select" />
                <SelectField label="Purpose" name="purpose" value={form.purpose} onChange={handleChange} options={purposes} placeholder="Select" />
              </div>

              {/* Date */}
              <Field label="Visit Date" name="date" type="date" placeholder="" value={form.date} onChange={handleChange} />

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your requirements, quantity, special requests…"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-black/10 bg-[var(--color-bg-section)] text-[var(--color-text-primary)] text-sm px-3 py-2.5 placeholder:text-[var(--color-text-secondary)]/60 outline-none focus:border-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-1 py-3 rounded-full bg-[var(--color-primary)] text-[var(--color-text-white)] text-xs font-semibold tracking-[0.15em] uppercase cursor-pointer hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}

/* ── Input field ── */
function Field({ label, name, type, placeholder, value, onChange, required }: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-black/10 bg-[var(--color-bg-section)] text-[var(--color-text-primary)] text-sm px-3 py-2.5 placeholder:text-[var(--color-text-secondary)]/60 outline-none focus:border-[var(--color-primary)] transition-colors"
      />
    </div>
  );
}

/* ── Select field ── */
function SelectField({ label, name, value, onChange, options, placeholder }: {
  label: string; name: string; value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[]; placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-black/10 bg-[var(--color-bg-section)] text-[var(--color-text-primary)] text-sm px-3 py-2.5 outline-none focus:border-[var(--color-primary)] transition-colors cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
