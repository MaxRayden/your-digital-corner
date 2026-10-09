import { useEffect } from "react";

/** Redireciona rotas antigas para a landing com âncora. */
const RedirectToHash = ({ hash }: { hash: string }) => {
  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const path = base.endsWith("/") ? base : `${base}/`;
    window.location.replace(`${path}${hash}`);
  }, [hash]);

  return null;
};

export default RedirectToHash;
