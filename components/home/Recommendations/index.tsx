import { Show } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface RecommendationsProps {
  shows: Show[];
}

export function Recommendations({ shows }: RecommendationsProps) {
  return (
    <div className="pl-[220px] pr-8 py-6">
      <div className="grid grid-cols-4 gap-4">
        {shows.map((show) => (
          <Link 
            key={show.id} 
            href={`/show/${show.id}`}
            className="group relative aspect-[16/9] rounded-lg overflow-hidden"
          >
            <Image
              src={show.image}
              alt={show.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* 标题和描述 */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-sm font-medium text-white truncate">
                {show.title}
              </h3>
              <p className="text-xs text-white/60 truncate mt-1">
                {show.description}
              </p>
            </div>

            {/* 标签 - IMAX、热映等 */}
            <div className="absolute top-2 right-2">
              {show.id === 1 && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-blue-500 text-white rounded">
                  IMAX
                </span>
              )}
              {show.id === 2 && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-orange-500 text-white rounded">
                  热映
                </span>
              )}
              {show.id === 3 && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-yellow-500 text-white rounded">
                  独播
                </span>
              )}
              {show.id === 4 && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-green-500 text-white rounded">
                  经典
                </span>
              )}
              {show.id === 5 && (
                <span className="px-2 py-0.5 text-[10px] font-medium bg-purple-500 text-white rounded">
                  巨制
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 