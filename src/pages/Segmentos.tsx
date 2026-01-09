import { useEffect } from "react";
import {
  Store,
  Church,
  Briefcase,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Heart,
  Users,
  Wrench,
  Star,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SegmentCard from "@/components/SegmentCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SegmentosPage = () => {
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const segments = [
    {
      icon: Store,
      title: "Lanchonetes e Comércios",
      description:
        "Divulgue seu negócio local e aumente suas vendas com uma página profissional.",
      examples: ["Cardápio", "Horário", "WhatsApp", "Localização"],
    },
    {
      icon: Church,
      title: "Igrejas e Projetos Sociais",
      description:
        "Conecte sua comunidade e divulgue eventos com uma presença online acolhedora.",
      examples: ["Eventos", "Horários de culto", "Contato", "Doações"],
    },
    {
      icon: Briefcase,
      title: "Profissionais Autônomos",
      description:
        "Mostre seu trabalho e conquiste mais clientes com um site pessoal.",
      examples: ["Serviços", "Portfólio", "Depoimentos", "Agendamento"],
    },
  ];

  const segmentDetails = [
    {
      id: "lanchonetes",
      icon: Store,
      title: "Para Lanchonetes e Comércios",
      subtitle: "Sua vitrine online 24 horas",
      features: [
        {
          icon: Wrench,
          title: "Cardápio Digital",
          description: "Mostre seus produtos com fotos e preços atualizados",
        },
        {
          icon: Clock,
          title: "Horário de Funcionamento",
          description: "Informe quando você está aberto de forma clara",
        },
        {
          icon: MessageCircle,
          title: "Pedido via WhatsApp",
          description: "Botão direto para fazer pedidos pelo celular",
        },
        {
          icon: MapPin,
          title: "Localização",
          description: "Mapa integrado para seus clientes te encontrarem",
        },
      ],
      cta: "Quero divulgar meu comércio",
      message: "Olá! Tenho uma lanchonete/comércio e gostaria de criar um site.",
    },
    {
      id: "igrejas",
      icon: Church,
      title: "Para Igrejas e Projetos Sociais",
      subtitle: "Conecte e inspire sua comunidade",
      features: [
        {
          icon: Calendar,
          title: "Divulgação de Eventos",
          description: "Comunique encontros, retiros e atividades especiais",
        },
        {
          icon: Clock,
          title: "Horários de Culto",
          description: "Informações claras sobre programação semanal",
        },
        {
          icon: Heart,
          title: "Área de Contribuição",
          description: "Facilite doações e apoio financeiro (opcional)",
        },
        {
          icon: Phone,
          title: "Contato e Localização",
          description: "Facilite o acesso para novos membros",
        },
      ],
      cta: "Quero um site para minha igreja",
      message: "Olá! Sou de uma igreja/projeto social e gostaria de criar um site.",
    },
    {
      id: "autonomos",
      icon: Briefcase,
      title: "Para Profissionais Autônomos",
      subtitle: "Seu cartão de visitas digital",
      features: [
        {
          icon: Wrench,
          title: "Serviços Oferecidos",
          description: "Liste tudo que você faz de forma clara e organizada",
        },
        {
          icon: Star,
          title: "Portfólio de Trabalhos",
          description: "Mostre seus melhores projetos e resultados",
        },
        {
          icon: Users,
          title: "Depoimentos",
          description: "Exiba a satisfação dos seus clientes (opcional)",
        },
        {
          icon: Phone,
          title: "Contato Direto",
          description: "WhatsApp e formas de contratação fáceis",
        },
      ],
      cta: "Quero meu site profissional",
      message: "Olá! Sou profissional autônomo e gostaria de criar meu site.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Quem Eu Atendo
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Soluções personalizadas para cada tipo de negócio e necessidade.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-3">
              {segments.map((segment, index) => (
                <SegmentCard
                  key={index}
                  icon={segment.icon}
                  title={segment.title}
                  description={segment.description}
                  examples={segment.examples}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Segments */}
        {segmentDetails.map((segment, index) => (
          <section
            key={segment.id}
            className={`py-20 md:py-28 ${index % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="container">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <segment.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold md:text-3xl">{segment.title}</h2>
                      <p className="text-muted-foreground">{segment.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {segment.features.map((feature, fIndex) => (
                      <Card key={fIndex} className="border-border">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent">
                              <feature.icon className="h-4 w-4 text-accent-foreground" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{feature.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <WhatsAppButton message={segment.message} size="lg">
                      {segment.cta}
                    </WhatsAppButton>
                  </div>
                </div>

                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <segment.icon className="h-32 w-32 text-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Não encontrou seu segmento?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Atendo diversos tipos de projetos. Me conta sobre o seu e vamos encontrar a melhor
                solução juntos.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  size="lg"
                  message="Olá! Tenho um tipo de negócio diferente e gostaria de saber se você pode me ajudar."
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Falar sobre meu projeto
                </WhatsAppButton>
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

export default SegmentosPage;
