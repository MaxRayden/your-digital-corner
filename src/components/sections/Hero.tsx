import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { whatsappUrl } from "@/lib/config";

const Hero = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={`${base}images/max-hero.jpg`}
        alt="Max Rayden — desenvolvedor fullstack e UI/UX"
        className="absolute inset-0 h-full w-full object-cover object-[center_18%] sm:object-[center_20%]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(200 18% 8% / 0.25) 0%, hsl(200 18% 8% / 0.45) 40%, hsl(200 18% 8% / 0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 30%, hsl(174 45% 35% / 0.35), transparent)",
        }}
      />

      <div className="container relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 md:pb-24 md:pt-40">
        <p className="reveal font-sans text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/70 mb-3 sm:mb-4">
          {content.brand.studio}
        </p>
        <h1 className="reveal-delay font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] max-w-3xl">
          {content.brand.person}
        </h1>
        <p className="reveal-delay mt-4 sm:mt-5 font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 max-w-2xl text-balance leading-snug">
          {content.hero.headline}
        </p>
        <p className="reveal-delay-2 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
          {content.hero.support}
        </p>
        <div className="reveal-delay-2 mt-7 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary"
          >
            <a href={whatsappUrl(content.cta.message)} target="_blank" rel="noopener noreferrer">
              {content.hero.ctaPrimary}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
          >
            <a href="#mockups">{content.hero.ctaSecondary}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
