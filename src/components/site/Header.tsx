import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ReserveModal } from "./ReserveModal";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-cream/95 backdrop-blur border-b border-gold/20 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 grid place-items-center border ${transparent ? "border-gold/60" : "border-gold"} rounded-sm`}>
              <span className="font-display text-2xl text-gold leading-none">LT</span>
            </div>
            <div className="leading-tight">
              <div className={`font-display text-xl tracking-wider ${transparent ? "text-cream" : "text-maroon"}`}>LAX TAJ</div>
              <div className={`text-[10px] uppercase tracking-[0.3em] ${transparent ? "text-gold-soft" : "text-gold"}`}>Eldoret</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs uppercase tracking-[0.2em] transition-colors relative ${
                  transparent ? "text-cream/90 hover:text-gold" : "text-charcoal hover:text-maroon"
                }`}
                activeProps={{ className: "!text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setReserveOpen(true)}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] border transition-all ${
                transparent
                  ? "border-gold text-gold hover:bg-gold hover:text-charcoal"
                  : "border-maroon bg-maroon text-cream hover:bg-maroon-deep"
              }`}
            >
              Reserve
            </button>
            <button
              className={`lg:hidden p-2 ${transparent ? "text-cream" : "text-maroon"}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18M3 12h18M3 17h18" /></>}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-cream border-t border-gold/20 animate-fade-in">
            <nav className="flex flex-col py-4 px-6">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="py-3 text-sm uppercase tracking-widest text-charcoal border-b border-gold/10 last:border-0" activeProps={{ className: "!text-maroon" }}>
                  {l.label}
                </Link>
              ))}
              <button onClick={() => { setReserveOpen(true); setMobileOpen(false); }} className="btn-primary mt-4">
                Reserve a Table
              </button>
            </nav>
          </div>
        )}
      </header>

      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </>
  );
}
