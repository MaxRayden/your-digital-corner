import { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import SitePreview from "@/components/SitePreview";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

const FeaturedCases = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const cases = content.featured.cases;

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="cases" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, hsl(214 40% 14%) 0%, hsl(200 25% 12%) 50%, hsl(174 30% 14%) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, hsl(214 72% 42% / 0.45), transparent)",
        }}
      />

      <div className="container">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[hsl(174,45%,70%)] font-medium mb-3">
            {content.featured.subtitle}
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white">
            {content.featured.title}
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {cases.map((item, index) => {
              const shouldLoad = Math.abs(index - current) <= 1 ||
                (current === 0 && index === cases.length - 1) ||
                (current === cases.length - 1 && index === 0);

              return (
                <CarouselItem key={item.id}>
                  <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 items-center">
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[hsl(214,72%,70%)] font-medium mb-3">
                        {item.tag}
                      </p>
                      <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                        {item.title}
                      </h3>
                      <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-7">
                        {item.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs sm:text-sm text-white/85"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(174,50%,55%)] shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                        <Button
                          asChild
                          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.urlLabel}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        {"secondaryUrl" in item && item.secondaryUrl ? (
                          <Button
                            asChild
                            variant="outline"
                            className="w-full sm:w-auto border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                          >
                            <a
                              href={item.secondaryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.secondaryLabel}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </div>

                    <figure className="flex w-full items-center justify-center">
                      {shouldLoad ? (
                        <SitePreview
                          url={item.url}
                          title={item.title}
                          tone="dark"
                          aspect="aspect-[4/3] max-h-[440px]"
                          className={
                            "previewFrame" in item && item.previewFrame === "phone"
                              ? undefined
                              : "w-full"
                          }
                          frame={
                            "previewFrame" in item && item.previewFrame === "phone"
                              ? "phone"
                              : "browser"
                          }
                          fit={
                            "previewFit" in item && item.previewFit === "contain"
                              ? "contain"
                              : "cover"
                          }
                          previewImage={
                            "previewImage" in item ? item.previewImage : undefined
                          }
                        />
                      ) : (
                        <div className="aspect-[4/3] max-h-[440px] w-full rounded-xl bg-white/5 ring-1 ring-white/10" />
                      )}
                    </figure>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Cases">
              {cases.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={current === index}
                  aria-label={`Ir para ${item.title}`}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    current === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
            <div className="relative flex gap-2 ml-auto">
              <CarouselPrevious className="static translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white disabled:opacity-30" />
              <CarouselNext className="static translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white disabled:opacity-30" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCases;
