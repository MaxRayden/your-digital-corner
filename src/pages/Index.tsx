import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Store,
  Church,
  Briefcase,
  Building2,
  FileText,
  Target,
  Globe,
  Database,
  ShoppingCart,
  MessageSquare,
  Lightbulb,
  Palette,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AudienceCard from "@/components/AudienceCard";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";

const Index = () => {
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const audienceData = [
    {
      icon: Users,
      title: "Pessoas Comuns",
      description: "Quer divulgar seu trabalho ou projeto pessoal na internet",
    },
    {
      icon: Store,
      title: "Comércios de Bairro",
      description: "Lanchonetes, lojas, salões e outros pequenos negócios",
    },
    {
      icon: Church,
      title: "Igrejas e Projetos Sociais",
      description: "Organizações que precisam de presença online acessível",
    },
    {
      icon: Briefcase,
      title: "Profissionais Autônomos",
      description: "Mostre seus serviços e conquiste mais clientes",
    },
    {
      icon: Building2,
      title: "Empresas",
      description: "Soluções completas e personalizadas para seu negócio",
    },
  ];

  const servicesData = [
    {
      icon: FileText,
      title: "Página Simples",
      description: "Ideal para pequenos negócios e igrejas",
      features: ["Divulgação básica", "WhatsApp e redes sociais", "Design limpo e profissional"],
    },
    {
      icon: Target,
      title: "Landing Pages",
      description: "Foco em divulgação e conversão",
      features: ["Páginas de campanhas", "Alta conversão", "Otimizada para anúncios"],
    },
    {
      icon: Globe,
      title: "Sites Institucionais",
      description: "Presença online profissional",
      features: ["Múltiplas páginas", "Design personalizado", "SEO básico"],
      highlighted: true,
    },
    {
      icon: Database,
      title: "Sistemas / CRM",
      description: "Painéis administrativos",
      features: ["Controle de dados", "Processos automatizados", "Relatórios"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Loja virtual completa",
      features: ["Catálogo de produtos", "Pagamentos online", "Gestão de pedidos"],
    },
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Conversa Inicial",
      description: "Entendemos suas necessidades e objetivos",
    },
    {
      icon: Lightbulb,
      title: "Definição do Escopo",
      description: "Planejamos juntos o melhor caminho",
    },
    {
      icon: Palette,
      title: "Desenvolvimento",
      description: "Criamos seu site com carinho",
    },
    {
      icon: Rocket,
      title: "Publicação",
      description: "Seu site vai ao ar para o mundo",
    },
    {
      icon: HeartHandshake,
      title: "Suporte",
      description: "Estamos aqui quando precisar",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in text-balance">
                Sites simples, profissionais e acessíveis para{" "}
                <span className="text-primary">pessoas, pequenos negócios e empresas</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in [animation-delay:200ms] opacity-0">
                Crio páginas para divulgar lojas, produtos, lanchonetes, igrejas, profissionais e
                empresas, com transparência de preços e suporte completo.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:400ms] opacity-0">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/servicos">Ver serviços</Link>
                </Button>
                <WhatsAppButton
                  size="lg"
                  message="Olá! Gostaria de saber mais sobre como ter meu próprio site."
                  className="w-full sm:w-auto"
                >
                  Quero meu site
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Para quem é esse serviço?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Atendo desde pessoas que querem divulgar um produto até empresas que buscam soluções
                completas.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {audienceData.map((item, index) => (
                <AudienceCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Serviços Preview */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Serviços</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Do simples ao complexo, tenho a solução certa para você.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  highlighted={service.highlighted}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/servicos">Ver todos os serviços e pacotes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Processo de Trabalho */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">Como funciona?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Um processo simples e transparente do início ao fim.
              </p>
            </div>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Pronto para ter seu site?</h2>
              <p className="mt-4 text-lg opacity-90">
                Vamos conversar sobre o seu projeto. Sem compromisso, sem complicação.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppButton
                  size="lg"
                  message="Olá! Gostaria de um orçamento para meu site."
                  className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90"
                >
                  Falar no WhatsApp
                </WhatsAppButton>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary-foreground/70 text-background hover:bg-background/10 hover:border-primary-foreground bg-background/5"
                >
                  <Link 
                    to="/precos"
                    onClick={() => {
                      // Garante scroll para o topo após navegação
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}
                  >
                    Ver preços
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton floating />
    </div>
  );
};

export default Index;
