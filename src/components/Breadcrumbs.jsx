import Link from 'next/link';

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;
  return (
    <nav className="text-sm text-gray-500 mb-6">
      {items.map((item, idx) => (
        <span key={idx}>
          <Link href={item.href} className="hover:underline">{item.label}</Link>
          {idx < items.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
}