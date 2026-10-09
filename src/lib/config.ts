/**
 * Configurações do site
 */

export const config = {
  whatsapp: {
    phone: "5592992590440",
    defaultMessage: "Olá! Gostaria de saber mais sobre os serviços da MR Developer.",
  },

  email: "contato@mrdeveloper.com.br",

  company: {
    name: "MR Developer",
    person: "Max Rayden",
    location: "Brasil",
    timezone: "Fuso horário de Brasília",
    workingHours: "Seg a Sex, 9h às 18h",
  },
} as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? config.whatsapp.defaultMessage);
  return `https://wa.me/${config.whatsapp.phone}?text=${text}`;
}
