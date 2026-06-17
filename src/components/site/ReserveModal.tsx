import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ReserveModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = encodeURIComponent(
      `Reservation Request%0A` +
      `Name: ${fd.get("name")}%0A` +
      `Phone: ${fd.get("phone")}%0A` +
      `Date: ${fd.get("date")}%0A` +
      `Time: ${fd.get("time")}%0A` +
      `Guests: ${fd.get("guests")}%0A` +
      `Notes: ${fd.get("notes") || "—"}`
    );
    window.open(`https://wa.me/254792967691?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-cream border border-gold/40 shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 pt-8 pb-2 text-center border-b border-gold/20">
          <p className="eyebrow">Reservations</p>
          <h2 className="text-4xl text-maroon mt-2">Book a Table</h2>
          <p className="text-sm text-muted-foreground mt-2 mb-6">We confirm via WhatsApp within minutes.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field name="name" label="Full Name" required />
            <Field name="phone" label="Phone" type="tel" required />
            <Field name="date" label="Date" type="date" required />
            <Field name="time" label="Time" type="time" required />
            <div className="sm:col-span-2">
              <Field name="guests" label="Number of Guests" type="number" min={1} max={40} defaultValue={2} required />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-charcoal/70 mb-1">Special Requests</label>
              <textarea
                name="notes"
                rows={3}
                className="w-full bg-white border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn-ghost-gold flex-1">Cancel</button>
            <button type="submit" className="btn-primary flex-1">Send Request</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-charcoal/70 mb-1">{label}</label>
      <input
        {...props}
        className="w-full bg-white border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}
