import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lax Taj | Eldoret" },
      { name: "description", content: "The story of Lax Taj — Chef Laxman Mehra, a decade of craft, and years spent refining Eldoret's finest dining experience." },
      { property: "og:title", content: "Our Story — Lax Taj" },
      { property: "og:description", content: "Years of refinement. One uncompromising kitchen." },
      { property: "og:image", content: img.interior },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: "✦", title: "Fresh Ingredients, Traditional Techniques", text: "Hand-ground masalas, clay-oven naan. We take the long route because the result is different — guests notice, even when they can't say why." },
  { icon: "✦", title: "A Menu Earned Over Years", text: "Indian, Chinese, Continental, BBQ — each cuisine added only when the kitchen was ready to do it honestly." },
  { icon: "✦", title: "Hospitality as a Standard, Not a Gesture", text: "22 people trained to one aim: that every guest feels the care that went into the evening before they even open the menu." },
];

const milestones = [
  { year: "2017", title: "Doors Open", text: "Lax Taj opens in Elgon View with a focused Indian and Chinese menu — doing two things well rather than many things adequately." },
  { year: "2019", title: "The Menu Earns Its Growth", text: "Continental, BBQ and a dedicated seafood programme added — each only after the kitchen had genuinely mastered it." },
  { year: "2021", title: "A Place Worth Gathering", text: "Music nights, festivals and private dining emerge organically, because guests were already treating Lax Taj as a destination." },
  { year: "2023", title: "4.3 Across 241 Reviews", text: "The number that matters most — honest feedback from guests across Eldoret and beyond, earned one plate at a time." },
  { year: "Today", title: "Still Refining", text: "A team of 22. The same standards the kitchen opened with. The work continues." },
];

function AboutPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Our Story"
        title="Born from a Passion for Flavor"
        subtitle="A decade spent learning, testing, and refusing to settle — gathered under one roof in Eldoret."
        image={img.interior}
      />

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">The Founder</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon leading-tight">A chef's restaurant, down to the last detail.</h2>
            <div className="mt-6 space-y-5 text-charcoal/80 leading-relaxed">
              <p>
                Laxman Mehra is a professional chef shaped by over a decade in demanding kitchens —
                the kind that teach you to taste critically, move with discipline, and care about
                the things no guest will ever consciously notice.
              </p>
              <p>
                He opened Lax Taj in Elgon View in 2017 with a focused Indian and Chinese menu,
                because focus is where quality lives. As the kitchen matured, so did the offer —
                Continental, BBQ, and a seafood programme built around a lobster plate that has
                become the restaurant's signature.
              </p>
              <p>
                Every decision since has been made the same way: ask what a guest deserves,
                then find the ingredient, technique, or person that delivers it. The team of 22
                is a result of that thinking — hired carefully, trained to a single standard.
              </p>
              <p className="font-display italic text-2xl text-maroon">
                "I've realised there is better spending power in Eldoret. We serve the finest ingredients available."
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <img src={img.chef} alt="Chef Laxman Mehra" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold -z-0" />
              <div className="absolute -top-6 -right-6 bg-maroon text-cream p-6 max-w-[200px]">
                <p className="font-display text-4xl text-gold">10+</p>
                <p className="text-xs uppercase tracking-widest mt-1">Years of refinement</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-maroon">Three things we never rush.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="h-full bg-cream p-10 border border-gold/20">
                  <div className="text-4xl text-gold">{p.icon}</div>
                  <h3 className="mt-6 text-2xl text-maroon">{p.title}</h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-16">
            <p className="eyebrow">Our Journey</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Slow work. Real results.</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/40" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 80}>
                  <div className={`relative flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} items-start gap-6`}>
                    <div className="md:w-1/2 md:px-10">
                      <p className="font-display text-5xl text-gold">{m.year}</p>
                      <h3 className="mt-2 text-2xl text-cream">{m.title}</h3>
                      <p className="mt-2 text-cream/70 leading-relaxed">{m.text}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-charcoal mt-3" />
                    <div className="md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the chef */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="bg-white border border-gold/20 overflow-hidden grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img src={img.kitchen} alt="Chef in kitchen" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <p className="eyebrow">Meet the Chef</p>
                <h2 className="mt-3 text-4xl text-maroon">Laxman Mehra</h2>
                <div className="mt-2"><span className="gold-rule" /></div>
                <p className="mt-6 text-charcoal/70 leading-relaxed">
                  A career built in disciplined kitchens across two continents. Founder and executive chef of
                  Lax Taj, Mehra still works the pass most evenings — tasting, adjusting, sending only what
                  he'd be proud to put his name to.
                </p>
                <div className="mt-6 pt-6 border-t border-gold/20">
                  <p className="eyebrow !text-charcoal/40">Signature Dish</p>
                  <p className="mt-2 font-display italic text-2xl text-maroon">Whole Lobster, garlic butter & house spice oil</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}