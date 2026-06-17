import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/PageHero.tsx
function PageHero({ eyebrow, title, subtitle, image }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[60vh] min-h-[420px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-cover bg-center animate-kenburns",
				style: { backgroundImage: `url(${image})` }
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/85" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 h-full flex flex-col items-center justify-center text-center px-6 animate-fade-up",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow !text-gold-soft",
						children: eyebrow
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 text-5xl md:text-7xl text-cream max-w-4xl leading-[1.05]",
						children: title
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-rule mt-6" }),
					subtitle && /* @__PURE__ */ jsx("p", {
						className: "mt-6 text-cream/80 max-w-2xl text-lg",
						children: subtitle
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
