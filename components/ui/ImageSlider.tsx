import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  basePath: string;
  compact?: boolean;
}

export function ImageSlider({ images, basePath, compact = false }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="space-y-3">
      <div
        className={`relative overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 ${
          compact ? "flex h-52 items-center justify-center" : ""
        }`}
      >
        <img
          src={`${basePath}${images[current]}`}
          alt={`Screenshot ${current + 1}`}
          className={compact ? "max-h-full max-w-full object-contain" : "h-auto w-full"}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/70 text-white backdrop-blur transition-colors hover:bg-black"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-white/20 bg-black/70 text-white backdrop-blur transition-colors hover:bg-black"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === current ? "w-6 bg-neutral-950 dark:bg-white" : "w-1.5 bg-neutral-300 dark:bg-neutral-700"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
