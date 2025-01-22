import { Show } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerControlsProps {
  shows: Show[];
  currentIndex: number;
  progress: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

export function BannerControls({
  shows,
  currentIndex,
  progress,
  onNext,
  onPrev,
  onSelect,
}: BannerControlsProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleShows = shows.slice(startIndex, startIndex + 5);

  useEffect(() => {
    if (currentIndex < startIndex) {
      setStartIndex(currentIndex);
    } else if (currentIndex >= startIndex + 5) {
      setStartIndex(currentIndex - 4);
    }
  }, [currentIndex, startIndex]);

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      onSelect(prevIndex);
      if (prevIndex < startIndex) {
        setStartIndex(prevIndex);
      }
    } else {
      const lastIndex = shows.length - 1;
      onSelect(lastIndex);
      setStartIndex(Math.max(0, lastIndex - 4));
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % shows.length;
    onSelect(nextIndex);
    if (nextIndex >= startIndex + 5) {
      setStartIndex(nextIndex - 4);
    } else if (nextIndex === 0) {
      setStartIndex(0);
    }
  };

  return (
    <div className="absolute bottom-8 right-8 px-[60px]">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
      >
        <span>←</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
      >
        <span>→</span>
      </button>

      <div className="flex items-center gap-3">
        {visibleShows.map((show, index) => {
          const actualIndex = startIndex + index;
          return (
            <button
              key={show.id}
              onClick={() => onSelect(actualIndex)}
              className="relative w-[180px]"
            >
              <div className={`flex flex-col gap-2 p-2 rounded-lg transition-colors duration-300 ${
                actualIndex === currentIndex ? 'bg-white/10' : ''
              }`}>
                <div className="relative w-full aspect-video rounded overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium truncate ${
                    actualIndex === currentIndex ? 'text-[hsl(var(--primary))]' : 'text-white'
                  }`}>
                    {show.title}
                  </p>
                  <p className="text-[10px] text-white/60 truncate mt-0.5">
                    {show.subtitle}
                  </p>
                </div>
                {actualIndex === currentIndex && (
                  <div className="absolute left-0 right-0 -bottom-2">
                    <div className="h-[2px] bg-white/20">
                      <div
                        className="h-full bg-[hsl(var(--primary))] transition-none"
                        style={{
                          width: `${progress * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
} 