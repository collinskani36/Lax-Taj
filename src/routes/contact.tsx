import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { img } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ReserveModal } from "@/components/site/ReserveModal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lax Taj | Eldoret" },
      { name: "description", content: "Visit Lax Taj in Elgon View, Eldoret. Opp. Fountain Hospital. Call +254 792 967691. Open daily 11am–11pm." },
      { property: "og:title", content: "Visit Lax Taj" },
      { property: "og:description", content: "Elgon View, Eldoret. Open daily 11am–11pm." },
      { property: "og:image", content: img.interior2 },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [reserve, setReserve] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = encodeURIComponent(
      `Hello Lax Taj%0AName: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0AMessage: ${fd.get("message")}`
    );
    window.open(`https://wa.me/254792967691?text=${msg}`, "_blank");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Contact"
        title="Come Sit With Us"
        subtitle="Elgon View, Eldoret · Open daily, 11am to 11pm"
        image={img.interior2}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info + form */}
          <Reveal>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon">We'd love to hear from you.</h2>
            <div className="mt-2"><span className="gold-rule" /></div>

            <div className="mt-10 space-y-6">
              <InfoRow label="Address" value={<>Opp. Fountain Hospital (Lions School)<br />Elgon View, Eldoret, Kenya</>} />
              <InfoRow label="Phone" value={<a href="tel:+254792967691" className="hover:text-maroon">+254 792 967691</a>} />
              <InfoRow label="Email" value={<a href="mailto:reservations@laxtaj.co.ke" className="hover:text-maroon">reservations@laxtaj.co.ke</a>} />
              <InfoRow label="Hours" value="Mon – Sun · 11:00 AM – 11:00 PM" />
            </div>

            <button onClick={() => setReserve(true)} className="btn-primary mt-10">Book a Table</button>

            <form onSubmit={handleSubmit} className="mt-14 space-y-4 border-t border-gold/20 pt-10">
              <p className="eyebrow">Send a message</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Field name="name" label="Your Name" required />
                <Field name="email" type="email" label="Email" required />
              </div>
              <div>
                <label className="block eyebrow !text-charcoal/70 mb-2">Message</label>
                <textarea name="message" rows={5} required className="w-full bg-white border border-gold/30 px-4 py-3 focus:outline-none focus:border-gold" />
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </Reveal>

          {/* Right: map */}
          <Reveal delay={150}>
            <div className="sticky top-28">
              <div className="aspect-[4/5] w-full bg-white border border-gold/20 overflow-hidden">
                <iframe
                  title="Lax Taj location"
                  src="https://www.google.com/maps?q=Elgon+View,+Eldoret,+Kenya&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lax+Taj+Elgon+View+Eldoret"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-gold !text-maroon !border-maroon mt-6 w-full"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ReserveModal open={reserve} onClose={() => setReserve(false)} />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-24 shrink-0 pt-1 eyebrow !text-charcoal/50">{label}</div>
      <div className="text-charcoal/80 leading-relaxed">{value}</div>
    </div>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block eyebrow !text-charcoal/70 mb-2">{label}</label>
      <input {...props} className="w-full bg-white border border-gold/30 px-4 py-3 focus:outline-none focus:border-gold" />
    </div>
  );
}
