import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/common/ModeToggle";
import { ColorToggle } from "@/components/common/ColorToggle";

export function UserActions() {
  return (
    <div className="flex items-center gap-4 mr-4">
      <Link href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">会员专区</Link>
      <Link href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">游戏</Link>
      <Link href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">快捷访问</Link>
      <Link href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">历史</Link>
      <Link href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">创作</Link>
      <Link href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">客户端</Link>
      <ModeToggle />
      <ColorToggle />
      <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-[hsl(var(--primary-foreground))] text-sm px-6">
        登录
      </Button>
    </div>
  );
} 