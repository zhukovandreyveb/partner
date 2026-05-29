import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getArticles(section) {
  const dirPath = path.join(contentDirectory, section);
  const filenames = fs.readdirSync(dirPath);

  const articles = filenames.map((filename) => {
    const filePath = path.join(dirPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      meta: data,
      content,
    };
  });

  return articles;
}