import { useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/site/Reveal.tsx
function Reveal({ children, className = "", delay = 0 }) {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setTimeout(() => el.classList.add("is-visible"), delay);
					obs.unobserve(el);
				}
			});
		}, { threshold: .12 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [delay]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `reveal ${className}`,
		children
	});
}
//#endregion
export { Reveal as t };
