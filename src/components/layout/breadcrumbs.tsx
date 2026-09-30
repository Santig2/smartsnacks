import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs font-semibold text-[#708A90] mb-6 overflow-x-auto whitespace-nowrap py-1 ${className}`}
    >
      <ol className="flex items-center gap-1.5 list-none p-0 m-0">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[#3D585E] hover:text-[#55C5D5] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#55C5D5]" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#17343A]/30 shrink-0" aria-hidden="true" />
              {isLast || item.current || !item.href ? (
                <span
                  className="font-bold text-[#17343A] truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#3D585E] hover:text-[#55C5D5] transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
