import { YouTubeLogo } from "@/components/common/YouTubeLogo";
import { SearchBar } from "./SearchBar";
import { UserActions } from "./UserActions";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 flex items-center p-4 z-50">
      <div className="absolute inset-0 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-black/40 dark:to-transparent backdrop-blur-[1px]" />

      <div className="relative w-[220px] px-6">
        <YouTubeLogo />
      </div>

      <div className="relative flex-1 flex justify-between items-center">
        <SearchBar />
        <UserActions />
      </div>
    </header>
  );
} 