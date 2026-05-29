'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi2';

import BannerBlock from '../components/BannerBlock';

const allArticles = [
  {
    title: 'Первый займ под 0%',
    href: '/reviews/pervyj-zajm-pod-0',
    icon: HiOutlineDocumentText,
  },

  {
    title: 'Что такое ПСК',
    href: '/guides/chto-takoe-psk',
    icon: HiOutlineDocumentText,
  },

  {
    title: 'Как выбрать займ',
    href: '/guides/kak-vybrat-zajm',
    icon: HiOutlineDocumentText,
  },
];

export default function HomePage() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());

    setFeatured(shuffled.slice(0, 3));
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-green-50 to-white py-20">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <div className="mb-6 inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">

            Финансовый информационный портал

          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl">

            Полезные материалы
            по онлайн-займам
            и финансовой грамотности

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">

            Инструкции, обзоры, рекомендации и разбор финансовых условий простым языком.

          </p>

        </div>

      </section>

      {/* ОДИН БАННЕР */}

      <div className="-mt-4">
        <BannerBlock />
      </div>

      {/* ARTICLES */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14 flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-black tracking-tight text-gray-900">

              Популярные материалы

            </h2>

            <p className="mt-3 text-lg text-gray-600">

              Актуальные статьи и финансовые инструкции

            </p>

          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {featured.map((article, idx) => {
            const Icon = article.icon;

            return (
              <motion.div
                key={article.href}
                className="group rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                viewport={{ once: true }}
              >

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">

                  <Icon className="h-7 w-7" />

                </div>

                <h3 className="text-2xl font-bold text-gray-900">

                  <Link
                    href={article.href}
                    className="transition hover:text-green-700"
                  >
                    {article.title}
                  </Link>

                </h3>

                <p className="mt-4 leading-8 text-gray-600">

                  Подробный материал с объяснением условий,
                  терминов и особенностей онлайн-займов.

                </p>

              </motion.div>
            );
          })}

        </div>

      </section>

    </main>
  );
}