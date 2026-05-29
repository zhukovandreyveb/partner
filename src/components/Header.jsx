'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Обзоры',
      href: '/reviews',
    },

    {
      label: 'Руководства',
      href: '/guides',
    },

    {
      label: 'FAQ',
      href: '/faq',
    },

    {
      label: 'О проекте',
      href: '/about',
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LOGO */}

        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-gray-900"
        >
          FinGuide
        </Link>

        {/* NAV */}

        <nav className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  active
                    ? 'text-green-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

        </nav>

      </div>

    </header>
  );
}