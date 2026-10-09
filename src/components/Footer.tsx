import { Mail, Phone, MapPin } from "lucide-react";
import { content } from "@/lib/content";
import { config, whatsappUrl } from "@/lib/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <a href="#inicio" className="flex items-center gap-2.5 font-display font-semibold text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
                MR
              </span>
              {content.brand.studio}
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {content.brand.person} — fullstack e UI/UX. Páginas pessoais, vendas e captura de leads.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#cases" className="hover:text-foreground transition-colors">Cases</a></li>
              <li><a href="#mockups" className="hover:text-foreground transition-colors">Mockups</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>{config.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{config.company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <p>© {currentYear} {content.brand.studio}. {content.brand.person}.</p>
          <p>Sites frontend · UI/UX · produtos digitais</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
