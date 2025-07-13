import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Kwon HanJun',
  description: 'Kwondns Portfolio',
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background">
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
