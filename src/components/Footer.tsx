import { Link } from "react-router-dom";
import { Code2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code2 className="h-4 w-4" />
              </div>
              <span>DevStudio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sites simples, profissionais e acessíveis para pessoas, pequenos negócios e empresas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos" 
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="/precos" 
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link 
                  to="/segmentos" 
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                >
                  Segmentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Páginas Simples</li>
              <li>Landing Pages</li>
              <li>Sites Institucionais</li>
              <li>Sistemas / CRM</li>
              <li>E-commerce</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@devstudio.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} DevStudio. Todos os direitos reservados.</p>
            <p>Feito com dedicação para você e seu negócio.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
