import Image from "next/image";
import { Show } from "@/types";

interface VideoCardProps {
  show: Show;
}

export function VideoCard({ show }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-2">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={show.image}
            alt={show.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <h3 className="text-foreground text-xs font-medium truncate">
        {show.title}
      </h3>
      <p className="text-muted-foreground text-xs mt-0.5 truncate">
        {show.description}
      </p>
    </div>
  );
} 