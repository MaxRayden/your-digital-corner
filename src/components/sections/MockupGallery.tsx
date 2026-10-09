import MockupCard from "@/components/MockupCard";
import { content } from "@/lib/content";

const MockupGallery = () => {
  return (
    <section id="mockups" className="section-pad bg-secondary/50">
      <div className="container">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-primary font-medium mb-3">
            Exemplos
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Mockups para você explorar
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
            Abra cada proposta no celular ou no desktop e sinta o fluxo. Use como referência do que você quer para o seu projeto.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.mockups.map((mockup) => (
            <MockupCard
              key={mockup.id}
              title={mockup.title}
              type={mockup.type}
              href={mockup.href}
              liveUrl={"liveUrl" in mockup ? mockup.liveUrl : undefined}
              previewImage={
                "previewImage" in mockup ? mockup.previewImage : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MockupGallery;
