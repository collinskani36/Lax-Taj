import { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/ReserveModal.tsx
function ReserveModal({ open, onClose }) {
	useEffect(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open, onClose]);
	if (!open) return null;
	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const msg = encodeURIComponent(`Reservation Request%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0ADate: ${fd.get("date")}%0ATime: ${fd.get("time")}%0AGuests: ${fd.get("guests")}%0ANotes: ${fd.get("notes") || "—"}`);
		window.open(`https://wa.me/254792967691?text=${msg}`, "_blank");
		onClose();
	};
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4",
		onClick: onClose,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative w-full max-w-lg bg-cream border border-gold/40 shadow-2xl animate-fade-up",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "px-8 pt-8 pb-2 text-center border-b border-gold/20",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Reservations"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl text-maroon mt-2",
						children: "Book a Table"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground mt-2 mb-6",
						children: "We confirm via WhatsApp within minutes."
					})
				]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				className: "p-8 space-y-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ jsx(Field, {
							name: "name",
							label: "Full Name",
							required: true
						}),
						/* @__PURE__ */ jsx(Field, {
							name: "phone",
							label: "Phone",
							type: "tel",
							required: true
						}),
						/* @__PURE__ */ jsx(Field, {
							name: "date",
							label: "Date",
							type: "date",
							required: true
						}),
						/* @__PURE__ */ jsx(Field, {
							name: "time",
							label: "Time",
							type: "time",
							required: true
						}),
						/* @__PURE__ */ jsx("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ jsx(Field, {
								name: "guests",
								label: "Number of Guests",
								type: "number",
								min: 1,
								max: 40,
								defaultValue: 2,
								required: true
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ jsx("label", {
								className: "block text-xs uppercase tracking-widest text-charcoal/70 mb-1",
								children: "Special Requests"
							}), /* @__PURE__ */ jsx("textarea", {
								name: "notes",
								rows: 3,
								className: "w-full bg-white border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-gold"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-3 pt-2",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClose,
						className: "btn-ghost-gold flex-1",
						children: "Cancel"
					}), /* @__PURE__ */ jsx("button", {
						type: "submit",
						className: "btn-primary flex-1",
						children: "Send Request"
					})]
				})]
			})]
		})
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "block text-xs uppercase tracking-widest text-charcoal/70 mb-1",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		...props,
		className: "w-full bg-white border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-gold"
	})] });
}
//#endregion
export { ReserveModal as t };
