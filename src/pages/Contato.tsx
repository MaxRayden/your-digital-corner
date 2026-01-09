import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const ContatoPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "Clique para conversar",
      description: "Respondo em até 24h úteis",
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@devstudio.com.br",
      description: "Para assuntos formais",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Brasil",
      description: "Atendimento 100% online",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg a Sex, 9h às 18h",
      description: "Fuso horário de Brasília",
    },
  ];

  const quickMessages = [
    {
      title: "Quero um orçamento",
      message: "Olá! Gostaria de um orçamento para meu projeto.",
    },
    {
      title: "Tenho dúvidas",
      message: "Olá! Tenho algumas dúvidas sobre os serviços.",
    },
    {
      title: "Quero uma página simples",
      message: "Olá! Tenho interesse em uma página simples para meu negócio.",
    },
    {
      title: "Preciso de um sistema",
      message: "Olá! Preciso de um sistema/CRM para minha empresa.",
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
                Vamos Conversar?
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Estou aqui para ajudar você a ter o site perfeito para seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Contato Principal */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Info Cards */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold md:text-3xl">Informações de Contato</h2>
                  <p className="mt-2 text-muted-foreground">
                    Escolha a forma mais conveniente para você.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                            <info.icon className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">{info.title}</p>
                            <p className="font-medium">{info.value}</p>
                            <p className="text-xs text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col justify-center">
                <Card className="border-primary shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
                          <MessageCircle className="h-8 w-8" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold">Fale pelo WhatsApp</h3>
                        <p className="mt-2 text-muted-foreground">
                          A forma mais rápida de tirar suas dúvidas e solicitar um orçamento.
                        </p>
                      </div>

                      <WhatsAppButton
                        size="lg"
                        message="Olá! Gostaria de saber mais sobre os serviços de criação de sites."
                        className="w-full"
                      >
                        Iniciar conversa
                      </WhatsAppButton>

                      <p className="text-sm text-muted-foreground">
                        Respondo todas as mensagens em até 24 horas úteis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mensagens Rápidas */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold md:text-3xl">Mensagens Rápidas</h2>
              <p className="mt-2 text-muted-foreground">
                Clique para enviar uma mensagem pronta pelo WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {quickMessages.map((msg, index) => (
                <WhatsAppButton
                  key={index}
                  variant="outline"
                  message={msg.message}
                  className="h-auto py-4 px-6 justify-start bg-background hover:bg-accent border-border hover:border-primary/50"
                >
                  <span className="text-left">{msg.title}</span>
                </WhatsAppButton>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Simples */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold md:text-3xl">Dúvidas Frequentes</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "Quanto tempo demora para fazer um site?",
                    a: "Depende do projeto! Páginas simples ficam prontas em 3-7 dias. Sites maiores podem levar de 2 a 4 semanas.",
                  },
                  {
                    q: "Preciso pagar algo mensalmente?",
                    a: "Apenas a hospedagem, se você optar pela versão paga (recomendada para negócios). O valor varia de R$ 30 a R$ 100/mês.",
                  },
                  {
                    q: "Consigo editar meu site depois?",
                    a: "Sim! Dependendo do projeto, posso entregar com um painel simples ou você pode me pedir alterações quando precisar.",
                  },
                  {
                    q: "Vocês fazem logotipo também?",
                    a: "Não trabalho com logotipos, mas posso indicar profissionais ou usar seu logotipo existente no site.",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Tem outra dúvida?
                </p>
                <WhatsAppButton message="Olá! Tenho uma dúvida que não está no site.">
                  Perguntar pelo WhatsApp
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

export default ContatoPage;
