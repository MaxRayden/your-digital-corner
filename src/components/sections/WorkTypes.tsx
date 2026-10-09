import { content } from "@/lib/content";

const WorkTypes = () => {
  return (
    <section id="trabalhos" className="section-pad">
      <div className="container">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-primary font-medium mb-3">
            O que eu entrego
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Trabalhos feitos para converter
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
            Do hub pessoal à landing de vendas — cada página com um objetivo claro e UI pensada para o mobile.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.workTypes.map((work, i) => (
            <article
              key={work.title}
              className="group border-t border-primary/30 pt-5 transition-colors hover:border-primary"
            >
              <span className="font-display text-sm text-primary/70 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-2">{work.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{work.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTypes;
