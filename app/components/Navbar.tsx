"use client";

import { useState } from "react";

const navLinks = ["Home", "Shop", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: "var(--color-bg-base)" }}
    >
      {/* ── Main bar ── */}
      <div className="mx-auto flex h-16 w-full items-center justify-between px-10">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <img
            src="/logo.png"
            alt="AtoZ Exclusive Logo"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActive(link)}
              className="relative pb-0.5 text-sm font-medium tracking-wide transition-colors no-underline"
              style={{
                color: active === link ? "var(--color-primary)" : "var(--color-text-secondary)",
                fontWeight: active === link ? 600 : 500,
              }}
            >
              {link}
              {active === link && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          {[
            {
              label: "Search",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
            },
            {
              label: "Wishlist",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              ),
            },
            {
              label: "Cart",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              ),
            },
            {
              label: "Account",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              ),
            },
          ].map(({ label, icon }) => (
            <button
              key={label}
              aria-label={label}
              className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent transition-colors md:flex"
              style={{ color: "var(--color-text-primary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-bg-section)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-primary)";
              }}
            >
              {icon}
            </button>
          ))}

          {/* Hamburger (mobile) */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded border-0 bg-transparent cursor-pointer md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block h-0.5 w-5 rounded transition-transform duration-200"
              style={{
                backgroundColor: "var(--color-text-primary)",
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : undefined,
              }}
            />
            <span
              className="block h-0.5 w-5 rounded transition-opacity duration-200"
              style={{
                backgroundColor: "var(--color-text-primary)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-5 rounded transition-transform duration-200"
              style={{
                backgroundColor: "var(--color-text-primary)",
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : undefined,
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <nav
          className="flex flex-col border-t px-6 pb-4 pt-2 md:hidden"
          style={{
            borderColor: "rgba(155, 27, 48, 0.12)",
            backgroundColor: "var(--color-bg-base)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => { setActive(link); setMenuOpen(false); }}
              className="border-b py-3 text-sm font-medium no-underline transition-colors"
              style={{
                borderColor: "rgba(0,0,0,0.06)",
                color: active === link ? "var(--color-primary)" : "var(--color-text-secondary)",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      )}

      {/* ── Gold-maroon accent line ── */}
      <div
        className="h-0.5 opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-primary) 20%, var(--color-gold) 50%, var(--color-primary) 80%, transparent 100%)",
        }}
      />
    </header>
  );
}
