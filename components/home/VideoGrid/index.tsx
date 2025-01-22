import { Show } from "@/types";
import { VideoCard } from "./VideoCard";

interface VideoGridProps {
  shows: Show[];
}

export function VideoGrid({ shows }: VideoGridProps) {
  return (
    <div className="relative pl-[220px] px-8 py-4">
      <div className="grid grid-cols-5 gap-4">
        {shows.map((show) => (
          <VideoCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
} 