import { cn } from "@/lib/utils";

type SitePreviewProps = {
  url: string;
  title: string;
  className?: string;
  previewImage?: string;
  frameWidth?: number;
  aspect?: string;
  tone?: "light" | "dark";
  /** browser = moldura de desktop; phone = moldura de celular (prints verticais) */
  frame?: "browser" | "phone";
  /** cover corta; contain mostra a imagem inteira */
  fit?: "cover" | "contain";
};

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

function screenshotUrl(url: string) {
  return `https://image.thum.io/get/width/1400/crop/900/noanimate/${url}`;
}

const SitePreview = ({
  url,
  title,
  className,
  previewImage,
  frameWidth = 430,
  aspect = "aspect-[4/3]",
  tone = "light",
  frame = "browser",
  fit = "cover",
}: SitePreviewProps) => {
  const base = import.meta.env.BASE_URL;
  const external = isExternalUrl(url);
  const scale = frameWidth <= 500 ? 0.55 : 0.28;
  const localPreview = previewImage
    ? `${base}${previewImage.replace(/^\//, "")}`
    : null;
  const imageSrc = localPreview ?? (external ? screenshotUrl(url) : null);

  if (frame === "phone") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir preview: ${title}`}
        className={cn(
          "group mx-auto flex w-full max-w-[220px] sm:max-w-[240px] flex-col items-center",
          className
        )}
      >
        {/* moldura externa do aparelho */}
        <div
          className={cn(
            "relative w-full rounded-[2.25rem] p-[10px] shadow-2xl ring-1 transition-transform duration-300 group-hover:scale-[1.02]",
            tone === "dark"
              ? "bg-[#1a1d22] ring-white/25 shadow-black/40"
              : "bg-[#1c1c1f] ring-black/30"
          )}
        >
          {/* borda interna / bezel */}
          <div className="relative rounded-[1.75rem] bg-black p-[3px] ring-1 ring-white/10">
            {/* Dynamic Island */}
            <div className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-5 w-[72px] -translate-x-1/2 rounded-full bg-black shadow-sm" />

            {/* tela */}
            <div className="relative mx-auto flex aspect-[9/19.5] max-h-[400px] w-full items-center justify-center overflow-hidden rounded-[1.6rem] bg-[#0a0a0a]">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={`Preview de ${title}`}
                  loading="lazy"
                  className="h-full w-full object-contain object-center"
                />
              ) : (
                <iframe
                  src={url}
                  title={title}
                  loading="lazy"
                  tabIndex={-1}
                  sandbox="allow-scripts allow-same-origin"
                  className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 origin-top border-0"
                  style={{
                    width: 390,
                    height: 844,
                    transform: "translateX(-50%) scale(0.42)",
                  }}
                />
              )}
            </div>
          </div>

          {/* botão lateral sutil */}
          <span className="pointer-events-none absolute -right-[2px] top-28 h-12 w-[3px] rounded-r-sm bg-white/15" />
          <span className="pointer-events-none absolute -left-[2px] top-24 h-8 w-[3px] rounded-l-sm bg-white/15" />
          <span className="pointer-events-none absolute -left-[2px] top-36 h-8 w-[3px] rounded-l-sm bg-white/15" />
        </div>
        <span
          className={cn(
            "mt-3 max-w-full truncate text-center text-[10px] sm:text-xs",
            tone === "dark" ? "text-white/45" : "text-muted-foreground"
          )}
        >
          {url.replace(/^https?:\/\//, "")}
        </span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir preview: ${title}`}
      className={cn(
        "group relative block overflow-hidden rounded-xl shadow-xl ring-1 transition-shadow hover:shadow-2xl",
        tone === "dark" ? "ring-white/15 bg-[#0c1218]" : "ring-border/70 bg-muted",
        aspect,
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 border-b",
          tone === "dark" ? "border-white/10 bg-white/5" : "border-border/60 bg-card"
        )}
      >
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span
          className={cn(
            "ml-2 truncate text-[10px] sm:text-xs",
            tone === "dark" ? "text-white/45" : "text-muted-foreground"
          )}
        >
          {url.replace(/^https?:\/\//, "").replace(/^\//, "")}
        </span>
      </div>

      <div
        className={cn(
          "relative h-[calc(100%-2rem)] overflow-hidden",
          fit === "contain"
            ? tone === "dark"
              ? "bg-[#111820]"
              : "bg-muted/80"
            : "bg-white"
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Preview de ${title}`}
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.02]",
              fit === "contain"
                ? "object-contain object-center"
                : "object-cover object-top"
            )}
          />
        ) : (
          <iframe
            src={url}
            title={title}
            loading="lazy"
            tabIndex={-1}
            sandbox="allow-scripts allow-same-origin"
            className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
            style={{
              width: frameWidth,
              height: Math.round(frameWidth * 2.2),
              transform: `scale(${scale})`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors" />
      </div>
    </a>
  );
};

export default SitePreview;
