import type { Metadata } from 'next';
import { Comfortaa, Nanum_Gothic } from 'next/font/google';
import '@/styles/global.css';

import Nav from '../components/organisms/nav/Nav';

export const nanum_gothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nanum-gothic',
});

export const comfortaa = Comfortaa({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

export const metadata: Metadata = {
  title: '유토의 하루',
  description: `Yuto's Dev Blog`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={`${nanum_gothic.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
