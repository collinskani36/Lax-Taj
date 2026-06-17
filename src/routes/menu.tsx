import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { img } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Lax Taj | Eldoret" },
      { name: "description", content: "Indian, Chinese, Continental, Seafood, BBQ, vegetarian and desserts. Browse the Lax Taj menu." },
      { property: "og:title", content: "Lax Taj Menu" },
      { property: "og:description", content: "A culinary journey across cultures." },
      { property: "og:image", content: img.biryani },
    ],
  }),
  component: MenuPage,
});

type Category = "Indian" | "Chinese" | "Continental" | "Seafood" | "BBQ" | "Vegetarian" | "Drinks & Desserts";

interface Dish {
  name: string;
  desc: string;
  price: string;
  img: string;
  category: Category;
  pick?: boolean;
}

const menu: Dish[] = [
  { name: "Butter Chicken", desc: "Tandoor chicken in tomato-cream, fenugreek, butter.", price: "Ksh 1,400", img: img.butterChicken, category: "Indian", pick: true },
  { name: "Paneer Tikka", desc: "Charred cottage cheese, yoghurt-ginger marinade.", price: "Ksh 1,100", img: img.paneer, category: "Indian" },
  { name: "Dal Makhani", desc: "Slow-cooked black lentils, cream, smoked tomato.", price: "Ksh 950", img: img.dal, category: "Indian" },
  { name: "Chicken Biryani", desc: "Saffron basmati, slow-dum cooked, mint raita.", price: "Ksh 1,300", img: img.biryani, category: "Indian", pick: true },
  { name: "Assorted Naan Basket", desc: "Butter, garlic, peshwari, cheese — clay-oven baked.", price: "Ksh 600", img: img.naan, category: "Indian" },
  { name: "Lamb Rogan Josh", desc: "Kashmiri chillies, fennel, braised lamb shoulder.", price: "Ksh 1,800", img: img.lamb, category: "Indian" },
  { name: "Mango Lassi", desc: "Alphonso mango, yoghurt, cardamom.", price: "Ksh 350", img: img.lassi, category: "Drinks & Desserts" },

  { name: "Whole Lobster", desc: "Flagship plate — garlic butter, house spice oil.", price: "Ksh 8,000", img: img.lobster, category: "Seafood", pick: true },
  { name: "King Prawn Masala", desc: "Tiger prawns, onion-tomato masala, fresh coriander.", price: "Ksh 2,400", img: img.prawn, category: "Seafood" },
  { name: "Squid Fry", desc: "Crisp pepper-fried calamari, lemon, curry leaves.", price: "Ksh 1,500", img: img.squid, category: "Seafood" },
  { name: "Red Snapper", desc: "Pan-seared whole snapper, coconut-curry sauce.", price: "Ksh 2,200", img: img.snapper, category: "Seafood" },
  { name: "Tuna Steak", desc: "Seared tuna, blackened spice, citrus reduction.", price: "Ksh 2,000", img: img.tuna, category: "Seafood" },
  { name: "Crab Curry", desc: "Mud crab, coconut, kokum, mustard seed.", price: "Ksh 2,600", img: img.crab, category: "Seafood" },

  { name: "Grilled Chicken Continental", desc: "Vegetable rice, sautéed greens — broccoli, pak choi, mushroom, Chinese cabbage, French beans.", price: "Ksh 1,650", img: img.grilledChicken, category: "Continental", pick: true },

  { name: "Mixed Grill Platter", desc: "Lamb chops, chicken tikka, seekh kebab, prawns.", price: "Ksh 2,800", img: img.bbq, category: "BBQ", pick: true },
  { name: "Chicken Lollipops", desc: "Frenched wings, garlic chilli glaze.", price: "Ksh 950", img: img.lollipop, category: "BBQ" },
  { name: "Poussin Wings", desc: "Spring chicken, smoked paprika, lime.", price: "Ksh 1,100", img: img.poussin, category: "BBQ" },

  { name: "Paneer Tikka (V)", desc: "See Indian — fully vegetarian.", price: "Ksh 1,100", img: img.paneer, category: "Vegetarian" },
  { name: "Dal Makhani (V)", desc: "See Indian — fully vegetarian.", price: "Ksh 950", img: img.dal, category: "Vegetarian" },

  { name: "Gulab Jamun", desc: "Warm milk dumplings, rose-cardamom syrup.", price: "Ksh 450", img: img.gulab, category: "Drinks & Desserts" },
  { name: "Kheer", desc: "Slow-simmered rice pudding, saffron, pistachio.", price: "Ksh 450", img: img.kheer, category: "Drinks & Desserts" },
  { name: "Chocolate Triangle", desc: "Dark chocolate mousse with chocolate crisp.", price: "Ksh 550", img: img.chocolate, category: "Drinks & Desserts" },
];

const categories = ["All", "Indian", "Chinese", "Continental", "Seafood", "BBQ", "Vegetarian", "Drinks & Desserts"] as const;

function MenuPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => active === "All" ? menu : menu.filter((d) => d.category === active), [active]);

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="The Menu"
        title="A Culinary Journey Across Cultures"
        subtitle="From Mughal kitchens to East African coastlines — every plate, considered."
        image={img.spices}
      />

      <div className="sticky top-20 z-40 bg-cream/95 backdrop-blur border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-4 min-w-max">
            {categories.map((c) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((d, i) => (
              <Reveal key={d.name + i} delay={(i % 6) * 60}>
                <article className="bg-white border border-gold/15 hover:border-gold/50 transition-all group h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    {d.pick && (
                      <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
                        Chef's Pick
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-gold/30 pb-3">
                      <h3 className="text-2xl text-maroon">{d.name}</h3>
                      <span className="font-display text-gold whitespace-nowrap">{d.price}</span>
                    </div>
                    <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{d.desc}</p>
                    <p className="mt-4 eyebrow !text-charcoal/40">{d.category}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 text-center bg-charcoal text-cream py-16 px-6">
            <p className="eyebrow">Daily Specials</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Want to explore more?</h2>
            <p className="mt-4 text-cream/70 max-w-xl mx-auto">Visit us, or call to ask about today's catch and seasonal preparations.</p>
            <a href="tel:+254792967691" className="btn-ghost-gold mt-8">Call +254 792 967691</a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
