import Image from "next/image";
import { Show } from "@/types";

interface BannerSlideProps {
  show: Show;
}

export function BannerSlide({ show }: BannerSlideProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={show.bannerImage}
        alt={show.title}
        className="object-cover"
        fill
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-background/80 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 pl-[240px]">
        <h1 className="text-4xl font-bold text-white mb-2">{show.title}</h1>
        <p className="text-white/80 mb-4">{show.subtitle}</p>
        <p className="text-white/60 mb-6">{show.description}</p>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--primary-foreground))] rounded-lg transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>播放正片</span>
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 