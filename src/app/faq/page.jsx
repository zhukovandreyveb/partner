export const metadata = {
  title: 'FAQ',
  description: 'Ответы на популярные вопросы',
};

const faqItems = [
  {
    question: 'Кто может оформить первый займ под 0%?',
    answer:
      'Обычно специальные условия доступны новым клиентам при соблюдении требований сервиса.',
  },

  {
    question: 'Что важно учитывать перед оформлением?',
    answer:
      'Следует внимательно изучить условия договора, сроки возврата и возможные дополнительные расходы.',
  },

  {
    question: 'Можно ли вернуть займ досрочно?',
    answer:
      'Как правило, досрочное погашение допускается без штрафов.',
  },

  {
    question: 'Что влияет на итоговую переплату?',
    answer:
      'На расходы могут влиять просрочки, продления и дополнительные услуги.',
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">

      <div className="mb-14 text-center">

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">

          FAQ

        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Ответы на популярные вопросы
        </p>

      </div>

      <div className="space-y-6">

        {faqItems.map((item) => (
          <div
            key={item.question}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <h2 className="text-xl font-bold text-gray-900">
              {item.question}
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {item.answer}
            </p>

          </div>
        ))}

      </div>

    </main>
  );
}