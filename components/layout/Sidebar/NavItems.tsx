import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideNavItems } from "@/config/nav";
import { useState } from "react";

export function NavItems() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (href: string) => {
    setExpandedItems(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const isActive = (href: string) => 
    pathname === href || 
    (pathname === '/' && href === '/') ||
    (pathname !== '/' && href !== '/' && pathname.startsWith(href));

  return (
    <div className="space-y-1 pb-6">
      {sideNavItems.map((item) => (
        <div key={item.label}>
          <Link
            href={item.href}
            onClick={(e) => {
              if (item.subItems) {
                e.preventDefault();
                toggleExpand(item.href);
              }
            }}
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
            {item.subItems && (
              <span className={`transform transition-transform ${
                expandedItems.includes(item.href) ? 'rotate-180' : ''
              }`}>
                ▼
              </span>
            )}
          </Link>

          {item.subItems && expandedItems.includes(item.href) && (
            <div className="pl-12 space-y-1">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className={`block py-2 text-sm ${
                    isActive(subItem.href)
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300/80'
                  } hover:text-gray-900 dark:hover:text-white`}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 