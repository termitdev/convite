import { cn } from "@/lib/utils";
import { useState } from "react";

interface MediaFrameProps {
  /** Caminho da imagem. Basta substituir o arquivo em /public/assets para trocar a foto. */
  src: string;
  alt: string;
  caption?: string;
  /** Proporção CSS, ex: "4/5", "3/2", "1/1" */
  ratio?: string;
  className?: string;
  imageClassName?: string;
  /** Rótulo discreto mostrado enquanto a foto real não existe */
  placeholderLabel?: string;
}

/**
 * Moldura editorial para fotografias.
 * Se o arquivo ainda não existir, exibe um placeholder elegante no lugar,
 * sem quebrar o layout e sem inventar imagens.
 */
const MediaFrame = ({
  src,
  alt,
  caption,
  ratio = "4/5",
  className,
  imageClassName,
  placeholderLabel = "Espaço reservado para fotografia",
}: MediaFrameProps) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={cn("group", className)}>
      <div
        className="relative overflow-hidden rounded-sm bg-secondary"
        style={{ aspectRatio: ratio }}
      >
        {!failed ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            loading="lazy"
            className={cn(
              "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]",
              imageClassName,
            )}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-foreground/15 px-6 text-center">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {placeholderLabel}
            </span>
            <span className="text-[11px] text-muted-foreground/70">{src}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default MediaFrame;
