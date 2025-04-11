import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wxg Shop',
  description: 'A simple shopping site built with Next.js and Flask',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}>
        <Navbar />
        <div className="min-h-screen px-4">{children}</div>
      </body>
    </html>
  );
}
