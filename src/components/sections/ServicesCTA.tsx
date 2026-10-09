import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { whatsappUrl } from "@/lib/config";

const ServicesCTA = () => {
  return (
    <>
      <section id="servicos" className="section-pad">
        <div className="container">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-primary font-medium mb-3">
              {content.brand.studio}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Pacotes claros, sem surpresa
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
              Escolha o nível que faz sentido para o seu momento. Ajustamos escopo e prazo no WhatsApp.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {content.packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-xl p-5 sm:p-6 ring-1 ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground ring-primary shadow-primary"
                    : "bg-card ring-border/70 shadow-md"
                }`}
              >
                {pkg.highlighted ? (
                  <span className="absolute -top-3 left-6 text-xs font-semibold uppercase tracking-wider bg-foreground text-background px-2.5 py-1 rounded">
                    Mais pedido
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                <p
                  className={`mt-2 text-2xl font-display font-bold ${
                    pkg.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {pkg.price}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          pkg.highlighted ? "opacity-90" : "text-primary"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 w-full ${
                    pkg.highlighted
                      ? "bg-background text-foreground hover:bg-background/90"
                      : ""
                  }`}
                  variant={pkg.highlighted ? "secondary" : "default"}
                >
                  <a
                    href={whatsappUrl(
                      `Olá! Tenho interesse no pacote ${pkg.name} da MR Developer.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir orçamento
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden py-14 sm:py-20 md:py-24">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance">
            {content.cta.title}
          </h2>
          <p className="text-white/75 text-sm sm:text-lg mb-7 sm:mb-8 leading-relaxed">
            {content.cta.support}
          </p>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
          >
            <a href={whatsappUrl(content.cta.message)} target="_blank" rel="noopener noreferrer">
              {content.cta.button}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesCTA;
