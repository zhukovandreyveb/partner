import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://example.com';

function getSlugs(folder) {
  const contentDirectory = path.join(
    process.cwd(),
    `src/content/${folder}`
  );
  
  // Исправлено: dir → contentDirectory
  return fs.readdirSync(contentDirectory).map((file) => ({
    slug: file.replace('.md', ''),
    folder,
  }));
}

export default function sitemap() {
  const reviews = getSlugs('reviews');
  const help = getSlugs('help');
  const guides = getSlugs('guides');

  const articles = [...reviews, ...help, ...guides];

  return articles.map((article) => ({
    url: `${BASE_URL}/${article.folder}/${article.slug}`,
    lastModified: new Date(),
  }));
}