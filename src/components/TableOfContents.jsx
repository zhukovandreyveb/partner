'use client';

import { useEffect, useState } from 'react';

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('article h2')
    );

    const mapped = elements.map((el) => ({
      id: el.id,
      text: el.innerText,
    }));

    setHeadings(mapped);
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h3 className="mb-4 text-lg font-bold text-gray-900">
        Содержание
      </h3>

      <ul className="space-y-3 text-sm">

        {headings.map((heading, idx) => (
          <li key={heading.id || idx}>
            <a href={`#${heading.id}`} className="text-gray-600 hover:text-green-700">
              {heading.text}
            </a>
          </li>
))}

      </ul>

    </aside>
  );
}