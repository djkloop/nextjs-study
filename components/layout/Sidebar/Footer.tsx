import Link from "next/link";
import { footerLinks } from "@/config/nav";

export function Footer() {
  return (
    <div className="relative">
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gray-200 dark:bg-white/10" />
      
      <div className="px-6 py-6">
        <div className="space-y-2 mb-4">
          {footerLinks.privacy.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="my-4 h-[1px] bg-gray-200 dark:bg-white/10" />

        <div className="flex flex-wrap gap-y-2 mb-4">
          {footerLinks.about.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
              {index % 2 === 0 && index < footerLinks.about.length - 1 && (
                <span className="mx-2 text-gray-300 dark:text-gray-700">|</span>
              )}
            </div>
          ))}
        </div>

        <div className="my-4 h-[1px] bg-gray-200 dark:bg-white/10" />

        <div className="text-xs text-gray-400">
          Copyright © 1998 - {new Date().getFullYear()} Tencent. All Rights Reserved.
          <br />
          腾讯公司 版权所有
        </div>
      </div>
    </div>
  );
} 