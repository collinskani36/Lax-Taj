import { t as ReserveModal } from "./ReserveModal-DLc6U2UN.js";
import { t as img } from "./images-DERaQVEi.js";
import { t as PageHero } from "./PageHero-BQhlXWTx.js";
import { t as Reveal } from "./Reveal-DPOgM4uq.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	const [reserve, setReserve] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const msg = encodeURIComponent(`Hello Lax Taj%0AName: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0AMessage: ${fd.get("message")}`);
		window.open(`https://wa.me/254792967691?text=${msg}`, "_blank");
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-cream",
		children: [
			/* @__PURE__ */ jsx(PageHero, {
				eyebrow: "Contact",
				title: "Come Sit With Us",
				subtitle: "Elgon View, Eldoret · Open daily, 11am to 11pm",
				image: img.interior2
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20 lg:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12",
					children: [/* @__PURE__ */ jsxs(Reveal, { children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Get in Touch"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-4xl md:text-5xl text-maroon",
							children: "We'd love to hear from you."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-2",
							children: /* @__PURE__ */ jsx("span", { className: "gold-rule" })
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 space-y-6",
							children: [
								/* @__PURE__ */ jsx(InfoRow, {
									label: "Address",
									value: /* @__PURE__ */ jsxs(Fragment, { children: [
										"Opp. Fountain Hospital (Lions School)",
										/* @__PURE__ */ jsx("br", {}),
										"Elgon View, Eldoret, Kenya"
									] })
								}),
								/* @__PURE__ */ jsx(InfoRow, {
									label: "Phone",
									value: /* @__PURE__ */ jsx("a", {
										href: "tel:+254792967691",
										className: "hover:text-maroon",
										children: "+254 792 967691"
									})
								}),
								/* @__PURE__ */ jsx(InfoRow, {
									label: "Email",
									value: /* @__PURE__ */ jsx("a", {
										href: "mailto:reservations@laxtaj.co.ke",
										className: "hover:text-maroon",
										children: "reservations@laxtaj.co.ke"
									})
								}),
								/* @__PURE__ */ jsx(InfoRow, {
									label: "Hours",
									value: "Mon – Sun · 11:00 AM – 11:00 PM"
								})
							]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setReserve(true),
							className: "btn-primary mt-10",
							children: "Book a Table"
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							className: "mt-14 space-y-4 border-t border-gold/20 pt-10",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow",
									children: "Send a message"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4",
									children: [/* @__PURE__ */ jsx(Field, {
										name: "name",
										label: "Your Name",
										required: true
									}), /* @__PURE__ */ jsx(Field, {
										name: "email",
										type: "email",
										label: "Email",
										required: true
									})]
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: "block eyebrow !text-charcoal/70 mb-2",
									children: "Message"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 5,
									required: true,
									className: "w-full bg-white border border-gold/30 px-4 py-3 focus:outline-none focus:border-gold"
								})] }),
								/* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "btn-primary w-full",
									children: "Send Message"
								})
							]
						})
					] }), /* @__PURE__ */ jsx(Reveal, {
						delay: 150,
						children: /* @__PURE__ */ jsxs("div", {
							className: "sticky top-28",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[4/5] w-full bg-white border border-gold/20 overflow-hidden",
								children: /* @__PURE__ */ jsx("iframe", {
									title: "Lax Taj location",
									src: "https://www.google.com/maps?q=Elgon+View,+Eldoret,+Kenya&output=embed",
									className: "w-full h-full",
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade"
								})
							}), /* @__PURE__ */ jsx("a", {
								href: "https://www.google.com/maps/search/?api=1&query=Lax+Taj+Elgon+View+Eldoret",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-ghost-gold !text-maroon !border-maroon mt-6 w-full",
								children: "Get Directions"
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx(ReserveModal, {
				open: reserve,
				onClose: () => setReserve(false)
			})
		]
	});
}
function InfoRow({ label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-6 items-start",
		children: [/* @__PURE__ */ jsx("div", {
			className: "w-24 shrink-0 pt-1 eyebrow !text-charcoal/50",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "text-charcoal/80 leading-relaxed",
			children: value
		})]
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "block eyebrow !text-charcoal/70 mb-2",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		...props,
		className: "w-full bg-white border border-gold/30 px-4 py-3 focus:outline-none focus:border-gold"
	})] });
}
//#endregion
export { ContactPage as component };
