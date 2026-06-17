interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/85" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 animate-fade-up">
        <p className="eyebrow !text-gold-soft">{eyebrow}</p>
        <h1 className="mt-4 text-5xl md:text-7xl text-cream max-w-4xl leading-[1.05]">{title}</h1>
        <span className="gold-rule mt-6" />
        {subtitle && <p className="mt-6 text-cream/80 max-w-2xl text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
