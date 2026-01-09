import { Link } from "react-router-dom";
import {
  FileText,
  Target,
  Globe,
  Database,
  ShoppingCart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";

const ServicosPage = () => {
  const servicesData = [
    {
      icon: FileText,
      title: "Página Simples",
      description: "Ideal para pequenos negócios, igrejas e profissionais que precisam de uma presença online básica.",
      features: [
        "Página única com suas informações",
        "Botão de WhatsApp",
        "Links para redes sociais",
        "Design limpo e profissional",
        "100% responsivo (funciona no celular)",
      ],
    },
    {
      icon: Target,
      title: "Landing Pages",
      description: "Páginas focadas em conversão, perfeitas para campanhas de marketing e anúncios.",
      features: [
        "Design focado em conversão",
        "Otimizada para anúncios",
        "Carregamento rápido",
        "Call-to-actions estratégicos",
        "Integração com WhatsApp",
      ],
    },
    {
      icon: Globe,
      title: "Sites Institucionais",
      description: "Presença online profissional completa para sua empresa ou negócio.",
      features: [
        "Múltiplas páginas",
        "Design personalizado",
        "SEO básico incluído",
        "Formulário de contato",
        "Blog (opcional)",
      ],
      highlighted: true,
    },
    {
      icon: Database,
      title: "Sistemas / CRM",
      description: "Painéis administrativos e sistemas personalizados para gerenciar seu negócio.",
      features: [
        "Painel administrativo",
        "Controle de dados e processos",
        "Relatórios personalizados",
        "Múltiplos usuários",
        "Automação de tarefas",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Loja virtual completa para vender seus produtos online.",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Pagamentos online",
        "Gestão de pedidos",
        "Cálculo de frete",
      ],
    },
  ];

  const packagesData = [
    {
      title: "Pacote Essencial",
      price: "A partir de R$ 500",
      description: "Para quem está começando e precisa de uma presença online simples.",
      features: [
        "Página única",
        "Informações básicas do negócio",
        "Botão de WhatsApp",
        "Design responsivo",
        "Deploy simples",
      ],
    },
    {
      title: "Pacote Profissional",
      price: "R$ 2.000 – R$ 4.000",
      description: "Para quem quer uma presença online mais completa e profissional.",
      features: [
        "Até 5 páginas",
        "Design personalizado",
        "Formulário de contato",
        "SEO básico",
        "Otimização de performance",
        "Suporte por 30 dias",
      ],
      highlighted: true,
      badge: "Mais Popular",
    },
    {
      title: "Pacote Premium",
      price: "A partir de R$ 5.000",
      description: "Para empresas que precisam de soluções completas e escaláveis.",
      features: [
        "Site completo personalizado",
        "SEO avançado",
        "Integrações com ferramentas",
        "Painel administrativo",
        "Suporte inicial de 60 dias",
        "Treinamento de uso",
      ],
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
                Serviços
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Soluções digitais para todos os tamanhos de negócio, do simples ao complexo.
              </p>
            </div>
          </div>
        </section>

        {/* Serviços Detalhados */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">O que eu faço</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada serviço é pensado para atender suas necessidades específicas.
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
          </div>
        </section>

        {/* Pacotes Fechados */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Para Pequenos Negócios
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">Pacotes Fechados</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Opções prontas com preços transparentes para você começar agora.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {packagesData.map((pkg, index) => (
                <PricingCard
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  description={pkg.description}
                  features={pkg.features}
                  highlighted={pkg.highlighted}
                  badge={pkg.badge}
                />
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              * Os valores podem variar conforme escopo e necessidades específicas do projeto.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Não encontrou o que procura?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Cada projeto é único. Vamos conversar e criar algo perfeito para você.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  size="lg"
                  message="Olá! Gostaria de um orçamento personalizado para meu projeto."
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Solicitar orçamento personalizado
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

export default ServicosPage;
