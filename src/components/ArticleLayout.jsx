import Breadcrumbs from './Breadcrumbs';
import RiskWarning from './RiskWarning';
import CTAButton from './CTAButton';
import InternalLinks from './InternalLinks';
import BannerBlock from './BannerBlock';
import TableOfContents from './TableOfContents';

export default function ArticleLayout({
  meta,
  children,
  breadcrumbs = [],
  internalLinks = [],
  ctaLink,
}) {
  return (
    <>
      {/* HERO */}

      <section className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-emerald-50 via-green-50 to-white px-8 py-16 shadow-xl md:px-14">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl">

          <div className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            Финансовый материал

          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-6xl">

            {meta.title}

          </h1>

          {meta.description && (
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-700">

              {meta.description}

            </p>
          )}

          {meta.date && (
            <p className="mt-6 text-sm text-gray-500">
              Обновлено: {meta.date}
            </p>
          )}

        </div>

      </section>

      {/* CONTENT */}

      <div className="mx-auto mt-14 grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* ARTICLE */}

        <main className="min-w-0">

          <Breadcrumbs items={breadcrumbs} />

          <article className="prose prose-lg max-w-none prose-headings:scroll-mt-32">

            {children}

          </article>

          {/* INTERNAL LINKS */}

          {internalLinks.length > 0 && (
            <div className="mt-14">
              <InternalLinks links={internalLinks} />
            </div>
          )}

          {/* RISK */}

          <div className="mt-14">
            <RiskWarning />
          </div>

          {/* CTA */}

          {ctaLink && (
            <div className="mt-10">

              <CTAButton href={ctaLink}>
                Проверить условия займа
              </CTAButton>

            </div>
          )}

        </main>

        {/* SIDEBAR */}

        <aside className="hidden lg:block">

          <div className="space-y-8">

            {/* TOC */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

              <TableOfContents />

            </div>

            {/* ТОЛЬКО ОДИН БОКОВОЙ БАННЕР */}

            <BannerBlock side={true} />

          </div>

        </aside>

      </div>
    </>
  );
}