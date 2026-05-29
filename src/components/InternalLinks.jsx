import Link from 'next/link';

export default function InternalLinks({ links = [], className = '' }) {
  if (!links.length) return null;
  return (
    <section className={`mt-12 ${className}`}>
      <h3 className="text-xl font-bold mb-4">Читайте также</h3>
      <ul className="list-disc list-inside space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-green-700 hover:underline">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}