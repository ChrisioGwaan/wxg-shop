'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

const darkTheme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
  },
});

export const metadata = {
  title: 'Wenxige Shop',
  description: 'A simple shopping site built with Next.js and Flask',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
