import { t as ReserveModal } from "./ReserveModal-DLc6U2UN.js";
import { t as img } from "./images-DERaQVEi.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-oDhQc9f_.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/site/Header.tsx
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const { location } = useRouterState();
	const isHome = location.pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [reserveOpen, setReserveOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		setMobileOpen(false);
	}, [location.pathname]);
	const transparent = isHome && !scrolled;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${transparent ? "bg-transparent border-b border-transparent" : "bg-cream/95 backdrop-blur border-b border-gold/20 shadow-sm"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-3 group",
					children: [/* @__PURE__ */ jsx("div", {
						className: `w-10 h-10 grid place-items-center border ${transparent ? "border-gold/60" : "border-gold"} rounded-sm`,
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-2xl text-gold leading-none",
							children: "LT"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ jsx("div", {
							className: `font-display text-xl tracking-wider ${transparent ? "text-cream" : "text-maroon"}`,
							children: "LAX TAJ"
						}), /* @__PURE__ */ jsx("div", {
							className: `text-[10px] uppercase tracking-[0.3em] ${transparent ? "text-gold-soft" : "text-gold"}`,
							children: "Eldoret"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: links.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: `text-xs uppercase tracking-[0.2em] transition-colors relative ${transparent ? "text-cream/90 hover:text-gold" : "text-charcoal hover:text-maroon"}`,
						activeProps: { className: "!text-gold" },
						activeOptions: { exact: true },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => setReserveOpen(true),
						className: `hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] border transition-all ${transparent ? "border-gold text-gold hover:bg-gold hover:text-charcoal" : "border-maroon bg-maroon text-cream hover:bg-maroon-deep"}`,
						children: "Reserve"
					}), /* @__PURE__ */ jsx("button", {
						className: `lg:hidden p-2 ${transparent ? "text-cream" : "text-maroon"}`,
						onClick: () => setMobileOpen((v) => !v),
						"aria-label": "Menu",
						children: /* @__PURE__ */ jsx("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.5",
							children: mobileOpen ? /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M3 7h18M3 12h18M3 17h18" }) })
						})
					})]
				})
			]
		}), mobileOpen && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden bg-cream border-t border-gold/20 animate-fade-in",
			children: /* @__PURE__ */ jsxs("nav", {
				className: "flex flex-col py-4 px-6",
				children: [links.map((l) => /* @__PURE__ */ jsx(Link, {
					to: l.to,
					className: "py-3 text-sm uppercase tracking-widest text-charcoal border-b border-gold/10 last:border-0",
					activeProps: { className: "!text-maroon" },
					children: l.label
				}, l.to)), /* @__PURE__ */ jsx("button", {
					onClick: () => {
						setReserveOpen(true);
						setMobileOpen(false);
					},
					className: "btn-primary mt-4",
					children: "Reserve a Table"
				})]
			})
		})]
	}), /* @__PURE__ */ jsx(ReserveModal, {
		open: reserveOpen,
		onClose: () => setReserveOpen(false)
	})] });
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-charcoal text-cream/80 pt-20 pb-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 grid place-items-center border border-gold rounded-sm",
								children: /* @__PURE__ */ jsx("span", {
									className: "font-display text-3xl text-gold leading-none",
									children: "LT"
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-2xl tracking-wider text-cream",
								children: "LAX TAJ"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[10px] uppercase tracking-[0.3em] text-gold",
								children: "Eldoret"
							})] })]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 font-display italic text-2xl text-cream/90 max-w-md leading-snug",
							children: "\"Where every dish tells a story.\""
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm text-cream/60 max-w-md",
							children: "Eldoret's finest Indian dining and hospitality destination, serving authentic flavours since 2017."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow !text-gold",
						children: "Visit"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-4 text-sm leading-relaxed",
						children: [
							"Opp. Fountain Hospital",
							/* @__PURE__ */ jsx("br", {}),
							"(Lions School)",
							/* @__PURE__ */ jsx("br", {}),
							"Elgon View, Eldoret",
							/* @__PURE__ */ jsx("br", {}),
							"Kenya"
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-4 text-sm",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "Mon–Sun"
							}),
							/* @__PURE__ */ jsx("br", {}),
							"11:00 AM – 11:00 PM"
						]
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow !text-gold",
						children: "Connect"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "tel:+254792967691",
						className: "block mt-4 text-sm hover:text-gold",
						children: "+254 792 967691"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "mailto:reservations@laxtaj.co.ke",
						className: "block mt-2 text-sm hover:text-gold",
						children: "reservations@laxtaj.co.ke"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex gap-3 mt-5",
						children: [
							"Instagram",
							"Facebook",
							"TripAdvisor"
						].map((s) => /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "w-9 h-9 grid place-items-center border border-gold/40 hover:bg-gold hover:text-charcoal transition-colors text-[10px] uppercase tracking-widest",
							children: s[0]
						}, s))
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-cream/60",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/menu",
								className: "hover:text-gold",
								children: "Menu"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/events",
								className: "hover:text-gold",
								children: "Events"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/gallery",
								className: "hover:text-gold",
								children: "Gallery"
							})
						]
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/40",
			children: [/* @__PURE__ */ jsxs("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Lax Taj Restaurant & Hotel. All rights reserved."
			] }), /* @__PURE__ */ jsx("p", { children: "Crafted with care in Eldoret." })]
		})]
	});
}
//#endregion
//#region src/components/site/WhatsAppButton.tsx
function WhatsAppButton() {
	return /* @__PURE__ */ jsx("a", {
		href: "https://wa.me/254792967691?text=Hello%20Lax%20Taj%2C%20I%27d%20like%20to%20make%20an%20enquiry.",
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition-transform",
		children: /* @__PURE__ */ jsx("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.711.307 1.265.49 1.696.628.713.227 1.362.195 1.875.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" })
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-cream px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Lax Taj"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-7xl text-maroon mt-4",
					children: "404"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-charcoal/70",
					children: "This page wandered off the menu."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "btn-primary",
						children: "Return Home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-cream px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl text-maroon",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-charcoal/70",
					children: "Please try again."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "btn-ghost-gold !text-maroon !border-maroon",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lax Taj | Eldoret — Where Every Dish Tells a Story" },
			{
				name: "description",
				content: "Eldoret's finest Indian dining and hospitality destination. Authentic Indian, Chinese, Continental, Seafood and BBQ in Elgon View."
			},
			{
				property: "og:title",
				content: "Lax Taj | Eldoret"
			},
			{
				property: "og:description",
				content: "Where every dish tells a story — fine Indian dining in Eldoret, Kenya."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Playfair+Display+SC:wght@400;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {})
		]
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			"/",
			"/menu",
			"/about",
			"/events",
			"/gallery",
			"/contact"
		].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/menu.tsx
var $$splitComponentImporter$5 = () => import("./menu-C01XkaJq.js");
var Route$5 = createFileRoute("/menu")({
	head: () => ({ meta: [
		{ title: "Menu — Lax Taj | Eldoret" },
		{
			name: "description",
			content: "Indian, Chinese, Continental, Seafood, BBQ, vegetarian and desserts. Browse the Lax Taj menu."
		},
		{
			property: "og:title",
			content: "Lax Taj Menu"
		},
		{
			property: "og:description",
			content: "A culinary journey across cultures."
		},
		{
			property: "og:image",
			content: img.biryani
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$4 = () => import("./gallery-fCACOkFc.js");
var Route$4 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Lax Taj | Eldoret" },
		{
			name: "description",
			content: "Inside Lax Taj — food, ambiance, events and behind-the-scenes from Eldoret's finest dining destination."
		},
		{
			property: "og:title",
			content: "Gallery — Lax Taj"
		},
		{
			property: "og:description",
			content: "Every moment, beautifully served."
		},
		{
			property: "og:image",
			content: img.candlelight
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/events.tsx
var $$splitComponentImporter$3 = () => import("./events-oX5oiFzl.js");
var Route$3 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events — Lax Taj | Eldoret" },
		{
			name: "description",
			content: "Live music, private dining, corporate events, birthdays and cultural food festivals at Lax Taj, Eldoret."
		},
		{
			property: "og:title",
			content: "Events at Lax Taj"
		},
		{
			property: "og:description",
			content: "Experience more than just dining."
		},
		{
			property: "og:image",
			content: img.event1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-B6OdfL6P.js");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Lax Taj | Eldoret" },
		{
			name: "description",
			content: "Visit Lax Taj in Elgon View, Eldoret. Opp. Fountain Hospital. Call +254 792 967691. Open daily 11am–11pm."
		},
		{
			property: "og:title",
			content: "Visit Lax Taj"
		},
		{
			property: "og:description",
			content: "Elgon View, Eldoret. Open daily 11am–11pm."
		},
		{
			property: "og:image",
			content: img.interior2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-exWpN7jL.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Lax Taj | Eldoret" },
		{
			name: "description",
			content: "The story of Lax Taj — Chef Laxman Mehra, 10+ years in hospitality, Sh25M invested in Eldoret's finest restaurant."
		},
		{
			property: "og:title",
			content: "Our Story — Lax Taj"
		},
		{
			property: "og:description",
			content: "Born from a passion for flavor."
		},
		{
			property: "og:image",
			content: img.interior
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-BLimqvJy.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Lax Taj | Eldoret — Where Every Dish Tells a Story" },
		{
			name: "description",
			content: "Fine Indian, Chinese, Continental, Seafood and BBQ in Elgon View, Eldoret. Reserve your table at Lax Taj."
		},
		{
			property: "og:title",
			content: "Lax Taj | Eldoret"
		},
		{
			property: "og:description",
			content: "Where every dish tells a story."
		},
		{
			property: "og:image",
			content: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1600&q=80"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var MenuRoute = Route$5.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => Route$7
});
var GalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$7
});
var EventsRoute = Route$3.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	EventsRoute,
	GalleryRoute,
	MenuRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
