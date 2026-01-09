import { useEffect } from "react";
import { Check, X, Info, Server, Cloud } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PrecosPage = () => {
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const priceTable = [
    {
      service: "Página simples",
      range: "A partir de R$ 500",
      details: "Página única, informações básicas, WhatsApp",
    },
    {
      service: "Landing pages",
      range: "R$ 800 – R$ 3.000",
      details: "Focada em conversão, ideal para campanhas",
    },
    {
      service: "Sites institucionais",
      range: "R$ 2.000 – R$ 8.000",
      details: "Múltiplas páginas, design personalizado, SEO",
    },
    {
      service: "Sistemas / CRM",
      range: "A partir de R$ 6.000",
      details: "Painéis, automações, múltiplos usuários",
    },
    {
      service: "E-commerce",
      range: "A partir de R$ 8.000",
      details: "Loja virtual, pagamentos, gestão de pedidos",
    },
  ];

  const hostingComparison = [
    {
      feature: "Custo mensal",
      free: "Gratuito",
      paid: "R$ 30 – R$ 100/mês",
    },
    {
      feature: "Estabilidade",
      free: false,
      paid: true,
    },
    {
      feature: "Velocidade",
      free: "Limitada",
      paid: "Alta",
    },
    {
      feature: "Suporte técnico",
      free: false,
      paid: true,
    },
    {
      feature: "Domínio personalizado",
      free: "Limitado",
      paid: true,
    },
    {
      feature: "Ideal para",
      free: "Testes e páginas simples",
      paid: "Negócios e empresas",
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
                Preços Transparentes
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Sem surpresas. Você sabe exatamente quanto vai investir.
              </p>
            </div>
          </div>
        </section>

        {/* Tabela de Preços */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Tabela de Preços</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Valores estimados para cada tipo de projeto.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Serviço</TableHead>
                        <TableHead>Faixa de Preço</TableHead>
                        <TableHead className="hidden md:table-cell">Detalhes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {priceTable.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.service}</TableCell>
                          <TableCell className="text-primary font-semibold">
                            {item.range}
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-muted-foreground">
                            {item.details}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-accent">
                <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> Os valores variam
                  conforme escopo e necessidades específicas do projeto. Cada orçamento é
                  personalizado após entendermos suas necessidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hospedagem */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Hospedagem e Deploy</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Entenda de forma simples onde seu site vai ficar "guardado" na internet.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Gratuita */}
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      <Cloud className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Hospedagem Gratuita</CardTitle>
                      <CardDescription>Quando aplicável</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" />
                      <span>Sem custo mensal</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" />
                      <span>Ideal para páginas simples</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-destructive" />
                      <span>Limitações de acesso e velocidade</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-destructive" />
                      <span>Sem suporte técnico</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Paga */}
              <Card className="border-primary shadow-md">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-lg" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Server className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Hospedagem Paga</CardTitle>
                      <CardDescription>Recomendada para negócios</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" />
                      <span>Alta estabilidade e velocidade</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" />
                      <span>Suporte técnico incluso</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" />
                      <span>Domínio personalizado</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success" />
                      <span>Ideal para negócios e empresas</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 rounded-lg bg-accent">
                    <p className="text-sm">
                      <strong>Custo médio:</strong> R$ 30 – R$ 100/mês
                      <br />
                      <span className="text-muted-foreground">
                        Sistemas maiores podem ter custos mais altos
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular vs Premium */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">Popular ou Premium?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Duas abordagens para atender diferentes necessidades.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Popular */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                    Acessível
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Soluções Populares</CardTitle>
                  <CardDescription className="text-base">
                    Para quem precisa de algo simples e rápido
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Soluções simples e objetivas</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Preços acessíveis</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Entrega rápida</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Ideal para começar</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground pt-2 border-t">
                    Perfeito para: pequenos negócios, profissionais autônomos, igrejas e projetos
                    sociais que precisam de presença online básica.
                  </p>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="relative overflow-hidden border-primary shadow-md">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                    Premium
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Soluções Premium</CardTitle>
                  <CardDescription className="text-base">
                    Para quem busca diferenciação e escala
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Projetos 100% personalizados</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Sistemas e automações</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Escalabilidade garantida</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Suporte estendido</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground pt-2 border-t">
                    Perfeito para: empresas em crescimento, negócios que precisam de sistemas
                    próprios e quem busca diferenciação no mercado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Vamos conversar sobre seu projeto?</h2>
              <p className="mt-4 text-lg opacity-90">
                Me conta sua ideia e eu te ajudo a encontrar a melhor solução para o seu bolso.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  size="lg"
                  message="Olá! Vi a tabela de preços e gostaria de saber mais sobre o orçamento para meu projeto."
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Solicitar orçamento
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

export default PrecosPage;
