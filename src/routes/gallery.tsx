import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { img } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lax Taj | Eldoret" },
      { name: "description", content: "Inside Lax Taj — food, ambiance, events and behind-the-scenes from Eldoret's finest dining destination." },
      { property: "og:title", content: "Gallery — Lax Taj" },
      { property: "og:description", content: "Every moment, beautifully served." },
      { property: "og:image", content: img.candlelight },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Food" | "Ambiance" | "Events" | "Behind the Scenes";

const photos: { src: string; cat: Exclude<Cat, "All">; tall?: boolean }[] = [
  { src: img.butterChicken, cat: "Food", tall: true },
  { src: img.amb1, cat: "Ambiance" },
  { src: img.biryani, cat: "Food" },
  { src: img.candlelight, cat: "Ambiance", tall: true },
  { src: img.event1, cat: "Events" },
  { src: img.kitchen, cat: "Behind the Scenes" },
  { src: img.lobster, cat: "Food" },
  { src: img.interior, cat: "Ambiance", tall: true },
  { src: img.music, cat: "Events" },
  { src: img.spices, cat: "Behind the Scenes" },
  { src: img.tandoori, cat: "Food", tall: true },
  { src: img.amb2, cat: "Ambiance" },
  { src: img.event2, cat: "Events" },
  { src: img.chef, cat: "Behind the Scenes", tall: true },
  { src: img.naan, cat: "Food" },
  { src: img.event3, cat: "Events" },
];

const cats: Cat[] = ["All", "Food", "Ambiance", "Events", "Behind the Scenes"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = useMemo(() => active === "All" ? photos : photos.filter((p) => p.cat === active), [active]);

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Gallery"
        title="Every Moment, Beautifully Served"
        image={img.candlelight}
      />

      <div className="sticky top-20 z-40 bg-cream/95 backdrop-blur border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-4 min-w-max">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-all ${
                  active === c ? "bg-maroon text-cream" : "text-charcoal/70 hover:text-maroon"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((p, i) => (
              <Reveal key={p.src + i} delay={(i % 6) * 50} className="break-inside-avoid">
                <button
                  onClick={() => setLightbox(p.src)}
                  className={`block w-full overflow-hidden group relative ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                >
                  <img src={p.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-4 left-4 eyebrow !text-cream opacity-0 group-hover:opacity-100 transition-opacity">{p.cat}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-charcoal/95 grid place-items-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] object-contain" />
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-12 h-12 grid place-items-center border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors" aria-label="Close">
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
