import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 grid place-items-center border border-gold rounded-sm">
              <span className="font-display text-3xl text-gold leading-none">LT</span>
            </div>
            <div>
              <div className="font-display text-2xl tracking-wider text-cream">LAX TAJ</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Eldoret</div>
            </div>
          </div>
          <p className="mt-6 font-display italic text-2xl text-cream/90 max-w-md leading-snug">
            "Where every dish tells a story."
          </p>
          <p className="mt-4 text-sm text-cream/60 max-w-md">
            Eldoret's finest Indian dining and hospitality destination, serving authentic flavours since 2017.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-gold">Visit</p>
          <p className="mt-4 text-sm leading-relaxed">
            Opp. Fountain Hospital<br />
            (Lions School)<br />
            Elgon View, Eldoret<br />
            Kenya
          </p>
          <p className="mt-4 text-sm">
            <span className="text-gold">Mon–Sun</span><br />
            11:00 AM – 11:00 PM
          </p>
        </div>

        <div>
          <p className="eyebrow !text-gold">Connect</p>
          <a href="tel:+254792967691" className="block mt-4 text-sm hover:text-gold">+254 792 967691</a>
          <a href="mailto:reservations@laxtaj.co.ke" className="block mt-2 text-sm hover:text-gold">reservations@laxtaj.co.ke</a>
          <div className="flex gap-3 mt-5">
            {["Instagram", "Facebook", "TripAdvisor"].map((s) => (
              <a key={s} href="#" className="w-9 h-9 grid place-items-center border border-gold/40 hover:bg-gold hover:text-charcoal transition-colors text-[10px] uppercase tracking-widest">
                {s[0]}
              </a>
            ))}
          </div>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-cream/60">
            <Link to="/menu" className="hover:text-gold">Menu</Link>
            <Link to="/events" className="hover:text-gold">Events</Link>
            <Link to="/gallery" className="hover:text-gold">Gallery</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/40">
        <p>© {new Date().getFullYear()} Lax Taj Restaurant & Hotel. All rights reserved.</p>
        <p>Crafted with care in Eldoret.</p>
      </div>
    </footer>
  );
}
