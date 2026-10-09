import { useEffect, useRef, useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

type MockupCardProps = {
  title: string;
  type: string;
  href: string;
  liveUrl?: string;
  previewImage?: string;
};

const MockupCard = ({
  title,
  type,
  href,
  liveUrl,
  previewImage,
}: MockupCardProps) => {
  const base = import.meta.env.BASE_URL;
  const mockupSrc = `${base}${href.replace(/^\//, "")}`;
  const imageSrc = previewImage
    ? `${base}${previewImage.replace(/^\//, "")}`
    : null;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [paused, setPaused] = useState(false);
  const openUrl = liveUrl ?? mockupSrc;
  const displayUrl = (liveUrl ?? href).replace(/^https?:\/\//, "").replace(/^\//, "");

  // Auto-scroll do iframe (mockups HTML locais)
  useEffect(() => {
    if (imageSrc) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    let raf = 0;
    let dir = 1;
    let y = 0;
    let last = 0;
    const speed = 28;

    const tick = (t: number) => {
      if (!paused) {
        const doc = iframe.contentDocument;
        const win = iframe.contentWindow;
        if (doc && win) {
          const max = Math.max(
            0,
            doc.documentElement.scrollHeight - doc.documentElement.clientHeight
          );
          if (max > 8) {
            const dt = last ? (t - last) / 1000 : 0;
            y += dir * speed * dt;
            if (y >= max) {
              y = max;
              dir = -1;
            } else if (y <= 0) {
              y = 0;
              dir = 1;
            }
            win.scrollTo(0, y);
          }
        }
      }
      last = t;
      raf = requestAnimationFrame(tick);
    };

    const onLoad = () => {
      cancelAnimationFrame(raf);
      last = 0;
      y = 0;
      dir = 1;
      raf = requestAnimationFrame(tick);
    };

    iframe.addEventListener("load", onLoad);
    if (iframe.contentDocument?.readyState === "complete") onLoad();

    return () => {
      iframe.removeEventListener("load", onLoad);
      cancelAnimationFrame(raf);
    };
  }, [imageSrc, paused, mockupSrc]);

  // Centraliza + auto-scroll das capturas (Glaucia, ebook, morango…)
  useEffect(() => {
    if (!imageSrc) return;
    const wrap = imageWrapRef.current;
    const img = imageRef.current;
    if (!wrap || !img) return;

    let raf = 0;
    let dir = 1;
    let y = 0;
    let last = 0;
    const speed = 22;

    const applyCentered = (offsetY: number) => {
      const wrapH = wrap.clientHeight;
      const wrapW = wrap.clientWidth;
      const natW = img.naturalWidth || 1;
      const natH = img.naturalHeight || 1;
      const scale = Math.min(wrapW / natW, wrapH / natH);
      // Se a imagem for mais alta que o card (mesmo em largura total), usa largura 100% e scroll
      const fitByWidth = wrapW / natW;
      const heightIfFullWidth = natH * fitByWidth;
      const isTall = heightIfFullWidth > wrapH + 8;

      if (isTall) {
        img.style.width = "100%";
        img.style.height = "auto";
        img.style.maxWidth = "100%";
        img.style.maxHeight = "none";
        img.style.left = "50%";
        img.style.top = "0";
        img.style.transform = `translate(-50%, ${-offsetY}px)`;
      } else {
        img.style.width = `${natW * scale}px`;
        img.style.height = `${natH * scale}px`;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        img.style.left = "50%";
        img.style.top = "50%";
        img.style.transform = "translate(-50%, -50%)";
      }
    };

    const tick = (t: number) => {
      if (!paused && img.naturalHeight) {
        const wrapH = wrap.clientHeight;
        const wrapW = wrap.clientWidth;
        const natW = img.naturalWidth || 1;
        const natH = img.naturalHeight || 1;
        const heightIfFullWidth = natH * (wrapW / natW);
        const max = Math.max(0, heightIfFullWidth - wrapH);

        if (max > 8) {
          const dt = last ? (t - last) / 1000 : 0;
          y += dir * speed * dt;
          if (y >= max) {
            y = max;
            dir = -1;
          } else if (y <= 0) {
            y = 0;
            dir = 1;
          }
          applyCentered(y);
        } else {
          applyCentered(0);
        }
      }
      last = t;
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      y = 0;
      dir = 1;
      last = 0;
      applyCentered(0);
      raf = requestAnimationFrame(tick);
    };

    if (img.complete && img.naturalWidth) start();
    else img.addEventListener("load", start);

    const onResize = () => applyCentered(y);
    window.addEventListener("resize", onResize);

    return () => {
      img.removeEventListener("load", start);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [imageSrc, paused]);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-card shadow-md ring-1 ring-border/60">
      <a
        href={openUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${title}`}
        className="group block"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-t-xl bg-muted ring-0">
          <div className="flex items-center gap-1.5 border-b border-border/60 bg-card px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 truncate text-[10px] text-muted-foreground sm:text-xs">
              {displayUrl}
            </span>
          </div>

          <div
            ref={imageWrapRef}
            className="relative aspect-[4/3] overflow-hidden bg-[#ece8e3]"
          >
            {imageSrc ? (
              <img
                ref={imageRef}
                src={imageSrc}
                alt={`Preview de ${title}`}
                loading="lazy"
                className="absolute will-change-transform"
              />
            ) : (
              <iframe
                ref={iframeRef}
                src={mockupSrc}
                title={title}
                loading="lazy"
                tabIndex={-1}
                sandbox="allow-scripts allow-same-origin"
                className="pointer-events-none absolute left-1/2 top-0 origin-top -translate-x-1/2 border-0"
                style={{
                  width: 430,
                  height: 900,
                  transform: "translateX(-50%) scale(0.72)",
                }}
              />
            )}
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors" />
          </div>
        </div>
      </a>

      <div className="px-4 pt-3 text-center">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{type}</p>
        <h3 className="font-display text-lg font-semibold mt-0.5">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 p-4 mt-auto">
        <Button asChild size="sm" className="flex-1 min-w-[120px]">
          <a href={mockupSrc} target="_blank" rel="noopener noreferrer">
            <Eye className="h-4 w-4 mr-1.5" />
            Abrir mockup
          </a>
        </Button>
        {liveUrl ? (
          <Button asChild size="sm" variant="outline" className="flex-1 min-w-[120px]">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Ver ao vivo
            </a>
          </Button>
        ) : null}
      </div>
    </article>
  );
};

export default MockupCard;
