import { content } from "@/lib/content";

const About = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="sobre" className="section-pad">
      <div className="container">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-primary font-medium mb-3">
              {content.brand.tagline}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {content.about.title}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              {content.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-2xl" aria-hidden />
            <img
              src={`${base}${content.about.image.replace(/^\//, "")}`}
              alt={content.about.imageAlt}
              className="relative w-full rounded-xl object-cover aspect-[4/5] max-h-[420px] sm:max-h-[560px] shadow-xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
