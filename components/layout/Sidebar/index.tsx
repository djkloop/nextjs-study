import { NavItems } from "./NavItems";
import { Footer } from "./Footer";

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-[220px] min-w-[220px] z-20 border-none pt-[60px] transition-colors duration-300">
      <div className="absolute inset-0 bg-white dark:bg-transparent transition-colors duration-300" />
      <div className="absolute inset-0 hidden dark:block bg-gradient-nav-line transition-opacity duration-300" />

      <div className="relative h-full overflow-y-auto custom-scrollbar direction-rtl">
        <div className="direction-ltr">
          <NavItems />
          <Footer />
        </div>
      </div>
    </nav>
  );
} 