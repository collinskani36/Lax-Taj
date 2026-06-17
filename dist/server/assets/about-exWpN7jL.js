import { t as img } from "./images-DERaQVEi.js";
import { t as PageHero } from "./PageHero-BQhlXWTx.js";
import { t as Reveal } from "./Reveal-DPOgM4uq.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
var pillars = [
	{
		icon: "✦",
		title: "Fresh Ingredients, Traditional Techniques",
		text: "Hand-ground masalas, clay-oven naan, the long way always."
	},
	{
		icon: "✦",
		title: "A Menu for Every Palate",
		text: "Indian, Chinese, Continental, BBQ — written with care for every guest."
	},
	{
		icon: "✦",
		title: "Warm, Professional Hospitality",
		text: "22 trained staff, one standard: make every visit feel like a return."
	}
];
var milestones = [
	{
		year: "2017",
		title: "Doors Open",
		text: "Lax Taj opens in Elgon View with a focused Indian and Chinese menu."
	},
	{
		year: "2019",
		title: "Menu Expansion",
		text: "Continental, BBQ and a dedicated seafood programme are added."
	},
	{
		year: "2021",
		title: "Live Events",
		text: "Music nights, festivals and private dining become signature moments."
	},
	{
		year: "2023",
		title: "241+ Reviews",
		text: "A 4.3 average from guests across Eldoret and beyond."
	},
	{
		year: "Today",
		title: "Eldoret's Finest",
		text: "22 staff. Sh25M invested. One uncompromising standard."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-cream",
		children: [
			/* @__PURE__ */ jsx(PageHero, {
				eyebrow: "Our Story",
				title: "Born from a Passion for Flavor",
				subtitle: "A decade of kitchens, a lifetime of recipes — gathered under one roof in Eldoret.",
				image: img.interior
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 lg:py-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ jsxs(Reveal, { children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "The Founder"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl text-maroon leading-tight",
							children: "A chef's restaurant, in every detail."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 space-y-5 text-charcoal/80 leading-relaxed",
							children: [
								/* @__PURE__ */ jsx("p", { children: "Laxman Mehra is a professional chef with over a decade of hospitality behind him — trained kitchens, demanding nights, a quiet obsession with getting the small things right." }),
								/* @__PURE__ */ jsx("p", { children: "In 2017 he opened Lax Taj in Elgon View with a focused Indian and Chinese menu. Word travelled. The menu grew — Continental, BBQ, an ambitious seafood programme anchored by the now-flagship lobster plate." }),
								/* @__PURE__ */ jsxs("p", { children: [
									"Today, Lax Taj employs 22 people and represents an investment of ",
									/* @__PURE__ */ jsx("span", {
										className: "text-maroon font-medium",
										children: "Sh 25 million"
									}),
									"— built, room by room, into what Mehra set out to make: the finest restaurant in Eldoret."
								] }),
								/* @__PURE__ */ jsx("p", {
									className: "font-display italic text-2xl text-maroon",
									children: "\"I've realised there is better spending power in Eldoret. We serve the finest ingredients available.\""
								})
							]
						})
					] }), /* @__PURE__ */ jsx(Reveal, {
						delay: 150,
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: img.chef,
									alt: "Chef Laxman Mehra",
									className: "w-full aspect-[4/5] object-cover",
									loading: "lazy"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold -z-0" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute -top-6 -right-6 bg-maroon text-cream p-6 max-w-[200px]",
									children: [/* @__PURE__ */ jsx("p", {
										className: "font-display text-4xl text-gold",
										children: "10+"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs uppercase tracking-widest mt-1",
										children: "Years in hospitality"
									})]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 lg:px-10",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Our Philosophy"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl text-maroon",
							children: "Three things we never compromise."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6",
						children: pillars.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i * 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "h-full bg-cream p-10 border border-gold/20",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-4xl text-gold",
										children: p.icon
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-6 text-2xl text-maroon",
										children: p.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-3 text-charcoal/70 leading-relaxed",
										children: p.text
									})
								]
							})
						}, p.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-charcoal text-cream",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-5xl mx-auto px-6 lg:px-10",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "text-center mb-16",
						children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Our Journey"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl",
							children: "From a single kitchen to a destination."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/40" }), /* @__PURE__ */ jsx("div", {
							className: "space-y-12",
							children: milestones.map((m, i) => /* @__PURE__ */ jsx(Reveal, {
								delay: i * 80,
								children: /* @__PURE__ */ jsxs("div", {
									className: `relative flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} items-start gap-6`,
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "md:w-1/2 md:px-10",
											children: [
												/* @__PURE__ */ jsx("p", {
													className: "font-display text-5xl text-gold",
													children: m.year
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "mt-2 text-2xl text-cream",
													children: m.title
												}),
												/* @__PURE__ */ jsx("p", {
													className: "mt-2 text-cream/70 leading-relaxed",
													children: m.text
												})
											]
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-charcoal mt-3" }),
										/* @__PURE__ */ jsx("div", { className: "md:w-1/2" })
									]
								})
							}, m.year))
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-cream",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-5xl mx-auto px-6 lg:px-10",
					children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-gold/20 overflow-hidden grid grid-cols-1 md:grid-cols-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-square md:aspect-auto",
							children: /* @__PURE__ */ jsx("img", {
								src: img.kitchen,
								alt: "Chef in kitchen",
								className: "w-full h-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-10 lg:p-14 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow",
									children: "Meet the Chef"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-3 text-4xl text-maroon",
									children: "Laxman Mehra"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-2",
									children: /* @__PURE__ */ jsx("span", { className: "gold-rule" })
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-charcoal/70 leading-relaxed",
									children: "A career built in disciplined kitchens across two continents. Founder and executive chef of Lax Taj, Mehra still works the pass most evenings — tasting, adjusting, sending only what he'd serve his own family."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 pt-6 border-t border-gold/20",
									children: [/* @__PURE__ */ jsx("p", {
										className: "eyebrow !text-charcoal/40",
										children: "Signature Dish"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 font-display italic text-2xl text-maroon",
										children: "Whole Lobster, garlic butter & house spice oil"
									})]
								})
							]
						})]
					}) })
				})
			})
		]
	});
}
//#endregion
export { AboutPage as component };
