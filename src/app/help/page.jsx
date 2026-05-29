import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const contentDirectory = path.join(process.cwd(), 'src/content/help');

function getArticles() {
  const filenames = fs.readdirSync(contentDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      ...data,
    };
  });
}

export const metadata = {
  title: 'Помощь по займам',
  description: 'Информационные инструкции и FAQ по онлайн-займам',
};

export default function HelpPage() {
  const articles = getArticles();

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-4xl font-bold mb-8">Помощь по займам</h1>

      <div className="grid gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/help/${article.slug}`}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
            {article.date && (
              <p className="text-sm text-gray-400 mt-4">{article.date}</p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}