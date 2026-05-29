export const metadata = {
  title: 'О проекте',
  description: 'Информация о проекте',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">

      <div className="rounded-[40px] bg-linear-to-br from-emerald-50 to-green-100 p-12 shadow-xl">

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">

          О проекте

        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-700">

          FinGuide — информационный проект с обзорами,
          инструкциями и материалами по финансовой грамотности.

        </p>

        <p className="mt-6 text-lg leading-8 text-gray-700">

          На сайте публикуются статьи о займах,
          условиях оформления, сроках возврата,
          возможных расходах и нюансах использования
          финансовых сервисов.

        </p>

        <p className="mt-6 text-lg leading-8 text-gray-700">

          Материалы носят исключительно информационный характер
          и не являются финансовой рекомендацией.

        </p>

      </div>

    </main>
  );
}