import { t as img } from "./images-DERaQVEi.js";
import { t as PageHero } from "./PageHero-BQhlXWTx.js";
import { t as Reveal } from "./Reveal-DPOgM4uq.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/events.tsx?tsr-split=component
var types = [
	{
		icon: "♪",
		title: "Live Music Nights",
		text: "Acoustic sets, ghazal evenings, jazz Sundays.",
		img: img.music
	},
	{
		icon: "✦",
		title: "Private Dining & Corporate",
		text: "Boardroom dinners and intimate take-overs.",
		img: img.event2
	},
	{
		icon: "✦",
		title: "Birthdays & Anniversaries",
		text: "Bespoke menus, cakes, candle service.",
		img: img.candlelight
	},
	{
		icon: "✦",
		title: "Cultural Food Festivals",
		text: "Regional Indian tasting menus, monthly.",
		img: img.event3
	}
];
var upcoming = [
	{
		date: "Jun 28",
		title: "Mughal Heritage Tasting Menu",
		text: "Seven courses tracing the imperial kitchens of Delhi and Lucknow."
	},
	{
		date: "Jul 12",
		title: "Acoustic & Tandoor Night",
		text: "Live acoustic set paired with a smoke-driven sharing menu."
	},
	{
		date: "Jul 26",
		title: "Coastal Seafood Festival",
		text: "From Mombasa nets to Eldoret tables — three nights only."
	}
];
function EventsPage() {
	const handleEnquiry = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const msg = encodeURIComponent(`Event Enquiry%0AName: ${fd.get("name")}%0ADate: ${fd.get("date")}%0AType: ${fd.get("type")}%0AGuests: ${fd.get("guests")}%0AMessage: ${fd.get("message")}`);
		window.open(`https://wa.me/254792967691?text=${msg}`, "_blank");
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-cream",
		children: [
			/* @__PURE__ */ jsx(PageHero, {
				eyebrow: "Events at Lax Taj",
				title: "Experience More Than Just Dining",
				subtitle: "Live music, festivals and private rooms made for moments that matter.",
				image: img.event1
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 lg:px-10",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "What We Host"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl text-maroon",
							children: "A room for every occasion."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: types.map((t, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ jsxs("div", {
								className: "group relative h-80 overflow-hidden bg-charcoal",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: t.img,
										alt: t.title,
										className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700",
										loading: "lazy"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" }),
									/* @__PURE__ */ jsxs("div", {
										className: "relative h-full p-10 flex flex-col justify-end text-cream",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "text-4xl text-gold",
												children: t.icon
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "mt-4 text-3xl",
												children: t.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-2 text-cream/70",
												children: t.text
											})
										]
									})
								]
							})
						}, t.title))
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
							children: "On the Calendar"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl text-maroon",
							children: "Upcoming Events"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6",
						children: upcoming.map((u, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ jsxs("div", {
								className: "h-full bg-cream border border-gold/20 p-8 hover:border-gold transition-colors",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "inline-block bg-gold text-charcoal px-4 py-2 font-display text-xl",
										children: u.date
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-5 text-2xl text-maroon",
										children: u.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-3 text-charcoal/70 leading-relaxed text-sm",
										children: u.text
									})
								]
							})
						}, u.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-charcoal text-cream",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto px-6 lg:px-10",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "text-center mb-12",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "eyebrow",
								children: "Plan Your Event"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-3 text-4xl md:text-5xl",
								children: "Tell us about your evening."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-cream/70",
								children: "We respond by WhatsApp within the hour."
							})
						]
					}), /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("form", {
						onSubmit: handleEnquiry,
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ jsx(Input, {
								name: "name",
								label: "Your Name",
								required: true
							}),
							/* @__PURE__ */ jsx(Input, {
								name: "date",
								type: "date",
								label: "Preferred Date",
								required: true
							}),
							/* @__PURE__ */ jsx(Input, {
								name: "type",
								label: "Event Type",
								placeholder: "Birthday, corporate, festival…",
								required: true
							}),
							/* @__PURE__ */ jsx(Input, {
								name: "guests",
								type: "number",
								label: "Guest Count",
								min: 2,
								max: 200,
								required: true
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "block eyebrow !text-cream/60 mb-2",
									children: "Message"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 4,
									required: true,
									className: "w-full bg-cream/5 border border-gold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "sm:col-span-2 flex justify-center",
								children: /* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "btn-primary !bg-gold !border-gold !text-charcoal hover:!bg-gold-soft",
									children: "Send Enquiry"
								})
							})
						]
					}) })]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-cream",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 lg:px-10",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "text-center mb-12",
						children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Past Evenings"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl text-maroon",
							children: "Rooms that hold memories."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-3",
						children: [
							img.event1,
							img.event2,
							img.event3,
							img.music,
							img.candlelight,
							img.amb1,
							img.amb2,
							img.tandoori
						].map((src, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i * 40,
							children: /* @__PURE__ */ jsx("div", {
								className: "aspect-square overflow-hidden",
								children: /* @__PURE__ */ jsx("img", {
									src,
									alt: "",
									className: "w-full h-full object-cover hover:scale-110 transition-transform duration-700",
									loading: "lazy"
								})
							})
						}, i))
					})]
				})
			})
		]
	});
}
function Input({ label, ...props }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "block eyebrow !text-cream/60 mb-2",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		...props,
		className: "w-full bg-cream/5 border border-gold/30 px-4 py-3 text-cream focus:outline-none focus:border-gold"
	})] });
}
//#endregion
export { EventsPage as component };
