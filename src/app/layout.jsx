import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'FinGuide',
  description: 'Финансовый портал с обзорами и инструкциями',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <body className="bg-white text-gray-900 antialiased">

        <div className="min-h-screen flex flex-col">

          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

      </body>

    </html>
  );
}