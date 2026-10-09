export const content = {
  brand: {
    studio: "MR Developer",
    person: "Max Rayden",
    tagline: "Fullstack · UI/UX · Sites que convertem",
  },

  hero: {
    headline: "Páginas pessoais, de vendas e captura de leads com design que vende.",
    support:
      "Sou Max Rayden — fullstack e especialista em UI/UX. Crio sites frontend claros, bonitos e prontos para gerar contato.",
    ctaPrimary: "Quero meu site",
    ctaSecondary: "Ver trabalhos",
  },

  about: {
    title: "Sobre mim",
    paragraphs: [
      "Trabalho do rascunho ao deploy: entendo o negócio, desenho a experiência e construo o front com código limpo e responsivo.",
      "Ajudo profissionais, criadores e negócios a ter presença online que comunica valor — páginas pessoais, landings, CTAs e funis de lead.",
      "Também atuo em produtos digitais mais complexos. Fiz parte da equipe de desenvolvimento do Volk (Rede Amazônica + Snews), eleito Produto do Ano na NAB Show 2026.",
    ],
    image: "/images/max-about.jpg",
    imageAlt: "Max Rayden — desenvolvedor fullstack e UI/UX",
  },

  featured: {
    subtitle: "Cases em destaque",
    title: "Serviços e produtos no ar",
    cases: [
      {
        id: "volk",
        tag: "Produto · Broadcast",
        title: "VOLK Presenter",
        description:
          "Plataforma que conecta gráficos, dados e interação em tempo real para jornalismo, esportes e eventos. Não desenvolvi o Volk sozinho: fiz parte da equipe de desenvolvimento da Rede Amazônica, em parceria com a Snews. O produto foi eleito Produto do Ano na NAB Show 2026.",
        highlights: [
          "Interatividade e gráficos ao vivo",
          "Integração com APIs e redação",
          "Premiado na NAB Show 2026",
          "Trabalho em equipe Rede Amazônica + Snews",
        ],
        url: "https://volkpresenter.tv/pt",
        urlLabel: "Conhecer o VOLK",
        secondaryUrl:
          "https://redeglobo.globo.com/redeamazonica/noticia/rede-amazonica-recebe-premio-de-produto-do-ano-na-nab-show-2026.ghtml",
        secondaryLabel: "Matéria Rede Amazônica",
        previewImage: "/images/preview-volk.png",
        accent: "from-[#0f2744] to-[#1a5f8a]",
      },
      {
        id: "hub-pessoal",
        tag: "Página pessoal · Hub",
        title: "Página pessoal com método e CTAs",
        description:
          "Hub pessoal completo: história, método, níveis de oferta, FAQ e redes. Pensado para converter visitantes em diagnóstico, isca gratuita ou jornada paga — mobile-first e identidade própria.",
        highlights: [
          "Bio e narrativa da marca pessoal",
          "Ações claras (diagnóstico, PDF, níveis)",
          "UI/UX alinhada à voz da cliente",
        ],
        url: "https://glauciabeckman.vercel.app/",
        urlLabel: "Ver página pessoal",
        previewImage: "/images/preview-glaucia.png",
        accent: "from-[#3C2A1E] to-[#B85C2E]",
      },
      {
        id: "vendas-ebook",
        tag: "Página de vendas",
        title: "Landing de ebook com conversão",
        description:
          "Página de vendas longa para infoproduto digital: dor, prova, o que está incluso, investimento, FAQ e CTA de checkout. Estrutura pensada para anúncios e leitura no celular.",
        highlights: [
          "Copy de vendas estruturada",
          "Oferta e escassez claras",
          "Checkout integrado",
        ],
        url: "https://vendas-ebook-rpf.vercel.app/",
        urlLabel: "Ver página de vendas",
        previewImage: "/images/preview-ebook.png",
        previewFit: "contain" as const,
        accent: "from-[#3C2A1E] to-[#EFE4D2]",
      },
      {
        id: "vendas-morango",
        tag: "Landing VSL · Infoproduto",
        title: "Página de vendas com VSL",
        description:
          "Funil de vendas com vídeo, urgência, prova social, bônus e CTA sticky no mobile. Ideal para receitas e ofertas de impulso com checkout rápido.",
        highlights: [
          "VSL e barra de urgência",
          "Prova social e garantia",
          "CTA fixo no mobile",
        ],
        url: "https://vendas-morango-page.vercel.app/",
        urlLabel: "Ver landing",
        previewImage: "/images/preview-morango.png",
        previewFrame: "phone" as const,
        accent: "from-[#2A0A10] to-[#F0C14B]",
      },
      {
        id: "loja-online",
        tag: "E-commerce · Loja online",
        title: "Lojas online sob medida",
        description:
          "Também crio lojas online com catálogo, categorias, frete e experiência de compra. Exemplo: e-commerce de semijoias com coleções, depoimentos e checkout.",
        highlights: [
          "Catálogo e coleções",
          "Identidade visual da marca",
          "Fluxo de compra e atendimento",
        ],
        url: "https://loja.gbsemijoias.online/",
        urlLabel: "Ver loja online",
        previewImage: "/images/preview-loja.jpg",
        previewFit: "contain" as const,
        accent: "from-[#1a1520] to-[#c9a46a]",
      },
    ],
  },

  workTypes: [
    {
      title: "Páginas pessoais",
      description: "Hub profissional com foto, bio, links e CTAs — ideal para autônomos e criadores.",
    },
    {
      title: "Páginas de vendas",
      description: "Landings longas focadas em conversão: oferta, prova social e checkout.",
    },
    {
      title: "Captura de leads",
      description: "Quizzes, formulários e iscas digitais que qualificam e enviam contatos.",
    },
    {
      title: "CTAs e funis",
      description: "Botões, urgência e fluxos claros do clique ao WhatsApp ou pagamento.",
    },
    {
      title: "Sites institucionais",
      description: "Presença multi-seção com identidade visual e SEO básico.",
    },
    {
      title: "Landing pages",
      description: "Campanhas rápidas, otimizadas para anúncios e mobile-first.",
    },
  ],

  mockups: [
    {
      id: "palomino",
      title: "Página pessoal",
      type: "Lives · agenda · CTAs",
      href: "/mockups/mockup-palomino-lives.html",
      accent: "from-[#1b1819] to-[#d4af6a]",
    },
    {
      id: "daniele-moura",
      title: "Hub + loja",
      type: "Links · unidades · WhatsApp",
      href: "/mockups/mockup-daniele-moura.html",
      accent: "from-[#2f4a3a] to-[#c0694a]",
    },
    {
      id: "danifarias",
      title: "Hub com CTAs",
      type: "Serviços · contato · conversão",
      href: "/mockups/mockup-danifarias.html",
      accent: "from-[#7a1020] to-[#c9a46a]",
    },
    {
      id: "patricia",
      title: "Pessoal + leads",
      type: "Quiz · comunidade · captura",
      href: "/mockups/mockup-patricia.html",
      accent: "from-[#2d2420] to-[#dba39a]",
    },
    {
      id: "glaucia",
      title: "Hub de método",
      type: "Isca · níveis · jornada",
      href: "/mockups/mockup-glaucia-beckman.html",
      liveUrl: "https://glauciabeckman.vercel.app/",
      previewImage: "/images/preview-glaucia.png",
      accent: "from-[#3C2A1E] to-[#B85C2E]",
    },
    {
      id: "ebook",
      title: "Página de vendas",
      type: "Ebook · oferta · checkout",
      href: "/mockups/mockup-vendas-ebook.html",
      liveUrl: "https://vendas-ebook-rpf.vercel.app/",
      previewImage: "/images/preview-ebook.png",
      previewFit: "contain" as const,
      accent: "from-[#3C2A1E] to-[#EFE4D2]",
    },
    {
      id: "morango",
      title: "Landing VSL",
      type: "Infoproduto · urgência · CTA",
      href: "/mockups/mockup-vendas-morango.html",
      liveUrl: "https://vendas-morango-page.vercel.app/",
      previewImage: "/images/preview-morango.png",
      previewFrame: "phone" as const,
      accent: "from-[#2A0A10] to-[#F0C14B]",
    },
  ],

  packages: [
    {
      name: "Essencial",
      price: "A partir de R$ 500",
      description: "Página simples ou hub pessoal com CTAs e WhatsApp.",
      features: ["1 página responsiva", "Links e botões de contato", "Publicação inclusa"],
    },
    {
      name: "Profissional",
      price: "R$ 800 – R$ 4.000",
      description: "Landing de vendas ou site com seções e identidade forte.",
      features: ["Design UI/UX sob medida", "Copy estruturada para conversão", "SEO básico + suporte"],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "A partir de R$ 5.000",
      description: "Funis, quizzes, múltiplas páginas ou integrações.",
      features: ["Fluxos de lead avançados", "Integrações (WhatsApp, checkout)", "Acompanhamento próximo"],
    },
  ],

  cta: {
    title: "Pronto para ter uma página que trabalha por você?",
    support: "Me conta o que você precisa — respondo no WhatsApp com uma proposta clara.",
    button: "Falar com Max",
    message: "Olá, Max Rayden! Vi o site da MR Developer e quero conversar sobre um projeto.",
  },
} as const;

export type MockupItem = (typeof content.mockups)[number];
