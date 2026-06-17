import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Lax Taj | Eldoret" },
      { name: "description", content: "Live music, private dining, corporate events, birthdays and cultural food festivals at Lax Taj, Eldoret." },
      { property: "og:title", content: "Events at Lax Taj" },
      { property: "og:description", content: "Experience more than just dining." },
      { property: "og:image", content: img.event1 },
    ],
  }),
  component: EventsPage,
});

const types = [
  { icon: "♪", title: "Live Music Nights", text: "Acoustic sets, ghazal evenings, jazz Sundays.", img: img.music },
  { icon: "✦", title: "Private Dining & Corporate", text: "Boardroom dinners and intimate take-overs.", img: img.event2 },
  { icon: "✦", title: "Birthdays & Anniversaries", text: "Bespoke menus, cakes, candle service.", img: img.candlelight },
  { icon: "✦", title: "Cultural Food Festivals", text: "Regional Indian tasting menus, monthly.", img: img.event3 },
];

const upcoming = [
  { date: "Jun 28", title: "Mughal Heritage Tasting Menu", text: "Seven courses tracing the imperial kitchens of Delhi and Lucknow." },
  { date: "Jul 12", title: "Acoustic & Tandoor Night", text: "Live acoustic set paired with a smoke-driven sharing menu." },
  { date: "Jul 26", title: "Coastal Seafood Festival", text: "From Mombasa nets to Eldoret tables — three nights only." },
];

function EventsPage() {
  const handleEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = encodeURIComponent(
      `Event Enquiry%0AName: ${fd.get("name")}%0ADate: ${fd.get("date")}%0AType: ${fd.get("type")}%0AGuests: ${fd.get("guests")}%0AMessage: ${fd.get("message")}`
    );
    window.open(`https://wa.me/254792967691?text=${msg}`, "_blank");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Events at Lax Taj"
        title="Experience More Than Just Dining"
        subtitle="Live music, festivals and private rooms made for moments that matter."
        image={img.event1}
      />

      {/* Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">What We Host</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon">A room for every occasion.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="group relative h-80 overflow-hidden bg-charcoal">
                  <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <div className="relative h-full p-10 flex flex-col justify-end text-cream">
                    <div className="text-4xl text-gold">{t.icon}</div>
                    <h3 className="mt-4 text-3xl">{t.title}</h3>
                    <p className="mt-2 text-cream/70">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">On the Calendar</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon">Upcoming Events</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcoming.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className="h-full bg-cream border border-gold/20 p-8 hover:border-gold transition-colors">
                  <div className="inline-block bg-gold text-charcoal px-4 py-2 font-display text-xl">{u.date}</div>
                  <h3 className="mt-5 text-2xl text-maroon">{u.title}</h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed text-sm">{u.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <p className="eyebrow">Plan Your Event</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Tell us about your evening.</h2>
            <p className="mt-4 text-cream/70">We respond by WhatsApp within the hour.</p>
          </Reveal>
          <Reveal>
            <form onSubmit={handleEnquiry} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input name="name" label="Your Name" required />
              <Input name="date" type="date" label="Preferred Date" required />
              <Input name="type" label="Event Type" placeholder="Birthday, corporate, festival…" required />
              <Input name="guests" type="number" label="Guest Count" min={2} max={200} required />
              <div className="sm:col-span-2">
                <label className="block eyebrow !text-cream/60 mb-2">Message</label>
                <textarea name="message" rows={4} required className="w-full bg-cream/5 border border-gold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold" />
              </div>
              <div className="sm:col-span-2 flex justify-center">
                <button type="submit" className="btn-primary !bg-gold !border-gold !text-charcoal hover:!bg-gold-soft">Send Enquiry</button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <p className="eyebrow">Past Evenings</p>
            <h2 className="mt-3 text-4xl text-maroon">Rooms that hold memories.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[img.event1, img.event2, img.event3, img.music, img.candlelight, img.amb1, img.amb2, img.tandoori].map((src, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="aspect-square overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block eyebrow !text-cream/60 mb-2">{label}</label>
      <input {...props} className="w-full bg-cream/5 border border-gold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold" />
    </div>
  );
}
