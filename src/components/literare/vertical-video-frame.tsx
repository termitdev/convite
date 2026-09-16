import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { useState } from "react";

interface VerticalVideoFrameProps {
  /** Caminho do vídeo 9:16. Basta colocar o arquivo em /public/assets para ativá-lo. */
  src?: string;
  poster?: string;
  className?: string;
  label?: string;
}

/**
 * Moldura vertical 9:16, com aparência de celular.
 * Enquanto não houver vídeo, mostra um placeholder editorial discreto.
 */
const VerticalVideoFrame = ({
  src,
  poster,
  className,
  label = "Espaço reservado para o vídeo vertical (9:16)",
}: VerticalVideoFrameProps) => {
  const [failed, setFailed] = useState(false);
  const hasVideo = Boolean(src) && !failed;

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[300px] rounded-[2.2rem] border border-foreground/15 bg-foreground/5 p-2 shadow-[0_24px_60px_-30px_rgba(44,40,35,0.55)]",
        className,
      )}
    >
      <div
        className="relative overflow-hidden rounded-[1.7rem] bg-foreground"
        style={{ aspectRatio: "9/16" }}
      >
        {hasVideo ? (
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 text-primary">
              <Play className="h-5 w-5" />
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">
              {label}
            </span>
          </div>
        )}
      </div>
      <span
        className="absolute left-1/2 top-3 h-1 w-14 -translate-x-1/2 rounded-full bg-foreground/20"
        aria-hidden="true"
      />
    </div>
  );
};

export default VerticalVideoFrame;
