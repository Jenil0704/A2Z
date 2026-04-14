"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

const fabricTypes = [
  "Cotton", "Nylon", "Lenin", "Banarasi Silk", "Kanjeevaram Silk",
  "Wedding Lehnga Fabric", "Zari / Brocade", "Other",
];

const purposes = [
  "Wedding Outfit", "Bridal Lehnga", "Casual Wear",
  "Festival Wear", "Designer Boutique", "Bulk Order", "Other",
];

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

const formReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const lineExpand: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const overlayFade: Variants = {
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
    <section ref={sectionRef} className="relative w-full flex flex-col lg:flex-row items-stretch bg-[var(--color-primary-dark)]">

      {/* Left side — Image */}
      <div className="w-full lg:w-1/2 relative min-h-[250px] lg:min-h-full">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fabric.jpg')" }}
          variants={overlayFade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>

      {/* Right side — Content & Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-6 lg:py-8 relative z-10">

        {/* Header Text */}
        <div className="flex flex-col text-[var(--color-text-white)] max-w-xl mb-6 flex-shrink-0">
          <div style={{ overflow: "hidden" }}>
            <motion.p
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--color-gold)] mb-2"
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
              className="text-3xl sm:text-4xl font-semibold leading-[1.1] mb-2"
              style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }}
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
            >
              Book a Visit or <br className="hidden sm:block" /> Send an Inquiry
            </motion.h2>
          </div>
          <motion.p
            className="text-xs leading-relaxed text-white/70 max-w-md hidden lg:block"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.35}
          >
            Share your fabric requirements and we&apos;ll get back to you securely within 24 hours.
          </motion.p>
        </div>

        {/* Form Panel */}
        <motion.div
          className="w-full max-w-xl shrink-0"
          variants={formReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {submitted ? (
            <div className="bg-[var(--color-bg-base)] rounded-xl p-6 flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-base font-semibold text-[var(--color-primary)]"
                style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }}
              >
                Inquiry Sent
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Thank you, <strong>{form.name}</strong>. We&apos;ll reach out shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", fabric: "", purpose: "", message: "", date: "" }); }}
                className="text-[10px] tracking-widest uppercase text-[var(--color-primary)] underline underline-offset-4 cursor-pointer bg-transparent border-0 mt-1"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--color-bg-base)] rounded-xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4"
            >
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
              </div>

              {/* Email + Fabric */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                <SelectField label="Fabric" name="fabric" value={form.fabric} onChange={handleChange} options={fabricTypes} placeholder="Select" />
              </div>

              {/* Purpose + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SelectField label="Purpose" name="purpose" value={form.purpose} onChange={handleChange} options={purposes} placeholder="Select" />
                <Field label="Visit Date" name="date" type="date" placeholder="" value={form.date} onChange={handleChange} />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Requirements, special requests…"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-black/10 bg-[var(--color-bg-section)] text-[var(--color-text-primary)] text-[13px] px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-1 py-2.5 rounded-lg bg-[var(--color-primary)] text-[var(--color-text-white)] text-[11px] font-semibold tracking-[0.15em] uppercase cursor-pointer hover:bg-[var(--color-primary-dark)] transition-colors"
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
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-black/10 bg-[var(--color-bg-section)] text-[var(--color-text-primary)] text-[13px] px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors"
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
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-black/10 bg-[var(--color-bg-section)] text-[var(--color-text-primary)] text-[13px] px-3 py-2 outline-none focus:border-[var(--color-primary)] transition-colors cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
