import { BannerSlide } from "./BannerSlide";
import { BannerControls } from "./BannerControls";
import { useState, useEffect } from "react";
import { Show } from "@/types";

interface BannerProps {
  shows: Show[];
}

export function Banner({ shows }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 5000; // 5秒切换一次

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setProgress(progress);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        handleNext();
      }
    };

    setProgress(0);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shows.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + shows.length) % shows.length);
  };

  return (
    <div className="relative h-[40vw]">
      <BannerSlide show={shows[currentIndex]} />
      <BannerControls 
        shows={shows}
        currentIndex={currentIndex}
        progress={progress}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelect={setCurrentIndex}
      />
    </div>
  );
} 