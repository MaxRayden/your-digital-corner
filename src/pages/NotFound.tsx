import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-3">
          MR Developer
        </p>
        <h1 className="mb-3 font-display text-5xl font-bold">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Página não encontrada.</p>
        <a href="/" className="text-primary font-medium underline underline-offset-4 hover:text-primary/80">
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
