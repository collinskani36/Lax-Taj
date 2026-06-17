import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { img } from "@/lib/images";
import { Reveal } from "@/components/site/Reveal";
import { ReserveModal } from "@/components/site/ReserveModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lax Taj | Eldoret — Where Every Dish Tells a Story" },
      { name: "description", content: "Fine Indian, Chinese, Continental, Seafood and BBQ in Elgon View, Eldoret. Reserve your table at Lax Taj." },
      { property: "og:title", content: "Lax Taj | Eldoret" },
      { property: "og:description", content: "Where every dish tells a story." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: "✦", title: "Authentic Indian Spices", text: "Hand-ground masalas and recipes carried across generations and kitchens." },
  { icon: "✦", title: "Multi-Cuisine Menu", text: "Indian, Chinese, Continental and BBQ — every craving has a chapter." },
  { icon: "✦", title: "Fine Dining Ambiance", text: "Candlelit interiors, intimate tables, the unhurried rhythm of a real evening." },
];

const signatures = [
  { name: "Butter Chicken", desc: "Tomato-cream gravy, smoked tandoori chicken, finished with kasoori methi.", img: img.butterChicken },
  { name: "Prawn Biryani", desc: "Saffron basmati layered with king prawns and slow-cooked onions.", img: img.prawnBiryani },
  { name: "Lobster Platter", desc: "Our flagship — whole lobster, garlic butter, house spice oil.", img: img.lobster },
  { name: "Paneer Tikka", desc: "Charred cottage cheese in yoghurt, ginger and bell pepper marinade.", img: img.paneer },
  { name: "Lamb Rogan Josh", desc: "Kashmiri chillies, fennel, slow-braised lamb shoulder.", img: img.lamb },
];

const testimonials = [
  { name: "Achieng O.", text: "The lobster platter is unforgettable. Service was warm, the room glowed. Easily Eldoret's best evening out.", stars: 5 },
  { name: "Rajesh P.", text: "Tastes like home. The butter chicken and naan transported me back to Delhi.", stars: 5 },
  { name: "Mark K.", text: "Anniversary dinner here was perfect — quiet, elegant, beautifully plated. Chef Mehra is the real deal.", stars: 4 },
];

function HomePage() {
  const [reserve, setReserve] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: `url(${img.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="animate-fade-up">
            <p className="eyebrow !text-gold-soft">Lax Taj · Eldoret · Est. 2017</p>
            <h1 className="mt-6 font-display text-cream text-5xl sm:text-7xl md:text-8xl leading-[1.02] max-w-5xl">
              Where Every Dish<br />Tells a Story
            </h1>
            <div className="flex justify-center mt-6">
              <span className="gold-rule" />
            </div>
            <p className="mt-6 text-cream/80 max-w-xl mx-auto text-lg">
              An intimate fine-dining destination in Elgon View — Indian roots, world flavours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/menu" className="btn-ghost-gold">View Menu</Link>
              <button onClick={() => setReserve(true)} className="btn-primary !bg-gold !text-charcoal !border-gold hover:!bg-gold-soft">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 inset-x-0 flex justify-center animate-fade-in">
          <div className="text-cream/60 text-[10px] tracking-[0.4em] uppercase flex flex-col items-center gap-2">
            Scroll
            <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Why Lax Taj</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon">A taste of true hospitality</h2>
            <div className="flex justify-center mt-5"><span className="gold-rule" /></div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="group h-full bg-white p-10 border border-gold/20 hover:border-gold transition-all hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-4xl text-gold">{f.icon}</div>
                  <h3 className="mt-6 text-2xl text-maroon">{f.title}</h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-24 lg:py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${img.spices})` }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Signature Plates</p>
              <h2 className="mt-3 text-4xl md:text-5xl">From the Chef's table</h2>
            </div>
            <Link to="/menu" className="btn-ghost-gold self-start md:self-auto">Explore Full Menu</Link>
          </Reveal>

          <div className="mt-14 flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide">
            {signatures.map((d, i) => (
              <Reveal key={d.name} delay={i * 80} className="snap-start shrink-0 w-[300px] sm:w-[360px]">
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 grid place-items-center border border-gold rounded-full text-gold text-xs">0{i+1}</div>
                  </div>
                  <h3 className="mt-5 text-2xl text-cream group-hover:text-gold transition-colors">{d.name}</h3>
                  <p className="mt-2 text-cream/60 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="text-7xl text-gold font-display leading-none">"</div>
            <p className="font-display italic text-3xl md:text-4xl text-maroon leading-snug mt-4">
              I've realised there is better spending power in Eldoret. We serve the finest ingredients available.
            </p>
            <div className="flex justify-center mt-8"><span className="gold-rule" /></div>
            <p className="mt-6 eyebrow !text-charcoal/70">Laxman Mehra · Founder & Executive Chef</p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Guest Voices</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon">4.3 / 5 from 241 reviews</h2>
            <div className="flex justify-center mt-5"><span className="gold-rule" /></div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="h-full bg-cream p-8 border border-gold/20 relative">
                  <div className="flex text-gold mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => <span key={j}>★</span>)}
                    {Array.from({ length: 5 - t.stars }).map((_, j) => <span key={j} className="text-gold/30">★</span>)}
                  </div>
                  <p className="font-display italic text-xl text-charcoal leading-snug">"{t.text}"</p>
                  <p className="mt-6 eyebrow !text-maroon">{t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTA GRID */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">@laxtaj_eldoret</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon">Moments from our table</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {[img.tandoori, img.amb1, img.biryani, img.candlelight, img.lobster, img.spices].map((src, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="aspect-square overflow-hidden group">
                  <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReserveModal open={reserve} onClose={() => setReserve(false)} />
    </div>
  );
}
