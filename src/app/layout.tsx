import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Kwon HanJun',
  description: 'Kwondns Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background">{children}</body>
    </html>
  );
}
