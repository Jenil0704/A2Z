"use client";

const quickLinks = ["Home", "Shop", "About", "Contact"];
const categories = ["Cotton", "Nylon", "Lenin", "Banarasi Silk", "Wedding Lehnga", "Zari & Brocade"];
const customerService = ["Shipping Policy", "Exchange & Return Policy", "Privacy Policy", "Terms and Conditions"];

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center rounded-full transition-all no-underline"
      style={{
        width: 36,
        height: 36,
        backgroundColor: "rgba(255,255,255,0.1)",
        color: "var(--color-text-white)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-gold)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-gold)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.1)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-bg-footer)" }}>

      {/* ── Top gold accent line ── */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, var(--color-gold) 30%, var(--color-gold-light) 50%, var(--color-gold) 70%, transparent 100%)",
        }}
      />

      {/* ── Main footer body ── */}
      <div className="mx-auto w-full px-10 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="AtoZ Exclusive Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Premium fabric retailer in Pune, specialising in wedding collections, traditional textiles, and custom tailoring fabrics.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-1">
              {/* YouTube */}
              <SocialIcon href="#" label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </SocialIcon>
              {/* Instagram */}
              <SocialIcon href="#" label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              {/* Facebook */}
              <SocialIcon href="#" label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              {/* WhatsApp */}
              <SocialIcon href="https://wa.me/919876543210" label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--color-gold)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm no-underline transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Categories */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
              style={{ color: "var(--color-gold)" }}
            >
              Shop Categories
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-sm no-underline transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Customer Services + Newsletter */}
          <div className="flex flex-col gap-7">
            <div>
              <h4
                className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
                style={{ color: "var(--color-gold)" }}
              >
                Customer Services
              </h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {customerService.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm no-underline transition-colors"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4
                className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
                style={{ color: "var(--color-gold)" }}
              >
                Newsletter
              </h4>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                Subscribe to our newsletter for new collections &amp; offers.
              </p>
              <div className="flex gap-0 overflow-hidden" style={{ borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent text-sm px-4 py-2.5 outline-none"
                  style={{ color: "var(--color-text-white)", minWidth: 0 }}
                />
                <button
                  className="shrink-0 cursor-pointer border-0 px-4 py-2.5 text-xs font-bold tracking-wide"
                  style={{
                    backgroundColor: "var(--color-gold)",
                    color: "var(--color-bg-footer)",
                    borderRadius: "0 9999px 9999px 0",
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="mx-auto w-full px-10 py-4 flex flex-col items-center justify-between gap-2 sm:flex-row"
        >
          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
            &copy; {new Date().getFullYear()} AtoZ Exclusive Design. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Fashion, <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "0.95rem", color: "var(--color-gold)", opacity: 0.7 }}>Crafted</span> for You.
          </p>
        </div>
      </div>
    </footer>
  );
}
