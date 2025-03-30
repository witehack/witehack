import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WiteHack - Изучайте веб-программирование',
  description: 'Интерактивная платформа для изучения веб-программирования с практическими заданиями и проектами',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main className="min-h-screen bg-background text-white">
          {children}
        </main>
      </body>
    </html>
  );
} 