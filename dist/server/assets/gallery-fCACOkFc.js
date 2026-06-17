import { t as img } from "./images-DERaQVEi.js";
import { t as PageHero } from "./PageHero-BQhlXWTx.js";
import { t as Reveal } from "./Reveal-DPOgM4uq.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/gallery.tsx?tsr-split=component
var photos = [
	{
		src: img.butterChicken,
		cat: "Food",
		tall: true
	},
	{
		src: img.amb1,
		cat: "Ambiance"
	},
	{
		src: img.biryani,
		cat: "Food"
	},
	{
		src: img.candlelight,
		cat: "Ambiance",
		tall: true
	},
	{
		src: img.event1,
		cat: "Events"
	},
	{
		src: img.kitchen,
		cat: "Behind the Scenes"
	},
	{
		src: img.lobster,
		cat: "Food"
	},
	{
		src: img.interior,
		cat: "Ambiance",
		tall: true
	},
	{
		src: img.music,
		cat: "Events"
	},
	{
		src: img.spices,
		cat: "Behind the Scenes"
	},
	{
		src: img.tandoori,
		cat: "Food",
		tall: true
	},
	{
		src: img.amb2,
		cat: "Ambiance"
	},
	{
		src: img.event2,
		cat: "Events"
	},
	{
		src: img.chef,
		cat: "Behind the Scenes",
		tall: true
	},
	{
		src: img.naan,
		cat: "Food"
	},
	{
		src: img.event3,
		cat: "Events"
	}
];
var cats = [
	"All",
	"Food",
	"Ambiance",
	"Events",
	"Behind the Scenes"
];
function GalleryPage() {
	const [active, setActive] = useState("All");
	const [lightbox, setLightbox] = useState(null);
	const filtered = useMemo(() => active === "All" ? photos : photos.filter((p) => p.cat === active), [active]);
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-cream",
		children: [
			/* @__PURE__ */ jsx(PageHero, {
				eyebrow: "Gallery",
				title: "Every Moment, Beautifully Served",
				image: img.candlelight
			}),
			/* @__PURE__ */ jsx("div", {
				className: "sticky top-20 z-40 bg-cream/95 backdrop-blur border-b border-gold/20",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-6 lg:px-10 overflow-x-auto scrollbar-hide",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex gap-1 py-4 min-w-max",
						children: cats.map((c) => /* @__PURE__ */ jsx("button", {
							onClick: () => setActive(c),
							className: `px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-all ${active === c ? "bg-maroon text-cream" : "text-charcoal/70 hover:text-maroon"}`,
							children: c
						}, c))
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 lg:py-24",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-6 lg:px-10",
					children: /* @__PURE__ */ jsx("div", {
						className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4",
						children: filtered.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i % 6 * 50,
							className: "break-inside-avoid",
							children: /* @__PURE__ */ jsxs("button", {
								onClick: () => setLightbox(p.src),
								className: `block w-full overflow-hidden group relative ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`,
								children: [
									/* @__PURE__ */ jsx("img", {
										src: p.src,
										alt: "",
										className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
										loading: "lazy"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
									/* @__PURE__ */ jsx("span", {
										className: "absolute bottom-4 left-4 eyebrow !text-cream opacity-0 group-hover:opacity-100 transition-opacity",
										children: p.cat
									})
								]
							})
						}, p.src + i))
					})
				})
			}),
			lightbox && /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-[100] bg-charcoal/95 grid place-items-center p-4 animate-fade-in",
				onClick: () => setLightbox(null),
				children: [/* @__PURE__ */ jsx("img", {
					src: lightbox,
					alt: "",
					className: "max-w-full max-h-[90vh] object-contain"
				}), /* @__PURE__ */ jsx("button", {
					onClick: () => setLightbox(null),
					className: "absolute top-6 right-6 w-12 h-12 grid place-items-center border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors",
					"aria-label": "Close",
					children: "✕"
				})]
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
