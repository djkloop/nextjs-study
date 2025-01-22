import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideNavItems } from "@/config/nav";

export function NavItems() {
  const pathname = usePathname();

  const isActive = (href: string) => 
    pathname === href || 
    (pathname === '/' && href === '/') ||
    (pathname !== '/' && href !== '/' && pathname.startsWith(href));

  return (
    <div className="space-y-1 pb-6">
      {sideNavItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex items-center px-6 py-3 hover:text-gray-900 dark:hover:text-white
            transition-colors duration-300 ${
              isActive(item.href)
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-600 dark:text-gray-300/80'
            }`}
        >
          <span className={`mr-3 text-base ${
            isActive(item.href) ? 'opacity-100' : 'opacity-60'
          }`}>
            {item.icon}
          </span>
          <span className="text-sm flex-1">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
} 