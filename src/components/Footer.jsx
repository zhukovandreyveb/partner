import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">FinGuide</h3>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              Информационный портал с обзорами, инструкциями и материалами по финансовой грамотности.
            </p>
          </div>

          {/* INFO */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900">Разделы</h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-600">
              <li><Link href="/faq" className="transition hover:text-green-700">FAQ</Link></li>
              <li><Link href="/about" className="transition hover:text-green-700">О проекте</Link></li>
            </ul>
          </div>

          {/* DISCLAIMER */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900">Важно</h4>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              ПСК 0%–292,000% годовых. Оценивайте свои финансовые возможности и риски.
            </p>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © 2026 FinGuide. Все права защищены.
        </div>
      </div>
    </footer>
  );
}