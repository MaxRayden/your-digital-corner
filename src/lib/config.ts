/**
 * Configurações do site
 * 
 * Aqui você pode configurar informações importantes do seu site,
 * como número do WhatsApp, e-mail de contato, etc.
 */

export const config = {
  /**
   * Número do WhatsApp para contato
   * 
   * Formato: código do país + DDD + número (sem espaços, parênteses ou hífens)
   * Exemplo para Brasil: 5511999999999 (55 = Brasil, 11 = DDD, 999999999 = número)
   * 
   * IMPORTANTE: Remova o 9 inicial se o número tiver (ex: (11) 99999-9999 vira 5511999999999)
   */
  whatsapp: {
    phone: "5592988135123", // ⬅️ CONFIGURE SEU NÚMERO AQUI
    defaultMessage: "Olá! Gostaria de saber mais sobre os serviços.",
  },

  /**
   * E-mail de contato
   */
  email: "contato@devstudio.com.br",

  /**
   * Informações da empresa/localização
   */
  company: {
    name: "Dev Studio",
    location: "Brasil",
    timezone: "Fuso horário de Brasília",
    workingHours: "Seg a Sex, 9h às 18h",
  },
} as const;

