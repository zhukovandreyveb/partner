import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

import ArticleLayout from '../../../components/ArticleLayout';

const contentDirectory = path.join(
  process.cwd(),
  'src/content/guides'
);

export async function generateStaticParams() {
  const filenames =
    fs.readdirSync(contentDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

async function getArticleBySlug(slug) {
  const filePath = path.join(
    contentDirectory,
    `${slug}.md`
  );

  const fileContents =
    fs.readFileSync(filePath, 'utf8');

  const { data, content } =
    matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(content);

  return {
    meta: data,
    contentHtml:
      processedContent.toString(),
  };
}

export async function generateMetadata({
  params,
}) {
  const { slug } = await params;

  const { meta } =
    await getArticleBySlug(slug);

  const url =
    `https://example.com/guides/${slug}`;

  return {
    title: meta.title,
    description:
      meta.description || meta.title,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: meta.title,
      description:
        meta.description || meta.title,
      url,
      type: 'article',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GuidesPage({
  params,
}) {
  const { slug } = await params;

  const { meta, contentHtml } =
    await getArticleBySlug(slug);

  const breadcrumbs = [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Guides',
      href: '/guides',
    },
    {
      label: meta.title,
      href: `/guides/${slug}`,
    },
  ];

  const internalLinks = [
    {
      title:
        'Как работает первый займ под 0%',
      href:
        '/reviews/pervyj-zajm-pod-0',
    },
    {
      title:
        'Как погасить займ в Vivus',
      href:
        '/help/kak-pogasit-zajm-v-vivus',
    },
  ];

  return (
    <ArticleLayout
      meta={meta}
      breadcrumbs={breadcrumbs}
      internalLinks={internalLinks}
      ctaLink="https://example.com"
    >
      <article
        className="prose prose-lg max-w-none prose-headings:scroll-mt-24"
        dangerouslySetInnerHTML={{
        __html: contentHtml,
        }}
      />
    </ArticleLayout>
  );
}