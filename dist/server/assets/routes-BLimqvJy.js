import { t as ReserveModal } from "./ReserveModal-DLc6U2UN.js";
import { t as img } from "./images-DERaQVEi.js";
import { t as Reveal } from "./Reveal-DPOgM4uq.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
var features = [
	{
		icon: "✦",
		title: "Authentic Indian Spices",
		text: "Hand-ground masalas and recipes carried across generations and kitchens."
	},
	{
		icon: "✦",
		title: "Multi-Cuisine Menu",
		text: "Indian, Chinese, Continental and BBQ — every craving has a chapter."
	},
	{
		icon: "✦",
		title: "Fine Dining Ambiance",
		text: "Candlelit interiors, intimate tables, the unhurried rhythm of a real evening."
	}
];
var signatures = [
	{
		name: "Butter Chicken",
		desc: "Tomato-cream gravy, smoked tandoori chicken, finished with kasoori methi.",
		img: img.butterChicken
	},
	{
		name: "Prawn Biryani",
		desc: "Saffron basmati layered with king prawns and slow-cooked onions.",
		img: img.prawnBiryani
	},
	{
		name: "Lobster Platter",
		desc: "Our flagship — whole lobster, garlic butter, house spice oil.",
		img: img.lobster
	},
	{
		name: "Paneer Tikka",
		desc: "Charred cottage cheese in yoghurt, ginger and bell pepper marinade.",
		img: img.paneer
	},
	{
		name: "Lamb Rogan Josh",
		desc: "Kashmiri chillies, fennel, slow-braised lamb shoulder.",
		img: img.lamb
	}
];
var testimonials = [
	{
		name: "Achieng O.",
		text: "The lobster platter is unforgettable. Service was warm, the room glowed. Easily Eldoret's best evening out.",
		stars: 5
	},
	{
		name: "Rajesh P.",
		text: "Tastes like home. The butter chicken and naan transported me back to Delhi.",
		stars: 5
	},
	{
		name: "Mark K.",
		text: "Anniversary dinner here was perfect — quiet, elegant, beautifully plated. Chef Mehra is the real deal.",
		stars: 4
	}
];
function HomePage() {
	const [reserve, setReserve] = useState(false);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative h-screen min-h-[640px] w-full overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 bg-cover bg-center animate-kenburns",
					style: { backgroundImage: `url(${img.hero})` }
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90" }),
				/* @__PURE__ */ jsx("div", {
					className: "relative z-10 h-full flex flex-col items-center justify-center text-center px-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "animate-fade-up",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "eyebrow !text-gold-soft",
								children: "Lax Taj · Eldoret · Est. 2017"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "mt-6 font-display text-cream text-5xl sm:text-7xl md:text-8xl leading-[1.02] max-w-5xl",
								children: [
									"Where Every Dish",
									/* @__PURE__ */ jsx("br", {}),
									"Tells a Story"
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex justify-center mt-6",
								children: /* @__PURE__ */ jsx("span", { className: "gold-rule" })
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-cream/80 max-w-xl mx-auto text-lg",
								children: "An intimate fine-dining destination in Elgon View — Indian roots, world flavours."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-10 flex flex-wrap items-center justify-center gap-4",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/menu",
									className: "btn-ghost-gold",
									children: "View Menu"
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => setReserve(true),
									className: "btn-primary !bg-gold !text-charcoal !border-gold hover:!bg-gold-soft",
									children: "Reserve a Table"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-8 inset-x-0 flex justify-center animate-fade-in",
					children: /* @__PURE__ */ jsxs("div", {
						className: "text-cream/60 text-[10px] tracking-[0.4em] uppercase flex flex-col items-center gap-2",
						children: ["Scroll", /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-gradient-to-b from-gold to-transparent" })]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 lg:py-32 bg-cream",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 lg:px-10",
				children: [/* @__PURE__ */ jsxs(Reveal, {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Why Lax Taj"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl text-maroon",
							children: "A taste of true hospitality"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex justify-center mt-5",
							children: /* @__PURE__ */ jsx("span", { className: "gold-rule" })
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",
					children: features.map((f, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ jsxs("div", {
							className: "group h-full bg-white p-10 border border-gold/20 hover:border-gold transition-all hover:shadow-2xl hover:-translate-y-1",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-4xl text-gold",
									children: f.icon
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-6 text-2xl text-maroon",
									children: f.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-charcoal/70 leading-relaxed",
									children: f.text
								})
							]
						})
					}, f.title))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-24 lg:py-32 bg-charcoal text-cream relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-10 bg-cover bg-center",
				style: { backgroundImage: `url(${img.spices})` }
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-7xl mx-auto px-6 lg:px-10",
				children: [/* @__PURE__ */ jsxs(Reveal, {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Signature Plates"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 text-4xl md:text-5xl",
						children: "From the Chef's table"
					})] }), /* @__PURE__ */ jsx(Link, {
						to: "/menu",
						className: "btn-ghost-gold self-start md:self-auto",
						children: "Explore Full Menu"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-14 flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide",
					children: signatures.map((d, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 80,
						className: "snap-start shrink-0 w-[300px] sm:w-[360px]",
						children: /* @__PURE__ */ jsxs("div", {
							className: "group cursor-pointer",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative aspect-[4/5] overflow-hidden",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: d.img,
											alt: d.name,
											className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
											loading: "lazy"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" }),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute top-4 left-4 w-12 h-12 grid place-items-center border border-gold rounded-full text-gold text-xs",
											children: ["0", i + 1]
										})
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 text-2xl text-cream group-hover:text-gold transition-colors",
									children: d.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-cream/60 text-sm leading-relaxed",
									children: d.desc
								})
							]
						})
					}, d.name))
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 lg:py-32 bg-cream",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-4xl mx-auto px-6 text-center",
				children: /* @__PURE__ */ jsxs(Reveal, { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-7xl text-gold font-display leading-none",
						children: "\""
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-display italic text-3xl md:text-4xl text-maroon leading-snug mt-4",
						children: "I've realised there is better spending power in Eldoret. We serve the finest ingredients available."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-center mt-8",
						children: /* @__PURE__ */ jsx("span", { className: "gold-rule" })
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 eyebrow !text-charcoal/70",
						children: "Laxman Mehra · Founder & Executive Chef"
					})
				] })
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 lg:py-32 bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 lg:px-10",
				children: [/* @__PURE__ */ jsxs(Reveal, {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Guest Voices"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl text-maroon",
							children: "4.3 / 5 from 241 reviews"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex justify-center mt-5",
							children: /* @__PURE__ */ jsx("span", { className: "gold-rule" })
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",
					children: testimonials.map((t, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ jsxs("div", {
							className: "h-full bg-cream p-8 border border-gold/20 relative",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex text-gold mb-4",
									children: [Array.from({ length: t.stars }).map((_, j) => /* @__PURE__ */ jsx("span", { children: "★" }, j)), Array.from({ length: 5 - t.stars }).map((_, j) => /* @__PURE__ */ jsx("span", {
										className: "text-gold/30",
										children: "★"
									}, j))]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "font-display italic text-xl text-charcoal leading-snug",
									children: [
										"\"",
										t.text,
										"\""
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 eyebrow !text-maroon",
									children: t.name
								})
							]
						})
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 lg:py-32 bg-cream",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 lg:px-10",
				children: [/* @__PURE__ */ jsxs(Reveal, {
					className: "text-center max-w-2xl mx-auto mb-14",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "@laxtaj_eldoret"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 text-4xl md:text-5xl text-maroon",
						children: "Moments from our table"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4",
					children: [
						img.tandoori,
						img.amb1,
						img.biryani,
						img.candlelight,
						img.lobster,
						img.spices
					].map((src, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ jsx("div", {
							className: "aspect-square overflow-hidden group",
							children: /* @__PURE__ */ jsx("img", {
								src,
								alt: "",
								className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
								loading: "lazy"
							})
						})
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsx(ReserveModal, {
			open: reserve,
			onClose: () => setReserve(false)
		})
	] });
}
//#endregion
export { HomePage as component };
